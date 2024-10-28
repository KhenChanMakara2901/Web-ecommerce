"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/types/Product";

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    fetch("/Data/ProductGrid/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="bg-white dark:bg-dark">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="relative flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 group"
            >
              <Image
                src={product.image}
                alt={product.alt}
                width={500}
                height={300}
                quality={100}
                className="rounded-md transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded">
                {product.badge}
              </div>
              <div className="absolute bottom-4 left-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h2 className="text-3xl font-bold text-gray-950 dark:text-white transform transition-transform duration-300 group-hover:translate-y-0 group-hover:scale-105">
                  {product.title}
                </h2>
                <p className="text-lg text-gray-950 dark:text-white mt-2 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-1">
                  {product.description}
                </p>
                <Link
                  href={product.link}
                  className="bg-black text-white px-4 py-2 mt-4 inline-block rounded hover:bg-gray-800 transition-transform duration-300 group-hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
