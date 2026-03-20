"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import Enquiry from "@/components/Enquiry"


export default function ProductPage({ params }) {
  const { productId } = React.use(params);
    const [isFormOpen, setIsFormOpen] = useState(false)

  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }

  // ✅ Active image for zoom and main display
  const [activeImage, setActiveImage] = useState(product.image[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta name="description" content={product.metaDescription || product.name} />
        <meta property="og:title" content={product.metaTitle || product.name} />
        <meta property="og:description" content={product.metaDescription || product.name} />
        <meta property="og:image" content={activeImage.src} />
      </Head>

      {/* Hero Banner */}
          <section
        style={{ backgroundImage: "url('/bg.webp')" }}
        className="w-full bg-cover bg-center h-[50vh]  md:h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="max-w-4xl text-center rounded-md text-cyan-600 bg-white  text-2xl p-2 md:text-5xl font-bold z-10">{product.name} </h2>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-4 md:px-6 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start">
          {/* Product Preview */}
          <div className="sticky md:top-0 md:px-6">
            <div className="w-full md:w-[450px] h-[350px] md:h-[450px] rounded-xl shadow-lg border bg-white overflow-hidden">
              <div
                className="relative w-full h-full overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  title={product.name}
                  width={600}
                  height={400}
                  unoptimized
                  className="object-contain w-full h-full transition-transform duration-100 ease-linear"
                  style={{
                    transformOrigin: origin,
                    transform: isZoomed ? "scale(1.5)" : "scale(1)",
                  }}
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {product.image.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-lg border shadow-sm overflow-hidden flex-shrink-0 ${
                    activeImage === img ? "ring-2 ring-yellow-500" : "hover:ring-1 hover:ring-gray-400"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={100}
                    height={100}
                    unoptimized
                    className="object-contain w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white bg-[#1FB79C] p-3 rounded-lg shadow">
              Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <tbody>
                  {product.specs?.map((spec, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b`}>
                      <td className="p-2 md:p-3 font-medium text-gray-800 w-1/3 text-sm md:text-lg">
                        {spec.label}
                      </td>
                      <td className="p-2 md:p-3 text-gray-600 text-sm md:text-lg">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-2 text-gray-600 text-sm md:text-base">
              For more information about the product, please contact us.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button  onClick={() => setIsFormOpen(true)} className="flex-1 cursor-pointer text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-cyan-700 transition font-semibold">
                Enquire Now
              </button>
              <a
                href={`https://wa.me/+917042039777?text=Hello, I am interested in ${encodeURIComponent(
                  product.name
                )} (Model: ${product.model}). Please provide more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:from-green-600 hover:to-green-700 transition font-semibold"
              >
                WhatsApp Now
              </a>
              <a
                href="/brochure.pdf"
                download
                className="flex-1 cursor-pointer text-center px-4 py-3 bg-[#1FB79C] text-white rounded-lg shadow hover:from-yellow-600 hover:to-yellow-700 transition font-semibold"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-gray-100 w-full rounded-xl shadow-md border">
          <h2 className="text-2xl md:text-3xl text-start border-b border-black font-semibold mb-5 text-cyan-600 p-4 rounded-lg shadow">
            Product Description
          </h2>
          <div className="p-4 md:p-6 text-sm md:text-base leading-relaxed">
            {Array.isArray(product.description) ? (
              product.description.map((block, i) => {
                if (block.type === "h2")
                  return (
                    <h2 key={i} className="text-xl md:text-3xl font-bold mt-4 mb-4">
                      {block.text}
                    </h2>
                  );
                if (block.type === "p")
                  return (
                    <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} className="mb-3" />
                  );
                if (block.type === "ul")
                  return (
                    <ul key={i} className="list-disc ml-6 text-sm md:text-lg mb-4">
                      {block.items.map((item, j) => (
                        <li key={j} className="mb-2 md:mb-4" dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  );
              })
            ) : (
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
            )}
          </div>
        </div>
             {/* Pass isOpen + onClose to ContactForm */}
              {isFormOpen && (
                <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
              )}
      </section>
    </>
  );
}
