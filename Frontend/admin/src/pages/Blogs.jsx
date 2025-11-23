import React, { useState } from "react";
import {
  Eye,
  Calendar,
  BookOpen,
  Tag,
  Heart,
  Share2,
  ChevronRight,
  Sun,
  Moon,
  Clock,
  MessageSquare,
  Bookmark,
  ThumbsUp,
  PlusCircle,
  Edit,
  Trash2,
  X,
} from "lucide-react";
import ComingSoonPage from "../components/ComingSoonPage";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Yoga",
    "Wellness",
    "Fitness",
    "Meditation",
    "Mindfulness",
    "Nutrition",
    "Lifestyle",
  ];

  const blogs = [
    {
      id: 1,
      title: "The Complete Guide to Morning Yoga Practice",
      views: 12345,
      date: "2024-11-01",
      category: "Yoga",
      author: "Emma Johnson",
      authorRole: "Senior Yoga Instructor",
      authorImage: "/api/placeholder/100/100",
      excerpt:
        "Discover how a morning yoga routine can transform your entire day. Learn essential poses, breathing techniques, and meditation practices.",
      readTime: "8 min read",
      likes: 1345,
      comments: 89,
      bookmarks: 234,
      image:
        "https://img.freepik.com/free-psd/yoga-woman-banner-template_23-2148478401.jpg?semt=ais_hybrid",
      tags: ["Morning Routine", "Beginners", "Wellness"],
      featured: true,
    },
    {
      id: 2,
      title: "Mindful Meditation: A Scientific Approach",
      views: 9876,
      date: "2024-11-10",
      category: "Meditation",
      author: "Dr. Alex Rodriguez",
      authorRole: "Meditation Researcher",
      authorImage: "/api/placeholder/100/100",
      excerpt:
        "Explore the scientific benefits of meditation, backed by recent research and practical techniques for daily practice.",
      readTime: "10 min read",
      likes: 978,
      comments: 56,
      bookmarks: 189,
      image:
        "https://img.freepik.com/free-psd/banner-template-with-yoga_23-2148470622.jpg?semt=ais_hybrid",
      tags: ["Science", "Mental Health", "Research"],
      featured: true,
    },
    // More blog data...
  ];

  const [show] = useState(true);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return show ? (
    <ComingSoonPage />
  ) : (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-3 py-3">
      <div className="max-w-7xl mx-auto ">
        <button className="fixed bottom-8 right-8 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors">
          <PlusCircle className="w-6 h-6" />
        </button>
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold py-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Yoga & Wellness Blog
          </h1>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${
                    activeCategory === category
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {activeCategory === "All" && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {blogs
              .filter((blog) => blog.featured)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Tag size={16} />
                        <span className="text-sm font-medium">
                          {blog.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Tag
                    size={14}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {blog.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg">
                    <Edit className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </button>
                  <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg">
                    <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              No blogs found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
