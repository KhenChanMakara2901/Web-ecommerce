import React from "react";
import { CartPopupProps } from "@/src/types/CartPopupProps";

const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-64">
        <h2 className="text-lg font-bold mb-2">Shopping Cart</h2>
        <p>No items in your cart.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white rounded px-2 py-1"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
