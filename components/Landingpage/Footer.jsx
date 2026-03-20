"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="relative bg-[#0B1C2C] text-white overflow-hidden">

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-orange-400/10 pointer-events-none"></div>

      {/* Watermark */}
      <span className="hidden md:flex absolute animate-pulse inset-0 items-center justify-center text-[7rem] font-extrabold tracking-widest text-white/10 select-none">
        VANDS ENGINEERING
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-l-2 border-red-500 pl-3">
            About Us
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Vands Engineering Solutions is a trusted manufacturer of high-performance
            industrial machines including{" "}
            <span className="text-red-400 font-medium">
              Airless Painting Machines, Blasting Equipment & Surface Solutions
            </span>
            . We deliver durability, efficiency, and precision for modern industries.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-l-2 border-red-500 pl-3">
            Contact
          </h3>

          <p className="flex gap-2 text-sm text-gray-300 mb-3">
            <FaMapMarkerAlt className="text-red-400 mt-1" />
            Delhi, India – Industrial Equipment Supplier
          </p>

          <p className="flex items-center gap-2 text-sm mb-2 hover:text-red-400 transition">
            <FaPhoneAlt className="text-red-400" /> +91-8826544443
          </p>

          <p className="flex items-center gap-2 text-sm mb-2 hover:text-red-400 transition">
            <FaPhoneAlt className="text-red-400" /> +91-9654243444
          </p>

          <p className="flex items-center gap-2 text-sm mb-4 hover:text-red-400 transition">
            <FaEnvelope className="text-red-400" /> info@vands.com
          </p>

          {/* Social */}
          <div className="flex gap-3">
            {[FaYoutube, FaFacebookF, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="p-3 rounded-full bg-white/5 backdrop-blur-md hover:bg-red-500 transition cursor-pointer"
              >
                <Icon className="text-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-l-2 border-red-500 pl-3">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "About Us",
              "Products",
              "Blogs",
              "Contact",
              "Privacy Policy",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-red-400 transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-l-2 border-red-500 pl-3">
            Our Products
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "Airless Painting Machines",
              "Shot Blasting Machines",
              "Sand Blasting Machines",
              "Metalizing Equipment",
              "Industrial Coating Solutions",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-red-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Certificate */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-l-2 border-red-500 pl-3">
            Certification
          </h3>

          <p className="text-sm text-gray-300 mb-4">
            Recognized for excellence in manufacturing, service quality, and
            customer satisfaction.
          </p>

          <div className="flex justify-start">
            <img
              src="/TRUST-ELITE.webp"
              alt="Certificate"
              className="w-28 h-28 object-contain cursor-pointer hover:scale-110 transition duration-300"
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
              <button
                className="absolute top-6 right-6 text-white text-2xl"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
              <img
                src="/cert.webp"
                alt="Full Certificate"
                className="max-w-[90vw] max-h-[90vh] rounded-xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-gray-400 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Vands Engineering Solutions. All Rights Reserved.</p>

        <p className="mt-2 md:mt-0">
          Designed by{" "}
          <span className="text-red-400 font-medium">
            Promozione Branding Pvt. Ltd.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;