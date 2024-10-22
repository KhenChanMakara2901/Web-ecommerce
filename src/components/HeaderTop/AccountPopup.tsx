import React from "react";
import { AccountPopupProps } from "@/src/types/AccountPopupProps";

const AccountPopup: React.FC<AccountPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-bold mb-4">My Account</h2>
        <p className="text-sm mb-2">Welcome to your account details.</p>
        <ul className="text-sm mb-4">
          <li>- Profile</li>
          <li>- Orders</li>
          <li>- Settings</li>
          <li>- Log Out</li>
        </ul>
        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white rounded px-3 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AccountPopup;
