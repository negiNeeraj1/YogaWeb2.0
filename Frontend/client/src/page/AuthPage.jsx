import React, { useState } from "react";
import {
  User,
  HeartPulse,
  Leaf,
  Target,
  SunMedium,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { SignUpUser } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuth";

const AuthPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    phone: "",

    // Health Information
    height: "",
    weight: "",
    medicalConditions: [],
    medications: "",
    injuries: "",

    // Yoga Experience
    experienceLevel: "",
    preferredStyle: "",
    flexibility: "",
    strengthLevel: "",

    // Goals and Preferences
    fitnessGoals: [],
    focusAreas: [],
    preferredTime: "",
    sessionDuration: "",

    //  Lifestyle
    occupation: "",
    stressLevel: "",
    sleepQuality: "",
    dietaryPreferences: "",
    activityLevel: "",

    // Additional Fields
    role: "user",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const steps = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Personal Details",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          required: true,
        },
        { name: "lastName", label: "Last Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
        },
        {
          name: "dateOfBirth",
          label: "Date of Birth",
          type: "date",
          required: true,
        },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
            { value: "prefer-not-say", label: "Prefer not to say" },
          ],
        },
        { name: "phone", label: "Phone", type: "text", required: true },
      ],
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Health Information",
      fields: [
        {
          name: "height",
          label: "Height (cm)",
          type: "number",
          required: true,
        },
        {
          name: "weight",
          label: "Weight (kg)",
          type: "number",
          required: true,
        },
        {
          name: "medicalConditions",
          label: "Medical Conditions",
          type: "multiselect",
          options: [
            "None",
            "Back Pain",
            "Arthritis",
            "High Blood Pressure",
            "Diabetes",
            "Heart Condition",
            "Pregnancy",
            "Other",
          ],
        },
        { name: "medications", label: "Medications", type: "textarea" },
        { name: "injuries", label: "Current Injuries", type: "textarea" },
      ],
    },

    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Yoga Experience",
      fields: [
        {
          name: "experienceLevel",
          label: "Experience Level",
          type: "select",
          options: [
            { value: "beginner", label: "Beginner" },
            { value: "novice", label: "Novice" },
            { value: "intermediate", label: "Intermediate" },
            { value: "advanced", label: "Advanced" },
          ],
        },
        {
          name: "preferredStyle",
          label: "Preferred Yoga Style",
          type: "select",
          options: [
            { value: "Hatha", label: "Hatha" },
            { value: "Vinyasa", label: "Vinyasa" },
            { value: "Ashtanga", label: "Ashtanga" },
            { value: "Yin", label: "Yin" },
            { value: "Restorative", label: "Restorative" },
            { value: "Power Yoga", label: "Power Yoga" },
            { value: "Not Sure", label: "Not Sure" },
          ],
        },
        {
          name: "flexibility",
          label: "Your Flexibility",
          type: "select",
          options: [
            { value: "limited", label: "Limited" },
            { value: "moderate", label: "Moderate" },
            { value: "good", label: "Good" },
            { value: "excellent", label: "Excellent" },
          ],
        },
        { name: "strengthLevel", label: "Strength Level", type: "textarea" },
      ],
    },

    {
      icon: <Target className="w-6 h-6" />,
      title: "Goals & Preferences",
      fields: [
        {
          name: "fitnessGoals",
          label: "Fitness Goals",
          type: "multiselect",
          options: [
            "Flexibility",
            "Strength",
            "Weight Loss",
            "Stress Relief",
            "Better Sleep",
            "Pain Management",
            "Spiritual Growth",
          ],
        },
        {
          name: "focusAreas",
          label: "Focus Areas",
          type: "multiselect",
          options: [
            "Back",
            "Core",
            "Upper Body",
            "Lower Body",
            "Balance",
            "Breathing",
            "Meditation",
          ],
        },
        {
          name: "preferredTime",
          label: "Preferred Time",
          type: "select",
          options: [
            { value: "early-morning", label: "Early Morning" },
            { value: "morning", label: "Morning" },
            { value: "afternoon", label: "Afternoon" },
            { value: "evening", label: "Evening" },
            { value: "night", label: "Night" },
          ],
        },
        {
          name: "sessionDuration",
          label: "Session Duration",
          type: "select",
          options: [
            { value: 15, label: "15 Minutes" },
            { value: 30, label: "30 Minutes" },
            { value: 45, label: "45 Minutes" },
            { value: 60, label: "1 Hour" },
            { value: 90, label: "1.5 Hours" },
          ],
        },
      ],
    },

    {
      icon: <SunMedium className="w-6 h-6" />,
      title: "Lifestyle",
      fields: [
        {
          name: "occupation",
          label: "Occupation",
          type: "select",
          options: [
            { value: "desk-job", label: "Desk Job" },
            { value: "physical-labor", label: "Physical Labor" },
            { value: "service-industry", label: "Service Industry" },
            { value: "healthcare", label: "Healthcare" },
            { value: "education", label: "Education" },
            { value: "remote-work", label: "Remote Work" },
            { value: "student", label: "Student" },
            { value: "retired", label: "Retired" },
            { value: "other", label: "Other" },
          ],
        },
        {
          name: "stressLevel",
          label: "Stress Level",
          type: "select",
          options: [
            { value: "low", label: "Low" },
            { value: "moderate", label: "Moderate" },
            { value: "high", label: "High" },
            { value: "very high", label: "Very High" },
          ],
        },
        {
          name: "sleepQuality",
          label: "Sleep Quality",
          type: "select",
          options: [
            { value: "excellent", label: "Excellent" },
            { value: "good", label: "Good" },
            { value: "fair", label: "Fair" },
            { value: "poor", label: "Poor" },
            { value: "insomnia", label: "Difficulty Sleeping" },
          ],
        },
        {
          name: "dietaryPreferences",
          label: "Dietary Preferences",
          type: "select",
          options: [
            { value: "vegetarian", label: "Vegetarian" },
            { value: "vegan", label: "Vegan" },
            { value: "gluten-free", label: "Gluten-Free" },
            { value: "dairy-free", label: "Dairy-Free" },
            { value: "pescatarian", label: "Pescatarian" },
            { value: "no restrictions", label: "No Restrictions" },
            { value: "other", label: "Other" },
          ],
        },
        {
          name: "activityLevel",
          label: "Activity Level",
          type: "select",
          options: [
            { value: "sedentary", label: "Sedentary" },
            { value: "light", label: "Light" },
            { value: "moderate", label: "Moderate" },
            { value: "active", label: "Active" },
            { value: "very-active", label: "Very Active" },
          ],
        },
        {
          name: "role",
          label: "Role",
          type: "select",
          options: [
            { value: "user", label: "User" },
            { value: "instructor", label: "Instructor" },
          ],
        },
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle different input types
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : (prev[name] || []).filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault(); // Prevent form submission
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = (e) => {
    e.preventDefault(); // Prevent form submission
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep !== steps.length) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Include ALL form fields in userData
      const userData = {
        // Basic Information
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        phone: formData.phone,

        // Health Information
        height: formData.height,
        weight: formData.weight,
        medicalConditions: formData.medicalConditions,
        medications: formData.medications,
        injuries: formData.injuries,

        // Yoga Experience
        experienceLevel: formData.experienceLevel,
        preferredStyle: formData.preferredStyle,
        flexibility: formData.flexibility,
        strengthLevel: formData.strengthLevel,

        // Goals and Preferences
        fitnessGoals: formData.fitnessGoals,
        focusAreas: formData.focusAreas,
        preferredTime: formData.preferredTime,
        sessionDuration: formData.sessionDuration,

        // Lifestyle
        occupation: formData.occupation,
        stressLevel: formData.stressLevel,
        sleepQuality: formData.sleepQuality,
        dietaryPreferences: formData.dietaryPreferences,
        activityLevel: formData.activityLevel,
        role: formData.role,
      };

      const response = await SignUpUser(userData);
      useAuthStore.getState().setIsLoggedIn(true);
      navigate("/yogadashboard");
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex flex-col lg:flex-row w-full z-10">
        {/* Left Side - Stylized Yoga Illustration Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-12 bg-gradient-to-br from-purple-600 to-indigo-700">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1599901860904-da5e3bba59aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
            }}
          ></div>
          <div className="relative z-10 text-center text-white">
            <div className="mb-8 flex justify-center space-x-4">
              <Leaf className="w-16 h-16 text-green-300 transform hover:scale-110 transition-transform" />
              <HeartPulse className="w-16 h-16 text-red-300 transform hover:scale-110 transition-transform" />
              <SunMedium className="w-16 h-16 text-yellow-300 transform hover:scale-110 transition-transform" />
            </div>
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Elevate Your Wellness
            </h2>
            <p className="text-xl mb-8 max-w-md mx-auto opacity-90">
              Embark on a transformative journey of holistic health,
              personalized just for you.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-500"></div>
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>

        <div className="lg:w-[890px] flex items-center justify-center p-8 lg:p-12 mt-9">
          <div className="w-full max-w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-purple-100/50 transform transition-all">
            {/* Progress Indicator */}
            <div className="flex mb-8 space-x-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`
                w-full h-1.5 rounded-full transition-all duration-300
                ${
                  currentStep > index + 1
                    ? "bg-green-500"
                    : currentStep === index + 1
                    ? "bg-purple-600 w-full"
                    : "bg-gray-200"
                }`}
                />
              ))}
            </div>

            {/* Form Content */}
            <form
              onSubmit={
                currentStep === steps.length ? handleSubmit : handleNextStep
              }
              className="space-y-6"
            >
              <h1 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
                {steps[currentStep - 1].title}
              </h1>

              {/* Two-column grid for fields */}
              <div className="grid grid-cols-2 gap-4">
                {steps[currentStep - 1].fields.map((field) => (
                  <div
                    key={field.name}
                    className="transform transition-all duration-500 ease-in-out"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === "select" && (
                      <select
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Select {field.label}</option>
                        {field.options.map((option) => (
                          <option
                            key={
                              typeof option === "string" ? option : option.value
                            }
                            value={
                              typeof option === "string" ? option : option.value
                            }
                          >
                            {typeof option === "string" ? option : option.label}
                          </option>
                        ))}
                      </select>
                    )}
                    {field.type === "multiselect" && (
                      <div className="grid grid-cols-2 gap-2">
                        {field.options.map((option) => (
                          <label
                            key={option}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              name={field.name}
                              value={option}
                              checked={(formData[field.name] || []).includes(
                                option
                              )}
                              onChange={handleInputChange}
                              className="rounded text-indigo-600"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    {["text", "email", "password", "date", "number"].includes(
                      field.type
                    ) && (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                      />
                    )}
                    {field.type === "textarea" && (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                        rows="3"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8 space-x-4">
                {currentStep > 1 && (
                  <button
                    type="button" // Changed to type="button"
                    onClick={handlePrevStep}
                    className="flex-1 flex items-center justify-center gap-2 
              bg-gray-100 text-gray-800 p-3 rounded-lg 
              hover:bg-gray-200 transition-all 
              transform hover:scale-105"
                  >
                    <ArrowLeft className="w-5 h-5" /> Previous
                  </button>
                )}

                {currentStep < steps.length ? (
                  <button
                    type="submit" // This will trigger handleNextStep
                    className="flex-1 flex items-center justify-center gap-2 
              bg-indigo-600 text-white p-3 rounded-lg 
              hover:bg-indigo-700 transition-all 
              transform hover:scale-105"
                  >
                    Next Step <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit" // This will trigger handleSubmit
                    disabled={isLoading}
                    className={`flex-1 flex items-center justify-center gap-2 
              p-3 rounded-lg 
              transition-all 
              transform hover:scale-105
              ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                    {!isLoading && <CheckCircle2 className="w-5 h-5" />}
                  </button>
                )}
              </div>

              {
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to={"/loginPage"}
                      className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                    >
                      Log in
                    </Link>
                  </span>
                </div>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
