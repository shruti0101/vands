"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Galaxy Plus Sprayer",
    price: "₹45,000",
    image: "/cat/1.png",
    tagline: "High Performance for Large Scale Projects",
    description:
      "Designed for contractors and professionals, the Galaxy Plus delivers powerful output with consistent spray quality for large surfaces and infrastructure work.",
    specs: [
      "High Pressure Output",
      "Durable Industrial Motor",
      "Uniform Smooth Finish",
      "Low Paint Wastage",
      "Heavy Duty Build",
    ],
  },
  {
    name: "Heavy Duty Petrol Sprayer",
    price: "₹75,000",
    image: "/cat/2.png",
    tagline: "Maximum Power for Industrial Applications",
    description:
      "Built for tough environments, this petrol-powered sprayer ensures uninterrupted performance, making it ideal for large industrial and infrastructure projects.",
    specs: [
      "Powerful Petrol Engine",
      "Industrial Grade Performance",
      "High Coverage Area",
      "Long Operational Life",
      "Rugged Construction",
    ],
  },
  {
    name: "Galaxy Compact Sprayer",
    price: "₹38,000",
    image: "/cat/3.png",
    tagline: "Compact Design with Powerful Output",
    description:
      "A perfect balance of portability and performance, ideal for medium-scale projects requiring precision and efficiency.",
    specs: [
      "Compact & Lightweight",
      "Easy Operation",
      "Consistent Spray Output",
      "Energy Efficient",
      "Quick Setup",
    ],
  },
  {
    name: "EcoPro Sprayer",
    price: "₹32,000",
    image: "/cat/4.png",
    tagline: "Affordable & Efficient Painting Solution",
    description:
      "An economical solution for small to medium applications, offering reliable performance with minimal maintenance.",
    specs: [
      "Budget Friendly",
      "Smooth Finish Output",
      "Portable Design",
      "Low Maintenance",
      "User Friendly",
    ],
  },
  {
    name: "ProFinish Wall Sprayer",
    price: "₹42,000",
    image: "/cat/5.png",
    tagline: "Perfect for Wall & Interior Coating",
    description:
      "Engineered for precision wall coating and interior finishes, delivering consistent coverage with professional-grade results.",
    specs: [
      "Ideal for Wall Painting",
      "Fine Finish Output",
      "High Efficiency Pump",
      "Easy Handling",
      "Durable Components",
    ],
  },
];

export default function BestSellerSlider() {
  return (
    <section style={{backgroundImage:"url(/bestsellbg.jpg)"}} className="py-5 md:py-18 bg-center bg-cover">
      <div className="w-full mx-auto  md:px-23">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-15">
          <p className="text-md md:text-4xl font-oswald text-red-500 font-bold uppercase tracking-wide">
            Our Featured Products
          </p>
          <h2 className="text-xs px-2 md:text-xl font-medium leading-relaxed text-black mt-4">
       
With over a decade of experience, Vands Engineering Solutions has developed strong expertise in manufacturing and supplying Airless Painting Machines and surface preparation equipment. Our in-depth industry knowledge helps us understand customer requirements accurately for different industrial applications.
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
                <div className="relative md:h-[480px] bg-gray-100 flex items-center justify-center">
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
                  <h3 className="text-2xl font-semibold text-black mb-3">
                    {product.name}
                  </h3>

                  <ul className="space-y-2 text-black text-md">
                    {product.specs.map((spec, idx) => (
                      <li key={idx}>• {spec}</li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <span className="text-orange-500 text-2xl font-bold">
                      {product.price}
                    </span>
                  </div>


<Link href="/categories/airless-painting-machine    ">
                  <button className="mt-4 w-fit bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
                    View Product
                  </button>

</Link> 
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}