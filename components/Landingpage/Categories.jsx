"use client";

import React, { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    name: "Airless Painting Machine",
    products: 30,
    img: "/cat/airlesspainting.webp",
    hoverImg: "/cat/6.webp",
    link: "/categories/airless-painting-machine",
  },
  {
    id: 2,
    name: "Airless Wall Putty Spray Machines",
    products: 24,
    img: "/cat/wallputty-removebg-preview.webp",
    hoverImg: "/cat/1.webp",
    link: "/categories/airless-wall-putty-spray-machines",
  },
  {
    id: 3,
    name: "Pneumatic Machines",
    products: 21,
    img: "/cat/airlessspray-removebg-preview.webp",
    hoverImg: "/bg remove.webp",
    link: "/categories/pneumatic-airless-paint-machines",
  },
  {
    id: 4,
    name: "Kerb Painting Machine",
    products: 37,
    img: "/cat/kerb-removebg-preview.webp",
    hoverImg: "/2.jpeg",
    link: "/categories/kerb-painting-machines",
  },
  {
    id: 5,
    name: "Polyurethane Machines",
    products: 26,
    img: "/cat/airlesspaintspray-removebg-preview.webp",
    hoverImg: "/1.jpeg",
    link: "/categories/polyurethane-spray-machines",
  },
  {
    id: 6,
    name: "Airless Painting machine spares parts",
    products: 17,
    img: "/cat/wallpainting-removebg-preview.webp",
    hoverImg: "/accesseres/PAINT HOSE.webp",
    link: "/categories/spare-parts-airless-painting-machines",
  },
];

const Productcategory = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <section className="bg-[#FFFAF1]">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
          {/* Heading */}
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="max-w-4xl text-2xl font-semibold tracking-wide sm:text-3xl md:text-5xl">
                <span className="bg-red-600 bg-clip-text leading-snug text-transparent">
                  High-Performance Airless Painting Machines
                </span>
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black sm:text-base md:text-xl">
                At Vands Engineering Solutions, we offer a wide range of
                advanced Airless Painting Machines designed to deliver superior
                performance.
              </p>
            </div>

            <Link
              href="/categories/airless-painting-machine"
              className="w-fit rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 md:px-6 md:py-3 md:text-base"
            >
              Explore All Products
            </Link>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            preloadImages={false}
            watchSlidesProgress
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={cat.id}>
                <Link
                  href={cat.link}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-red-500 bg-white p-3 text-center shadow-md transition hover:shadow-xl md:p-4"
                >
                  <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl sm:h-56 md:h-64 lg:h-72">
                    <Image
                      src={cat.hoverImg}
                      alt={cat.name}
                      fill
                      priority={i === 0}
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : "auto"}
                      decoding="async"
                      quality={65}
                      sizes="(max-width:640px) 100vw,
                             (max-width:768px) 50vw,
                             (max-width:1024px) 33vw,
                             33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setModalImage(cat.hoverImg);
                        }}
                        className="rounded-full bg-red-500 p-3 shadow-lg transition hover:scale-110"
                      >
                        <Eye className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base font-semibold text-red-500 md:text-xl">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="mt-3 h-[2px] w-0 bg-[#FAAC18] transition-all duration-500 group-hover:w-full" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <button className="absolute right-5 top-5 text-white">
            <X size={28} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[70vh] w-full max-w-4xl"
          >
            <Image
              src={modalImage}
              alt="Preview"
              fill
              quality={75}
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Productcategory);