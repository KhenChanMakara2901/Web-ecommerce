"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Index() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    async function fetchLogos() {
      const response = await fetch("/logos.json");
      const data = await response.json();
      const duplicatedData = [...data, ...data, ...data];
      setLogos(duplicatedData);
    }
    fetchLogos();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden mt-10">
          <div className="flex space-x-8 items-center animate-scroll">
            {logos.map((logo, index) => (
              <Image
                key={index}
                alt={logo.alt}
                src={logo.src}
                width={logo.width}
                height={logo.height}
                className="max-h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
