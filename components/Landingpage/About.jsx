"use client";

import Image from "next/image";
import Link from "next/link";
export default function AboutSection() {
  return (
    <section className="relative py-10 px-6 md:px-23 overflow-hidden">
         <div className="absolute w-[120%] top-0 h-[100%] -z-10">
            <Image
              src="/bgshape.png" // <-- replace with your generated soft red image
              alt="background shape"
              fill
              className="object-cover hidden md:block"
            />
          </div>
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl  font-oswald font-bold text-gray-900 leading-tight mb-4">
            Vands Engineering Solutions
          </h1>

          <h2 className="text-lg md:text-4xl font-semibold text-red-500 mb-6">
            Leading Airless Painting Machine Manufacturer & Wholesaler
          </h2>

          <p className="text-black  text-lg mb-4 leading-relaxed">
            At Vands Engineering Solutions, we are recognized as a premier Airless Painting Machine Manufacturer, offering cutting-edge solutions designed to deliver superior performance, efficiency, and durability.
          </p>

          <p className="text-black text-lg mb-4 leading-relaxed">
            With years of industry expertise, we have established ourselves as a reliable Airless Painting Machine Wholesaler and supplier, catering to diverse industrial, commercial, and construction needs across the market.
          </p>

          <p className="text-black text-lg leading-relaxed">
            Our advanced Airless Painting Machines are engineered to provide smooth, uniform coating with high transfer efficiency, reducing paint wastage and ensuring a professional finish every time.
          </p>
<div className="mt-4 flex flex-wrap gap-4">

          {/* CTA */}
          <Link href="/about" className=" px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition cursor-pointer">
            Explore Products
          </Link>
</div>
        </div>

        {/* RIGHT IMAGE + BACKGROUND */}
        <div className="relative flex justify-center items-center">
          
          {/* BACKGROUND SHAPE (use your generated image here) */}
       

          {/* PRODUCT IMAGE */}
        <div className="relative z-10 float-animation">
  <Image
    src="/prod2.webp"
    alt="Airless Painting Machine"
    width={480}
    height={420}
    className="object-cover"
  />
</div>
        </div>
      </div>
    </section>
  );
}