import React, { useState } from "react";
import { ProductModalProps } from "@/src/types/ProductModalProps";
import { useDispatch } from "react-redux";
import { addItem } from "@/src/lib/store/cartSlice";
import Image from "next/image";

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  product,
  onClose,
  onSubmitOrder,
}) => {
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!isOpen || !product) return null;

  const totalPrice = product.price * quantity;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        size: selectedSize,
        image: product.image,
      })
    );

    // Close the modal
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-800 p-8 rounded-lg max-w-sm w-full max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full p-2"
          onClick={onClose}
          aria-label="Close modal"
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
            className="w-full h-52 object-cover mb-4"
          />
        </picture>

        <form onSubmit={handleSubmitOrder}>
          {[
            {
              type: "text",
              placeholder: "Your name",
              required: true,
            },
            {
              type: "email",
              placeholder: "Your email",
              required: true,
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            },
            {
              component: "textarea",
              placeholder: "Your address",
              required: true,
            },
          ].map((inputProps, index) => (
            <div key={index} className="mb-4">
              {inputProps.component === "textarea" ? (
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder={inputProps.placeholder}
                  required={inputProps.required}
                />
              ) : (
                <input
                  type={inputProps.type}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder={inputProps.placeholder}
                  required={inputProps.required}
                  pattern={inputProps.pattern}
                />
              )}
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white mb-2">
              Size
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              {["XXL", "XL", "L", "M", "S"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Quantity"
              required
            />
          </div>

          <div className="mb-4">
            <div className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              ${totalPrice.toFixed(2)}
            </div>
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
