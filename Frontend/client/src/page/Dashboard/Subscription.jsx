import React, { useState, useEffect } from "react";
import {
  Check,
  X,
  Shield,
  Clock,
  Award,
  Zap,
  Crown,
  Sparkles,
  Users,
  Book,
} from "lucide-react";
import { motion } from "framer-motion";
import { BlurText } from "../../Components/Themes/BlurText";
import { getPlans } from "../../api/api";
import ComingSoonPage from "../../Components/CommingSoonPage";

const SubscriptionPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("free");
  const [plans, setPlans] = useState([]); 
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await getPlans(); 
        setPlans(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching plans:", error);
        setLoading(false); 
      }
    };

    fetchPlans(); 
  }, []); 

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const [show] = useState(true);

  return (
    show ?
    <ComingSoonPage/>
     :
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="text-4xl font-bold mb-2 text-rose-600">
            <BlurText text="Choose Your Perfect Plan" delay={50} />
          </div>
          <BlurText
            text="Select the perfect plan for your yoga practice"
            className="text-gray-600 dark:text-gray-300"
            delay={100}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center items-center gap-4"
        >
          <span
            className={`text-gray-700 dark:text-gray-300 ${
              !isYearly ? "font-bold" : ""
            }`}
          >
            <BlurText
              text="Monthly"
              className="text-gray-600 dark:text-gray-300"
              delay={100}
            />
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300"
          >
            <motion.div
              animate={{ x: isYearly ? 32 : 4 }}
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={`text-gray-700 dark:text-gray-300 ${
              isYearly ? "font-bold" : ""
            }`}
          >
            <BlurText
              text="Yearly"
              className="text-gray-600 dark:text-gray-300"
              delay={150}
            />
            <BlurText
              text="save 20%"
              className="text-green-500 font-semibold"
              delay={100}
            />
          </span>
        </motion.div>

        {loading ? (
          <div className="text-center text-gray-600 dark:text-gray-300">
            Loading plans...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
                ${
                  currentPlan === plan.planId
                    ? "ring-2 ring-blue-500 dark:ring-blue-400 scale-105"
                    : "hover:ring-2 hover:ring-gray-300 hover:scale-105"
                }
                transition-all duration-300`}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  <BlurText
                    text={plan.name}
                    className="text-gray-600 dark:text-gray-300"
                    delay={100}
                  />
                </h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    <BlurText
                      text={`$${
                        isYearly ? plan.yearlyPrice : plan.monthlyPrice
                      }`}
                      className="text-gray-600 dark:text-gray-300"
                      delay={100}
                    />
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    <BlurText
                      text={`/`}
                      className="text-gray-600 dark:text-gray-300"
                      delay={100}
                    />
                    <BlurText
                      text={`${isYearly ? "year" : "month"}`}
                      className="text-gray-600 dark:text-gray-300"
                      delay={100}
                    />
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  {plan.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="text-green-500" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">
                        <BlurText
                          text={feature}
                          className="text-gray-600 dark:text-gray-300"
                          delay={100}
                        />
                      </span>
                    </motion.div>
                  ))}
                  {plan.notIncludedFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: (plan.features.length + index) * 0.1,
                      }}
                      className="flex items-center gap-2"
                    >
                      <X className="text-red-500" size={20} />
                      <span className="text-gray-400 dark:text-gray-500">
                        <BlurText
                          text={feature}
                          className="text-gray-600 dark:text-gray-300"
                          delay={100}
                        />
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPlan(plan.planId)}
                  className={`w-full py-3 font-medium rounded-lg ${
                    currentPlan === plan.planId
                      ? "bg-rose-500"
                      : "bg-gradient-to-r from-emerald-500 to-emerald-500 hover:from-emerald-600 hover:to-emerald-700"
                  } text-white font-medium shadow-lg transition-all duration-300`}
                >
                  <BlurText
                    text={
                      currentPlan === plan.planId
                        ? "Current Plan"
                        : "Choose Plan"
                    }
                    delay={100}
                  />
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          {...fadeIn}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            <BlurText
              text={`All Plan Includes`}
              className="text-gray-600 dark:text-gray-300"
              delay={100}
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <Shield className="text-blue-500" size={24} />
              <div>
                <BlurText
                  text={`Secure Platform`}
                  className="font-semibold mb-2 text-gray-900 dark:text-white"
                  delay={100}
                />
                <BlurText
                  text={`Practice yoga safely with our secure platform`}
                  className="font-semibold mb-2 text-gray-900 dark:text-white"
                  delay={100}
                />
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <Clock className="text-blue-500" size={24} />
              <div>
                <BlurText
                  text={`24/7 available`}
                  className="font-semibold mb-2 text-gray-900 dark:text-white"
                  delay={100}
                />
                <BlurText
                  text={`Practice yoga safely with our secure platform`}
                  className="font-semibold mb-2 text-gray-900 dark:text-white"
                  delay={100}
                />
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <Award className="text-blue-500" size={24} />
              <div>
                <BlurText
                  text={`Certified Instructors`}
                  className="font-semibold mb-2 text-gray-900 dark:text-white"
                  delay={100}
                />
                <BlurText
                  text={`Learn from experienced and certified Yoga teachers`}
                  className="font-semibold mb-2 text-gray-900 dark:text-white"
                  delay={100}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
