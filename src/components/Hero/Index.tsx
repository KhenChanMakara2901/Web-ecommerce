import Image from "next/image";
import React from "react";
import Hero from "@/Assets/Hero/Hero.png";
import { GiShoppingCart } from "react-icons/gi";
import { CiCircleMore } from "react-icons/ci";
import LogoCloud from "@/components/LogoCloud/Index";

export default function Index() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-b-3xl py-16 px-8 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-6xl">
            Best Quality Products
            <br />
            <span className="text-pink-600">MAN AND WOMEN FASHION</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 lg:text-lg">
            Discover the latest trends and get up to 50% off on selected items.
            Shop now and upgrade your wardrobe.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <a
              href="#shop"
              className="bg-pink-600 flex text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700"
            >
              <GiShoppingCart size={25} className="mr-2" />
              Shop Now
            </a>
            <a
              href="#learn-more"
              className="bg-transparent flex border-2 border-pink-600 text-pink-600 py-3 px-6 rounded-lg font-medium hover:bg-pink-600 hover:text-white"
            >
              <CiCircleMore size={25} className="mr-2" />
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <Image
            src={Hero}
            alt="Hero Image"
            width={200}
            height={200}
            quality={75}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <LogoCloud />
    </section>
  );
}
