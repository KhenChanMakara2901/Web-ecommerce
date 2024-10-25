"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { closePopup, addToCart } from "@/src/store/cartSlice";
import Image from "next/image";

export default function OrderPopup() {
  const dispatch = useDispatch();
  const { isPopupOpen, selectedProduct } = useSelector(
    (state: RootState) => state.cart
  );

  if (!isPopupOpen || !selectedProduct) return null;

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
    dispatch(closePopup());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <Image
          src={selectedProduct.image}
          alt={selectedProduct.name}
          width={300}
          height={200}
          className="mb-4 rounded"
        />
        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">
          {selectedProduct.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {selectedProduct.category}
        </p>
        <p className="text-gray-900 dark:text-gray-100 font-semibold">
          ${selectedProduct.price}
        </p>
        <p className="text-yellow-500">{selectedProduct.rating} ⭐</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition-all"
          >
            Confirm Order
          </button>
          <button
            onClick={() => dispatch(closePopup())}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-2 px-4 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
