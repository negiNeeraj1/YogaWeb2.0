import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DarkModeClasses from "./DarkMode";
import { GetClasses } from "../api/api";
import { Clock } from "lucide-react";

const RecommendedBatches = ({ onExplore, onBuyNow }) => {
  const [recommendedBatches, setRecommendedBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await GetClasses();
        // Transform the API response to match the existing component structure
        const transformedBatches = response.data.map((batch, index) => ({
          id: batch._id,
          title: batch.status,
          batchName: batch.className,
          description: batch.description,
          image: {
            src: batch.image?.url || "/api/placeholder/400/320",
            alt: batch.className,
          },
          stats: {
            students: batch.capacity - batch.remainingClasses,
            rating: 4.5 + index * 0.1, // Simulate varying ratings
          },
          duration: `${batch.totalClasses} Classes`,
          originalPrice: batch.price * 1.2, // Add 20% to simulate original price
          discountedPrice: batch.price,
          features: [batch.type, batch.difficulty, ...batch.equipmentNeeded],
        }));

        setRecommendedBatches(transformedBatches);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -8,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const badgeVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  if (loading) {
    return (
      <section className={`py-20 px-5 ${DarkModeClasses.background.primary}`}>
        <div className="max-w-6xl mx-auto w-full text-center">
          <p className={`text-xl ${DarkModeClasses.text.primary}`}>
            Loading classes...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`py-20 px-5 ${DarkModeClasses.background.primary}`}>
        <div className="max-w-6xl mx-auto w-full text-center">
          <p className={`text-xl text-red-500`}>
            Error loading classes: {error.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 px-5 ${DarkModeClasses.background.primary}`}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold text-center mb-12 ${DarkModeClasses.text.primary}`}
        >
          Top Recommended Batches
        </motion.h2>

        {recommendedBatches.length === 0 ? (
          <div className="text-center">
            <p className={`text-xl ${DarkModeClasses.text.primary}`}>
              No classes available
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {recommendedBatches.map((batch, index) => (
              <motion.div
                key={batch.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className={`${DarkModeClasses.card.gradient}  rounded-xl overflow-hidden w-full max-w-sm shadow-lg backdrop-blur-sm bg-opacity-80 dark:bg-opacity-30`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative group overflow-hidden">
                  <motion.img
                    src={batch.image.src}
                    alt={batch.image.alt}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/320";
                      e.target.alt = "Placeholder image";
                    }}
                  />
                  <motion.div
                    variants={badgeVariants}
                    className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    {batch.title}
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <h3
                    className={`text-xl font-semibold ${DarkModeClasses.text.primary}`}
                  >
                    {batch.batchName}
                  </h3>

                  <p className={`text-sm ${DarkModeClasses.text.secondary}`}>
                    {batch.description}
                  </p>

                  {/* <div className="flex flex-wrap gap-2">
                    {batch.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full bg-rose-200/20 text-rose-500 dark:bg-yellow-500/40 dark:text-white bg-opacity-20`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div> */}

                  {/* <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center"
                      >
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(batch.stats.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </motion.div>

                      <span
                        className={`text-sm ${DarkModeClasses.text.secondary}`}
                      >
                        ({batch} students)
                      </span>
                    </div>
                    <span className={`text-sm ${DarkModeClasses.text.secondary}`}>
                      {batch.duration}
                    </span>
                  </div> */}

                  <div className="flex flex-wrap gap-4 mb-2 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {batch.duration || "Duration not available"}
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
                    {batch.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full bg-rose-200/20 text-rose-500 dark:bg-yellow-500/40 dark:text-white bg-opacity-20`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span
                        className={`text-2xl font-bold ${DarkModeClasses.text.primary}`}
                      >
                        ₹{batch.discountedPrice}
                      </span>
                      {/* <span
                        className={`ml-2 text-sm line-through ${DarkModeClasses.text.muted}`}
                      >
                        ₹{batch.originalPrice}
                      </span> */}
                    </div>

                    {/* <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`px-2 py-1 rounded-full text-sm ${DarkModeClasses.accent.success}`}
                    >
                      Save{" "}
                      {Math.round(
                        (1 - batch.discountedPrice / batch.originalPrice) * 100
                      )}
                      %
                    </motion.span> */}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onExplore?.(batch.id)}
                      className={`flex-1 py-2 rounded-lg font-semibold ${DarkModeClasses.button.primary}`}
                    >
                      Explore
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onBuyNow?.(batch.id)}
                      className={`flex-1 py-2 rounded-lg font-semibold ${DarkModeClasses.button.outline}`}
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendedBatches;
