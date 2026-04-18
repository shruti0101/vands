"use client";
import { categories } from "@/Data";
import React, { useState } from "react";

const Inquiryform = ({ setOpen }) => {


  const products=categories.flatMap((c)=>c.products)

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => setOpen(false);

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
      
      console.log({ name, phone, email, product, message });

      setSubmitted(true);
      setSuccessMessage("✅ Your enquiry has been submitted successfully!");

      form.reset();

      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setSuccessMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed border inset-0 flex items-center justify-center bg-black/70 z-50">
  <div className="relative rounded-3xl shadow-2xl p-8 w-[350px] md:w-[570px] bg-white text-black">

    <div className="relative z-10">

      {/* CLOSE BUTTON */}
      <button
        className="absolute cursor-pointer top-0 right-0 text-black hover:text-red-500 text-xl"
        onClick={handleClose}
      >
        ✕
      </button>

      <h2 className="text-center text-black text-xl md:text-3xl font-semibold">
        Get In Touch With Us
      </h2>

      <div className="w-28 h-[4px] bg-cyan-600 mx-auto mt-3 mb-8 rounded-full"></div>

      {!submitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div className="flex gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={loading}
              className="w-1/2 p-3 placeholder-black rounded-md text-black border-2 border-black bg-white focus:outline-none focus:border-cyan-600"
            />

            <select
              name="products"
              required
              disabled={loading}
              defaultValue=""
              className="w-1/2 p-3 rounded-md text-black text-sm border-2 border-black focus:outline-none focus:border-cyan-600 bg-white"
            >
              <option value="" disabled className="text-black">Select Product</option>
              {products.map((p) => (
                <option key={p.name} value={p.name} className="text-black">{p.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center rounded-md border-2 border-black overflow-hidden focus-within:border-cyan-600">
            <span className="ml-2">🇮🇳</span>
            <input
              type="tel"
              name="phone"
              maxLength={10}
              minLength={10}
              required
              disabled={loading}
              placeholder="08123456789"
              className="w-full p-3 bg-white text-black placeholder-black focus:outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            required
            disabled={loading}
            placeholder="Email"
            className="w-full p-3 rounded-md border-2 border-black bg-white text-black placeholder-black focus:outline-none focus:border-cyan-600"
          />

          <textarea
            name="message"
            required
            disabled={loading}
            placeholder="Message"
            className="w-full p-3 rounded-md border-2 border-black bg-white text-black placeholder-black h-28 resize-none focus:outline-none focus:border-cyan-600"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] rounded-md font-semibold text-white shadow-md"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <p className="text-center text-black font-semibold text-lg">
          {successMessage}
        </p>
      )}
    </div>
  </div>
</div>
  );
};

export default Inquiryform;