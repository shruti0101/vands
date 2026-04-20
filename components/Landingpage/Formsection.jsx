"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { categories } from "@/Data";

const Cta = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [requirement, setRequirement] = useState("");

  const Allproducts = categories.flatMap((c)=>c.products)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        platform: "vands engineering Website enquiry form",
        platformEmail: "vandsengg@gmail.com",
        name,
        phone,
        email,
        place: "N/A",
        product: requirement,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Message sent successfully!");
        setLoading(false);

        const whatsappText = `Hi, I am ${name}
Product: ${requirement}
Phone: ${phone}
Email: ${email}

Message:
${message}`;

        const waUrl = `https://wa.me/919990730939?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => window.open(waUrl, "_blank"), 1000);

        setName("");
        setPhone("");
        setEmail("");
        setPlace("");
        setMessage("");
        setRequirement("");
      } else {
        setStatus("❌ Failed to send. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Try later.");
      setLoading(false);
    }
  };

  return (
    <section className="hidden lg:block relative py-6  px-6 md:px-20 bg-[#FFFAF1] overflow-hidden">

      {/* SPLASH BG */}
      <Image
        src="/splash2.png"
        alt="bg"
        width={400}
        height={300}
        className="absolute left-0 top-0  pointer-events-none"
      />

      {/* HEADING */}
      <div className="relative z-10 text-center ">
        <h2 className="text-2xl md:text-5xl font-semibold leading-snug text-gray-900 max-w-4xl mx-auto">
          Upgrade Your Construction Projects with High-Quality Equipment
        </h2>

        <p className="mt-3 text-xl text-black">
          <span className="text-black font-medium">
            Get the Best Deals Today
          </span>
        </p>
      </div>

      {/* GRID */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="hidden md:block">
          <Image
            src="/cat/2.png"
            alt="machine"
            width={1000}
            height={900}
            className="object-cover  drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* FORM */}
       <div className="bg-white rounded-3xl p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-gray-100">

  

  <form onSubmit={handleSubmit} className="space-y-5">

    {/* Name + Phone */}
    <div className="grid md:grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          required
          disabled={loading}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FAAC18] outline-none transition"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          required
          disabled={loading}
          value={phone}
          maxLength={10}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FAAC18] outline-none transition"
        />
      </div>
    </div>

    {/* Location + Product */}
    <div className="grid md:grid-cols-2 gap-5">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">City / Location</label>
        <input
          type="text"
          required
          disabled={loading}
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FAAC18] outline-none transition"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Select Product</label>
        <select
          value={requirement}
          required
          disabled={loading}
          onChange={(e) => setRequirement(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-[#FAAC18] outline-none"
        >
          <option value="">Choose Product</option>
          {Allproducts.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
      <input
        type="email"
        required
        disabled={loading}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FAAC18] outline-none transition"
      />
    </div>

    {/* Message */}
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        rows={4}
        required
        disabled={loading}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FAAC18] outline-none transition resize-none"
      />
    </div>

    {/* Button */}
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-gradient-to-r from-[#FAAC18] to-[#f59e0b] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
    >
      {loading ? "Submitting..." : "Get Free Consultation"}
    </button>

    {/* Status */}
    {status && (
      <p
        className={`text-center text-sm font-medium p-3 rounded ${
          status.startsWith("✅")
            ? "bg-green-50 text-green-700"
            : status.startsWith("❌")
            ? "bg-red-50 text-red-700"
            : "bg-yellow-50 text-yellow-700"
        }`}
      >
        {status}
      </p>
    )}
  </form>
</div>
      </div>
    </section>
  );
};

export default Cta;