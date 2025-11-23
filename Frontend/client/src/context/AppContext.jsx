import React, { createContext, useState, useEffect, useContext } from 'react';
import { EnrolledClasses } from '../api/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [parsedUser, setParsedUser] = useState(null);

  const updateEnrolledClasses = async (userId) => {
    try {
      const response = await EnrolledClasses(userId);
      setEnrolledClasses(response.data);
    } catch (error) {
      console.error("Error fetching enrolled classes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      setParsedUser(parsedUser);
      updateEnrolledClasses(parsedUser.id);
    }
  }, []);

  return (
    <AppContext.Provider value={{ enrolledClasses, updateEnrolledClasses, isLoading, parsedUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);