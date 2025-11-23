import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer"
import Pose1 from "../assets/images/pose1.jpg"
import Pose2 from "../assets/images/pose2.jpg"
import Pose3 from "../assets/images/pose3.jpg"
import Pose4 from "../assets/images/pose4.jpg"
import Pose5 from "../assets/images/pose5.jpg"
import Pose6 from "../assets/images/pose6.jpg"
import Pose7 from "../assets/images/pose7.jpg"

const About = () => {
  const achievements = [
    { title: "Years Teaching", value: "15+" },
    { title: "Students Trained", value: "10,000+" },
    { title: "Workshops", value: "500+" },
    { title: "Countries", value: "25+" },
  ];

  const centers = [
    {
      name: "Mumbai Center",
      description:
        "Our flagship center in the heart of Mumbai offering daily classes and workshops.",
      address: "123 Yoga Street, Andheri West, Mumbai",
      phone: "+91 98765 43210",
      image: "/api/placeholder/600/400",
      features: [
        "Daily Classes",
        "Teacher Training",
        "Meditation Hall",
        "Ayurveda Consultations",
      ],
    },
    {
      name: "Rishikesh Ashram",
      description:
        "Traditional ashram experience with intensive yoga and meditation retreats.",
      address: "Near Laxman Jhula, Rishikesh",
      phone: "+91 98765 43211",
      image: "/api/placeholder/600/400",
      features: [
        "Residential Programs",
        "Spiritual Retreats",
        "Ganga View",
        "Nature Walks",
      ],
    },
    {
      name: "Goa Retreat Center",
      description:
        "Beachside yoga center perfect for rejuvenating retreats and workshops.",
      address: "Anjuna Beach Road, North Goa",
      phone: "+91 98765 43212",
      image: "/api/placeholder/600/400",
      features: [
        "Beach Yoga",
        "Wellness Programs",
        "Organic Café",
        "Spa Services",
      ],
    },
  ];

  const galleryItems = [
    {
      id: 1,
      image:Pose1 ,
      title: "Morning Ashtanga Class",
      description: "Students practicing sun salutations at sunrise",
      height: "tall",
    },
    {
      id: 2,
      image: Pose2,
      title: "Meditation Session",
      description: "Group meditation in our peaceful garden",
      height: "medium",
    },
    {
      id: 3,
      image:
        Pose3,
      title: "Vinyasa Flow",
      description: "Dynamic flow class with advanced practitioners",
      height: "medium",
    },
    {
      id: 4,
      image:
        Pose5,
      title: "Partner Yoga",
      description: "Building trust and connection through yoga",
      height: "short",
    },
    {
      id: 5,
      image:
        Pose6,
      title: "Kids Yoga Class",
      description: "Making yoga fun for little ones",
      height: "medium",
    },
    {
      id: 6,
      image:
        Pose7,
      title: "Sunset Yoga",
      description: "Beachside yoga session in Goa",
      height: "tall",
    },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 pt-16">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 rounded-3xl mt-2 "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 dark:from-purple-900/10 to-transparent"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-50 dark:from-purple-900/10 to-transparent"
          ></motion.div>

          <div className="relative mt-3 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              {/* Hero Content */}
              <div className="text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-yellow-200 dark:bg-blue-900 px-4 py-2 rounded-full mb-6 shadow-sm">
                  <Sparkles className="w-4 h-4 text-yellow-700 dark:text-blue-300" />
                  <span className="text-sm font-medium text-yellow-700 dark:text-blue-300">
                    Ancient Wisdom, Modern Practice
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 p-2">
                  Meet Your Guide
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent h-14">
                    Master Yogi Pranav
                  </span>
                </h1>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
                  With over 15 years of experience teaching traditional yoga,
                  discover how ancient wisdom can transform your modern life
                  through our unique approach to mind, body, and spirit
                  integration.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Book a Free Class
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="w-full sm:w-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-blue-600 dark:border-blue-400 px-8 py-3 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/api/placeholder/1200/400"
                alt="Yoga master in meditation"
                className="w-full h-full object-cover opacity-10"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 dark:from-gray-800 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 dark:from-gray-800 to-transparent"></div>
          </div>
        </motion.header>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              My Journey in Yoga
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With over 15 years of experience in teaching traditional yoga, I
              have dedicated my life to spreading the ancient wisdom of yoga
              across the globe. My journey began in the foothills of the
              Himalayas, where I spent years learning from renowned masters.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Today, I run the prestigious Pranav Yoga Institute, where we blend
              traditional teachings with modern understanding to make yoga
              accessible to everyone, regardless of their experience level.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://th.bing.com/th/id/OIP.xCU8yPfSS72hRWH6gavjOwHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Teaching yoga"
              className="rounded-lg"
            />
            <img
              src="https://th.bing.com/th/id/OIP.XxlqW7JwD9psGdoHbIpdfAHaE7?rs=1&pid=ImgDetMain"
              alt="Meditation session"
              className="rounded-lg mt-8"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Philosophy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              We believe in the transformative power of yoga to heal both body
              and mind. Our approach combines traditional yogic wisdom with
              modern scientific understanding.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {["Mind", "Body", "Spirit"].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">
                      {item === "Mind" ? "🧠" : item === "Body" ? "💪" : "✨"}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">
                  {item}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item === "Mind"
                    ? "Develop mental clarity, emotional balance, and inner peace through meditation and mindfulness practices."
                    : item === "Body"
                    ? "Build strength, flexibility, and vitality through aligned movement and conscious breathing."
                    : "Connect with your inner self through spiritual practices and ancient wisdom teachings."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {achievement.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Gallery */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Experience Our Practice
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex justify-center items-center">
            <iframe
              width="100%" // Set width to 100% to make the video responsive
              height="100%" // Set height to 100% to maintain the aspect ratio
              src="https://www.youtube.com/embed/8HCR84wbTNQ?si=b8S8KG7ZxAL2VxWu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
            {/* <p className="text-center mt-2 text-gray-600">
              Morning Yoga Session
            </p> */}
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex justify-center items-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jWa-iSD-v8o?si=40LLNzjjF2E5gf1S"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
            {/* <p className="text-center mt-2 text-gray-600">
              Meditation Workshop
            </p> */}
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex justify-center items-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nJti0B5jup4?si=49D8ScEXzbw3BCDz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
            {/* <p className="text-center mt-2 text-gray-600">Retreat Highlights</p> */}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Class Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${
                item.height === "tall"
                  ? "row-span-2"
                  : item.height === "short"
                  ? "row-span-1"
                  : "row-span-1"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centers Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
            Our Centers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {centers.map((center, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">
                    {center.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {center.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 dark:text-white">
                      Facilities:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {center.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-300 text-sm"
                        >
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    <p className="mb-1">📍 {center.address}</p>
                    <p>📞 {center.phone}</p>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                    Book a Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Schedule a Visit
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Visit Any of Our Centers
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Experience the transformative environment of our yoga centers
                firsthand. Our team will be happy to show you around and discuss
                your yoga journey.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Tour our facilities
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Meet our instructors
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Free consultation session
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">
                    ✓
                  </span>
                  Class observation opportunity
                </li>
              </ul>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Center
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option>Mumbai Center</option>
                  <option>Rishikesh Ashram</option>
                  <option>Goa Retreat Center</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  rows="4"
                  placeholder="Any specific questions or requests?"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Schedule Visit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default About;
