"use client";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Notification from "./Notification";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

  const handleSuccess = () => {
    setMessage(isSignIn ? "Sign In Successful!" : "Sign Up Successful!");
    setTimeout(() => {
      setShowNotification(true);
    }, 6000);
  };

  return (
    <div className="bg-slate-200 dark:bg-dark flex items-center justify-center min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-2xl shadow-2xl transition-all sm:p-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 transition-all">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {isSignIn ? (
          <SignInForm onSuccess={handleSuccess} />
        ) : (
          <SignUpForm onSuccess={handleSuccess} />
        )}

        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="w-full py-3 font-medium text-blue-600 bg-transparent border border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          {isSignIn ? "Create an Account" : "Already have an account? Sign In"}
        </button>
      </div>

      {showNotification && (
        <Notification
          message={message}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default AuthForm;
