import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Teachers", href: "/teachers" },
    { name: "Class Schedule", href: "/schedule" },
    { name: "Pricing Plans", href: "/pricing" },
    { name: "Blog & Articles", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];
  const yogaClasses = [
    { name: "Hatha Yoga", href: "/classes/hatha" },
    { name: "Vinyasa Flow", href: "/classes/vinyasa" },
    { name: "Meditation", href: "/classes/meditation" },
    { name: "Kundalini", href: "/classes/kundalini" },
    { name: "Yin Yoga", href: "/classes/yin" },
    { name: "Prenatal Yoga", href: "/classes/prenatal" },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "6:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 6:00 PM" },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    { Icon: Facebook, link: "https://facebook.com" },
    { Icon: Instagram, link: "https://www.instagram.com/bhajansingh.n/" },
    { Icon: Twitter, link: "https://twitter.com" },
    { Icon: Youtube, link: "https://www.youtube.com/@BSNegi12/featured" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b dark:border-gray-800"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Yoga Life
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Transform your mind, body, and soul with our expert-led yoga
              classes. Join our community and begin your journey to wellness
              today.
            </p>
            <motion.div variants={containerVariants} className="flex gap-4">
              {socialLinks.map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Classes
            </h3>
            <ul className="space-y-3">
              {yogaClasses.map((yogaClass) => (
                <motion.li
                  key={yogaClass.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={yogaClass.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    {yogaClass.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              {[
                {
                  Icon: MapPin,
                  text: "Sv1 -19, Ground Floor Eldeco Utopia Sector 93 A Noida, Uttar Pradesh 201304 India",
                },
                { Icon: Phone, text: "+91 8826283328" },
                { Icon: Mail, text: "info@yogalife.com" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.Icon className="h-6 w-6 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                  <Clock className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
                  Business Hours
                </h4>
                <ul className="space-y-2">
                  {businessHours.map((schedule) => (
                    <motion.li
                      key={schedule.day}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-gray-600 dark:text-gray-300 text-sm"
                    >
                      <span className="font-medium">{schedule.day}:</span>
                      <br />
                      {schedule.hours}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-8 border-t dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              © {new Date().getFullYear()} Yoga Life. All rights reserved.
            </motion.p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service"].map((text, index) => (
                <motion.a
                  key={index}
                  href={text === "Privacy Policy" ? "/privacy" : "/terms"}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                >
                  {text}
                </motion.a>
              ))}
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1"
              >
                Made with
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="h-4 w-4 text-red-500" />
                </motion.span>
                by Yoga Life
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
