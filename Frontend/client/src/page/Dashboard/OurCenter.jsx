import React, { useState } from "react";
import { MapPin, Clock, Phone, MountainSnow, Wind, Flower2, Dumbbell, Timer, Footprints, Flame, Heart, Sun, Moon, HelpCircle, LifeBuoy, Info, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { BlurText } from "../../Components/Themes/BlurText";

const centers = [
  {
    id: 1,
    name: "Rishikesh Yoga Sanctuary",
    address: "Near Ram Jhula, Rishikesh, Uttarakhand 249302",
    description:
      "Traditional yoga in the yoga capital of the world. Experience authentic teachings in a serene environment.",
    specialties: ["Hatha", "Meditation", "Pranayama"],
    image: "/api/placeholder/400/300",
    timing: "5:00 AM - 8:00 PM",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Mumbai Mindfulness Hub",
    address: "Bandra West, Mumbai, Maharashtra 400050",
    description:
      "Urban sanctuary offering contemporary yoga practices with modern amenities.",
    specialties: ["Vinyasa", "Aerial Yoga", "Power Yoga"],
    image: "/api/placeholder/400/300",
    timing: "6:00 AM - 9:00 PM",
    phone: "+91 98765 43211",
  },
  {
    id: 3,
    name: "Mysore Ashtanga Institute",
    address: "Gokulam, Mysore, Karnataka 570002",
    description:
      "Authentic Ashtanga practice in the birthplace of traditional yoga.",
    specialties: ["Ashtanga", "Sanskrit", "Philosophy"],
    image: "/api/placeholder/400/300",
    timing: "4:30 AM - 7:00 PM",
    phone: "+91 98765 43212",
  },
];

const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

const FloatingElement = ({ children, className }) => (
  <div className={`absolute animate-bounce ${className}`}>{children}</div>
);


const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Parallax floating elements */}
    {[...Array(200)].map((_, i) => (
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

const OurCenter = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">
      {/* Hero Section */}
      {/* <header className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Yoga Centers
          </h1>
          <p className="text-2xl text-purple-200/80">
            Discover Inner Peace Across India
          </p>
        </div>
      </header> */}

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
            opacity: 0.8;
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-200 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 mx-auto flex justify-center items-center min-h-[30vh] relative overflow-hidden rounded-xl"
      >
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

        <div className="max-w-6xl mx-auto py-10 px-6 relative z-10 ">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4 animate-[bounce_4s_ease-in-out_infinite]">
              <Headphones className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent h-[60px]">
                Our Yoga Centers
              </h1>
            </div>
            <BlurText
              text="Join us at our Yoga Centers across India and embark on a transformative journey to wellness, where peace, strength, and balance await you."
              className="text-gray-600 dark:text-gray-300"
              delay={100}
            />

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
      </motion.div>

      {/* Centers Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center) => (
            <Card
              key={center.id}
              className={`overflow-hidden transition-all duration-500 border border-purple-500/20 ${
                hoveredCard === center.id
                  ? "transform scale-[1.02] shadow-2xl shadow-rose-500/20"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCard(center.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-56">
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {center.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-purple-100/80">{center.description}</p>

                <div className="space-y-3 text-purple-100/80">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-rose-400" />
                    <span>{center.timing}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-rose-400" />
                    <span>{center.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-rose-400" />
                    <span>{center.address}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {center.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-purple-400/10 text-rose-300 border border-purple-400/20"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCenter;
