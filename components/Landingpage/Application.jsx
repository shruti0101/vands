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
    <section className=" py-8 md:py-20 bg-[#FDF4E8]">
      <div className="w-full  mx-auto px-6 md:px-23">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Applications of Our Equipment
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-md md:text-lg">
            Discover how our advanced airless painting and surface preparation machines
            deliver performance across industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {applications.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-50 group-hover:bg-red-600 transition mb-6">
                  <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}