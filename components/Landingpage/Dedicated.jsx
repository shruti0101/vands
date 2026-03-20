"use client";

import Image from "next/image";

export default function ManufacturerSection() {
  return (
    <section className="py-15  relative overflow-hidden">
<div className="absolute -left-50 top-0 h-full w-[40%] -z-10 pointer-events-none">
  <Image
    src="/bgshape.png"
    alt="background shape"
    fill
    className="object-contain object-left rotate-180"
  />
</div>
         
      <div className="w-full mx-auto px-6 md:px-23">

       
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-full ">
            <Image
              src="/cat/5.png" 
              alt="Airless Painting Machine"
              width={2000}
              height={2000}
              className="object-cover float-animation"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* H1 */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-black">
              Airless Painting Machine Manufacturer
            </h1>

            {/* Subheading */}
            <h2 className="mt-4 text-xl md:text-2xl font-medium text-red-600">
              High-Performance Airless Painting Machines for Industrial Applications
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-black leading-relaxed text-sm md:text-base">
              Vands Engineering Solutions is a trusted <strong>Airless Painting Machine Manufacturer</strong>, 
              known for delivering high-performance and durable machines suitable for a wide range of 
              industrial and commercial applications. Our machines are designed to provide 
              <span className="text-black font-medium"> smooth and uniform coating with high efficiency</span>, 
              making them ideal for construction, infrastructure, and industrial painting projects.
            </p>

            <p className="mt-4 text-black leading-relaxed text-sm md:text-base">
              As a reliable <strong>Airless Painting Machine Wholesaler</strong>, we offer a comprehensive range of 
              machines at competitive prices. Our solutions are widely used for wall painting, 
              steel structures, furniture finishing, and protective coatings — ensuring 
              <span className="text-gray-900 font-medium"> long service life and reduced paint wastage</span>.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
                Get a Quote
              </button>

              <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition">
                Explore Products
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}