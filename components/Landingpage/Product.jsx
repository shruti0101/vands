"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HotProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const products = [
    { name: "Airless Paint Spray Machine", img: "/cat/4.png" },
    { name: "Airless Spray Gun Machine", img: "/cat/1.png" },
    { name: "Wall Putty Spray Machine", img: "/cat/2.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/3.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/5.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/6.png" },
  ];

  return (
    <section className="relative py-16">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/bg-industrial.jpg"
          alt="bg"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-sm text-gray-300 uppercase tracking-widest">
            Our Products
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            Hot Products
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl text-sm">
            Manufacturer, Importer, Wholesaler/Distributor, Service Provider &
            Supplier for Airless Paint Sprayer, Airless Painting Machine,
            Airless Putty Sprayer, Airless Spray Machine.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT BTN */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10
            bg-white/20 backdrop-blur-md border border-white/40
            p-3 rounded-full text-white hover:bg-[#f4a300]
            transition duration-300 shadow-lg"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT BTN */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10
            bg-white/20 backdrop-blur-md border border-white/40
            p-3 rounded-full text-white hover:bg-[#f4a300]
            transition duration-300 shadow-lg"
          >
            <ChevronRight />
          </button>

          {/* SCROLL */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {products.map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] text-center group transition duration-500 hover:-translate-y-2"
              >
                {/* OUTER BORDER */}
                <div className="border-2 border-dashed border-white/70 p-2 group-hover:border-[#f4a300] transition">

                  {/* CARD */}
                  <div className="bg-white p-6 border-[3px] border-[#f4a300] shadow-xl">

                    <div className="h-[230px] flex items-center justify-center overflow-hidden">

                      <Image
                        src={item.img}
                        alt={item.name}
                        width={600}
                        height={380}
                        className="object-contain transition duration-700
                        group-hover:scale-110 float-slow"
                      />

                    </div>

                  </div>
                </div>

                {/* TEXT */}
                <h3 className="text-white mt-4 text-sm font-medium">
                  {item.name}
                </h3>

                {/* LINE */}
                <div className="w-10 h-[2px] bg-[#f4a300] mx-auto my-2"></div>

                {/* CTA */}
                <button className="text-white text-sm font-semibold hover:text-[#f4a300] transition">
                  Inquiry Now
                </button>

              </div>
            ))}
          </div>
        </div>
      </div>

   

    </section>
  );
};

export default HotProducts;