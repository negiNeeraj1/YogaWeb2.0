import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DarkModeClasses from "../Components/DarkMode";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "$49/month",
      features: [
        "Access to all basic classes",
        "2 classes per week",
        "Basic app features",
        "Community support",
      ],
      isPopular: false,
    },
    {
      name: "Premium",
      price: "$89/month",
      features: [
        "Unlimited class access",
        "Personal instructor",
        "Premium app features",
        "Nutrition guidance",
        "24/7 support",
      ],
      isPopular: true,
    },
    {
      name: "Family",
      price: "$149/month",
      features: [
        "Access for up to 4 members",
        "Unlimited classes",
        "Family workshops",
        "Premium app features",
        "Priority booking",
      ],
      isPopular: false,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChoosePlan = (planName) => {
    console.log(`Chosen Plan: ${planName}`);
  };

  return (
    <div className={`min-h-screen ${DarkModeClasses.background.primary} py-24`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1
            className={`text-4xl md:text-5xl font-bold ${DarkModeClasses.text.primary} mb-4`}
          >
            Membership Plans
          </h1>
          <p className={`text-xl ${DarkModeClasses.text.accent}`}>
            Choose the perfect plan for your practice
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 ${DarkModeClasses.container}`}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${
                DarkModeClasses.card
              } p-8 rounded-lg shadow-md relative transition-all duration-300 ${
                plan.isPopular
                  ? "border-2 border-indigo-600"
                  : "border-2 border-gray-200 dark:border-[#2D3D53]"
              }`}
              data-aos="fade-up"
              data-aos-delay={100}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm rounded-bl">
                  Popular
                </span>
              )}
              <h3
                className={`text-2xl font-semibold text-gray-800 mb-4 ${DarkModeClasses.text.primary}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-3xl font-bold text-gray-800 mb-6 ${DarkModeClasses.text.secondary}`}
              >
                {plan.price}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center text-gray-600 ${DarkModeClasses.text.accent}`}
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleChoosePlan(plan.name)}
                className={`w-full py-2 px-4 rounded-md transition-all duration-300 ${
                  plan.isPopular
                    ? `${DarkModeClasses.hover.button} ${DarkModeClasses.button.primary} hover:bg-indigo-700 `
                    : `${DarkModeClasses.button.secondary} dark:hover:bg-gray-600`
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
