import React, { useState } from "react";
import { ProductModalProps } from "@/src/types/ProductModalProps";

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  product,
  onClose,
  onSubmitOrder,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("Medium");

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed mt-0 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full p-2"
          onClick={onClose}
          autoFocus
        >
          ✖
        </button>
        <h2 id="modal-title" className="text-2xl font-bold mb-4">
          Order: {product.name}
        </h2>
        <picture>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover mb-4"
          />
        </picture>
        <form onSubmit={onSubmitOrder}>
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
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
  );
};
