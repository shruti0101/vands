"use client";
import Enquiry from '@/components/Enquiry';
import { useParams } from 'next/navigation';
import { FaWhatsapp } from "react-icons/fa";
import React, { useState } from 'react'
import {
  Settings,
  ShieldCheck,
  Wrench,
  Truck,
  Headphones,
  IndianRupee,
  Building2,
  Factory,
  Car,
  Sofa,
  Cog,
  HardHat,
  Plus,
  Minus
} from "lucide-react";
import Productcategory from '@/components/Landingpage/Categories';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Location() {
  const params = useParams();
  const formatCityName = (slug) => {
    if (!slug) return "India";

    return slug
      .replace(/\((.*?)\)/g, " ($1)")
      .replace(/-/g, " ")
      .replace(/\b\w/g, char => char.toUpperCase());
  };

  const citySlug = params?.location?.includes("-in-")
    ? params.location.split("-in-")[1] : null;

  const cityName = citySlug ? formatCityName(citySlug) : "India";
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: Settings,
      title: "Precision-Driven Engineering Solutions",
      desc: "We design machines that ensure smooth spray performance, uniform coating, and high operational accuracy for every project.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: ShieldCheck,
      title: "Heavy-Duty & Long-Lasting Performance",
      desc: "Our airless painting machines are built with robust materials and advanced technology to withstand demanding industrial environments.",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: Wrench,
      title: "Tailor-Made Industrial Equipment",
      desc: "We offer customized solutions to match specific industrial application requirements with precision and flexibility.",
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      icon: Truck,
      title: "Prompt Delivery & Trusted Supply Network",
      desc: "We ensure timely manufacturing and delivery to help industries maintain efficiency and avoid project delays.",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: Headphones,
      title: "Complete Technical & After-Sales Support",
      desc: "We provide installation guidance, maintenance support, and technical assistance beyond product delivery.",
      color: "text-pink-600 bg-pink-100",
    },
    {
      icon: IndianRupee,
      title: "Cost-Efficient & Productivity-Focused Design",
      desc: "Our machines reduce paint wastage, improve speed, and lower operational costs for better productivity.",
      color: "text-red-600 bg-red-100",
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "Construction Industry",
      desc: "Efficient painting solutions for residential, commercial, and infrastructure projects requiring fast and uniform coating.",
      color: "text-orange-600 bg-orange-100",
    },
    {
      icon: Factory,
      title: "Industrial Manufacturing",
      desc: "High-performance airless painting machines for machinery, equipment, and structural coating in production units.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Car,
      title: "Automotive Sector",
      desc: "Precise and smooth finishing solutions for vehicle parts, automotive components, and repair applications.",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Sofa,
      title: "Furniture & Wood Coating",
      desc: "Advanced spraying systems for wooden surfaces, furniture manufacturing, and decorative finishing work.",
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      icon: Cog,
      title: "Heavy Machinery Painting",
      desc: "Durable airless painting machines for coating heavy equipment used in industrial and engineering sectors.",
      color: "text-gray-600 bg-gray-200",
    },
    {
      icon: HardHat,
      title: "Infrastructure Projects",
      desc: "Large-scale painting solutions for bridges, pipelines, and public infrastructure with high efficiency.",
      color: "text-green-600 bg-green-100",
    },
  ];

  const faqs = [
    {
      question: "What is an airless painting machine?",
      answer:
        "An airless painting machine is a high-pressure spraying device that applies paint without using compressed air, ensuring smooth, uniform, and efficient coating.",
    },
    {
      question: "Which industries use airless painting machines?",
      answer:
        "These machines are widely used in construction, manufacturing, automotive, furniture coating, and infrastructure projects.",
    },
    {
      question: "What are the advantages of airless painting?",
      answer:
        "Airless painting offers faster application, reduced paint wastage, better surface finish, and high efficiency compared to traditional methods.",
    },
    {
      question: "Do you provide customized machines?",
      answer:
        "Yes, we offer tailor-made airless painting solutions based on specific industrial requirements and applications.",
    },
    {
      question: "Do you provide after-sales support?",
      answer:
        "Yes, we provide complete technical support including installation guidance, maintenance, and troubleshooting assistance.",
    },
    {
      question: "How can I get a quote?",
      answer:
        "You can contact us directly or use the ‘Get a Quote’ button on our website to request pricing and product details.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const products = [
    { name: "Airless Paint Spray Machine", img: "/cat/4.png" },
    { name: "Airless Spray Gun Machine", img: "/cat/1.png" },
    { name: "Wall Putty Spray Machine", img: "/cat/2.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/3.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/5.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/6.png" },
    { name: "Airless Paint Spray Machine", img: "/cat/4.png" },
    { name: "Airless Spray Gun Machine", img: "/cat/1.png" },
    { name: "Wall Putty Spray Machine", img: "/cat/2.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/3.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/5.png" },
    { name: "Airless Texture Paint Sprayer", img: "/cat/6.png" },
  ];

  return (<>
    <section style={{ backgroundImage: "url('/bg.webp')" }}
      className="w-full h-[70vh] mt-10 md:mt-30 relative bg-cover bg-center flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      <div className="relative text-center text-white px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Airless Painting Machine Manufacturer in {cityName}
        </h1>
      </div>
    </section>

    <section className="pt-8 px-4 md:px-10 lg:px-20 bg-gray-200">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Best Selling Products
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className='!pb-10'
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} onClick={() => setIsFormOpen(true)}>
            <div className="bg-white rounded-xl shadow-md text-center max-w-[260px] mx-auto">
              <div className="w-full aspect-square">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <h3 className="text-sm md:text-[16px] font-semibold py-3 px-2">
                {item.name}
              </h3>

                  <a
              href={`https://wa.me/+919990730939?text=Hi, I'm interested in ${item.name}`}
              target="_blank"
              onClick={(e) => e.stopPropagation()} className="bg-green-500 px-3 py-2 mt-3 capitalize rounded-sm text-white text-md md:text-lg flex items-center justify-center gap-2"><FaWhatsapp size={25}/> whatsapp now</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <section className="bg-gray-50 py-10 px-4 lg:px-15">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Airless Painting Machine Manufacturer in {cityName}
          </h2>
          <h3 className="text-lg font-bold text-gray-800 mb-5">
            Vands Engineering Solutions
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Vands Engineering Solutions is a trusted <strong>Airless Painting Machine Manufacturer in {cityName}</strong>, specializing in high-quality industrial painting and coating equipment designed for performance, precision, and durability. With a strong focus on innovation and engineering excellence, we provide advanced airless painting solutions that help industries achieve smooth finishes, faster application, and reduced material wastage.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We serve a wide range of sectors including construction, manufacturing, automotive, and industrial maintenance, offering reliable machines that meet demanding operational requirements. Our commitment to quality, customer satisfaction, and continuous improvement has made us a preferred choice for businesses seeking efficient and cost-effective painting solutions in {cityName} and across India.
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <div className="lg:w-[400px] w-full lg:h-[400px]">
            <img
              src="/prod3.webp"
              alt="Airless Painting Machine"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-red-600 text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in Touch
        </h2>

        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Looking for a trusted <strong>Airless Painting Machine Manufacturer in {cityName}?</strong>
          Connect with Vands Engineering Solutions today for reliable,
          high-performance industrial painting machines. Contact us now to get
          a quick quote or discuss your requirements.
        </p>

        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-white cursor-pointer text-red-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Get a Quote
        </button>

      </div>
    </section>

    <section className="py-10 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Why Vands Engineering Solutions is the Preferred Choice
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          As a leading <strong>Airless Painting Machine Manufacturer in {cityName},</strong> we deliver
          high-performance equipment designed for efficiency, durability, and precision.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${item.color}`}
              >
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>

    <Productcategory />

    <section className="py-10 px-4 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Airless Painting Machine Manufacturer in {cityName}
          </h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Vands Engineering Solutions is a leading <strong>Airless Painting Machine
              Manufacturer in {cityName},</strong> offering advanced industrial painting equipment
            designed for precision, durability, and high performance. Our airless
            painting machines are engineered to deliver smooth and uniform coating
            results while reducing paint wastage and improving application speed.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We specialize in manufacturing high-quality airless spray systems that
            are widely used across construction, manufacturing, automotive, and
            industrial sectors. As a trusted <strong>Airless Painting Machine Manufacturer
              in {cityName},</strong> we focus on innovation, reliable performance, and cost-effective
            solutions that meet the demands of modern industries.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our machines are built to handle heavy-duty operations and ensure
            consistent output even in challenging working conditions, making us a
            preferred choice for businesses across {cityName} and India.
          </p>
        </div>

        <div className="lg:w-[500px] w-full lg:ml-auto aspect-square">
          <img
            src="/pnumatic.jpeg" // replace with your image
            alt="Airless Painting Machine"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>

    <section className="py-14 px-4 md:px-10 lg:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Key Application Industries
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          As a leading Airless Painting Machine Manufacturer in {cityName}, we provide
          high-performance solutions designed for efficiency, durability, and precision
          across diverse industrial applications.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {industries.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${item.color}`}
              >
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>

    <section className="py-10 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Get answers to common questions about our airless painting machines and services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-lg">
                  {item.question}
                </span>

                {isOpen ? (
                  <Minus className="text-red-600" />
                ) : (
                  <Plus className="text-gray-500" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>

    {isFormOpen && (
      <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    )}
  </>)
}
