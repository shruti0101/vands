"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 mt-30">

      {/* HERO SECTION */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Us – Vandas Engineering
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Airless Painting Machine Manufacturer & Industrial Equipment Supplier
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed">
          Vands Engineering Solutions is a trusted Airless Painting Machine Manufacturer, supplier, and wholesaler with over 11 years of industry experience. We specialize in providing high-performance equipment designed for industrial painting and surface preparation applications. Our product range includes Airless Painting Machines, Airless Paint Sprayers, Shot Blasting Machines, Sand Blasting Machines, and Metalizing Equipment, making us a complete solution provider for various industries.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          Our focus is on delivering quality-driven products that ensure durability, efficiency, and consistent performance. Every Airless Painting Machine is engineered using advanced technology and high-grade components to provide smooth and uniform coating with minimal paint wastage. Our machines are widely used in construction, automotive, fabrication, and heavy industries, helping businesses improve productivity and achieve professional results.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          As a reliable Airless Painting Machine Wholesaler, we are committed to offering competitive pricing, timely delivery, and strong after-sales support. We work closely with our clients to understand their requirements and provide customized solutions that match their specific applications. At Vands Engineering Solutions, our goal is to build long-term relationships by delivering dependable products and excellent service.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              Our mission at Vands Engineering Solutions is to deliver high-quality, durable, and performance-driven Airless Painting Machines along with advanced surface preparation equipment that meet the diverse requirements of modern industries. We aim to enhance operational efficiency, reduce downtime, and provide cost-effective solutions that help our clients achieve superior finishing results. By focusing on innovation, precision engineering, and strict quality standards, we strive to offer products that not only meet but exceed customer expectations. Our commitment also extends to providing reliable support and building long-term relationships based on trust, transparency, and consistent performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Our Vision</h2>
            <p className="leading-relaxed">
              Our vision is to establish ourselves as a leading and trusted Airless Painting Machine Manufacturer in the industry by continuously improving our products, adopting advanced technologies, and expanding our capabilities. We aspire to become a preferred choice for businesses across construction, automotive, fabrication, and industrial sectors by delivering dependable and efficient solutions. Through continuous growth, customer-centric approach, and a focus on quality excellence, we aim to set new benchmarks in the field of painting and surface preparation equipment while creating lasting value for our clients.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCT EXPERTISE */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Our Product Expertise
        </h2>

        <p className="text-center max-w-3xl mx-auto mb-10">
          At Vands Engineering Solutions, we offer a complete range of solutions including Airless Painting Machines, Shot Blasting Machines, Sand Blasting Machines, and Metalizing Equipment. Our products are designed for durability, efficiency, and reliable performance, making them suitable for various industrial and surface preparation applications.
        </p>

        {/* PRODUCT SHOWCASE */}
      

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Airless Painting Machine",
              img: "/prods/ejunior.webp",
            },
            {
              name: "GALAXY PLUS Airless Painting Machine",
              img: "/prods/GALAXY PLUS.webp",
            },
            {
              name: "Pneumatic Machine",
              img: "/cat/products/airless-painting-machine/PNEUMATIC70_1.webp",
            },
            {
              name: "Airless Tumblast Shot Blasting Machine",
              img: "/prods/Airless Tumblast Shot Blasting Machine.webp",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg text-center hover:shadow-lg transition bg-white"
            >
              <div className="relative h-60 w-full mb-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <p className="font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Our Commitment
          </h2>
          <p className="text-lg leading-relaxed">
            At Vands Engineering Solutions, we are committed to delivering quality, reliability, and complete customer satisfaction in every product we offer. We focus on providing high-performance Airless Painting Machines and surface preparation equipment that meet industry standards and ensure long-lasting performance. Our commitment extends beyond products, as we strive to offer timely delivery, responsive support, and practical solutions tailored to our clients’ needs. By maintaining consistency in quality and service, we aim to build strong and long-term relationships with our customers.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
          Why Vands Engineering Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "11+ Years of Industry Experience With over a decade of experience, we have developed strong expertise in manufacturing and supplying Airless Painting Machines and surface preparation equipment, ensuring the right solutions for diverse industrial needs.",
            "Wide Product Range We deal in Airless Painting Machines, Shot Blasting Machines, Sand Blasting Machines, and Metalizing Equipment, offering complete solutions under one roof.",
            "High-Quality Products Our machines are built using durable components and modern technology to deliver consistent performance and long service life in demanding conditions.",
            "Competitive Pricing As a reliable Airless Painting Machine Wholesaler, we provide cost-effective pricing suitable for contractors, dealers, and bulk buyers.",
            "After-Sales Support We ensure dependable support and assistance to help maintain smooth operations and long-term machine performance.",
            "Customized Solutions We offer tailored solutions based on specific project requirements to maximize efficiency and productivity.",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl hover:shadow-md transition"
            >
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-14 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get the Best Solution Today
        </h2>
        <p className="mb-6">
          Looking for reliable Airless Painting Machines or surface preparation equipment? Contact Vands Engineering Solutions for expert guidance and the best pricing.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+918882057687" className="bg-white text-red-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
            Call Now 
          </a>

       
          <Link href="/contact" className="bg-black px-6 py-3 rounded hover:bg-gray-800">
            Get Best Price 
          </Link>
        </div>
      </section>

    </div>
  );
}