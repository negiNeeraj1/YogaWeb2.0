import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    isLoggedIn: !!localStorage.getItem('loggedIn'),
    setIsLoggedIn: (value) => {
        localStorage.setItem('loggedIn', value);
        set({ isLoggedIn: value });
    },
}));