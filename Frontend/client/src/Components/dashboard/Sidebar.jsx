// src/components/dashboard/Sidebar.jsx
import React from "react";
import {
  Home,
  Calendar,
  BarChart2,
  HeartHandshake,
  CreditCard,
  MapPin,
  User,
  BookOpen,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import DarkModeClasses from "../DarkMode";

const Sidebar = () => {
  const location = useLocation();

  const sidebarNavItems = [
    {
      icon: <Home className="w-5 h-5" />,
      name: "Dashboard",
      path: "/yogadashboard",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      name: "Classes",
      path: "/yogadashboard/classes",
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      name: "Help and Support",
      path: "/yogadashboard/contact",
    },
    // {
    //   icon: <CreditCard className="w-5 h-5" />,
    //   name: "Subscription",
    //   path: "/yogadashboard/subscription",
    // },
    {
      icon: <MapPin className="w-5 h-5" />,
      name: "Our Centers",
      path: "/yogadashboard/centers",
    },
    {
      icon: <User className="w-5 h-5" />,
      name: "Profile",
      path: "/yogadashboard/profile",
    },
  ];

  return (
    <div
      className={`w-64 bg-white shadow-lg h-full flex flex-col ${DarkModeClasses.background.primary}`}
    >
      <div className={`p-4 border-b ${DarkModeClasses.card.gradient}`}>
        <h1
          className={`text-2xl font-bold text-purple-600 flex items-center ${DarkModeClasses.text.primary}`}
        >
          <BookOpen className="mr-2" /> Yoga
        </h1>
      </div>
      <nav className="p-4 flex-grow">
        {sidebarNavItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              w-full flex items-center p-3 rounded-lg mb-2 transition-all
              ${
                location.pathname === item.path
                  ? `bg-rose-100 dark:text-rose-700 dark:font-bold text-rose-700 ${DarkModeClasses.text.primary} ${DarkModeClasses.background.tertiary}`
                  : `hover:bg-rose-100/30  dark:text-gray-100 transition-all`
              }
            `}
          >
            <span
              className={`mr-2 transition-all duration-300 
              ${
                location.pathname === item.path
                  ? `dark:text-rose-600`
                  : `dark:text-rose-300 hover:text-rose-600`
              }
            `}
            >
              {item.icon}
            </span>

            <span className="ml-3">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
