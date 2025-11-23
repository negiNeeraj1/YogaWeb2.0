import React from "react";
import { BookOpen, Search, RssIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Sukhasana: The Easy Pose",
      description:
        "Sukhasana is a simple seated posture that helps with relaxation and mindfulness. It is perfect for meditation and calming your mind.",
      image: "/api/placeholder/400/320",
      link: "/sukhasana-details",
      author: "John Doe",
      date: "November 24, 2024",
      time: "10:30 AM",
      category: "Beginner Poses",
    },
    {
      title: "Adho Mukha Svanasana: Downward Dog",
      description:
        "A foundational pose that stretches the hamstrings and spine. It's great for calming the mind and strengthening the body.",
      image: "/api/placeholder/400/320",
      link: "/downward-dog-details",
      author: "Jane Smith",
      date: "November 22, 2024",
      time: "2:45 PM",
      category: "Foundation",
    },
    {
      title: "Virabhadrasana I: Warrior I",
      description:
        "A standing pose that strengthens the legs, opens the chest, and improves focus and balance. It energizes your whole body.",
      image: "/api/placeholder/400/320",
      link: "/warrior-1-details",
      author: "Alice Green",
      date: "November 20, 2024",
      time: "9:00 AM",
      category: "Standing Poses",
    },
    {
      title: "Vrksasana: Tree Pose",
      description:
        "A balancing posture that enhances stability and focus. Perfect for building core strength and improving your posture.",
      image: "/api/placeholder/400/320",
      link: "/tree-pose-details",
      author: "Chris Lee",
      date: "November 18, 2024",
      time: "4:15 PM",
      category: "Balance",
    },
    {
      title: "Balasana: Child's Pose",
      description:
        "A gentle resting pose to stretch the back, hips, and thighs. It's often used to relax and center the mind during practice.",
      image: "/api/placeholder/400/320",
      link: "/child-pose-details",
      author: "Emma Brown",
      date: "November 15, 2024",
      time: "8:00 AM",
      category: "Restorative",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-900  border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between py-4 border-b dark:border-gray-700"
          >
            <div className="flex items-center space-x-4">
              <RssIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Subscribe to our blog
              </span>
            </div>
            <div className="relative">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-gray-900 dark:text-gray-100"
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>

          {/* Main Header Content */}
          <div className="py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full mb-6"
            >
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Yoga Wisdom
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Explore the Art of
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-indigo-600 dark:text-indigo-400"
              >
                Mindful Movement
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
            >
              Discover in-depth guides, expert tips, and transformative
              practices to deepen your yoga journey.
            </motion.p>
          </div>

          {/* Category Pills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center space-x-4 pb-8"
          >
            {[
              "All",
              "Beginner Poses",
              "Foundation",
              "Standing Poses",
              "Balance",
              "Restorative",
            ].map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {post.category}
                  </motion.span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between border-t dark:border-gray-700 pt-4 mt-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {post.author}
                    </p>
                    <p>{post.date}</p>
                  </div>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={post.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default BlogPage;
