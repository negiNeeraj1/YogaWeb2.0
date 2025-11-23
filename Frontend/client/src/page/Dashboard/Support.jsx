import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  ChevronUp,
  Send,
  AlertCircle,
  HelpCircle,
  Heart,
  Flame,
  Dumbbell,
  Timer,
  Wind,
  Sun,
  Moon,
  Footprints,
  Flower2,
  MountainSnow,
} from "lucide-react";
import { sendForm } from "../../api/api";

const FloatingElement = ({ children, className }) => (
  <div className={`absolute animate-bounce ${className}`}>{children}</div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {question}
        </span>
        <div className="transform transition-transform duration-300">
          {isOpen ? (
            <ChevronUp
              className="text-indigo-600 dark:text-indigo-400"
              size={20}
            />
          ) : (
            <ChevronDown
              className="text-gray-400 group-hover:text-indigo-600 dark:text-gray-500 dark:group-hover:text-indigo-400"
              size={20}
            />
          )}
        </div>
      </button>
      <div
        className={`transform transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(150)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full opacity-20 dark:opacity-10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          backgroundColor: `hsl(${Math.random() * 60 + 230}, 70%, 70%)`,
          animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

const SupportPage = () => {

  const user = localStorage.getItem("user");
  const parsedUserData = user ? JSON.parse(user) : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    id: parsedUserData?.id,
  });

    const [submitStatus, setSubmitStatus] = useState({
      loading: false,
      success: false,
      error: null,
    });


  const faqs = [
    {
      question: "How do I join a yoga class?",
      answer:
        "Navigate to the Classes section, choose your preferred class, and click 'Join Class'. Follow the enrollment steps to secure your spot. You'll receive a confirmation email with all the details you need.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Classes can be cancelled up to 24 hours before the scheduled time for a full refund. For cancellations made less than 24 hours before class, a 50% fee applies. No-shows are not eligible for refunds.",
    },
    {
      question: "What should I bring to class?",
      answer:
        "Please bring your own yoga mat, comfortable clothing, and water bottle. We recommend wearing layers as body temperature can vary during practice. Props like blocks and straps are provided, but you're welcome to bring your own.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleSubmit = async (e) => {
     e.preventDefault();

     if (!parsedUserData?.id) {
       setSubmitStatus({
         loading: false,
         success: false,
         error: "Please log in to send a message",
       });
       return;
     }

     setSubmitStatus({ loading: true, success: false, error: null });

     try {
       const response = await sendForm(formData);

       if (response.success) {
         setSubmitStatus({ loading: false, success: true, error: null });
         setFormData({
           name: "",
           email: "",
           subject: "",
           message: "",
           id: parsedUserData.id,
         });
       } else {
         throw new Error(response.message || "Failed to send message");
       }
     } catch (error) {
       setSubmitStatus({
         loading: false,
         success: false,
         error: error.message || "An error occurred while sending the message",
       });
     }
   };

  return (
    <div className={`min-h-screen  dark:bg-gray-900 bg-slate-300`}>
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes blob {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
      `}</style>

      {/* Hero Section with refined gradient */}
      <div className="bg-slate-200 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 mx-auto flex justify-center items-center min-h-[30vh] relative overflow-hidden">
        {/* Decorative Elements - First Layer (Background) */}
        <FloatingElement className="top-20 left-[8%] animate-[bounce_7s_ease-in-out_infinite]">
          <MountainSnow className="w-12 h-12 text-indigo-400/30" />
        </FloatingElement>
        <FloatingElement className="bottom-16 right-[12%] animate-[bounce_8s_ease-in-out_infinite]">
          <Wind className="w-10 h-10 text-violet-400/30" />
        </FloatingElement>

        {/* Decorative Elements - Second Layer (Mid-ground) */}
        <FloatingElement className="top-32 left-[15%] animate-[bounce_6s_ease-in-out_infinite]">
          <Flower2 className="w-8 h-8 text-indigo-400/40" />
        </FloatingElement>
        <FloatingElement className="top-24 right-[18%] animate-[bounce_5s_ease-in-out_infinite]">
          <Dumbbell className="w-7 h-7 text-violet-400/40" />
        </FloatingElement>
        <FloatingElement className="bottom-28 left-[22%] animate-[bounce_9s_ease-in-out_infinite]">
          <Timer className="w-6 h-6 text-purple-400/40" />
        </FloatingElement>
        <FloatingElement className="bottom-36 right-[25%] animate-[bounce_7s_ease-in-out_infinite]">
          <Footprints className="w-8 h-8 text-indigo-300/40" />
        </FloatingElement>

        {/* Decorative Elements - Third Layer (Foreground) */}
        <FloatingElement className="top-16 left-[30%] animate-[bounce_4s_ease-in-out_infinite]">
          <Flame className="w-6 h-6 text-orange-400/50" />
        </FloatingElement>
        <FloatingElement className="top-40 right-[28%] animate-[bounce_6s_ease-in-out_infinite]">
          <Heart className="w-5 h-5 text-pink-400/50" />
        </FloatingElement>
        <FloatingElement className="bottom-20 left-[35%] animate-[bounce_5s_ease-in-out_infinite]">
          <Sun className="w-8 h-8 text-yellow-400/50" />
        </FloatingElement>
        <FloatingElement className="bottom-32 right-[32%] animate-[bounce_8s_ease-in-out_infinite]">
          <Moon className="w-6 h-6 text-violet-300/50" />
        </FloatingElement>

        <AnimatedBackground />

        {/* Main Content */}
        <div className="max-w-6xl mx-auto py-10 px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4 animate-[bounce_4s_ease-in-out_infinite]">
              <HelpCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                Need Help?
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl animate-[fadeIn_1s_ease-in]">
              We're here to support your yoga journey. Get in touch with us
              through any of the channels below, and we'll respond within 24
              hours.
            </p>

            {/* Gradient Orbs */}
            <div className="absolute -z-10 blur-3xl opacity-30">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply animate-[blob_7s_infinite]" />
              <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply animate-[blob_8s_infinite]" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply animate-[blob_6s_infinite]" />
            </div>
          </div>
        </div>

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/20 dark:to-gray-800/20 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-slate-200 dark:bg-gray-800 p-8 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition-all duration-300"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={submitStatus.loading}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition-all duration-300"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={submitStatus.loading}
                  />
                </div>
              </div>

              {/* Rest of the form inputs */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition-all duration-300"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={submitStatus.loading}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:outline-none transition-all duration-300 resize-y"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={submitStatus.loading}
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus.loading}
                className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600 text-white font-medium flex items-center justify-center gap-2 group shadow-sm hover:shadow-md transition-all duration-300 ${
                  submitStatus.loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                <span>
                  {submitStatus.loading ? "Sending..." : "Send Message"}
                </span>
                <Send
                  size={20}
                  className={`${
                    submitStatus.loading
                      ? "animate-pulse"
                      : "group-hover:translate-x-1"
                  } transition-all duration-300`}
                />
              </button>

              {/* Status messages */}
              {submitStatus.success && (
                <div className="text-green-600 dark:text-green-400 text-sm mt-2 animate-fadeIn">
                  Message sent successfully!
                </div>
              )}
              {submitStatus.error && (
                <div className="text-red-600 dark:text-red-400 text-sm mt-2 animate-fadeIn">
                  Error: {submitStatus.error}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-slate-200 dark:bg-gray-800 p-8 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Quick Contact
              </h2>
              <div className="space-y-6">
                <a
                  href="mailto:support@yogaapp.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <Mail
                    className="text-indigo-600 dark:text-indigo-400"
                    size={24}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    support@yogaapp.com
                  </span>
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <Phone
                    className="text-indigo-600 dark:text-indigo-400"
                    size={24}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    +1 (555) 123-4567
                  </span>
                </a>
                <button className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-rose-600 to-pink-300 hover:from-rose-700 hover:to-pink-600 dark:from-rose-500 dark:to-pink-300 dark:hover:from-rose-600 dark:hover:to-pink-200 rounded-xl text-white font-medium group shadow-sm hover:shadow-md transition-all duration-300">
                  <MessageCircle
                    size={24}
                    className="group-hover:translate-x-1 animate-pulse transition-transform duration-200"
                  />
                  <span>Start Live Chat</span>
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-slate-200 dark:bg-gray-800 p-8 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle
                  className="text-indigo-600 dark:text-indigo-400"
                  size={24}
                />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Common Questions
                </h2>
              </div>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-200 dark:bg-gray-800 p-8 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Connect With Us
              </h2>
              <div className="flex justify-center gap-8">
                <a
                  href="#"
                  className="p-4 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-indigo-600 text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white transition-all duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="p-4 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100  text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-white dark:hover:bg-rose-500 transition-all duration-500"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="p-4 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
