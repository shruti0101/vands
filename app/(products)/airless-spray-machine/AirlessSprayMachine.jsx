"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/m";

const images = ["/prod1.png", "/prod2.webp"];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const specs = [
  { label: "Model", value: "Eco Pro Plus" },
  { label: "Rate Voltage", value: "220V" },
  { label: "Power", value: "1800W" },
  { label: "Pressure", value: "227bar/3200PSI" },
  { label: "Max Nozzle", value: "0.035in" },
  { label: "Flow", value: "4.5L/min" },
  { label: "Motor", value: "Brushless Motor" },
  { label: "Hose", value: "15Mtr" },
  { label: "Hydraulic Oil", value: "Anti-wear" },
  {
    label: "Pipe and TIP",
    value: "15 Mtrs, LX 80 Gun Set and RAC 517 Standard Tip",
  },
  { label: "Net weight/Gross weight", value: "19.5KG/27KG" },
  { label: "Pump type", value: "Stainless steel Short HD" },
];

const productAccessories = [
  { img: "/accesseres/PAINT HOSE.webp", title: "PAINT HOSE", link: "" },
  { img: "/accesseres/PAINTING GUNS.webp", title: "PAINTING GUNS", link: "" },
  { img: "/accesseres/REPAIR KITS.webp", title: "REPAIR KITS", link: "" },
  { img: "/accesseres/TIP GUARD.webp", title: "TIP GUARD", link: "" },
  { img: "/accesseres/TIP SEAL.webp", title: "TIP SEAL", link: "" },
  { img: "/accesseres/TIPS.webp", title: "TIPS", link: "" },
];

const AirlessSprayMachine = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const ytArray = [
    {
      title: "EPOXY SPRAY MACHINE",
      link: "https://www.youtube.com/embed/gNC8oBcddV8?si=yw6se9i8pHQpjEzD",
    },
    {
      title: "PAINTING SPRAY MACHINE",
      link: "https://www.youtube.com/embed/H7MwuAsTeME?si=ZzuoGLUuN2AsuQgs",
    },
    {
      title: "Airless Painting Machine Maruti Model",
      link: "https://www.youtube.com/embed/9Y0z1dhXRPk?si=wMi9JrF5WASUQJRc",
    },
    {
      title: "Paint and Putty Machine ",
      link: "https://www.youtube.com/embed/Y3VKHwNDo8Y?si=W9Sjzt2TynPKvXpS",
    },
  ];

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="mt-34 ">
      <section className="px-2 py-5 md:mx-20 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-10 lg:h-[140vh]">
        <div className="lg:w-1/2">
          <p className="text-3xl font-oswald font-bold uppercase lg:text-5xl">
            Airless Spray machine
          </p>
          <p className="font-oswald text-xl font-medium my-3 lg:text-2xl">
            Making an impact on Every Job
          </p>

          <div className="my-5 gap-10 hidden lg:flex">
            <button className="bg-[#90081A] text-white font-bold px-4 py-3 text-xl">
              Get a Quote
            </button>
            <button className="border text-[#90081A] font-bold px-4 py-3 text-xl">
              Download Brochure
            </button>
          </div>

          {/* specification table for desktio */}
          <section className="px-2 py-5 hidden lg:block">
            <div className="w-full">
              <h2 className="text-3xl font-oswald font-bold uppercase mb-6">
                Specifications
              </h2>
              <table className="w-full text-left border-collapse border border-gray-300">
                <tbody>
                  {specs.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-700 w-1/3 md:w-1/4">
                        {spec.label}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-600">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* product image  */}
        <div className="border relative w-full h-[60vh] flex justify-center items-center overflow-hidden bg-gray-50 rounded-lg lg:w-1/2 lg:sticky lg:top-30">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className=" w-full h-full flex justify-center items-center "
            >
              <Image
                src={images[imageIndex]}
                width={1000}
                height={1000}
                alt="airSprayMachine"
                className="object-contain h-full w-full p-4 "
              />
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute left-4 z-10 p-3 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
            onClick={() => paginate(-1)}
          >
            ←
          </button>
          <button
            className="absolute right-4 z-10 p-3 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
            onClick={() => paginate(1)}
          >
            →
          </button>
        </div>

        {/* for mobile only  */}
        <div className="my-5 flex justify-center gap-5 lg:hidden">
          <button className="bg-[#90081A] text-white font-bold px-4 py-3">
            Get a Quote 
          </button>
          <button className="border text-[#90081A] font-bold px-4 py-3">
            Download Brochure
          </button>
        </div>
      </section>

      {/* specification table for mobile */}
      <section className="px-2 py-5 md:mx-20 lg:hidden">
        <div className="w-full">
          <h2 className="text-3xl font-oswald font-bold uppercase mb-6">
            Specifications
          </h2>
          <table className="w-full text-left border-collapse border border-gray-300">
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-700 w-1/3 md:w-1/4">
                    {spec.label}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* section section  */}
      <section className="md:mx-20 mx-5 lg:flex lg:flex-row-reverse lg:my-10">
        <div className=" flex justify-center items-center mx-auto bg-gray-50 flex-col text-[#90081A] lg:w-1/2 overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/9Y0z1dhXRPk?si=0P0m5dmjiAZSn14D"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <p className="font-bold text-xl my-5">Airless Spray Machine</p>
        </div>

        {/* product descrtion  */}
        <div className="px-2 lg:w-1/2">
          <p className="text-3xl font-oswald font-bold uppercase mb-6">
            Product Description
          </p>
          <p className="text-lg font-bold my-3">
            Airless Paint Spray Machine: For Butter Flow Paint Finish
          </p>
          <p>
            One kind of paint sprayer that doesn’t require a compressor or
            turbine to push the paint out of the system is the airless paint
            spray machine. Rather, they evenly apply paint to the surface of
            your product using high-pressure pneumatics, gas, or electricity.
            These machines are more advanced and portable than ordinary paint
            sprayers. One significant benefit of an airless paint spray is its
            speed. These devices can spray a large amount of paint in a short
            period of time, allowing you to cover large surfaces in a short
            amount of time. Painting large walls is an excellent use for an
            airless paint sprayer. We are one of the reliable Airless Paint
            Spray Machine Suppliers in India and our machines help professionals
            get their job done in very little time with a smoother finish.
          </p>
        </div>
      </section>

      {/* go a step further third section  */}
      <section className="bg-gray-100 px-5 py-5 md:px-20 my-5 md:my-10 lg:py-14">
        <p className="text-3xl font-oswald font-bold uppercase ">
          Go a Step Further
        </p>
        <p className="font-semibold mb-5">
          Quality and reliability services to provide a solution to your
          project, we do it all and fast​
        </p>

        <div className="bg-white px-5 py-8">
          <div>
            <p className="text-2xl font-medium font-oswald text-center">
              Associated Accessories
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {productAccessories.map((item) => (
                <div className="mt-8 flex flex-col items-center">
                  <div className="border-1 flex items-center justify-center h-32 w-32 mt-3">
                    <Image
                      src={item?.img}
                      width={1000}
                      height={1000}
                      alt="product image"
                      className="h-28 w-28 "
                    />
                  </div>
                  <p className="text-xl font-bold uppercase font-oswald">
                    {item?.title}
                  </p>
                  {/* <button className="text-lg font-bold text-red-700">
                    Learn more
                  </button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Owner resourse section  */}
      <section className="py-8 px-2 bg-gray-50 md:px-20">
        <p className="text-3xl font-oswald font-bold uppercase mb-6 text-center">
          Our Resources
        </p>
        <p className="text-center md:text-xl">
          <span className="text-[#90081A] font-semibold">
            Already own your Airless Spray Machine?
          </span>{" "}
          Take a look at these resources below to make sure you're getting the
          most out of every coat.
        </p>

        {/* youtube videos */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 mt-5 lg:grid-cols-4">
          {ytArray.map((item) => {
            return (
              <div key={item?.title} className="bg-white">
                <iframe
                  // width="560"
                  // height="315"
                  className="w-full aspect-video"
                  src={item?.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <p className="text-xl text-center font-semibold text-[#90081A]">
                  {item?.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AirlessSprayMachine;
