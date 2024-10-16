import Image from "next/image";
import React from "react";
import Hero from "@/Assets/Hero/Hero.png";
import { GiShoppingCart } from "react-icons/gi";
import { CiCircleMore } from "react-icons/ci";
import LogoCloud from "@/components/LogoCloud/Index";

export default function Index() {
  return (
    <section className="bg-white dark:bg-dark py-20 px-8 lg:py-28">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-serif text-gray-900 dark:text-white lg:text-6xl">
            SeaSon Sale
            <br />
            <span>MAN'S AND WOMEN'S FASHION</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 lg:text-lg">
            Discover the latest trends and get up to 50% off on selected items.
            <br />
            <span className="font-mono">Min.35-75% Off</span>
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <a
              href="#shop"
              className="bg-blue-800 flex text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-900"
            >
              <GiShoppingCart size={25} className="mr-2" />
              Shop Now
            </a>
            <a
              href="#learn-more"
              className="bg-transparent flex border-2 border-blue-800 text-blue-800 py-3 px-6 rounded-lg font-medium hover:bg-blue-800 hover:text-white"
            >
              <CiCircleMore size={25} className="mr-2" />
              Read more
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <Image
            src={Hero}
            alt="Hero Image"
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <LogoCloud />
    </section>
  );
}
