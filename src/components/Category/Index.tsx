"use client";
import React, { useEffect } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandshake, FaHandHoldingDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    Icon: TbTruckDelivery,
    title: "Free Shipping",
    description: "We deliver your products for free across the country.",
  },
  {
    Icon: FaHandshake,
    title: "Secure Payment",
    description: "Your payment information is safe with us.",
  },
  {
    Icon: FaHandHoldingDollar,
    title: "100% Money Back",
    description: "Get your money back within 30 days if you're not satisfied.",
  },
  {
    Icon: BiSupport,
    title: "Online Support",
    description: "24/7 customer support for any queries you may have.",
  },
  {
    Icon: MdProductionQuantityLimits,
    title: "Product Quantity Limits",
    description: "Fair limits on high-demand products to ensure availability.",
  },
];

export default function Index() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-gray-800 py-5 sm:py-10">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
        <div className="grid gap-y-8 sm:gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 sm:gap-x-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-4"
              data-aos="fade-up"
            >
              <span
                aria-hidden="true"
                className="flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full transition-transform duration-300 hover:scale-110"
              >
                <feature.Icon
                  size={40}
                  className="text-blue-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-300"
                />
              </span>
              <h3
                className="text-lg font-semibold text-blue-900 dark:text-white bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-lg transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300"
                aria-label={feature.title}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
