import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/src/lib/store";
import { CartPopupProps } from "@/src/types/CartPopupProps";
import { removeItem, clearCart } from "@/src/lib/store/cartSlice";

const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (!isOpen) return null;

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-out">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-80 md:w-96 animate-slide-down transform transition-all duration-300 ease-in-out">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in your cart.</p>
        ) : (
          <ul className="space-y-3 max-h-60 overflow-y-auto scrollbar-hide">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-150 ease-in-out"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-gray-600">
                      ${item.price} x {item.quantity}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-600 hover:text-red-800 transition-colors duration-150"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-between mt-6">
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded-lg px-4 py-2 transition duration-200"
            >
              Clear Cart
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-2 transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
