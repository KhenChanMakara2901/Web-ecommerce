import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    price: "£24.00 GBP",
    imageUrl: "/Product/Men/Men2.jpg",
  },
  {
    id: 2,
    name: "Premium Tee",
    price: "£32.00 GBP",
    imageUrl: "/Product/Men/Men2.jpg",
  },
  {
    id: 3,
    name: "Limited Edition Tee",
    price: "£42.00 GBP",
    imageUrl: "/Product/Men/Men2.jpg",
  },
  {
    id: 4,
    name: "Exclusive Tee",
    price: "£52.00 GBP",
    imageUrl: "/Product/Men/Men2.jpg",
  },
];

export default function TopSeller() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl">
            Top Sellers
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-300 max-w-md mx-auto">
            Discover our best-selling items that our customers love the most.
          </p>
        </header>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="group relative border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
