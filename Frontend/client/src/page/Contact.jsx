import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Footer from "../Components/Footer";
import { sendForm } from "../api/api";

const ContactUs = () => {
  const user = localStorage.getItem("user");
  const parsedUserData = user ? JSON.parse(user) : null;


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    id: parsedUserData?.id,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  
    try {
      const response = await sendForm(formData);
      
      if (response.success) {
        alert(response.message);
      } else {
        console.error(response.message);
      }
  
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          id: parsedUserData?.id,
        });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: "+1 234 567 890",
      subtext: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: "cat@example.com",
      subtext: "Online support 24/7",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      details: "123 Yoga Street",
      subtext: "New York, NY 10001",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: "Mon - Sat: 7am - 6pm",
      subtext: "Sunday: 9am - 2pm",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6">
            <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            We'd Love to Hear
            <span className="block text-purple-600 dark:text-purple-400">
              From You
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Have questions about our classes or want to start your yoga journey?
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <div className="text-purple-600 dark:text-purple-400">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                {info.details}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {info.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Text */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://t3.ftcdn.net/jpg/13/03/81/66/240_F_1303816683_fqFuNkdsji7iKGUpgPruC1HVx0W5eIuz.jpg"
                alt="Contact Us"
                className="w-full h-[400px] object-cover transform transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                <p className="text-gray-100">
                  Transform your life through yoga practice
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-300"
                      placeholder="Enter your full Full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      placeholder="Subject"
                      className="w-full p-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition-all duration-300"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-300 resize-none"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transform transition-all duration-300 hover:scale-105"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;
