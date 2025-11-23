import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  markAttendance,
  GetClassById,
  getClassAttendanceStats,
} from "../../api/api";
import {
  Calendar,
  Clock,
  PlayCircle,
  CheckCircle,
  Award,
  Users,
  ArrowLeft,
  Timer,
  Star,
} from "lucide-react";

const VideoPlayer = ({ video, onDurationChange }) => {
  const [videoDuration, setVideoDuration] = useState("00:00");

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleMetadataLoaded = (e) => {
    const duration = e.target.duration;
    if (!isNaN(duration)) {
      const formattedDuration = formatDuration(duration);
      setVideoDuration(formattedDuration);
      onDurationChange(formattedDuration);
    }
  };

  return (
    <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden">
      {video?.url ? (
        <>
          <video
            className="w-full h-full object-cover"
            controls
            src={video.url}
            poster="/api/placeholder/1280/720"
            onLoadedMetadata={handleMetadataLoaded}
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            {videoDuration}
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="w-16 h-16 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
          <img
            src="/api/placeholder/1280/720"
            alt="Video placeholder"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      )}
    </div>
  );
};

const ProgressBar = ({ progress }) => (
  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
    <div
      className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const ProgressCard = ({ attendanceStats, progress }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Your Progress
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-300">
              Course Progress
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {attendanceStats.progress}%
            </span>
          </div>
          <ProgressBar progress={attendanceStats.progress} />
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          {attendanceStats.attended} of {attendanceStats.totalSessions} sessions
          completed
        </div>
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
            Attendance Statistics
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                Sessions Attended:
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {attendanceStats.attended}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                Total Sessions:
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {attendanceStats.totalSessions}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                Attendance Rate:
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {attendanceStats.progress}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const YogaClassPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const [yogaClass, setYogaClass] = useState(null);
  const [parsedUser, setParsedUser] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoDuration, setCurrentVideoDuration] = useState("00:00");
  const [progress, setProgress] = useState(0);
  const [attendanceStats, setAttendanceStats] = useState({
    attended: 0,
    totalSessions: 0,
    attendancePercentage: 0,
    progress: 0,
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parsedUserData = user ? JSON.parse(user) : null;
    if (parsedUserData) {
      setParsedUser(parsedUserData);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!parsedUser?.id || !classId) return;

      try {
        const classResponse = await GetClassById(classId);
        if (classResponse.success) {
          setYogaClass(classResponse.data);
          if (classResponse.data.videos?.length > 0) {
            setSelectedVideo(classResponse.data.videos[0]);
          }
        }

        const attendanceData = { userId: parsedUser.id, classId };
        const statsResponse = await getClassAttendanceStats(attendanceData);

        if (statsResponse.success && statsResponse.data) {
          const statsObject = statsResponse.data.reduce((acc, stat) => {
            acc[stat._id] = stat.count;
            return acc;
          }, {});

          setProgress(statsObject.progress || 0);
          setAttendanceStats({
            attended: statsObject.attended || 0,
            totalSessions: statsObject.totalSessions || 0,
            attendancePercentage: statsObject.attendancePercentage || 0,
            progress: statsObject.progress || 0,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [parsedUser, classId]);

  const handleMarkAsCompleted = async () => {
    try {
      const attendanceData = { userId: parsedUser.id, classId };
      const response = await markAttendance(attendanceData);

      if (response.success) {
        const newProgress = Math.round(
          (response.data.completedSessions / response.data.totalSessions) * 100
        );
        setProgress(newProgress);
        setAttendanceStats((prev) => ({
          ...prev,
          attended: response.data.completedSessions,
          totalSessions: response.data.totalSessions,
          progress: newProgress,
          attendancePercentage: Math.round(
            (response.data.completedSessions / response.data.totalSessions) *
              100
          ),
        }));
        alert("Session marked as completed!");
      } else {
        alert(response.message || "Failed to mark session as completed.");
      }
    } catch (error) {
      console.error("Error marking session as completed:", error);
      alert(error.message || "Error marking session as completed.");
    }
  };

  if (!yogaClass) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const getDayName = (day) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day - 1] || "Unknown";
  };

  const schedule = yogaClass.schedule?.daysOfWeek
    ? yogaClass.schedule.daysOfWeek.map((day) => ({
        day: getDayName(day),
        time: `${yogaClass.schedule.startTime || "N/A"} - ${
          yogaClass.schedule.endTime || "N/A"
        }`,
      }))
    : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/yogadashboard/classes")}
          className="flex items-center mb-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Classes
        </button>

        <div className="rounded-2xl shadow-lg p-6 md:p-8 mb-8 bg-white dark:bg-gray-800">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {yogaClass.className}
              </h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="w-5 h-5 mr-2 text-purple-400" />
                  {yogaClass.totalClasses} Classes
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="w-5 h-5 mr-2 text-purple-400" />
                  with {yogaClass.instructor.email}
                </div>
                {/* <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  {yogaClass.status}
                </div> */}
              </div>
            </div>
            <button
              onClick={handleMarkAsCompleted}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg flex items-center hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg self-start"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Mark as Completed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <VideoPlayer
                video={selectedVideo}
                onDurationChange={setCurrentVideoDuration}
              />

              <div className="mt-6 space-y-4">
                {/* Title and Length Section */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selectedVideo?.title || "No video selected"}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    <Timer className="w-4 h-4 mr-2" />
                    <span>{currentVideoDuration}</span>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {selectedVideo?.description || "No description available"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Course Content
              </h3>
              <div className="space-y-3">
                {yogaClass.videos.map((video) => (
                  <div
                    key={video._id}
                    onClick={() => setSelectedVideo(video)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedVideo?._id === video._id
                        ? "bg-blue-50 dark:bg-blue-900/50 ring-1 ring-blue-500/20"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <PlayCircle
                          className={`w-5 h-5 mr-3 ${
                            selectedVideo?._id === video._id
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                        <span
                          className={`${
                            selectedVideo?._id === video._id
                              ? "text-blue-600 dark:text-blue-400 font-medium"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {video.title}
                        </span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">
                        Class {video.classNumber}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Class Schedule
              </h3>
              <div className="space-y-3">
                {schedule.map((slot, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                  >
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {slot.day}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ProgressCard attendanceStats={attendanceStats} />

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Equipment Needed
              </h3>
              <div className="space-y-3">
                {yogaClass.equipmentNeeded.map((equipment, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {equipment}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Class Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Award className="w-5 h-5 mr-3 text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {yogaClass.category} - {yogaClass.type || "In Person"}
                  </span>
                </div>
                {/* <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Users className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {yogaClass.capacity - yogaClass.remainingClasses} of{" "}
                    {yogaClass.capacity} spots filled
                  </span>
                </div> */}
                <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Users className="w-5 h-5 mr-3 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {yogaClass.capacity - yogaClass.remainingClasses} of{" "}
                    {yogaClass.capacity} spots filled
                  </span>
                </div>
                {yogaClass.renewal && (
                  <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <Star className="w-5 h-5 mr-3 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Renewable Course
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaClassPage;
