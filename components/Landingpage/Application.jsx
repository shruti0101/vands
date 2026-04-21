"use client";

import { Building2, Car, Factory, Cog, Sofa, ShieldCheck } from "lucide-react";

const applications = [
  {
    title: "Construction & Infrastructure",
    desc: "Fast and even coating on walls, buildings, and large structural surfaces ensuring efficiency and consistent results.",
    icon: Building2,
  },
  {
    title: "Automotive & Engineering",
    desc: "Precision painting and coating applications where accuracy and high-quality finish are essential.",
    icon: Car,
  },
  {
    title: "Fabrication & Manufacturing",
    desc: "Surface cleaning, preparation, and finishing processes using blasting and metalizing equipment.",
    icon: Factory,
  },
  {
    title: "Steel & Heavy Machinery",
    desc: "Heavy-duty coating solutions for steel structures, pipelines, and industrial equipment.",
    icon: Cog,
  },
  {
    title: "Furniture & Wood Coating",
    desc: "Smooth and uniform finishes for furniture polishing, wood coating, and decorative applications.",
    icon: Sofa,
  },
  {
    title: "Industrial Coating",
    desc: "Protective coatings, anti-corrosion treatments, and large-scale industrial painting solutions.",
    icon: ShieldCheck,
  },
];

export default function ApplicationsSection() {
  return (
    <section className="py-6 md:py-20 bg-[#FDF4E8]">
      <div className="w-full mx-auto px-4 md:px-20">

        {/* Heading */}
        <div className="text-center mb-6 md:mb-14">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800">
            Applications of Our Equipment
          </h2>
          <p className="mt-3 hidden md:block text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
            Discover how our advanced airless painting and surface preparation machines
            deliver performance across industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {applications.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative bg-white rounded-xl p-4 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200"
              >

                {/* ICON + TITLE INLINE */}
                <div className="flex items-start gap-3 md:mb-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-red-50 group-hover:bg-red-600 transition">
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-red-600 group-hover:text-white transition" />
                  </div>

                  <h3 className="text-base md:text-xl font-semibold text-gray-800 group-hover:text-red-600 transition ">
                    {item.title}
                  </h3>
                </div>

                {/* Description (aligned with title) */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed pl-[52px] md:pl-[68px]">
                  {item.desc}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-500 group-hover:w-full transition-all duration-500 rounded-b-xl md:rounded-b-2xl"></div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}