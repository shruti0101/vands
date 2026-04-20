"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Construction Contractor",
    text: "We purchased Airless Painting Machines from Vands Engineering Solutions for our infrastructure projects, and the results have been outstanding.",
  },
  {
    name: "Sunita Verma",
    role: "Furniture Manufacturer",
    text: "Vands’ Airless Paint Sprayers have completely transformed our finishing process. Smooth, consistent, and time-saving.",
  },
  {
    name: "Arjun Mehta",
    role: "Industrial Fabricator",
    text: "The Shot Blasting and Metalizing equipment is top-notch. Durable, precise, and extremely effective.",
  },
  {
    name: "Priya Sharma",
    role: "Automotive Workshop Owner",
    text: "Flawless, professional coating every time. Their team helped us choose the right machine easily.",
  },
  {
    name: "Rohit Singh",
    role: "Construction & Steel Fabrication",
    text: "Reliable partner for industrial projects. High-quality machines with excellent after-sales support.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-8 md:py-24 bg-gradient-to-b from-[#FFFAF1] to-[#FDF4E8]">

      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Heading */}
        <div className="text-center mb-5 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Why Clients Choose Us
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white/80 backdrop-blur-lg p-8 rounded-3xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 h-full">

                {/* Quote */}
                <Quote className="w-8 h-8 text-red-500 mb-4 opacity-70" />

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  "{item.text}"
                </p>

                {/* Name */}
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {item.role}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}