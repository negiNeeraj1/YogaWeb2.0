import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventsPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const events = [
    {
      date: { day: "15", month: "MAR" },
      title: "Yoga Retreat in the Mountains",
      description:
        "A weekend of yoga, meditation, and nature connection in the beautiful mountain setting.",
      details: {
        date: "March 15-17, 2024",
        location: "Mountain Resort",
        price: "$299",
      },
    },
    {
      date: { day: "01", month: "APR" },
      title: "Teacher Training Program",
      description:
        "200-hour Yoga Teacher Training certification program for aspiring teachers.",
      details: {
        date: "April 1 - May 30, 2024",
        location: "Main Studio",
        price: "$2499",
      },
    },
  ];

  return (
    <div className="min-h-screen bgcAll py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600">
            Join us for special workshops and retreats
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="md:flex">
                <div className="md:w-1/6 bg-indigo-600 text-white p-6 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">{event.date.day}</span>
                  <span className="text-xl">{event.date.month}</span>
                </div>
                <div className="p-6 md:w-5/6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {Object.entries(event.details).map(([key, value], idx) => (
                      <div key={idx} className="text-gray-600">
                        <span className="font-semibold">{key}: </span>
                        {value}
                      </div>
                    ))}
                  </div>
                  <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
