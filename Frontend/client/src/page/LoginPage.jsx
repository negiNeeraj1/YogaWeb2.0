import React, { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Leaf,
  HeartPulse,
  SunMedium,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../api/api";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await LoginUser(formData);

      if (response && response.success) {
        login(response.user);

        const origin = location.state?.from?.pathname || "/yogadashboard";
        window.location.href = origin;
        
      } else {
        setError(response.message || "Login failed. Please try again.");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "An error occurred during login. Please try again.";

      setError(errorMessage);
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
        {/* Left Side - Stylized Wellness Illustration Section */}
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
              Welcome Back
            </h2>
            <p className="text-xl mb-8 max-w-md mx-auto opacity-90">
              Continue your wellness journey. Your path to better health starts
              here.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-500"></div>
              <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="lg:w-[890px] flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-purple-100/50 transform transition-all">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
                Login to Your Account
              </h1>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-center">
                  {error}
                </div>
              )}

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="rounded text-indigo-600"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg 
                  transition-all transform hover:scale-105
                  ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
              >
                {isLoading ? "Logging in..." : "Login"}
                {!isLoading && <LogIn className="w-5 h-5" />}
              </button>

              {/* Sign Up Link */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to={"/authPage"}
                    className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                  >
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;