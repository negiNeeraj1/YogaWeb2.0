import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Clock, Users, BarChart3 } from "lucide-react";

const CoursePage = ({}) => {
  const { id } = useParams();
  
  const courseData = {
    1: {
      title: "Foundational Poses (Asanas)",
      description: "Perfect for those just starting their yoga journey.",
      fullDescription:
        "Dive deep into the fundamental poses that form the building blocks of yoga practice. This comprehensive course is designed for beginners who want to establish a strong foundation in yoga. Learn proper alignment, breathing techniques, and basic Sanskrit terminology.",
      originalPrice: 2000,
      discountedPrice: 1499,
      level: "beginner",
      duration: "8 weeks",
      studentsEnrolled: 1500,
      image: {
        src: "https://media.istockphoto.com/id/1219401141/photo/woman-practicing-yoga-in-lotus-position-at-park.jpg?s=612x612&w=0&k=20&c=Bk7HV73FLORtdNrnB9L0MI9tbMLB28W1c5N65bMiPvI=",
        alt: "Instructor demonstrating Sun Salutation pose",
      },
      highlights: [
        "Basic yoga philosophy and principles",
        "20+ fundamental yoga poses with proper alignment",
        "Breathing techniques (Pranayama)",
        "Meditation basics",
        "Safe practice guidelines",
      ],
      schedule: [
        "Week 1-2: Introduction to Yoga & Basic Poses",
        "Week 3-4: Sun Salutations & Standing Poses",
        "Week 5-6: Seated Poses & Breathing",
        "Week 7-8: Putting It All Together",
      ],
      instructor: {
        name: "Sarah Johnson",
        bio: "Certified yoga instructor with 10+ years of teaching experience",
        image: "/api/placeholder/100/100",
      },
    },
    2: {
      title: "Gentle Hatha Yoga",
      description: "A calm and relaxing approach to basic yoga postures.",
      fullDescription:
        "Experience the therapeutic benefits of gentle Hatha yoga. This course focuses on slow-paced, mindful movement combined with breath awareness to create a peaceful and rejuvenating practice.",
      originalPrice: 2500,
      discountedPrice: 1799,
      level: "beginner",
      duration: "10 weeks",
      studentsEnrolled: 1200,
      image: {
        src: "https://media.istockphoto.com/id/1919389111/photo/old-friends-meditating-on-mats-in-park.jpg?s=612x612&w=0&k=20&c=oJhWy2TBo4gxDfyIPkHqcH31tL2Y-Gj62eCYwY3hEmY=",
        alt: "Student practicing Hatha yoga pose",
      },
      highlights: [
        "Gentle, mindful movements",
        "Stress reduction techniques",
        "Joint mobility exercises",
        "Restorative poses",
        "Mind-body connection practices",
      ],
      schedule: [
        "Week 1-2: Introduction to Hatha Yoga",
        "Week 3-4: Gentle Flow Sequences",
        "Week 5-7: Restorative Practices",
        "Week 8-10: Integration and Advanced Concepts",
      ],
      instructor: {
        name: "Michael Chen",
        bio: "Specialized in therapeutic yoga with 8 years of experience",
        image: "/api/placeholder/100/100",
      },
    },
    3: {
      title: "Vinyasa Flow",
      description: "Dynamic flowing sequences synchronized with breath.",
      fullDescription:
        "Join us for an energizing Vinyasa Flow practice that synchronizes breath with movement. This course will teach you how to create seamless transitions between poses while building strength and flexibility.",
      originalPrice: 3000,
      discountedPrice: 2299,
      level: "intermediate",
      duration: "12 weeks",
      studentsEnrolled: 800,
      image: {
        src: "https://media.istockphoto.com/id/589554884/photo/woman-in-yoga-asana-vrikshasana-tree-pose-in-mountains-outdoors.jpg?s=612x612&w=0&k=20&c=ohUiTrrVA6A1G2WvxThRoahAO2EfcIGWTlr1F9FGYBE=",
        alt: "Instructor demonstrating Vinyasa flow sequence",
      },
      highlights: [
        "Dynamic flow sequences",
        "Advanced breathing techniques",
        "Core strength development",
        "Balance poses",
        "Arm balances introduction",
      ],
      schedule: [
        "Week 1-3: Building Your Flow",
        "Week 4-6: Advanced Transitions",
        "Week 7-9: Inversions Prep",
        "Week 10-12: Power Flow Integration",
      ],
      instructor: {
        name: "David Rodriguez",
        bio: "Former dancer turned yoga instructor with 12 years of experience",
        image: "/api/placeholder/100/100",
      },
    },
    4: {
      title: "Power Yoga",
      description:
        "Intense and energetic practice for strength and flexibility.",
      fullDescription:
        "Challenge yourself with this intense Power Yoga course designed to build strength, increase flexibility, and enhance mental focus through dynamic, flowing sequences.",
      originalPrice: 3500,
      discountedPrice: 2799,
      level: "intermediate",
      duration: "10 weeks",
      studentsEnrolled: 600,
      image: {
        src: "https://media.istockphoto.com/id/1952501679/photo/old-man-meditating-on-yoga-mat-in-yard.jpg?s=612x612&w=0&k=20&c=-531TKjfAX_ukDNEUOaFaF5XizitTAs7sY-HEd979ME=",
        alt: "Student in advanced Power yoga pose",
      },
      highlights: [
        "Strength-building sequences",
        "Advanced asana practice",
        "Power flow techniques",
        "Core power development",
        "Endurance training",
      ],
      schedule: [
        "Week 1-2: Foundation of Power Yoga",
        "Week 3-4: Building Core Strength",
        "Week 5-7: Advanced Poses",
        "Week 8-10: Power Sequences",
      ],
      instructor: {
        name: "Lisa Thompson",
        bio: "Power yoga specialist and fitness trainer with 15 years of experience",
        image: "/api/placeholder/100/100",
      },
    },
    5: {
      title: "Ashtanga Yoga",
      description:
        "Traditional and rigorous practice following specific sequence.",
      fullDescription:
        "Immerse yourself in the traditional practice of Ashtanga Yoga. Learn the primary series and develop a strong, disciplined practice following the authentic methodology.",
      originalPrice: 4000,
      discountedPrice: 3299,
      level: "advanced",
      duration: "16 weeks",
      studentsEnrolled: 400,
      image: {
        src: "https://media.istockphoto.com/id/1767112357/photo/authentic-shot-of-an-indian-senior-monk-practicing-yoga-in-a-temple-setting-serene-and.jpg?s=612x612&w=0&k=20&c=cDKGiHCzAAnNM_o-niWaCRYyGRKmi8VQnAwNbWFWvxs=",
        alt: "Advanced practitioner in Ashtanga pose",
      },
      highlights: [
        "Traditional Ashtanga sequence",
        "Sanskrit counting",
        "Advanced transitions",
        "Mysore-style practice",
        "Philosophy and history",
      ],
      schedule: [
        "Week 1-4: Foundation and Sun Salutations",
        "Week 5-8: Standing Sequence",
        "Week 9-12: Seated Sequence",
        "Week 13-16: Finishing Sequence",
      ],
      instructor: {
        name: "Amit Patel",
        bio: "Certified Ashtanga instructor trained in Mysore, India",
        image: "/api/placeholder/100/100",
      },
    },
  };

  const course = courseData[id];

  const handleGoBack = () => {
    window.history.back();
  };

  const handleEnrollNow = () => {
    console.log(`Enrolling in course ${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Course not found</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${DarkModeClasses.background.primary} pt-[70px]`}
    >
      {/* Banner Image */}
      <div className="relative h-96">
        <img
          src={course.image.src}
          alt={course.image.alt}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleGoBack}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className={`rounded-xl p-8 mb-8 ${DarkModeClasses.card}`}>
              <h1
                className={`text-3xl font-bold mb-4 ${DarkModeClasses.text.primary}`}
              >
                {course.title}
              </h1>
              <div className="flex items-center gap-6 mb-6">
                <span
                  className={`px-3 py-1 rounded-full ${DarkModeClasses.button.secondary}`}
                >
                  {course.level}
                </span>
                <div
                  className={`flex items-center ${DarkModeClasses.text.secondary}`}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {course.duration}
                </div>
              </div>
              <p className={`mb-8 ${DarkModeClasses.text.secondary}`}>
                {course.fullDescription}
              </p>

              {/* Course Highlights */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Course Highlights
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Schedule */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Course Schedule
                </h2>
                <div className="space-y-4">
                  {course.schedule.map((week, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-700">{week}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Your Instructor
                </h2>
                <div className="flex items-center space-x-4">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {course.instructor.name}
                    </h3>
                    <p className="text-gray-600">{course.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              className={`rounded-xl p-6 sticky top-8 ${DarkModeClasses.card}`}
            >
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold text-gray-800">
                    ₹{course.discountedPrice}
                  </span>
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ₹{course.originalPrice}
                  </span>
                </div>
                <span className="text-green-500 text-lg font-semibold">
                  {Math.round(
                    (1 - course.discountedPrice / course.originalPrice) * 100
                  )}
                  % off
                </span>
              </div>

              <button
                onClick={handleEnrollNow}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition-colors duration-300 mb-4"
              >
                Enroll Now
              </button>

              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  This course includes:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    {course.duration} of content
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    Join {course.studentsEnrolled.toLocaleString()} students
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
