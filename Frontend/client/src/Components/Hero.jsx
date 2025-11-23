import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DarkModeClasses from "./DarkMode";
import { motion } from "framer-motion";

const customers = [
  {
    user1: {
      name: "john",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    uses2: {
      name: "mohit",
      image:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    user3: {
      name: "sumit",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    },
  },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    y: -4,
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.95 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CustomTooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          {content}
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 border-solid"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid rgb(17, 24, 39)",
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const userArray = Object.values(customers[0]);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, 10px); }
            to { opacity: 1; transform: translate(-50%, 0); }
          }
          
          .avatar-hover {
            transition: all 0.3s ease;
          }
          
          .avatar-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10;
          }
          
          .button-hover {
            transition: all 0.3s ease;
          }
          
          .button-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          
          .image-hover {
            transition: all 0.5s ease;
          }
          
          .image-hover:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }

          @media (max-width: 640px) {
            .button-container {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              align-items: stretch;
            }
          }
        `}
      </style>

      <div
        className={`relative ${DarkModeClasses.container} pt-8 md:pt-20 pb-12 md:pb-20 px-4 md:px-0`}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={containerVariants}
              className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left"
            >
              <motion.h1
                variants={itemVariants}
                className={`text-4xl sm:text-5xl md:text-5xl font-bold leading-tight ${DarkModeClasses.text.primary} mx-auto md:mx-0 max-w-lg`}
              >
                Nourish your Mind,{" "}
                <span className="md:block">Body, and Soul with</span>{" "}
                <span className="md:block">Yoga</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${DarkModeClasses.text.secondary} max-w-lg mx-auto md:mx-0`}
              >
                The smart 365-days-per-year yoga plan to transform your body and
                mind. Tailored to your lifestyle and goals.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="button-container space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row"
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`px-8 py-3 rounded-lg w-full md:w-auto ${DarkModeClasses.button.primary}`}
                  onClick={() => navigate("/authPage")}
                  style={{ fontWeight: "600" }}
                >
                  Start your journey
                </motion.button>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`px-8 py-3 rounded-lg w-full md:w-auto ${DarkModeClasses.button.outline} flex items-center justify-center`}
                >
                  Learn More <ArrowRight className="ml-2" size={20} />
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <div className="flex -space-x-2">
                  {userArray.map((user, index) => (
                    <CustomTooltip
                      key={index}
                      content={
                        <motion.div
                          whileHover={{ scale: 1.1, zIndex: 20 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="text-center"
                        >
                          <p className="font-semibold capitalize">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-300">
                            Yoga Enthusiast
                          </p>
                        </motion.div>
                      }
                    >
                      <img
                        className="avatar-hover w-10 h-10 rounded-full border-2 border-white object-cover"
                        src={user.image}
                        alt={user.name}
                      />
                    </CustomTooltip>
                  ))}
                </div>

                <p
                  className={`${DarkModeClasses.text.secondary} text-sm md:text-base`}
                >
                  Guided{" "}
                  <span className={DarkModeClasses.accent.primary}>5000+</span>{" "}
                  clients last year!
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="relative order-1 md:order-2"
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://media.istockphoto.com/id/1292399474/photo/woman-meditating-at-park.jpg?s=612x612&w=0&k=20&c=iWXLpMMYCWq59Z11E6qKqHBeTgzXedktGRmsObGvi7g="
                alt="Yoga practitioner"
                className={`image-hover w-full h-auto rounded-lg shadow-xl ${DarkModeClasses.hover.card}`}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
