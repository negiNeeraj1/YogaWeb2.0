import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../Components/Hero";
import Testimonials from "../Components/Testimonial";
import TeachingJourney from "../Components/YogaPoses";
import Footer from "../Components/Footer";
import RecommendedBatches from "../Components/RecommendedBatches";
import DarkModeClasses from "../Components/DarkMode";
import Yoga from "../assets/yoga00.png";
import Yoga3 from "../assets/yoga3.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from certified yoga masters with decades of experience",
      icon: "🧘‍♀️",
    },
    {
      title: "Personalized Guidance",
      description:
        "Individual attention and customized practice plans for every student",
      icon: "✨",
    },
    {
      title: "Holistic Approach",
      description: "Blend of traditional wisdom and modern wellness techniques",
      icon: "🌿",
    },
    {
      title: "Inclusive Environment",
      description:
        "Welcoming space for practitioners of all levels and backgrounds",
      icon: "🤝",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full bgcAll m-0 p-0 ${DarkModeClasses.container} overflow-x-hidden`}
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <Hero />
          </motion.div>

          {/* Enhanced Institute Section */}
          <motion.section
            variants={fadeInUp}
            className="py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-800 dark:to-gray-900"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container">
              <div className="text-center mb-8 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 px-4">
                  Transform Your Journey With Us
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
                  Discover the perfect harmony of mind, body, and spirit at our
                  sanctuary of wellness. Since 2010, we've been guiding
                  practitioners toward their fullest potential through authentic
                  yoga practices.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-16">
                <div className="space-y-6 md:space-y-8 px-4">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800 dark:text-white">
                      Our Commitment to Excellence
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                      We blend ancient wisdom with modern understanding,
                      creating a unique learning experience that nurtures both
                      body and mind. Our approach combines traditional Hatha and
                      Vinyasa practices with contemporary wellness principles.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                      Whether you're beginning your yoga journey or deepening
                      your practice, our experienced instructors provide
                      personalized guidance to help you achieve your goals
                      safely and effectively.
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-4">
                  <motion.img
                    src={Yoga}
                    alt="Yoga Practice"
                    className="rounded-2xl shadow-lg h-52 md:h-64 w-full object-cover transform hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.img
                    src={Yoga3}
                    alt="Teaching Session"
                    className="rounded-2xl shadow-lg h-52 md:h-64 w-full object-cover transform hover:scale-105 transition-transform duration-300 mt-0 sm:mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-16 px-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TeachingJourney />
          </motion.div>

          {/* Recommended Batches Section */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <RecommendedBatches />
          </motion.div>

          {/* Testimonials Section */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <Testimonials />
          </motion.div>

          {/* Footer Section */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <Footer />
          </motion.div>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
};

export default Home;
