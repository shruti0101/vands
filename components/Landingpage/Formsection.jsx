"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const product = form.products.value;
    const message = form.message.value;
    const place = form.place.value;

    setLoading(true);
    setSuccessMessage("Sending...");

    try {
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        {
          platform: "SBS Machinery Enquiry Form",
          platformEmail: "machinerysbs@gmail.com",
          name,
          phone,
          email,
          place,
          product,
          message,
        }
      );

      if (data?.success) {
        setSubmitted(true);
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Place: ${place}
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

        form.reset();
      } else {
        setSuccessMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-12 px-4 bg-[#E5F3FE]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/about/Paper-Die-Cutting-Machine.webp"
            alt="Enquiry illustration"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="relative w-full max-w-lg border border-white/30 p-8 rounded-md shadow-lg">
          <div className="absolute inset-0 bg-blue-900/90 rounded-md"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-serif text-white text-center mb-8">
              Quick Enquiry
            </h2>

            {!submitted ? (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="products"
                    required
                    disabled={loading}
                    defaultValue=""
                    className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                  >
                    <option value="" disabled>Select Machine</option>
                    <option value="Paper Cup Making Machine">Paper Cup Making Machine</option>
                    <option value="Paper Die Cutting Machine">Paper Die Cutting Machine</option>
                    <option value="Paper Plate Making Machine">Paper Plate Making Machine</option>
                    <option value="Bio-degradable Bag Making Machine">Bio-degradable Bag Making Machine</option>
                    <option value="Flexoprinting Machine">Flexoprinting Machine</option>
                    <option value="Non Woven Bag Making Machines">Non Woven Bag Making Machines</option>
                    <option value="Offset Bag Printing Machine">Offset Bag Printing Machine</option>
                    <option value="Momo Making Machine">Momo Making Machine</option>
                    <option value="Noodle Making Machine">Noodle Making Machine</option>
                  </select>

                  <input
                    type="text"
                    name="name"
                    required
                    disabled={loading}
                    placeholder="Name"
                    className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center border border-gray-300 rounded-sm bg-white">
                    <span className="px-2">🇮🇳</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      disabled={loading}
                      maxLength={10}
                      minLength={10}
                      placeholder="08123456789"
                      className="p-3 flex-1 rounded-sm outline-none bg-transparent"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    required
                    disabled={loading}
                    placeholder="Email"
                    className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                  />
                </div>

                <input
                  type="text"
                  name="place"
                  required
                  disabled={loading}
                  placeholder="Place"
                  className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                />

                <textarea
                  name="message"
                  required
                  disabled={loading}
                  placeholder="Message"
                  rows="4"
                  className="p-3 rounded-sm w-full bg-white text-gray-700 outline-none border border-gray-300"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-sm font-medium transition"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            ) : (
              <p className="text-center text-white font-semibold text-lg">
                {successMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
