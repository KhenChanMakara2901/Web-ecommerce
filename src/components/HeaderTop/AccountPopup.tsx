import React from "react";
import { FaUser, FaShoppingBag, FaCog, FaSignOutAlt } from "react-icons/fa";
import { AccountPopupProps } from "@/src/types/AccountPopupProps";
import Link from "next/link";

const AccountPopup: React.FC<AccountPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
          <FaUser className="text-blue-500" />
          My Account
        </h2>
        <p className="text-sm mb-2 text-gray-600">
          Welcome to your account details.
        </p>
        <ul className="text-sm mb-4 space-y-3">
          <Link
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors"
          >
            <FaUser className="text-gray-500" />
            Profile
          </Link>
          <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
            <FaShoppingBag className="text-gray-500" />
            Orders
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
            <FaCog className="text-gray-500" />
            Settings
          </li>
          <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
            <FaSignOutAlt className="text-gray-500" />
            Log Out
          </li>
        </ul>
        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AccountPopup;
