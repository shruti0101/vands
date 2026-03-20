"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Productcategory = () => {
  const categories = [
    {
      name: "Airless Painting Machine",
      products: 30,
      img: "/cat/airlesspainting.png",
      hoverImg: "/cat/1.png",
      link: "/productsg",
    },
    {
      name: "Wall Putty Spray Machine",
      products: 24,
      img: "/cat/wallputty-removebg-preview.png",
      hoverImg: "/cat/airless-wall-putty-sprayer-machine-500x500.webp",
      link: "/productsr",
    },
    {
      name: "Airless Spray Painting Machine",
      products: 21,
      img: "/cat/airlessspray-removebg-preview.png",
      hoverImg: "/cat/3.png",
      link: "/productst",
    },
    {
      name: "Airless Paint Spray Machine",
      products: 26,
      img: "/cat/airlesspaintspray-removebg-preview.png",
      hoverImg: "/cat/6.png",
      link: "/productst",
    },
    {
      name: "Kerb Painting Machine",
      products: 37,
      img: "/cat/kerb-removebg-preview.png",
      hoverImg: "/cat/2.png",
      link: "/productst",
    },
    {
      name: "Wall Painting Machine",
      products: 17,
      img: "/cat/wallpainting-removebg-preview.png",
      hoverImg: "/cat/5.png",
      link: "/productst",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null); // ✅ FIXED

  return (
    <>
      <section className="bg-[#FFFAF1]">
        <div className="w-full mx-auto px-6 md:px-23 py-16">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl max-w-4xl font-semibold tracking-wide">
                <span className="bg-red-600 bg-clip-text text-transparent leading-snug">
                  High-Performance Airless Painting Machines
                </span>
              </h2>

              <p className="text-black mt-3 max-w-3xl text-md md:text-xl leading-relaxed">
                At Vands Engineering Solutions, we offer a wide range of advanced Airless Painting Machines designed to deliver superior performance.
              </p>
            </div>

            <Link
              href="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              Explore All Products
            </Link>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            loop
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={cat.link}
                  onClick={() => setActiveIndex(i)}
                  className="group relative rounded-2xl bg-white border border-red-500 shadow-md hover:shadow-xl transition p-4 flex flex-col items-center text-center overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-70 flex items-center justify-center overflow-hidden rounded-xl">

                    {/* MAIN */}
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      fill
                      className={`object-cover transition duration-500 ${
                        activeIndex === i
                          ? "opacity-0 scale-110"
                          : "opacity-100 group-hover:opacity-0 group-hover:scale-110"
                      }`}
                    />

                    {/* HOVER */}
                    <Image
                      src={cat.hoverImg}
                      alt={cat.name}
                      fill
                      className={`object-contain absolute top-0 left-0 transition duration-500 ${
                        activeIndex === i
                          ? "opacity-100 scale-105"
                          : "opacity-0 group-hover:opacity-100 group-hover:scale-105"
                      }`}
                    />

                    {/*  OVERLAY */}
                    <div className="absolute inset-0 bg-black/3 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setModalImage(cat.hoverImg || cat.img);
                        }}
                        className="bg-red-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="mt-4">
                    <p className="font-semibold text-red-500 text-sm md:text-base">
                      {cat.name}
                    </p>
                    <p className="text-xs mt-1 text-black font-medium">
                      {cat.products} Products
                    </p>
                  </div>

                  <div className="w-0 group-hover:w-full h-[2px] bg-[#FAAC18] mt-3 transition-all"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ✅ MODAL */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        >
          <button className="absolute top-6 right-6 text-white">
            <X size={30} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-3xl h-[80vh]"
          >
            <Image
              src={modalImage}
              alt="Preview"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Productcategory;