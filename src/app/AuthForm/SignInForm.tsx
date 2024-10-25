"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SignInForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
    setTimeout(() => {
      router.push("/");
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
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
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
      <button
        type="submit"
        className="w-full py-4 font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition duration-200"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
