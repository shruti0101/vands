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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect screen size only once + on resize
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto slider
  useEffect(() => {
    const images = isDesktop ? desktopImages : mobileImages;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDesktop]);

  // Preload next image
  useEffect(() => {
    const images = isDesktop ? desktopImages : mobileImages;

    const next = (currentIndex + 1) % images.length;

    const img = new window.Image();
    img.src = images[next];
  }, [currentIndex, isDesktop]);

  const images = isDesktop ? desktopImages : mobileImages;

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isDesktop
          ? "hidden md:block mt-18 h-[70vh] xl:h-screen"
          : "block md:hidden mt-10 h-[55vh]"
      }`}
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            quality={65}
            sizes="100vw"
            className={
              isDesktop
                ? "object-cover select-none"
                : "object-contain select-none"
            }
          />
        </div>
      ))}
    </section>
  );
}

export default memo(Hero);