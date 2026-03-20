"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const products = [
  {
    name: "Galaxy Plus Sprayer",
    price: "₹45,000",
    image: "/cat/1.png",
    specs: [
      "High Pressure Output",
      "Durable Motor",
      "Uniform Finish",
      "Low Paint Wastage",
    ],
  },
  {
    name: "Heavy Duty Sprayer",
    price: "₹75,000",
    image: "/cat/2.png",
    specs: [
      "Petrol Engine",
      "Industrial Use",
      "High Coverage",
      "Long Life",
    ],
  },
  {
    name: "Galaxy Compact",
    price: "₹38,000",
    image: "/cat/3.png",
    specs: [
      "Compact Design",
      "Easy to Use",
      "Lightweight",
      "Efficient Spray",
    ],
  },
  {
    name: "EcoPro Sprayer",
    price: "₹32,000",
    image: "/products/p4.png",
    specs: [
      "Budget Friendly",
      "Smooth Finish",
      "Portable",
      "Low Maintenance",
    ],
  },
];

export default function BestSellerSlider() {
  return (
    <section style={{backgroundImage:"url(/bestsellbg.jpg)"}} className="py-18 bg-center bg-cover">
      <div className="w-full mx-auto px-6 md:px-23">

        {/* Heading */}
        <div className="text-center mb-15">
          <p className="text-md md:text-4xl font-oswald text-red-500 font-bold uppercase tracking-wide">
            Our Featured Products
          </p>
          <h2 className="text-xl font-medium leading-relaxed text-black mt-4">
       
At Shree Shakti Infratech, we take pride in offering top-quality construction machinery that delivers durability, precision, and value for money. As a trusted Bar Bending Machine Supplier, our featured range is carefully selected to meet the demanding needs of modern construction projects.
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
          }}
        >
          {products.map((product, i) => (
            <SwiperSlide key={i}>
              
              <div className="grid md:grid-cols-2 bg-[#FFFAF1] rounded-xl shadow-md overflow-hidden">

                {/* IMAGE */}
                <div className="relative h-[480px] bg-gray-100 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={700}
                    height={700}
                    className="object-contain h-full w-full "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {product.name}
                  </h3>

                  <ul className="space-y-2 text-gray-600 text-sm">
                    {product.specs.map((spec, idx) => (
                      <li key={idx}>• {spec}</li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <span className="text-orange-500 text-2xl font-bold">
                      {product.price}
                    </span>
                  </div>

                  <button className="mt-4 w-fit bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
                    View Product
                  </button>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}