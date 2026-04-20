"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { categories } from "@/Data";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        platform: "SBS Machinery Popup Form",
        platformEmail: "machinerysbs@gmail.com",
        name,
        phone,
        email,
        product,
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Message: ${message}
Contact: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/917042039777?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 1000);

        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const products = categories.flatMap((c) => c.products || []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
      
      <div
        className="relative rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.5)] p-10 max-w-sm md:max-w-2xl w-[95%] text-white overflow-hidden border border-white/20"
        style={{
          backgroundImage: "url(/prod3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10">
          {/* Close button */}
          <button
            className="absolute cursor-pointer top-4 right-4 text-white hover:text-red-400 text-xl transition"
            onClick={handleClose}
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-center text-white text-2xl md:text-3xl font-bold tracking-wide">
            Get In Touch With Us
          </h2>
          <div className="w-28 h-[4px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-3 mb-8 rounded-full"></div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-1/2 p-3 rounded-lg text-white text-sm bg-white/10 border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />

              <select
                name="products"
                required
                className="w-1/2 p-3 rounded-lg text-white text-sm bg-white/10 border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" className="text-black">Select Product</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name} className="text-black">
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-lg border border-white/30 overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
              <img
                src="/flag.webp"
                alt="flag"
                className="w-6 h-4 ml-2 object-cover"
              />
              <span className="text-lg ml-1">🇮🇳</span>
              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="081234 56789"
                className="w-full bg-transparent p-3 text-white text-sm focus:outline-none"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg text-white text-sm bg-white/10 border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <textarea
              name="message"
              placeholder="Message"
              className="w-full bg-white/10 backdrop-blur-md p-3 rounded-lg text-white text-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 h-28 resize-none"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] transition-all duration-300 rounded-lg font-semibold text-white text-sm shadow-lg"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`text-center text-sm mt-2 font-medium ${
                  status.startsWith("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}