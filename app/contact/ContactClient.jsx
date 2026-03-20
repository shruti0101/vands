"use client";



import { Phone, Mail } from "lucide-react";

import React, { useState } from "react";
import axios from "axios";





export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null, 'success', 'error'

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
    <div>
    

 <section
  style={{ backgroundImage: "url('/contactbg.webp')" }}
  className="w-full h-[50vh] md:h-[75vh] relative bg-cover bg-center"
>
  {/* Overlay (optional for readability) */}
  {/* <div className="absolute inset-0 bg-black/30"></div> */}

 
</section>


      <section className="bg-white py-10 px-6 md:px-20 ">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex bg-[#1CBC9A] text-white p-6 rounded-md shadow-md flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">
                <Phone />
              </span>
              <h3 className="font-bold text-lg">Phone Number</h3>
            </div>
            <p className="text-lg">+91-7042039777</p>
            <p className="text-lg">+91-9953547117</p>
            <p className="text-lg">+91-8527877798</p>
          </div>

          <div className="bg-white border-2 border-[#1CBC9A] text-center p-6 rounded-md shadow-md">
            <div className="flex items-center justify-center space-x-2 mb-2 text-[#0196E3]">
              <span className="text-2xl text-[#1CBC9A]">
                <Mail />
              </span>
              <h3 className="font-bold text-lg text-[#1CBC9A]">Email Address</h3>
            </div>
            <p className="text-gray-800 text-lg">
          
machinerysbs@gmail.com
            </p>
          </div>

          <div className="bg-[#1CBC9A] text-white p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">📍</span>
              <h3 className="font-bold text-lg">Address</h3>
            </div>
            <p className="text-center">
              Plot number 1A 31/19/1 Gali no- 4 gemini park najafgarh delhi pin code 110043 <br />Near  by:- 
              metro station Nangli Sakrawati exit gate number 1
              <br /> Dwarka, New Delhi – 110059
            </p>
          </div>
        </div>



        {/* Form + Map */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Get in Touch with Us
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="border rounded-md px-4 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <input
            type="tel"
            name="phone"
            required
            maxLength={10}
            pattern="[0-9]{10}"
            placeholder="Phone No."
            className="border rounded-md px-4 py-2 w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City / Location"
            className="border rounded-md px-4 py-2 w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={loading}
          />
          <select
            name="requirement"
            className="border rounded-md px-4 py-2 w-full bg-[#1CBC9A] text-white font-semibold"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            disabled={loading}
          >
            <option value="">Select Machine</option>
            <option value="Paper Cup Making Machine">Paper Cup Making Machine</option>
            <option value="Paper Die Cutting Machine">Paper Die Cutting Machine</option>
            <option value="Paper Plate Making Machine">Paper Plate Making Machine</option>
            <option value="Bio-degradable Bag Making Machine">Bio-degradable Bag Making Machine</option>
            <option value="Flexoprinting Machine">Flexoprinting Machine</option>
            <option value="Non Woven Bag Making Machines">Non Woven Bag Making Machines</option>
            <option value="Offset Bag Printing Machine">Offset Bag Printing Machine</option>
          </select>
        </div>

        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="border rounded-md px-4 py-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <textarea
          name="message"
          placeholder="Message for us.."
          rows={4}
          className="border rounded-md px-4 py-2 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#1CBC9A] text-white px-6 py-3 rounded-md font-semibold w-full"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
          <p className="text-green-600 font-semibold mt-2">
            Thank you! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-semibold mt-2">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>

          <div className=" h-[400px]">
         <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d301208.02472141205!2d77.005206!3d28.617205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f0063ca2143%3A0x983944fd10dfb00e!2sSBS%20Machinery%20Private%20Limited%20%E2%80%93%20Paper%20Cup%20%26%20Paper%20Plate%20Making%20Machine%20Manufacturer%20in%20Delhi%20NCR!5e1!3m2!1sen!2sus!4v1758178730140!5m2!1sen!2sus"
    width="600px"
    height="450px"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-md w-full h-full"
  ></iframe>
          </div>
        </div>
      </section>

  
    </div>
  );
}
