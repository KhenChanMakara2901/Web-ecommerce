import React, { useEffect } from "react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void; // The prop for closing the popup
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 3000); // Auto-close after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Order Placed!</h2>
        <p className="text-gray-700 dark:text-white mb-4">
          Your order has been successfully placed.
        </p>
        <div className="flex justify-center">
          <div className="loader border-t-4 border-blue-900 border-solid rounded-full w-12 h-12 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};
