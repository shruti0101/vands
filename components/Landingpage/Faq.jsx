"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is an Airless Painting Machine?",
    a: "An Airless Painting Machine is a high-pressure paint sprayer designed to provide a smooth, uniform coating on walls, metal surfaces, furniture, and industrial equipment. Unlike traditional spray methods, it delivers paint efficiently with minimal wastage.",
  },
  {
    q: "Why should I choose an Airless Painting Machine?",
    a: "Airless Painting Machines save time, reduce paint wastage, and provide a consistent finish. They are ideal for large-scale industrial, commercial, and construction projects where speed, precision, and durability matter.",
  },
  {
    q: "What products do Vands Engineering Solutions manufacture?",
    a: "We are a leading Airless Painting Machine Manufacturer and supplier of a wide range of equipment, including Airless Paint Sprayers, Shot Blasting Machines, Sand Blasting Machines, Metalizing Equipment, and Airless Painting Machines for various industrial applications.",
  },
  {
    q: "Can I buy Airless Painting Machines in bulk?",
    a: "Yes, as a trusted Airless Painting Machine Wholesaler, we supply machines in bulk to contractors, dealers, and industrial buyers with competitive pricing and reliable delivery.",
  },
  {
    q: "Are Vands’ Airless Painting Machines suitable for heavy-duty use?",
    a: "Absolutely. Our machines are designed for industrial and commercial applications, capable of handling large surfaces, high-viscosity paints, and continuous operations without compromising performance.",
  },
  {
    q: "Do you provide after-sales support for your machines?",
    a: "Yes. We offer complete after-sales support, including technical guidance, installation assistance, maintenance help, and troubleshooting to ensure smooth operation and long-term reliability.",
  },
  {
    q: "Can I get customized Airless Painting Machines?",
    a: "Yes, we provide customized solutions to meet specific project requirements. Our team can help select or modify machines based on your surface type, coating material, and application needs.",
  },
  {
    q: "Where are Vands Engineering Solutions’ products used?",
    a: "Our machines are widely used in construction, infrastructure, automotive, fabrication, steel structures, furniture finishing, and industrial coating applications, providing efficient and professional results in every industry.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-15 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-black">
            Everything you need to know about our machines and services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 
                ${isOpen 
                  ? "bg-white shadow-lg border-red-200" 
                  : "bg-white/70 backdrop-blur border-red-300"
                }`}
              >

                {/* Question */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-gray-900 text-base md:text-lg">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-red-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-black text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}