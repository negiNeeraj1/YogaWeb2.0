import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Yoga has transformed my life completely. The mindfulness practices and physical postures have helped me find inner peace and strength I never knew I had.",
    name: "Sarah Mitchell",
    role: "Regular Practitioner",
    image: "/api/placeholder/100/100",
    yogaImage:
      "https://th.bing.com/th/id/OIP.jGqjQd5bNeQHgiMv4Gcx8AHaE7?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: 2,
    text: "The instructors here are exceptional. They pay attention to every detail and ensure each student receives personalized guidance. It's been an amazing journey.",
    name: "David Kumar",
    role: "Advanced Student",
    image: "/api/placeholder/100/100",
    yogaImage:
      "https://th.bing.com/th/id/OIP.Hoq88ux92YatelTMbfHz_wHaE8?w=612&h=408&rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    text: "I started as a complete beginner, and now I can confidently perform advanced poses. The progression system here is well-structured and encouraging.",
    name: "Emily Chen",
    role: "Intermediate Student",
    image: "/api/placeholder/100/100",
    yogaImage:
      "https://th.bing.com/th/id/OIP.XP2vDKT1TUk0mZ3mXUbn4QHaE7?w=1216&h=810&rs=1&pid=ImgDetMain",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wider uppercase"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            What Our Students Say
          </motion.h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 z-10">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 text-gray-800 dark:text-white hover:bg-white/30 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 text-gray-800 dark:text-white hover:bg-white/30 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative h-[500px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="grid md:grid-cols-2 gap-8 h-full">
                  {/* Image Side */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <motion.img
                      src={testimonials[currentIndex].yogaImage}
                      alt="Yoga Practice"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <Quote
                      size={48}
                      className="text-indigo-500 dark:text-indigo-400 mb-6"
                    />
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8"
                    >
                      {testimonials[currentIndex].text}
                    </motion.p>

                    <div className="flex items-center">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-400">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-indigo-600 dark:bg-indigo-400"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
