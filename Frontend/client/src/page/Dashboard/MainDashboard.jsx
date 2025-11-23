import React, { useState, useEffect } from "react";
import {
  Zap,
  Trophy,
  Flame,
  Calendar,
  CheckCircle,
  Activity,
  Star,
  Headphones,
  Gift,
  Target,
  Rocket,
  Medal,
  Check,
  ArrowRight,
  Sparkles,
  XCircle,
  CircleCheck,
  UserCheck,
  TrendingUp,
  Book,
  Lock,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAuth } from "../../context/AuthContext";
import DarkModeClasses from "../../Components/DarkMode";
import { BlurText } from "../../Components/Themes/BlurText";
import { EnrolledClasses, dailyAchievment } from "../../api/api";
import { useNavigate } from "react-router-dom";

const MainDashboard = () => {
  const { user } = useAuth();
  const [selectedClass, setSelectedClass] = useState(null);
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [parsedUser, setParsedUser] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [animatedQuote, setAnimatedQuote] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [totalAttendedSessions, setTotalAttendedSessions] = useState(0);

  const navigate = useNavigate();

  const getUserFromLocalStorage = () => {
    try {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        const userData = JSON.parse(userStr);
        setParsedUser(userData);
        return userData;
      }
      return null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  };

  const fetchDailyAchievements = async () => {
    try {
      const userData = getUserFromLocalStorage();

      if (!userData || !userData.id) {
        console.error("No user ID found in localStorage");
        return;
      }

      const response = await dailyAchievment(userData.id);

      if (response.success) {
        setDailyStreak(response.currentStreak);
        setTotalAttendedSessions(response.totalAttendedSessions);

        const formattedAchievements = response.achievements.map(
          (achievement, index) => ({
            id: index + 1,
            icon: getAchievementIcon(achievement),
            title: achievement,
            description: `${response.totalAttendedSessions} Sessions Completed | ${response.currentStreak} Day Streak`,
            progress: calculateConsistencyProgress(
              response.totalAttendedSessions,
              response.currentStreak
            ),
            level: calculateLevel(response.totalAttendedSessions),
            nextMilestone: getNextConsistencyMilestone(
              response.totalAttendedSessions
            ),
            xpReward: calculateXPReward(response.totalAttendedSessions),
            secretReward: getConsistencyReward(response.totalAttendedSessions),
            difficultyColor: "bg-orange-100 text-orange-600",
            stats: {
              sessions: response.totalAttendedSessions,
              streak: response.currentStreak,
            },
          })
        );

        setAchievements(formattedAchievements);

      }
    } catch (error) {
      console.error("Error fetching daily achievements:", error);
    }
  };

  const retrieveEnrolledClasses = async () => {
    try {
      const user = localStorage.getItem("user");
      const parsedUserData = user ? JSON.parse(user) : null;
      if (parsedUserData) {
        setParsedUser(parsedUserData);
        const response = await EnrolledClasses(parsedUserData.id);
        if (response.success) {
          setEnrolledClasses(response.data || []);
        }
      }
    } catch (error) {
      // console.error("Error fetching enrolled classes:", error);
    }
  };
  useEffect(() => {
    retrieveEnrolledClasses();
    fetchDailyAchievements();
  }, []);

  const getAchievementIcon = (achievement) => {
    if (achievement.includes("Consistency"))
      return <Flame className="text-orange-500" />;
    if (achievement.includes("Sessions"))
      return <Trophy className="text-green-500" />;
    return <Star className="text-yellow-500" />;
  };

  const calculateConsistencyProgress = (sessions, streak) => {
    const sessionWeight = 0.6;
    const streakWeight = 0.4;

    const sessionProgress = Math.min((sessions / 10) * 100, 100);
    const streakProgress = Math.min((streak / 7) * 100, 100);

    return Math.round(
      sessionProgress * sessionWeight + streakProgress * streakWeight
    );
  };

  const getNextConsistencyMilestone = (sessions) => {
    const nextSessionGoal = Math.ceil(sessions / 5) * 5;
    return `Complete ${nextSessionGoal} Sessions`;
  };

  const calculateXPReward = (sessions) => {
    return 100 + sessions * 20;
  };
  const calculateLevel = (sessions) => {
    return Math.floor(sessions / 5) + 1;
  };

  const getConsistencyReward = (sessions) => {
    const rewards = [
      { threshold: 5, reward: "Basic Achievement Badge" },
      { threshold: 10, reward: "Bronze Consistency Medal" },
      { threshold: 15, reward: "Silver Dedication Trophy" },
      { threshold: 20, reward: "Gold Master Certificate" },
    ];

    const nextReward =
      rewards.find((r) => r.threshold > sessions) ||
      rewards[rewards.length - 1];
    return `Next: ${nextReward.reward}`;
  };

  const handleClassClick = (classId) => {
    navigate(`/yogadashboard/yoga-class/${classId}`);
  };

  const ClassCard = ({ enrolledClass }) => {
    const { yogaClass } = enrolledClass;
    

    const handleClassClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (yogaClass?._id) {
        onClassClick(yogaClass._id);
      }
    };

    return (
      <div
        className={`${DarkModeClasses.card.glassBlue} p-6 rounded-3xl transform transition-all hover:scale-105 ${DarkModeClasses.hover.card}`}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className={`${DarkModeClasses.gradients.glass} w-full h-full rounded-3xl`}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-xl font-bold ${DarkModeClasses.text.primary}`}>
            {yogaClass.title}
          </h3>
          <span
            className={`${DarkModeClasses.gradients.primary.text} px-3 py-1 rounded-full text-sm`}
          >
            {yogaClass.difficulty}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className={DarkModeClasses.text.secondary}>
              {yogaClass.instructor.firstName} {yogaClass.instructor.lastName}
            </p>
            <p className={DarkModeClasses.text.accent}>
              {yogaClass.startTime} | {yogaClass.endTime}
            </p>
            {/* <p className={`mt-2 ${DarkModeClasses.text.secondary}`}>
              Status: {enrolledClass.status}
            </p> */}
          </div>
        </div>
      </div>
    );
  };

  const progressData = [
    { month: "Jan", progress: 60, xp: 250, color: "#FF6B6B" },
    { month: "Feb", progress: 75, xp: 350, color: "#4ECDC4" },
    { month: "Mar", progress: 85, xp: 450, color: "#45B7D1" },
    { month: "Apr", progress: 90, xp: 500, color: "#FDCB6E" },
    { month: "May", progress: 95, xp: 550, color: "#6C5CE7" },
  ];

  const motivationalQuotes = [
    "Your journey transforms you, one breath at a time!",
    "Unlock your potential with every mindful moment.",
    "Champions are built in the quiet hours of practice.",
    "Your wellness is a superpower waiting to be unleashed!",
  ];

  const generateMotivationalQuote = () => {
    const quote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    let currentText = "";
    let index = 0;

    const typeWriter = () => {
      if (index < quote.length) {
        currentText += quote.charAt(index);
        setAnimatedQuote(currentText);
        index++;
        setTimeout(typeWriter, 50);
      }
    };

    typeWriter();
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  useEffect(() => {
    generateMotivationalQuote();
  }, []);

  return (
    <div
      className={`min-h-screen ${DarkModeClasses.backgroundGradient.primary} bg-gradient-to-br from-purple-50 to-blue-50 p-6 space-y-6 relative overflow-hidden`}
    >
      {/* Welcome Section */}

      <div
        className={`${DarkModeClasses.card.gradient} bg-gradient-to-r from-purple-600 to-indigo-700  p-6 rounded-3xl relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 opacity-20">
          <Sparkles className={`w-48 h-48 ${DarkModeClasses.text.primary}`} />
        </div>

        <div className="relative z-10">
          <h2
            className={`text-3xl font-bold mb-2 flex items-center ${DarkModeClasses.gradients.text}`}
          >
            Welcome, {user?.name || "Wellness Warrior"}
            <Rocket className="ml-3 w-8 h-8 text-yellow-300 animate-bounce" />
          </h2>

          <div
            className={`italic font-light h-12 ${DarkModeClasses.text.secondary}`}
          >
            <h1>{animatedQuote}</h1>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 ${DarkModeClasses.glass.panel} px-4 py-2 rounded-full`}
            >
              <Activity className="w-6 h-6 dark:text-yellow-300 text-rose-500" />
              <span className={`font-bold ${DarkModeClasses.text.primary}`}>
                Current Streak: {dailyStreak} Days
              </span>
            </div>
            <button
              onClick={triggerConfetti}
              className={`${DarkModeClasses.button.gradient} transition-all px-4 py-2 rounded-full flex items-center`}
            >
              Boost Motivation <Zap className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Class Preview Grid */}
      <div className="space-y-4">
        <h2 className={`text-2xl font-bold ${DarkModeClasses.text.primary}`}>
          Your Active Classes
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {enrolledClasses.length > 0 ? (
            enrolledClasses.map((enrolledClass) => (
              <ClassCard
                key={enrolledClass._id}
                enrolledClass={enrolledClass}
                onClassClick={handleClassClick}
              />
            ))
          ) : (
            <p className={`${DarkModeClasses.text.secondary} col-span-3`}>
              No enrolled classes found. Start your yoga journey by enrolling in
              a class!
            </p>
          )}
        </div>
      </div>

      {/* Achievements Section */}
      <div className={`${DarkModeClasses.card.ocean} rounded-3xl p-6`}>
        <h3
          className={`text-2xl font-bold mb-6 flex items-center ${DarkModeClasses.gradients.text}`}
        >
          <Trophy className="mr-3 text-purple-600 dark:text-purple-400" />
          Your Achievement Journey
        </h3>
        {achievements.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`${
                  DarkModeClasses.gradients.card[
                    index % 4 === 0
                      ? "purple"
                      : index % 4 === 1
                      ? "blue"
                      : index % 4 === 2
                      ? "green"
                      : "orange"
                  ]
                } p-6 rounded-3xl relative overflow-hidden`}
              >
                <div
                  className={`absolute top-2 right-2 ${DarkModeClasses.gradients.primary.text} px-2 py-1 rounded-full text-xs font-bold`}
                >
                  Level {achievement.level}
                </div>
                <div className="flex items-center mb-4">
                  {achievement.icon}
                  <div className="ml-4">
                    <h4 className={`font-bold ${DarkModeClasses.text.primary}`}>
                      {achievement.title}
                    </h4>
                    <p className={DarkModeClasses.text.accent}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-full ${DarkModeClasses.background.tertiary} rounded-full h-2.5 mt-2`}
                >
                  <div
                    className="bg-purple-600 dark:bg-purple-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <Rocket
                      className={`w-5 h-5 mr-2 ${DarkModeClasses.accent.primary}`}
                    />
                    <span className={DarkModeClasses.text.secondary}>
                      XP: {achievement.xpReward}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedAchievement(achievement)}
                    className={`${DarkModeClasses.button.outline} p-2 rounded-full ${DarkModeClasses.hover.button}`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <Trophy className="w-16 h-16 text-gray-300 dark:text-gray-600" />
            </div>
            <p className={`text-xl ${DarkModeClasses.text.secondary}`}>
              No achievements earned yet. Keep practicing to unlock your first
              achievement!
            </p>
            <p className={`mt-2 ${DarkModeClasses.text.accent}`}>
              Attend more classes and maintain a consistent streak to progress.
            </p>
          </div>
        )}
      </div>

      {/* Progress Chart Section */}
      {/* <div className="bg-white dark:bg-gray-800 p-6 rounded-xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-xl opacity-10" />

        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Progress Tracking
        </h3>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressData}>
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-gray-200 dark:stroke-gray-700"
              />
              <XAxis
                dataKey="month"
                tick={{ fill: "currentColor" }}
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-300"
              />
              <YAxis
                tick={{ fill: "currentColor" }}
                stroke="currentColor"
                className="text-gray-600 dark:text-gray-300"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                className="text-gray-900 dark:text-white"
              />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#8884d8"
                strokeWidth={3}
                dot={{ stroke: "#8884d8", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div> */}

      {/* Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className={`${DarkModeClasses.gradients.frost} p-8 rounded-3xl max-w-md w-full relative animate-scale-up`}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className={`absolute top-4 right-4 ${DarkModeClasses.hover.icon}`}
            >
              <XCircle className="w-8 h-8" />
            </button>

            <div className="text-center">
              {selectedAchievement.icon}
              <h2
                className={`text-2xl font-bold mt-4 ${DarkModeClasses.text.heading}`}
              >
                {selectedAchievement.title}
              </h2>
              <p className={`${DarkModeClasses.text.secondary} mb-6`}>
                {selectedAchievement.description}
              </p>

              <div
                className={`${DarkModeClasses.background.secondary} p-4 rounded-2xl mb-6`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={DarkModeClasses.text.primary}>Progress</span>
                  <span className={DarkModeClasses.text.accent}>
                    {selectedAchievement.progress}%
                  </span>
                </div>
                <div
                  className={`w-full ${DarkModeClasses.background.tertiary} rounded-full h-2.5`}
                >
                  <div
                    className="bg-purple-600 dark:bg-purple-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${selectedAchievement.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`${DarkModeClasses.card.glass} p-4 rounded-2xl`}
                >
                  <Target
                    className={`w-8 h-8 ${DarkModeClasses.accent.success} mx-auto mb-2`}
                  />
                  <h4 className={`font-bold ${DarkModeClasses.text.primary}`}>
                    Next Milestone
                  </h4>
                  <p className={DarkModeClasses.text.secondary}>
                    {selectedAchievement.nextMilestone}
                  </p>
                </div>
                <div
                  className={`${DarkModeClasses.card.glass} p-4 rounded-2xl`}
                >
                  <Gift
                    className={`w-8 h-8 ${DarkModeClasses.accent.warning} mx-auto mb-2`}
                  />
                  <h4 className={`font-bold ${DarkModeClasses.text.primary}`}>
                    Secret Reward
                  </h4>
                  <p className={DarkModeClasses.text.secondary}>
                    {selectedAchievement.secretReward}
                  </p>
                </div>
              </div>

              <button
                onClick={triggerConfetti}
                className={`mt-6 w-full ${DarkModeClasses.button.gradient} py-3 rounded-full flex items-center justify-center ${DarkModeClasses.hover.button}`}
              >
                <CircleCheck className="mr-2" /> Unlock Next Level
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-confetti ${
                i % 5 === 0
                  ? "bg-purple-200"
                  : i % 5 === 1
                  ? "bg-blue-500"
                  : i % 5 === 2
                  ? "bg-emerald-500"
                  : i % 5 === 3
                  ? "bg-amber-500"
                  : "bg-rose-500"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainDashboard;
