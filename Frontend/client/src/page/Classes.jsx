import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GetClasses } from "../api/api"; // Import API function
import { Heart, Clock, Users, Star } from "lucide-react";
import Foundation from "../assets/Pose1.png";
import DarkModeClasses from "../Components/DarkMode";
import YogaHeader from "../Components/YogaHeader";
import yoga00 from "../assets/yoga00.png";

const YogaClasses = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [favorites, setFavorites] = useState(new Set());
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const badgeVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
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

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await GetClasses();
        const transformedClasses = response.data.map((batch, index) => ({
          id: batch._id,
          title: batch.status,
          batchName: batch.className,
          description: batch.description,
          image: {
            src: batch.image?.url || "/api/placeholder/400/320",
            alt: batch.className,
          },
          stats: {
            // students: batch.capacity - batch.remainingClasses,
            rating: 4.5 + index * 0.1,
          },
          duration: `${batch.totalClasses} Classes`,
          originalPrice: batch.price * 1.2,
          discountedPrice: batch.price,
          features: [batch.type, batch.difficulty, ...batch.equipmentNeeded],
        }));

        setClasses(transformedClasses);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  console.log(classes);

  const filterClasses = () => {
    let filtered = classes;

    if (selectedLevel !== "all") {
      filtered = filtered.filter((c) => c.level === selectedLevel);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <motion.main
      initial="hidden"
      animate="show"
      className={`w-full ${DarkModeClasses.container} overflow-x-hidden`}
    >
      <div className="min-h-screen dark:bg-gray-900">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 pt-16">
          <YogaHeader
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-4 items-center"
          >
            <div className="relative flex-1 min-w-[300px]">
              <input
                type="text"
                placeholder="Search classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {filterClasses().map((yogaClass) => (
                <motion.div
                  key={yogaClass.id}
                  variants={cardVariants}
                  whileHover="hover"
                  layout
                  className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl shadow-blue-200 dark:shadow-none"
                >
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={yogaClass.image?.src || "/api/placeholder/400/320"}
                      alt={yogaClass.title}
                      className="w-full h-52 object-cover"
                    />

                    <motion.div
                      variants={badgeVariants}
                      className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {yogaClass.title}
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div>
                        {/* <p className="font-medium text-gray-900 dark:text-white">
                          {yogaClass.instructor?.name || "Unknown Instructor"}
                        </p> */}

                        <h3
                          className={`text-xl font-semibold ${DarkModeClasses.text.primary}`}
                        >
                          {yogaClass.batchName}
                        </h3>
                        <p
                          className={`text-sm ${DarkModeClasses.text.secondary}`}
                        >
                          {yogaClass.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-2 text-sm text-gray-800 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {yogaClass.duration || "Duration not available"}
                      </div>
                      {/* <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {yogaClass.stats?.students || "N/A"} students
                      </div> */}
                      {/* <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {yogaClass.stats?.rating || "N/A"} rating
                      </div> */}
                    </div>

                    <div className="flex flex-wrap gap-2">
                    {yogaClass.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full bg-rose-200/20 text-rose-500 dark:bg-yellow-500/40 dark:text-white bg-opacity-20`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                    <div className="flex items-center justify-between mb-6 mt-2">
                      <div className="text-right">
                        <motion.p
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          className="text-2xl font-bold text-gray-900 dark:text-white"
                        >
                          ₹{yogaClass.discountedPrice || "N/A"}
                        </motion.p>
                        {/* <p className="text-sm line-through text-gray-500 dark:text-gray-400">
                          ₹{yogaClass.originalPrice || "N/A"}
                        </p> */}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handleExplore(yogaClass.id)}
                        className={`flex-1 py-2 rounded-lg font-semibold ${DarkModeClasses.button.primary}`}
                      >
                        Explore
                      </motion.button>
                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handleEnrollNow(yogaClass.id)}
                        className={`flex-1 py-2 rounded-lg font-semibold ${DarkModeClasses.button.outline}`}
                      >
                        Enroll Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default YogaClasses;
