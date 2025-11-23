// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    
    const savedUser = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("loggedIn");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("user");
  });

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("loggedIn" , true);

  };

  const updateUser = (newUserData) => {
    const updatedUser = { ...user, ...newUserData };
    
    setUser(updatedUser);
    
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Remove user from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("loggedIn");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout ,updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
