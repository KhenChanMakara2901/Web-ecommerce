"use client";
import React, { useState } from "react";
import { MenuItem } from "@/types/MenuItem";
import { data } from "@/components/Data/data";
const categories = ["All", "Men Fashion", "Women Fashion", "burger", "chicken"];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const filteredItems =
    selectedCategory === "All"
      ? data
      : data.filter((item: MenuItem) => item.category === selectedCategory);

  const handleOrderNow = (product: MenuItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsSuccessPopupOpen(true);
    setTimeout(() => {
      setIsSuccessPopupOpen(false);
    }, 5000);
  };

  return (
    <div id="Product" className="bg-white dark:bg-dark">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text shadow-sm dark:shadow-lg dark:bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 transition-all duration-300 ease-in-out">
          Featured Collections
        </h1>

        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-lg"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Render filtered items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <picture>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                  <p className="text-gray-600 text-xl font-extrabold">
                    Price: {item.price}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-yellow-500 font-semibold">
                      Rating: {item.rating}⭐
                    </span>
                    <button
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      onClick={() => handleOrderNow(item)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No items available in this category
            </p>
          )}
        </div>

        {/* Modal for Order Form */}
        {isModalOpen && selectedProduct && (
          <div className="fixed mt-5 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg w-full">
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full p-2"
                onClick={handleCloseModal}
              >
                ✖
              </button>
              <h2 className="text-2xl font-bold mb-4">
                Order: {selectedProduct.name}
              </h2>
              <picture>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-56 object-cover mb-4"
                />
              </picture>
              <form onSubmit={handleOrderSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Address
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Your address"
                    required
                  />
                </div>

                {/* Product Size Field */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Size
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-950 w-full"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {isSuccessPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full text-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                Order Placed!
              </h2>
              <p className="text-gray-700 dark:text-white mb-4">
                Your order has been successfully placed.We will contact you
                shortly.
              </p>

              {/* Spinning Loader */}
              <div className="flex justify-center">
                <div className="loader border-t-4 border-blue-900 border-solid rounded-full w-12 h-12 animate-spin"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
