"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/lib/store";
import { closePopup, addToCart } from "@/src/lib/store/cartSlice";
import Image from "next/image";

export default function OrderPopup() {
  const dispatch = useDispatch();
  const { isPopupOpen, selectedProduct } = useSelector(
    (state: RootState) => state.cart
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
    size: "M",
  });

  if (!isPopupOpen || !selectedProduct) return null;

  const handleAddToCart = () => {
    const orderData = {
      ...selectedProduct,
      customerInfo: formData,
      totalPrice: selectedProduct.price * formData.quantity,
    };

    dispatch(addToCart(orderData));
    dispatch(closePopup());
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      quantity: 1,
      size: "M",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "quantity" ? Math.max(1, parseInt(value) || 1) : value,
    }));
  };
  const totalPrice = selectedProduct.price * formData.quantity;

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
          Price per item: ${selectedProduct.price}
        </p>
        <p className="text-yellow-500">{selectedProduct.rating} ⭐</p>
        <p className="text-gray-900 dark:text-gray-100 font-bold mt-2">
          Total Price: ${totalPrice}
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            required
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            min="1"
            required
          />
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          >
            <option value="S">Size S</option>
            <option value="M">Size M</option>
            <option value="L">Size L</option>
            <option value="XL">Size XL</option>
          </select>
        </form>

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
