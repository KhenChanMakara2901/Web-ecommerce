"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { data } from "@/src/components/Data/data";
import { MenuItem } from "@/src/types/MenuItem";

interface SearchButtonProps {
  isOpen: boolean;
  toggleSearch: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  isOpen,
  toggleSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<MenuItem[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term) {
      const results = data.filter(
        (item) =>
          item.name.toLowerCase().includes(term.toLowerCase()) ||
          item.category.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="relative flex items-center gap-4">
      <button
        onClick={toggleSearch}
        aria-label="Toggle Search Bar"
        className="flex items-center justify-center p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200 shadow-lg transform hover:scale-105"
      >
        <FaSearch size={18} className="text-white" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={toggleSearch}
              aria-label="Close Search Bar"
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition duration-200"
            >
              ✕
            </button>

            <div className="flex mb-4" data-aos="fade-down-left">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full sm:w-3/4 px-4 py-3 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-200"
              />
              <button
                onClick={() => handleSearch(searchTerm)}
                className="px-6 py-3 rounded-r-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition duration-200"
              >
                Search
              </button>
            </div>

            {searchResults.length > 0 ? (
              <div className="mt-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-gray-800 dark:text-gray-200 font-medium">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {product.category}
                      </p>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      ${product.price}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              searchTerm && (
                <div className="mt-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-4 text-center text-gray-600 dark:text-gray-400">
                  No products found
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchButton;
