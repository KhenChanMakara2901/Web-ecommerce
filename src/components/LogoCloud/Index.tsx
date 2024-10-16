"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Logo } from "@/types/Logo";

export default function Index() {
  const [logos, setLogos] = useState<Logo[]>([]);
  useEffect(() => {
    async function fetchLogos() {
      const response = await fetch("/logos.json");
      const data: Logo[] = await response.json();
      const duplicatedData = [...data, ...data, ...data];
      setLogos(duplicatedData);
    }
    fetchLogos();
  }, []);

  return (
    <div className="bg-white dark:bg-dark py-10 sm:py-12">
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
                quality={100}
                className="max-h-12 w-auto object-contain shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
