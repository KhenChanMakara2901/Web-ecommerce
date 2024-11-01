"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
interface SearchButtonProps {
  isOpen: boolean;
  toggleSearch: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  isOpen,
  toggleSearch,
}) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm) {
      router.push(`/search-results?query=${encodeURIComponent(searchTerm)}`);
      toggleSearch();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative flex items-center gap-3">
      <button
        onClick={toggleSearch}
        aria-label="Toggle Search Bar"
        className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200 shadow-md transform hover:scale-110"
      >
        <FaSearch size={18} className="text-white" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1800"
        >
          <button
            onClick={toggleSearch}
            aria-label="Close Search Bar"
            className="absolute top-20 right-3 text-white dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
          >
            <MdClose size={30} />
          </button>
          <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-3xl p-6 relative">
            <div className="flex mb-6 sm:mb-8">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full sm:w-3/4 px-4 py-3 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
              />
              <button
                onClick={handleSearch}
                className="flex items-center justify-center px-4 py-3 rounded-r-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition"
              >
                <FaSearch size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchButton;
