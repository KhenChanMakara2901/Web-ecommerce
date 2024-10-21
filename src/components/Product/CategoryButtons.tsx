"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CategoryButtonsProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const CategoryButtons: React.FC<CategoryButtonsProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6">
      {categories.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          No categories available
        </p>
      ) : (
        categories.map((category, index) => {
          const formattedCategory =
            category.charAt(0).toUpperCase() + category.slice(1);
          return (
            <button
              key={category}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay each button animation slightly
              onClick={() => onCategorySelect(category)}
              aria-pressed={selectedCategory === category}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-800 hover:bg-gray-200 hover:dark:bg-gray-600 hover:shadow-lg hover:scale-105"
              }`}
            >
              {formattedCategory}
            </button>
          );
        })
      )}
    </div>
  );
};
