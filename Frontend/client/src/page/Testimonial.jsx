import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DarkModeClasses from "../Components/DarkMode";
import Footer from "../Components/Footer";

const testimonials = [
  {
    text: "Yoga has transformed my energy levels and focus throughout the day. I feel calmer and more grounded after every session!",
    name: "Davy Bryson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    galleryImage:
      "https://media.istockphoto.com/id/924163406/photo/young-woman-doing-cobra-exercise.jpg?s=612x612&w=0&k=20&c=h9nNF3H0eYGIZMTTPy1aGuU8_grk0Hc_caQEU93CU2Y=",
  },
  {
    text: "The mindfulness practices have helped me manage stress better. I'm sleeping better and feeling more balanced.",
    name: "Sarah Chen",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    galleryImage:
      "https://media.istockphoto.com/id/924163406/photo/young-woman-doing-cobra-exercise.jpg?s=612x612&w=0&k=20&c=h9nNF3H0eYGIZMTTPy1aGuU8_grk0Hc_caQEU93CU2Y=",
  },
  {
    text: "I've noticed significant improvements in my flexibility and strength. The instructors are amazing!",
    name: "Michael Rodriguez",
    image:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    galleryImage:
      "https://media.istockphoto.com/id/1219401141/photo/woman-practicing-yoga-in-lotus-position-at-park.jpg?s=612x612&w=0&k=20&c=Bk7HV73FLORtdNrnB9L0MI9tbMLB28W1c5N65bMiPvI=",
  },
  {
    text: "This program has been life-changing. I'm more focused at work and relaxed at home.",
    name: "Emma Thompson",
    image:
      "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    galleryImage:
      "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/617258676985691651/1327b156-8a63-4aab-94ea-1816dde24bd8.jpg",
  },
];

const TestimonialPage = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section
      className={`py-20 ${DarkModeClasses.background.secondary} h-[100vh]`}
      id="testimonial"
    >
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" >
          <span
            className={`${DarkModeClasses.accent.primary} font-semibold tracking-wider`}
          >
            TESTIMONIALS
          </span>
          <h2
            className={`mt-2 text-3xl font-bold ${DarkModeClasses.text.primary}`}
          >
            Once you try it, you can't go back
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8" >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Controller]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`${DarkModeClasses.card} p-8 rounded-xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-30 transform transition-all duration-500 hover:-translate-y-1`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-50"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full relative border-2 border-indigo-500 object-cover"
                        />
                      </div>
                      <blockquote
                        className={`${DarkModeClasses.text.secondary} text-center italic mb-4`}
                      >
                        "{testimonial.text}"
                      </blockquote>
                      <p
                        className={`${DarkModeClasses.accent.primary} font-semibold text-center`}
                      >
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="relative" >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Controller]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              className="gallery-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={testimonial.galleryImage}
                      alt={`${testimonial.name}'s transformation`}
                      className="w-full h-96 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/400/320";
                        e.target.alt = "Placeholder image";
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Footer/>
    </section>
  );
};

export default TestimonialPage;
