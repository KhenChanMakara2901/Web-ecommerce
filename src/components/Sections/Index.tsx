"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const products = [
  {
    id: 1,
    name: "Basic Tee",
    price: "£24.00 GBP",
    imageUrl: "/TopSeller/Jecket-1.jpg",
  },
  {
    id: 2,
    name: "Premium Tee",
    price: "£32.00 GBP",
    imageUrl: "/TopSeller/Jecket-2.jpg",
  },
  {
    id: 3,
    name: "Limited Edition Tee",
    price: "£42.00 GBP",
    imageUrl: "/TopSeller/Jecket-3.jpg",
  },
  {
    id: 4,
    name: "Exclusive Tee",
    price: "£52.00 GBP",
    imageUrl: "/TopSeller/Jecket-4.jpg",
  },
  {
    id: 5,
    name: "Exclusive Tee",
    price: "£52.00 GBP",
    imageUrl: "/TopSeller/Jecket-5.jpg",
  },
  {
    id: 6,
    name: "Exclusive Tee",
    price: "£52.00 GBP",
    imageUrl: "/TopSeller/Jecket-6.jpg",
  },
  {
    id: 7,
    name: "Exclusive Tee",
    price: "£52.00 GBP",
    imageUrl: "/TopSeller/Jecket-7.jpg",
  },
];

export default function TopSeller() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const newPosition = Math.max(scrollPosition - 300, 0);
      sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const newPosition = scrollPosition + 300;
      sliderRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 relative">
      <div className="container mx-auto px-6 py-12">
        <header className="text-left mb-8 font-serif">
          <h2 className="relative inline-block text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl group">
            TOP SELLERS
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300 max-w-md">
            Discover our best-selling items that our customers love the most.
          </p>
        </header>

        {/* Slider Wrapper */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="overflow-x-auto flex gap-6 snap-x snap-mandatory scroll-px-6"
          >
            {products.map((product) => (
              <div
                key={product.id}
                data-aos="fade-up" // AOS animation on each product
                className="snap-start shrink-0 w-64 md:w-80 lg:w-96 border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <a href="#" className="block overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-105 sm:h-[400px] lg:h-[450px]"
                  />
                  <div className="p-4 bg-white dark:bg-gray-800 transition-colors duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-700">
                    <h3 className="text-sm text-gray-700 dark:text-gray-300 font-medium transition-transform duration-300 group-hover:translate-y-1 group-hover:underline">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100 transition-opacity duration-300 group-hover:opacity-80 group-hover:translate-y-1">
                      {product.price}
                    </p>
                  </div>
                </a>
                <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 px-2 py-1 text-xs font-semibold rounded-full shadow-md transition-transform duration-300 group-hover:scale-105">
                  Best Seller
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-2xl p-2 shadow-md focus:outline-none hover:bg-gray-400"
          >
            &larr;
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-2xl p-2 shadow-md focus:outline-none hover:bg-gray-400"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
