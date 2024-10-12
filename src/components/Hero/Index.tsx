import Image from "next/image";
import React from "react";
import Hero from "@/public/Hero/Hero.png";

export default function Index() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-b-3xl py-16 px-8 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-6xl">
            Best Quality Products
            <span className="text-indigo-600">Join The Organic Movement!</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 lg:text-lg">
            Discover the latest trends and get up to 50% off on selected items.
            Shop now and upgrade your wardrobe.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <a
              href="#shop"
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700"
            >
              Shop Now
            </a>
            <a
              href="#learn-more"
              className="bg-transparent border-2 border-indigo-600 text-indigo-600 py-3 px-6 rounded-lg font-medium hover:bg-indigo-600 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <Image
            src={Hero}
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
