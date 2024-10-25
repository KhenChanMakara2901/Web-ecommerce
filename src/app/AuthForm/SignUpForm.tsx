"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUpForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful sign-up
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSuccess();
    setTimeout(() => {
      router.push("/"); // Redirect to home page after sign-up
    }, 3000);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
  );
};

export default SignUpForm;
