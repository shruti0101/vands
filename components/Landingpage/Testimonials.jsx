"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "I appreciate their commitment to sustainability by offering eco-friendly food-grade cup lids. As a company striving to reduce our environmental footprint, partnering with them aligns with our values. Their eco-friendly lids not only meet our packaging needs but also contribute to our efforts to promote sustainability.",
    name: "Usha Sirotha",
    img: "/test1.webp", // 👉 put your image in public folder
  },
  {
    text: "Their machines are highly reliable and efficient. We’ve seen a significant improvement in productivity after working with them.",
    name: "Rajesh Kumar",
    img: "/test2.webp",
  },
  {
    text: "Excellent customer service and timely support. We are very happy with their professionalism and quality standards.",
    name: "Anita Sharma",
    img: "/test3.webp",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (

    <>
    
    <section className="relative h-full w-full  bg-[url('/testimonialbg.webp')] bg-cover bg-fixed  bg-center py-16 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-white">Our </span>
          <span className="text-green-400">Testimonial</span>
        </h2>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="italic text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {current.text}
            </p>

            {/* Profile */}
            <div className="flex flex-col items-center">
              <img
                src={current.img}
                alt={current.name}
                className="w-16 h-16 rounded-full border-4 border-[#176BB0] shadow-md mb-2"
              />
              <h4 className="text-lg font-semibold">{current.name}</h4>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-blue-500" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-blue-500" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#176BB0]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>

<section className="w-full h-auto md:h-[300px] relative">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d301208.02472141205!2d77.005206!3d28.617205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f0063ca2143%3A0x983944fd10dfb00e!2sSBS%20Machinery%20Private%20Limited%20%E2%80%93%20Paper%20Cup%20%26%20Paper%20Plate%20Making%20Machine%20Manufacturer%20in%20Delhi%20NCR!5e1!3m2!1sen!2sus!4v1758178730140!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className=" w-full"
  ></iframe>
</section>

    </>
  );
}
