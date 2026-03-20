"use client";
import React from "react";
import Image from "next/image";
const Whoweare = () => {
  return (
    <>
    
    <section
      className="relative bg-cover bg-center h-[67vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url(/bgform.png)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Get the Best Airless Painting Machine for Your Needs
        </h2>

        <p className="text-sm md:text-lg text-white mb-6">
          Looking for reliable and high-performance equipment? Vands Engineering
          Solutions offers a complete range of Airless Painting Machines, Shot
          Blasting Machines, Sand Blasting Machines, and Metalizing Equipment
          designed to deliver efficiency and long-lasting performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition">
            Call for Best Price
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-semibold transition">
            Get a Quote
          </button>

          <button className="underline hover:text-orange-400 transition">
            Explore More →
          </button>
        </div>

      </div>
    </section>

<section className="relative w-full h-screen">
  <Image
    src="/Airless-Spraying.gif"
    alt="Airless Painting Machine Demo"
    fill
    unoptimized
    className="object-cover"
    priority
  />
</section>
    </>
  );
};

export default Whoweare;