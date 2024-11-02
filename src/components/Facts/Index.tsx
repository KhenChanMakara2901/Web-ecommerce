"use client";
import React, { useRef, useEffect, useState } from "react";
import useCountUp from "@/src/hooks/useCountUp";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const blocks = useCountUp(isVisible ? 200 : 0, 2000);
  const templates = useCountUp(isVisible ? 45 : 0, 2000);
  const customers = useCountUp(isVisible ? 1500 : 0, 2000);
  const supportTickets = useCountUp(isVisible ? 890 : 0, 2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white dark:bg-dark">
      <div className="mx-auto w-full max-w-full top-10 px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl text-gray-900 dark:text-white">
          Backed up by real data
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm sm:text-base md:mb-12 lg:mb-16 text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
          purus sit amet luctus magna fringilla urna.
        </p>
        <div className="mx-auto rounded-3xl flex w-full max-w-3xl flex-col flex-wrap justify-between gap-5 bg-gray-100 px-16 py-8 sm:flex-row md:gap-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase">Blocks</p>
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {blocks}+
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase">Templates</p>
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {templates}
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase">Customers</p>
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {customers}+
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase">Support Tickets</p>
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {supportTickets}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
