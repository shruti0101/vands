"use client";
import { useRef } from "react";
import { ShieldCheck, Settings, BadgeDollarSign, Headphones, Layers, Award } from "lucide-react";

export default function WhyChooseUs() {
  const videoRef = useRef(null);

  const features = [
    {
      icon: <Award size={26} />,
      title: "11+ Years of Industry Experience",
      desc: "With over a decade of experience, Vands Engineering Solutions has developed strong expertise in manufacturing and supplying Airless Painting Machines and surface preparation equipment. Our in-depth industry knowledge helps us understand customer requirements accurately and deliver the most suitable solutions for different industrial applications.",
    },
    {
      icon: <Layers size={26} />,
      title: "Complete Range of Products Under One Roof",
      desc: "We offer a wide range of products including Airless Painting Machines, Airless Paint Sprayers, Shot Blasting Machines, Sand Blasting Machines, and Metalizing Equipment. This allows our customers to source all their painting and surface treatment needs from a single, reliable supplier.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "High-Quality Standards and Durable Products",
      desc: "As a trusted Airless Painting Machine Manufacturer, we ensure that all our machines are built using high-grade materials and modern technology. Each product is tested for durability, efficiency, and consistent performance to meet demanding industrial conditions.",
    },
    {
      icon: <BadgeDollarSign size={26} />,
      title: "Competitive Pricing for Maximum Value",
      desc: "Being a leading Airless Painting Machine Wholesaler, we provide cost-effective pricing that benefits contractors, dealers, and bulk buyers. Our pricing structure is designed to deliver maximum value without compromising on product quality.",
    },
    {
      icon: <Headphones size={26} />,
      title: "Strong After-Sales Support and Service",
      desc: "We believe in long-term customer relationships and provide complete after-sales support including technical assistance, product guidance, and maintenance help to ensure smooth and uninterrupted operations.",
    },
    {
      icon: <Settings size={26} />,
      title: "Customized Solutions as per Requirement",
      desc: "We understand that every project is unique, which is why we offer customized solutions tailored to specific industrial needs. Our team works closely with clients to recommend the right equipment for maximum efficiency and productivity.",
    },
  ];

  return (
    <section className=" pb-7 md:py-17 bg-white overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-23">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-5">

          {/* VIDEO */}
          <div className="relative h-[300px] md:h-[580px] rounded-3xl overflow-hidden ">
            <video
              ref={videoRef}
              src="/Vands.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          

            {/* floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900">
                11+ Years Experience
              </h4>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <p className="text-md tracking-[0.2em] font-oswald uppercase text-red-500 font-semibold mb-3">
           Why Choose Our Airless Painting Machines
            </p>

            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Trusted Partner for Airless Painting & Surface Preparation Solutions
            </h2>

            <p className="mt-5 text-black text-lg leading-relaxed">
With over a decade of experience, Vands Engineering Solutions has developed strong expertise in manufacturing and supplying Airless Painting Machines and surface preparation equipment. Our in-depth industry knowledge helps us understand customer requirements accurately and deliver the most suitable solutions for different industrial applications.            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-red-100 border border-black shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-500 mb-5 group-hover:bg-red-500 group-hover:text-white transition">
                {item.icon}
              </div>

              <h4 className="text-lg font-semibold text-black mb-3 leading-snug">
                {item.title}
              </h4>

              <p className="text-black text-md leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}