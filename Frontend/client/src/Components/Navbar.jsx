import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";
import DarkModeClasses from "./DarkMode";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the user is logged in

  const location = useLocation();

  // Links to display before login
  const beforeLoginLinks = [
    { to: "/classesPage", text: "Classes" },
    // { to: "/blogPage", text: "Blog" },
    { to: "/about", text: "About" },
    { to: "/teachers", text: "Teachers" },
    { to: "/contactUs", text: "Contact Us" },
    {
      to: "/authPage",
      text: "Try for free",
      className: "btn-all text-white px-4 py-2 rounded-md button-hover",
    },
  ];

  if (location.pathname.includes("/yogadashboard")) {
    return null;
  }

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-50 ${DarkModeClasses.background.primary}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              YogaLife
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {beforeLoginLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className={`text-gray-600 hover:text-indigo-600 ${
                  DarkModeClasses.text.primary
                } ${link.className || ""}`}
              >
                {link.text}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-500" />
              ) : (
                <Moon className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${DarkModeClasses.background.secondary} ${DarkModeClasses.text.primary}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {beforeLoginLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className={`block px-3 py-2 text-gray-600 hover:text-indigo-600 ${
                    link.className || ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
