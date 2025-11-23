import React, { useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    number: "01",
    title: "Foundation Building",
    subtitle: "Where Every Journey Begins",
    description:
      "Our beginner classes focus on creating a welcoming environment where students build confidence and master fundamental poses. We emphasize proper alignment and breathing techniques.",
    image:
      "https://www.greenretreats.co.uk/wp-content/uploads/Pinn-7.5m-x-4m-3-1.jpg",
    color: "#6366F1", // Adjusted for dark mode
  },
  {
    number: "02",
    title: "Personal Growth",
    subtitle: "Nurturing Individual Progress",
    description:
      "Through small group sessions and personalized attention, we help students deepen their practice. Our instructors provide detailed guidance and modifications suited to each student's needs.",
    image:
      "https://th.bing.com/th/id/OIP.OblXLNX_vauZ-Cgfw24G1QHaE8?rs=1&pid=ImgDetMain",
    color: "#8B5CF6", // Adjusted for dark mode
  },
  {
    number: "03",
    title: "Community Building",
    subtitle: "Growing Together",
    description:
      "Our studio fosters a supportive community where students inspire each other. Regular workshops and events create opportunities for connection and shared learning experiences.",
    image:
      "https://i.pinimg.com/originals/5f/09/8a/5f098ae9c6b52657b04c2dc58baec193.jpg",
    color: "#EC4899", // Adjusted for dark mode
  },
  {
    number: "04",
    title: "Advanced Practice",
    subtitle: "Elevating Your Journey",
    description:
      "For dedicated practitioners, we offer advanced workshops and teacher training programs. These sessions focus on deepening understanding of yoga philosophy and advanced techniques.",
    image:
      "https://th.bing.com/th/id/OIP.pkydblCOFCCrr24hhFjZOgHaEp?rs=1&pid=ImgDetMain",
    color: "#A78BFA", // Adjusted for dark mode
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const TeachingJourney = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getPathCoordinates = (index, isLeft) => {
    const startX = isLeft ? "30%" : "70%";
    const endX = isLeft ? "70%" : "30%";
    const startY = 200 + index * 400;
    const endY = startY + 400;
    const controlY = (startY + endY) / 2;

    return `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`;
  };

  return (
    <motion.section
      variants={fadeInUp}
      className="py-12 md:py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-purple-500/20 rounded-full blur-3xl top-0 left-0" />
        <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-blue-500/20 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4 md:mb-6">
            Our Teaching Journey
          </h2>
          <p className="text-base md:text-xl dark:text-gray-300 max-w-2xl mx-auto px-4">
            Discover how we guide and support our students through every step of
            their yoga practice
          </p>
        </motion.div>

        <div className="relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {milestones.map((_, index) => {
              if (index < milestones.length - 1) {
                const isLeft = index % 2 === 0;
                return (
                  <motion.path
                    key={index}
                    d={getPathCoordinates(index, isLeft)}
                    stroke={
                      hoveredIndex === index || hoveredIndex === index + 1
                        ? "#9CA3AF"
                        : "#374151"
                    }
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                  />
                );
              }
              return null;
            })}
          </svg>

          <div className="space-y-16 md:space-y-32">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className={`w-full md:w-1/2 ${!isLeft && "md:order-2"}`}>
                    <motion.div
                      className="group relative"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      <div className="relative">
                        <div
                          className={`absolute -top-6 ${
                            isLeft ? "-left-6" : "right-6 md:-right-6"
                          } w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center 
                              text-xl md:text-2xl font-bold dark:text-white z-10`}
                          style={{ backgroundColor: milestone.color }}
                        >
                          {milestone.number}
                        </div>
                        <div className="dark:bg-gray-800 rounded-2xl p-2 md:p-4 shadow-xl">
                          <div className="h-48 md:h-64 mb-4 overflow-hidden rounded-xl">
                            <img
                              src={milestone.image}
                              alt={milestone.title}
                              className="w-full h-full object-cover transform 
                                  group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div
                          className="absolute -bottom-2 left-8 right-8 h-2 rounded-full opacity-50"
                          style={{ backgroundColor: milestone.color }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div
                    className={`w-full md:w-1/2 text-center md:text-left ${
                      !isLeft && "md:text-right"
                    } px-4`}
                  >
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold dark:text-white mb-2 md:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      {milestone.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg md:text-xl text-purple-600 dark:text-purple-400 mb-3 md:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.4 }}
                    >
                      {milestone.subtitle}
                    </motion.p>
                    <motion.p
                      className="text-base md:text-lg dark:text-gray-300 text-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.5 }}
                    >
                      {milestone.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TeachingJourney;
