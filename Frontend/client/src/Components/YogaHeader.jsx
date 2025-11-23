import React from "react";
import { Sparkles, Users, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

const YogaHeader = ({ selectedLevel, setSelectedLevel }) => {
  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      value: "5000+",
      label: "Active Students",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      value: "25+",
      label: "Unique Courses",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: "4.9/5",
      label: "Student Rating",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative mb-24">
      {/* Curved Container */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl mt-2 pb-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 dark:from-purple-900/10 to-transparent"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-50 dark:from-purple-900/10 to-transparent"
        ></motion.div>
        <div className="max-w-7xl mx-auto px-4 py-5 relative z-10">
          {/* Header Content */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-200 dark:bg-blue-900/50"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Transform Your Life Through Yoga
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl sm:text-5xl font-bold mt-6 mb-4 dark:text-white"
            >
              Discover Your Perfect
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yoga Journey
              </span>
            </motion.h1>

            <p className="text-lg sm:text-xl mb-12 text-gray-700 dark:text-gray-200">
              Join our expert-led classes and experience the perfect blend of
              traditional wisdom and modern practice
            </p>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mt-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Filter Buttons - Centered at bottom */}
        <div className="absolute left-0 right-0 flex justify-center mt-9">
          <div className="inline-flex p-1.5 bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/30">
            {["all", "beginner", "intermediate", "advanced"].map((level) => (
              <motion.button
                key={level}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-lg font-medium ${
                  selectedLevel === level
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-2xl"></div>
    </div>
  );
};

export default YogaHeader;
