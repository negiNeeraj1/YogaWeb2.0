import React, { useState, useEffect } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const FlipNumber = ({ number, previous }) => (
  <div className="relative h-24 w-16 bg-gray-800 rounded-lg overflow-hidden">
    {/* Current number */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-4xl font-bold text-white">{number}</span>
    </div>

    {/* Flipping animation */}
    <div
      className="absolute inset-0 origin-bottom animate-flip-down bg-gray-700"
      key={number}
    >
      <div className="h-full w-full flex items-center justify-center">
        <span className="text-4xl font-bold text-white">{previous}</span>
      </div>
    </div>
  </div>
);

const TimeUnit = ({ value, label }) => {
  const [previousValue, setPreviousValue] = useState(value);

  useEffect(() => {
    if (value !== previousValue) {
      setPreviousValue(value);
    }
  }, [value]);

  const digits = value.toString().padStart(2, "0");
  const previousDigits = previousValue.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <FlipNumber number={digits[0]} previous={previousDigits[0]} />
        <FlipNumber number={digits[1]} previous={previousDigits[1]} />
      </div>
      <span className="text-white/80 text-lg">{label}</span>
    </div>
  );
};

const ComingSoonPage = () => {
  const [time, setTime] = useState({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds };
        }

        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 };
        }

        const newHours = prev.hours - 1;
        if (newHours >= 0) {
          return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        }

        const newDays = prev.days - 1;
        if (newDays >= 0) {
          return { days: newDays, hours: 23, minutes: 59, seconds: 59 };
        }

        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-12 max-w-4xl mx-auto">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Zen Flow Yoga
        </h1>

        <p className="text-3xl font-light text-gray-300">
          A New Era of Wellness is Coming
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <TimeUnit value={time.days} label="Days" />
          <TimeUnit value={time.hours} label="Hours" />
          <TimeUnit value={time.minutes} label="Minutes" />
          <TimeUnit value={time.seconds} label="Seconds" />
        </div>

        <div className="max-w-xl mx-auto space-y-6">
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
            <input
              type="email"
              placeholder="Enter your email for updates"
              className="w-full px-6 py-4 mb-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-purple-500"
            />
            <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all duration-300">
              Notify Me
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          {[Instagram, Facebook, Twitter].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-110 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-white" />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes flip-down {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(-180deg);
          }
        }
        .animate-flip-down {
          animation: flip-down 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
          backface-visibility: hidden;
          transform-origin: top;
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;
