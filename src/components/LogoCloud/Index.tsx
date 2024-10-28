"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Logo } from "@/src/types/Logo";

export default function Index() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function fetchLogos() {
      const response = await fetch("/logos.json");
      const data: Logo[] = await response.json();

      const duplicatedData = [...data, ...data, ...data];
      setLogos(duplicatedData);
    }
    fetchLogos();
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 rounded-3xl">
      <div className="relative overflow-hidden mt-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div
          className={`flex flex-nowrap space-x-8 items-center ${
            isPaused ? "animate-none" : "animate-scroll"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            animationDuration: "100s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            whiteSpace: "nowrap",
          }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                alt={logo.alt}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                quality={100}
                className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
