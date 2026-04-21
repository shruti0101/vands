"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/Data";
import Enquiry from "@/components/Enquiry";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const ProductPageClient = ({ productId }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const allProducts = categories.flatMap((c) =>
    c.products.map((p) => ({
      ...p,
      categoryName: c.name,
    }))
  );

  const product = allProducts.find((p) => p.id === productId);

  const [[page, direction], setPage] = useState([0, 0]);
  const images = product?.image || [];
  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };


const ytArray = [
  {
    title: "MARUTI MACHINE",
    link: "https://www.youtube.com/embed/NMFgzaD8JH0",
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

  return (
    <div className="lg:mt-32 mt-14">

      {/* MAIN SECTION */}
      <section className="px-4 py-8 md:mx-20 lg:flex lg:gap-16">

        {/* IMAGE SLIDER */}
        <div className="relative w-full h-[60vh] bg-gray-50 rounded-xl overflow-hidden lg:w-1/2 lg:sticky lg:top-28 shadow-sm">
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
              className="w-full h-full flex items-center justify-center"
            >
              <Image
                src={images[imageIndex]?.src}
                width={1000}
                height={1000}
                alt={images[imageIndex]?.alt}
                className="object-contain h-full w-full p-6"
              />
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:scale-105"
            onClick={() => paginate(-1)}
          >
            ←
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:scale-105"
            onClick={() => paginate(1)}
          >
            →
          </button>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">

          <h1 className="text-3xl lg:text-5xl font-bold uppercase leading-tight">
            {product?.name}
          </h1>

          <p className="text-sm md:text-lg   mt-3 text-gray-600">
         Our Machines are engineered 
    to deliver high performance, durability, and consistent output across 
    industrial applications. Designed with precision and reliability in mind, 
    these machines ensure efficient surface preparation and finishing, making 
    them ideal for heavy-duty operations.
          </p>

          {/* SPECIFICATIONS */}
          <div className="mt-8">
            <h2 className="text-2xl lg:text-3xl font-bold uppercase mb-4">
              Specifications
            </h2>

            <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <tbody>
                {product?.specs?.map((spec, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="px-4 py-3 font-semibold text-gray-700 w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA BUTTONS AFTER TABLE */}
          <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto bg-[#90081A] text-white font-semibold px-8 py-3 rounded-lg 
              shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
            </button>

            <a
              href={`https://wa.me/919990730939?text=I%20want%20to%20enquiry%20about%20${product?.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 text-white font-semibold px-8 py-3 rounded-lg text-center 
              shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
<a
  href="/Brochure.pdf"
  download
  className="w-full sm:w-auto border border-[#90081A] text-[#90081A] bg-white font-semibold px-8 py-3 rounded-lg text-center
  hover:bg-[#90081A] hover:text-white transition-all duration-300 inline-block"
>
  Download Brochure
</a>

          </div>

        </div>
      </section>

      {/* DESCRIPTION + VIDEO */}
      <section className="md:mx-20 mx-5 lg:flex lg:flex-row-reverse lg:my-12 gap-10">

        <div className="lg:w-1/2">
          {product?.ytArray?.link && (
            <iframe
              className="w-full aspect-video rounded-xl shadow"
              src={product.ytArray.link}
              title="YouTube video"
              allowFullScreen
            />
          )}
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Product Description
          </h2>
          <p className="text-lg font-semibold mb-2">{product?.name}</p>
          <p className="text-gray-600">
            {product?.description?.[1]?.text}
          </p>
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

     


      {/* ENQUIRY MODAL */}
      {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}

    </div>
  );
};

export default ProductPageClient;