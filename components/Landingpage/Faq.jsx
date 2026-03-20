"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // install lucide-react if not already

const faqs = [
  {
    q: "What types of paper plate-making machines do you manufacture in Delhi NCR?",
    a: "We manufacture a variety of paper plate-making machines for both small-scale and large-scale production. Our machines are designed to cater to industries in Delhi NCR, New Delhi, and across India. Whether you need a machine for small paper plates or large sizes, we provide a range of options suited to your specific requirements."
  },
  {
    q: "Do you offer biodegradable bag-making machines for industries in Delhi NCR?",
    a: "Yes, we offer biodegradable bag-making machines designed to support industries in Delhi, NCR, and other regions of India. These machines help businesses produce eco-friendly products that meet the growing demand for sustainable packaging solutions."
  },
  {
    q: "How can I get a customized paper die-cutting machine in Delhi NCR?",
    a: "At SBS Machinery, we offer customized paper die-cutting machines based on your specific needs. Whether you’re operating in Delhi NCR or any other part of India, we will design and manufacture the perfect machine for your business. Simply contact us for more details."
  },
  {
    q: "What is the lead time for paper cup-making machine orders in Delhi NCR and India?",
    a: "The lead time for paper cup-making machines typically ranges from X to Y weeks, depending on the size of the order and any specific customizations. For businesses in Delhi NCR and India, we ensure timely delivery so you can get your operations up and running without delay."
  },
  {
    q: "Can SBS Machinery assist with the installation and maintenance of machines in Delhi NCR?",
    a: "Yes, we provide complete installation and ongoing maintenance services for all our machines in Delhi NCR, Gurgaon, Noida, and across India. Our team offers hands-on support, ensuring that your machines perform optimally for years to come."
  },
  {
    q: "Do you offer technical support for machines in Delhi NCR?",
    a: "Yes, we provide lifetime on-call technical support for all our machines. If you encounter technical issues with our paper plate-making machines or any other equipment, we are here to assist you with troubleshooting and quick solutions."
  },
  {
    q: "Are your machines certified for quality and safety in Delhi NCR and India?",
    a: "Yes, all our machines, including paper cup-making machines and biodegradable bag-making machines, are manufactured according to international quality and safety standards. We adhere to rigorous quality control processes, ensuring that our products meet the regulatory requirements in Delhi NCR and across India."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#0075C9]">
        Frequently Asked Questions
      </h2>

      {/* FAQ Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-5 px-6 text-lg font-medium text-gray-900 hover:bg-blue-50 transition"
            >
              <span className="flex-1 text-xl text-left">
                {index + 1}. {faq.q}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#0075C9] transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer with smooth animation */}
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-base leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
