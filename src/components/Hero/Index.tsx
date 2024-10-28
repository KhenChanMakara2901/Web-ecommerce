import Image from "next/image";
import React from "react";
import Hero from "@/src/Assets/Hero/Hero.png";
import { GiShoppingCart } from "react-icons/gi";
import { CiCircleMore } from "react-icons/ci";
import LogoCloud from "@/src/components/LogoCloud/Index";

export default function Index() {
  return (
    <section className="bg-white dark:bg-dark py-16 px-6 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 lg:p-8">
          <h1 className="text-4xl font-serif text-gray-900 dark:text-white lg:text-6xl">
            Season Sale
            <br />
            <span className="block text-lg font-normal lg:text-2xl mt-2 text-blue-600 dark:text-blue-300">
              Men and Women s Fashion
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 lg:text-lg">
            Discover the latest trends and enjoy up to 50% off on selected
            items.
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
        <div className="w-full lg:w-1/2 mt-0 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src={Hero}
            alt="Fashion Sale Hero Image"
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <LogoCloud />
    </section>
  );
}
