import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
   const [toasts, setToasts] = useState([]);

   const addToast = (message, type = 'info', duration = 3000) => {
     const id = Math.random().toString(36).substr(2, 9);
     const newToast = { id, message, type };
     
     setToasts((currentToasts) => [...currentToasts, newToast]);

     setTimeout(() => {
       setToasts((currentToasts) => 
          currentToasts.filter((toast) => toast.id !== id)
       );
     }, duration);

     return id;
   };

   const removeToast = (id) => {
     setToasts((currentToasts) =>
        currentToasts.filter((toast) => toast.id !== id)
     );
   };

   return (
     <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
       {children}
     </ToastContext.Provider>
   );
};

export const useToast = () => {
   const context = useContext(ToastContext);
   if (!context) {
     throw new Error('useToast must be used within a ToastProvider');
   }
   return context;
};

export default ToastProvider;