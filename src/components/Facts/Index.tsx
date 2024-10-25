import React from "react";

export default function Index() {
  return (
    <section className="bg-white dark:bg-dark">
      <div className="mx-auto w-full max-w-full top-10 px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl text-gray-900 dark:text-white">
          Backed up by real data
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm sm:text-base md:mb-12 lg:mb-16 text-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
        <div className="mx-auto flex w-full max-w-3xl flex-col flex-wrap justify-between gap-5 bg-gray-100 px-16 py-8 sm:flex-row md:gap-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase">Blocks</p>
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">200+</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase">TEMPLATES</p>
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">45</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase">CUSTOMERS</p>
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">1500+</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase">SUPPORT TICKETS</p>
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">890</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
