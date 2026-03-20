"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const Cta = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [requirement, setRequirement] = useState("");

  const categories = [
    { id: "bar-processing-machines", name: "Bar Processing Machines" },
    { id: "concrete-mixers", name: "Concrete Mixers" },
    { id: "anti-fog-cannon-machine", name: "Anti-Fog Cannon Machine" },
    { id: "lab-testing-equipment", name: "Lab Testing Equipment" },
    { id: "material-lifting-equipment", name: "Material Lifting Equipment" },
    { id: "safety-instrument", name: "Safety Instruments" },
    { id: "ride-on-roller-plate-compactor", name: "RIDE ON ROLLER / PLATE COMPACTOR" },
    { id: "surveying-instrument", name: "Surveying Instruments" },
    { id: "trolley-vibrator", name: "Trolley Vibrator" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        platform: "Shree Shakti Infratech Website",
        platformEmail: "shreeshaktiinfratech@gmail.com",
        name,
        phone,
        email,
            place:"N/A",
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
Place: ${place}

Message:
${message}`;

        const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

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
    <section className="relative bg-white py-3 md:py-10 px-4 md:px-12">
      <Image
        src="/home/ctagif.gif"
        alt="CTA Animation"
        width={300}
        height={200}
        className="hidden md:block absolute -left-20 top-0"
        unoptimized
      />

      <div className="flex items-center justify-center text-center mb-8">
        <p className="max-w-4xl font-semibold text-lg md:text-3xl leading-snug">
          Apne Construction Projects ko Upgrade karein – High-Quality Bar
          Bending Machine aur Construction Equipment ke saath!
          <br />
          <span className="text-[#FAAC18]">
            Aaj hi Contact karein aur Best Deals paayein
          </span>
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="absolute -bottom-23 -left-5 md:relative">
          <Image
            src="/home/ctaimg1.webp"
            alt="Construction Equipment"
            width={500}
            height={400}
            className="hidden md:block object-contain"
          />
        </div>

        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-3 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-md p-3"
              />
              <input
                type="tel"
                placeholder="Phone No."
                required
                disabled={loading}
                value={phone}
                maxLength={10}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded-md p-3"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City / Location"
                required
                disabled={loading}
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="border rounded-md p-3"
              />
              <select
                value={requirement}
                required
                disabled={loading}
                onChange={(e) => setRequirement(e.target.value)}
                className="bg-[#FAAC18] rounded-md p-3"
              >
                <option value="">Select Product</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="email"
              placeholder="Email Address"
              required
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-3 w-full"
            />

            <textarea
              rows={4}
              placeholder="Message for us.."
              disabled={loading}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-md p-3 w-full"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FAAC18] text-white font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
            >
              {loading ? "Submitting..." : "Get Free Consultation Today!"}
            </button>

            {status && (
              <p
                className={`text-center mt-3 text-sm font-medium p-3 rounded ${
                  status.startsWith("✅")
                    ? "bg-green-100 text-green-800"
                    : status.startsWith("❌")
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
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
