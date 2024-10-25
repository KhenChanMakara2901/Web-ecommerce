"use client";
import { useEffect, useState } from "react";
import { MenuItem } from "@/src/types/MenuItem";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openPopup } from "@/src/store/cartSlice";
import OrderPopup from "./OrderPopup";
import OrderSuccessPopup from "./OrderSuccessPopup";

type ProductGridProps = {
  products: MenuItem[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  const [loading, setLoading] = useState(true);
  const [displayedProducts, setDisplayedProducts] = useState<MenuItem[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setDisplayedProducts(products);
      setLoading(false);
    };

    fetchProducts();
  }, [products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-gray-600 dark:text-gray-300">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <>
      <OrderPopup />
      <OrderSuccessPopup />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProducts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No products found</p>
        ) : (
          displayedProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="font-bold text-lg text-gray-700 dark:text-gray-200">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.category}
              </p>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">
                ${product.price}
              </p>
              <p className="text-yellow-500">{product.rating} ⭐</p>
              <button
                onClick={() => dispatch(openPopup(product))}
                className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              >
                <FaShoppingCart />
                Order Now
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
