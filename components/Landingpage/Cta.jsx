



"use client";
import { ArrowRight } from "lucide-react";


export default function HighQualityCTA() {
  return (
    <section className="w-full mx-auto overflow-hidden rounded-xl">
      
      <div className="relative bg-red-900 py-8 sm:py-10 md:py-12 flex items-center">
        
        {/* Dot Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20px 20px, white 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* CONTENT WRAPPER */}
        <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          
          {/* TEXT */}
          <div className=" text-center md:text-left">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
             Get the Best Airless Painting Machine for Your Needs
            </h2>

            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  Looking for reliable and high-performance equipment? Vands Engineering
         Solutions offers a complete range of Airless Painting Machines, Shot         Blasting Machines, Sand Blasting Machines, and Metalizing Equipment       designed to deliver efficiency and long-lasting performance.
            </p>
          </div>


<div className="flex flex-col gap-2">
 {/* BUTTON */}
          <a href="https://wa.me/919990730939">
            <button className="group flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 sm:py-4 rounded-xl font-medium whitespace-nowrap animate-pulse">
              
              <span>Whatsapp Us Now</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </a>


              <a href="https://wa.me/919990730939">
            <button className="group flex items-center justify-center gap-2  bg-white transition text-black px-8 py-3 sm:py-4 rounded-xl font-medium whitespace-nowrap animate-pulse">
              
              <span>Call Us Now</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </a>

</div>
         

        </div>
      </div>
    </section>
  );
}