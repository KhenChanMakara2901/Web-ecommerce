"use client";
import { useState } from "react";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="bg-slate-200 dark:bg-dark flex items-center justify-center min-h-screen  p-4 sm:p-8">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-2xl shadow-2xl transition-all sm:p-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 transition-all">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        <div
          className={`transition-all duration-500 transform ${
            isSignIn
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5 absolute"
          }`}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="block w-full mt-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="block w-full mt-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition duration-200"
            >
              Sign In
            </button>
          </form>
        </div>

        <div
          className={`transition-all duration-500 transform ${
            isSignIn
              ? "opacity-0 translate-x-5 absolute"
              : "opacity-100 translate-x-0"
          }`}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="block w-full mt-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="block w-full mt-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Your password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                required
                className="block w-full mt-1 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>

        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="w-full py-3 font-medium text-blue-600 bg-transparent border border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        >
          {isSignIn ? "Create an Account" : "Already have an account? Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
