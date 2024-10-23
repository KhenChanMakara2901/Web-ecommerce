"use client";
import { useState, useEffect } from "react";
import { MenuItem } from "@/src/types/MenuItem";
import { data } from "@/src/components/Data/data";
import AOS from "aos";
import "aos/dist/aos.css";

type FilterProps = {
  setFilteredProducts: (products: MenuItem[]) => void;
};

export default function ProductFilterSidebar({
  setFilteredProducts,
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>([0, 300]);
  const [rating, setRating] = useState<number>(0);

  const categories = Array.from(new Set(data.map((item) => item.category)));

  const handleFilterChange = () => {
    const filtered = data.filter((product) => {
      return (
        (selectedCategory ? product.category === selectedCategory : true) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.rating >= rating
      );
    });
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full md:w-72 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
      data-aos="zoom-out-right"
    >
      <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Filter Products
      </h3>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Rating || <span className="text-xs">Note:Tab Double Click</span>
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((rate) => (
            <button
              key={rate}
              aria-pressed={rating === rate}
              className={`px-4 py-2 rounded-full transition-colors duration-300 shadow-md ${
                rating === rate
                  ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white scale-105"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => {
                setRating(rate);
                handleFilterChange();
              }}
            >
              {rate}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Category
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 transition-all"
          value={selectedCategory || ""}
          onChange={(e) => {
            setSelectedCategory(e.target.value || null);
            handleFilterChange();
          }}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Price Range
        </label>
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min={0}
          max={300}
          value={priceRange[1]}
          onChange={(e) => {
            setPriceRange([0, Number(e.target.value)]);
            handleFilterChange();
          }}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
      <button
        onClick={handleFilterChange}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none transition-all"
      >
        Apply Filters
      </button>
    </div>
  );
}
