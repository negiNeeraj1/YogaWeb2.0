import React, { useState } from "react";
import { Star, Heart, Calendar, Users, Medal, ArrowRight, X, Book, Clock, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../Components/Footer";

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const teachers = [
    {
      name: "Sushma",
      specialties: "Yin yoga, meditation, hatha vinyasa flow",
      image:
        "https://media.gettyimages.com/id/700722040/photo/happy-mature-woman-with-a-yoga-mat-in-health-club.jpg?s=612x612&w=0&k=20&c=g6MvVJ-aJ7PqfIjs9S0iUuu_TChtlJA7LQFwrBpjEtQ=",
      stats: {
        experience: "8+ years",
        students: "1000+",
        rating: "4.9",
      },
      detailedProfile: {
        certifications: [
          "RYT-500",
          "Meditation Teacher Training",
          "Prenatal Yoga Certified",
        ],
        teachingStyle:
          "My approach combines traditional Hatha principles with mindful movement and breath awareness. I emphasize proper alignment while creating a nurturing space for students to explore their practice.",
        specialClasses: [
          "Morning Vinyasa Flow",
          "Gentle Yin Evening Practice",
          "Meditation & Pranayama",
          "Beginners Foundation Course",
        ],
        philosophy:
          "Yoga is more than physical postures – it's a journey of self-discovery and inner transformation. I guide students to connect with their breath, honor their bodies, and cultivate mindfulness both on and off the mat.",
        scheduleHighlights: [
          {
            day: "Monday",
            classes: ["6:00 AM - Morning Flow", "6:00 PM - Yin Yoga"],
          },
          {
            day: "Wednesday",
            classes: ["7:00 AM - Meditation", "5:30 PM - Vinyasa"],
          },
          {
            day: "Saturday",
            classes: [
              "8:00 AM - All Levels Flow",
              "10:00 AM - Beginners Workshop",
            ],
          },
        ],
      },
    },
  ];

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Guidance",
      description:
        "Learn from certified professionals with years of experience",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personalized Care",
      description: "Get individual attention and support in your practice",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "Choose from multiple class times that fit your lifestyle",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const TeacherModal = ({ teacher, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {teacher.name}
              </h2>
              <p className="text-purple-600 dark:text-purple-400">
                {teacher.specialties}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Certifications */}
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {teacher.detailedProfile.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Teaching Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {teacher.detailedProfile.philosophy}
              </p>
            </div>

            {/* Special Classes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Special Classes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teacher.detailedProfile.specialClasses.map(
                  (className, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <Book className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span className="text-gray-700 dark:text-gray-200">
                        {className}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Schedule Highlights */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Schedule Highlights
              </h3>
              <div className="space-y-4">
                {teacher.detailedProfile.scheduleHighlights.map(
                  (day, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
                    >
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        {day.day}
                      </h4>
                      <ul className="space-y-2">
                        {day.classes.map((classTime, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                          >
                            <Clock className="w-4 h-4" />
                            {classTime}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Book a Class Button */}
            <div className="pt-4">
              <button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                Book a Class
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      id="Teachers"
    >
      {/* Hero Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 pt-16">
        <div className="relative overflow-hidden rounded-3xl mt-2 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 border-b dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Transform Your Practice
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Discover Your Perfect
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block text-purple-600 dark:text-purple-400"
                >
                  Yoga Journey
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8"
              >
                Join our expert-led classes and experience the perfect blend of
                traditional wisdom and modern practice
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-8 py-3 rounded-lg transition-all duration-300 hover:bg-purple-50 dark:hover:bg-gray-600"
                >
                  View Schedule
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
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
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4"
              >
                <div className="text-purple-600 dark:text-purple-400">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Teachers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-gray-200 text-sm">{teacher.specialties}</p>
                </motion.div>
              </div>
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-3 gap-4"
                >
                  {Object.entries(teacher.stats).map(([key, value], i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-purple-600 dark:text-purple-400 font-semibold flex items-center justify-center gap-1">
                        {value}
                        {key === "rating" && (
                          <Star className="w-4 h-4 fill-current" />
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="p-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTeacher(teacher)}
                    className="w-full mt-6 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    View Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedTeacher && (
          <TeacherModal
            teacher={selectedTeacher}
            onClose={() => setSelectedTeacher(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
};

export default Teachers;
