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
    <footer className="relative bg-gradient-to-r from-[#001f3f] to-[#002d63] text-white">
      {/* Watermark */}
      <span className="hidden md:flex absolute inset-0 flex items-center justify-center md:text-[8rem] font-extrabold tracking-wide text-white/10 select-none pointer-events-none z-0">
        SBS MACHINERY
      </span>

      {/* Main Footer */}
      <div className="container mx-auto px-5 md:px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-3">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">
            About Us
          </h3>
          <p className="text-md leading-relaxed">
            SBS Machinery Pvt Ltd Is A Delhi Based Reputed Firm Engaged In
            Manufacturing, Importing And Exporting A Comprehensive Range Of{" "}
            <span className="text-cyan-400">
              Paper Cup Making Machine, Bio-degradable Bag Making Machine, Die
              Cutting Machine, Flexo Printing Machine, Non Woven Bag Making
              Machine, Offset Bag Printing Machine, Paper Plate Making Machine
            </span>{" "}
            Etc.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">
            Contact us
          </h3>
          <p className="text-md flex items-start gap-2 mb-3">
            <FaMapMarkerAlt className="mt-1 text-cyan-400" />
            Plot Number 1A 31/19/1 Gali no- 4 Gemini Park Najafgarh Delhi Pin
            Code 110043 Near by:- Metro Station Nangli Sakrawati Exit Gate
            Number 1
          </p>
          <p className="text-sm flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-cyan-400" /> +91-7042039777
          </p>
          <p className="text-sm flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-cyan-400" /> +91-8810570771
          </p>
          <p className="text-sm flex items-center gap-2 mb-4">
            <FaEnvelope className="text-cyan-400" /> machinerysbs@gmail.com
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.youtube.com/@smallbusinesssolution"
              className="p-2 bg-black rounded-full hover:bg-cyan-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/SBS.COMPANY777?mibextid=ZbWKwL"
              className="p-2 bg-black rounded-full hover:bg-cyan-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sbs_manufacturers/?igsh=MTRjNDE4NmVhdmwydQ%3D%3D#"
              className="p-2 bg-black rounded-full hover:bg-cyan-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Main Links */}
        <div>
          <h3 className="text-xl sm:ml-8 font-semibold border-l-2 border-cyan-400 pl-2 mb-4">
            Main Menu
          </h3>
          <ul className="space-y-2 text-md sm:ml-8">
            <li>
              <a href="/about" className="hover:text-cyan-400">
                About us
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-cyan-400">
                Our Products
              </a>
            </li>
            <li>
              <a href="/our-blogs" className="hover:text-cyan-400">
                Our Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400">
                Contact us
              </a>
            </li>
            <li>
              <a href="/termsandcondition" className="hover:text-cyan-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-cyan-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* More Info */}
        <div>
          <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">
            More Information
          </h3>
          <ul className="space-y-2 text-md cursor-pointer">
            <li>
              <a
                href="/categories/paper-cup-making-machine"
                className="hover:text-cyan-400"
              >
                Paper Cup Making Machine
              </a>
            </li>
            <li>
              <a
                href="/categories/paper-die-cutting-machine"
                className="hover:text-cyan-400"
              >
                Paper Die Cutting Machine
              </a>
            </li>
            <li>
              <a
                href="/categories/bio-degradable-bag-making-machine"
                className="hover:text-cyan-400"
              >
                Bio-degradable Bag Making Machine
              </a>
            </li>
            <li>
              <a
                href="/categories/flexo-printing-machine"
                className="hover:text-cyan-400"
              >
                Flexo Printing Machine
              </a>
            </li>
            <li>
              <a
                href="/categories/non-woven-bag-making-machines"
                className="hover:text-cyan-400"
              >
                Non Woven Bag Making Machine
              </a>
            </li>

            <li>
              <a
                href="/categories/paper-plate-making-machine"
                className="hover:text-cyan-400"
              >
                Paper Plate Making Machine
              </a>
            </li>

            <li>
              <a
                href="/categories/offset-printing-machine"
                className="hover:text-cyan-400"
              >
                Offset Bag Printing Machine
              </a>
            </li>
            <li>
              <a
                href="/categories/momo-making-machine"
                className="hover:text-cyan-400"
              >
                Momo Making Machine
              </a>
            </li>
            <li>
              <a
                href="/categories/noodle-making-machine"
                className="hover:text-cyan-400"
              >
                Noodle Making Machine
              </a>
            </li>

            <li>
              <a
                href="/categories/sbs-nail-art-machine"
                className="hover:text-cyan-400"
              >
                Nail Art Machine
              </a>
            </li>
          </ul>
        </div>

        {/* Trust Elite Section */}
        <div className="px-6 items-center md:pb-8">
          <div>
            <h3 className="text-xl font-semibold border-l-2 border-cyan-400 pl-2 mb-4">
              Trust Elite Certificate
            </h3>
            <p className="text-sm leading-relaxed">
              We are proud to present the Trust Elite Certificate of Excellence
              to SBS Machinery Pvt Ltd, recognizing their commitment to
              exceptional customer service, outstanding business practices, and
              a dedication to building trust with their customers.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/TRUST-ELITE.webp"
              alt="Trust Elite"
              className="w-28 h-28 object-contain cursor-pointer hover:scale-105 transition"
              onClick={() => setIsModalOpen(true)}
            />

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="relative">
                  <button
                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ✕
                  </button>
                  <img
                    src="/cert.webp"
                    alt="Trust Elite Full"
                    className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-gray-300 text-center text-sm py-3 px-4 flex flex-col md:flex-row justify-between items-center">
        <p>Copyrights © 2024-25 SBS Machinery Pvt Ltd. All Right Reserved.</p>
        <p>
             Website Designed  By Promozione Branding Pvt. Ltd.{" "}
          <a
            href="https://promozionebranding.com/"
            className="hover:text-cyan-400 underline"
          >
           Website Designing Company.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
