"use client";
import React, { useState } from "react";
import axios from "axios";
import { categories } from "@/Data";

export default function Enquiry({ isOpen, onClose }) {
  const products = categories.flatMap((c) => c.products || []);

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const product = form.products.value;
    const message = form.message.value;

    setLoading(true);
    setSuccessMessage("Sending...");

    try {
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        {
          platform: "vands engineering inquiry Form",
          platformEmail: "machinerysbs@gmail.com",
          name,
          phone,
          email,
          place: "N/A",
          product,
          message,
        }
      );

      if (data?.success) {
        setSubmitted(true);
        setSuccessMessage("✅ Submitted successfully!");

        form.reset();

        setTimeout(() => {
          setSubmitted(false);
          onClose(); // ✅ CLOSE FROM PARENT
        }, 3000);
      } else {
        setSuccessMessage("❌ Failed to send.");
      }
    } catch (error) {
      setSuccessMessage("❌ Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]"
      onClick={onClose} // ✅ click outside closes
    >
      <div
        className="relative rounded-3xl shadow-2xl p-8 w-[350px] md:w-[570px] bg-stone-200 text-black"
        onClick={(e) => e.stopPropagation()} // prevent close on inside click
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-3 right-4 text-xl hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-center text-xl md:text-3xl font-semibold">
          Get In Touch With Us
        </h2>

        <div className="w-28 h-[4px] bg-red-600 mx-auto mt-3 mb-6 rounded-full"></div>

        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                disabled={loading}
                className="w-1/2 p-3 border-2 border-black rounded-md"
              />

              <select
                name="products"
                required
                className="w-1/2 p-3 border-2 border-black rounded-md text-sm"
              >
                <option value="">Select Product</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full p-3 border-2 border-black rounded-md"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full p-3 border-2 border-black rounded-md"
            />

            <textarea
              name="message"
              required
              placeholder="Message"
              className="w-full p-3 border-2 border-black rounded-md h-24"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-600 cursor-pointer text-white rounded-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        ) : (
          <p className="text-center font-semibold">{successMessage}</p>
        )}
      </div>
    </div>
  );
}