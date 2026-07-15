"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";

const desktopImages = [
  "/banner1.webp",
  "/banner2.webp",
];

const mobileImages = [
  "/mob1.webp",
  "/mob2.webp",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % desktopImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Desktop */}
      <section className="relative hidden md:block mt-18 h-[70vh] xl:h-screen overflow-hidden">
        {desktopImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            quality={55}
            sizes="100vw"
            className={`absolute inset-0 object-cover transition-opacity duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </section>

      {/* Mobile */}
      <section className="relative md:hidden mt-10 h-[55vh] overflow-hidden">
        {mobileImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            quality={50}
            sizes="100vw"
            className={`absolute inset-0 object-contain transition-opacity duration-700 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </section>
    </>
  );
}

export default memo(Hero);