"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/lib/store";
import { hideOrderSuccess } from "@/src/lib/store/cartSlice";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function OrderSuccessPopup() {
  const dispatch = useDispatch();
  const { isOrderSuccess } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (isOrderSuccess) {
      const timer = setTimeout(() => dispatch(hideOrderSuccess()), 5000);
      return () => clearTimeout(timer);
    }
  }, [isOrderSuccess, dispatch]);

  if (!isOrderSuccess) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-4 px-8 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in z-50">
      <AiOutlineCheckCircle className="text-2xl" />
      <p className="font-semibold">Order placed successfully!</p>
    </div>
  );
}
