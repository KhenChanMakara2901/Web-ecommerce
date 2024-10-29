"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { CiCircleMore } from "react-icons/ci";
import LogoCloud from "@/src/components/LogoCloud/Index";

const images = [
  { src: "/Hero/Hero1.png", alt: "Fashion Sale Image 1" },
  { src: "/Hero/Hero.png", alt: "Fashion Sale Image 2" },
  { src: "/Hero/HeroIm.png", alt: "Fashion Sale Image 3" },
];

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white dark:bg-dark py-5 px-6 md:py-12 lg:py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 lg:p-8">
          <h1 className="text-4xl font-thin text-gray-900 dark:text-white lg:text-6xl leading-tight">
            SEASON SALE
            <br />
            <span className="block text-lg font-sans font-light lg:text-2xl mt-2 text-blue-600 dark:text-blue-300">
              Men and Women’s Fashion
            </span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 lg:text-lg font-light leading-relaxed">
            Discover the latest trends and enjoy up to
            <span className="font-semibold">50% off</span> on selected items.
            <br />
            <span className="font-mono font-semibold block mt-2 text-lg lg:text-xl text-red-500 dark:text-red-400">
              Min. 35-75% Off
            </span>
          </p>
          <div className="mt-4 flex justify-center lg:justify-start space-x-4">
            <a
              href="#shop"
              aria-label="Shop Now"
              className="flex items-center bg-blue-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-900 transition duration-300"
            >
              <GiShoppingCart size={25} className="mr-2" />
              Shop Now
            </a>

            <a
              href="#learn-more"
              aria-label="Read More"
              className="flex items-center border-2 border-blue-800 text-blue-800 py-3 px-6 rounded-lg font-medium hover:bg-blue-800 hover:text-white transition duration-300"
            >
              <CiCircleMore size={25} className="mr-2" />
              Read More
            </a>
          </div>
        </div>
        <div className="relative w-full max-w-xl lg:w-1/2 mt-0 lg:mt-0 flex flex-col items-center">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4 flex justify-center space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 scale-125 shadow-lg"
                    : "bg-gray-400 dark:bg-gray-600 hover:scale-110 hover:bg-blue-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <LogoCloud />
    </section>
  );
}
