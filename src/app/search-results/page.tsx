"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { data } from "@/src/components/Data/Product";
import { MenuItem } from "@/src/types/MenuItem";

const SearchResultsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchResults, setSearchResults] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (query) {
      const results = data.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
        Search Results for {query}
      </h1>

      {searchResults.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  {product.category}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No products found
        </p>
      )}
    </div>
  );
};

export default SearchResultsPage;
