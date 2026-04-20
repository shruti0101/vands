"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const formData = {
        platform: "SBS Machinery Contact Form",
        platformEmail: "machinerysbs@gmail.com",
        name,
        phone,
        email,
        city,
        product: requirement,
        message,
        place: city || "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("success");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${requirement}
City: ${city}
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
        setCity("");
        setRequirement("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section
        style={{ backgroundImage: "url('/contactbg.jpg')" }}
        className="w-full h-[60vh] mt-30 relative bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Let’s connect and discuss your requirements. We’re here to help you choose the right machinery.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="mt-8 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
            <Phone className="mx-auto text-[#C8102E] mb-3" size={32} />
            <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
            <p>+91-7042039777</p>
            <p>+91-9953547117</p>
            <p>+91-8527877798</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
            <Mail className="mx-auto text-[#C8102E] mb-3" size={32} />
            <h3 className="font-semibold text-lg mb-2">Email Address</h3>
            <p>machinerysbs@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
            <MapPin className="mx-auto text-[#C8102E] mb-3" size={32} />
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-sm text-gray-600">
              Plot number 1A 31/19/1 Gali no- 4 gemini park najafgarh delhi pin code 110043
              <br />Near by:- metro station Nangli Sakrawati exit gate number 1
              <br />Dwarka, New Delhi – 110059
            </p>
          </div>

        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#C8102E] outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#C8102E] outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#C8102E] outline-none"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={loading}
                />

                <select
                  className="border rounded-lg px-4 py-3 w-full"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  disabled={loading}
                >
                  <option value="">Select Machine</option>
                  <option>Paper Cup Making Machine</option>
                  <option>Paper Die Cutting Machine</option>
                  <option>Paper Plate Making Machine</option>
                  <option>Bio-degradable Bag Making Machine</option>
                  <option>Flexoprinting Machine</option>
                  <option>Non Woven Bag Making Machines</option>
                  <option>Offset Bag Printing Machine</option>
                </select>
              </div>

              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#C8102E] outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />

              <textarea
                placeholder="Message"
                rows={4}
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#C8102E] outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C8102E] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600">Message sent successfully</p>
              )}
              {status === "error" && (
                <p className="text-red-600">Something went wrong</p>
              )}

            </form>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d301208.02472141205!2d77.005206!3d28.617205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f0063ca2143%3A0x983944fd10dfb00e!2sSBS%20Machinery%20Private%20Limited%20%E2%80%93%20Paper%20Cup%20%26%20Paper%20Plate%20Making%20Machine%20Manufacturer%20in%20Delhi%20NCR!5e1!3m2!1sen!2sus!4v1758178730140!5m2!1sen!2sus"
              className="w-full h-full min-h-[500px] border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
