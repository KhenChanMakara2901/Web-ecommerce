import React from "react";

interface CategoryButtonsProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void; // Function handler instead of state setter
}

export const CategoryButtons: React.FC<CategoryButtonsProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)} // Handle category select
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md ${
            selectedCategory === category
              ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105"
              : "bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-800 hover:bg-gray-200 hover:dark:bg-gray-600 hover:shadow-lg"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};
