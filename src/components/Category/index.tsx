import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandshake, FaHandHoldingDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function Index() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24">
      <div className="mx-auto max-w-full px-2 lg:px-4">
        <div className="mx-auto font-serif mt-3 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center text-center">
            <TbTruckDelivery
              size={100}
              className="max-h-14 w-full object-contain text-blue-900 dark:text-white"
            />
            <h3 className="text-lg font-semibold mt-2 text-blue-900 dark:text-white">
              Free Shipping
            </h3>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col items-center text-center">
            <FaHandshake
              size={100}
              className="max-h-14 w-full object-contain text-blue-900 dark:text-white"
            />
            <h3 className="text-lg font-semibold mt-2 text-blue-900 dark:text-white">
              Secure Payment
            </h3>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col items-center text-center">
            <FaHandHoldingDollar
              size={100}
              className="max-h-14 w-full object-contain text-blue-900 dark:text-white"
            />
            <h3 className="text-lg font-semibold mt-2 text-blue-900 dark:text-white">
              100% Money Back
            </h3>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center text-center">
            <BiSupport
              size={100}
              className="max-h-14 w-full object-contain text-blue-900 dark:text-white"
            />
            <h3 className="text-lg font-semibold mt-2 text-blue-900 dark:text-white">
              Online Support
            </h3>
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center text-center">
            <MdProductionQuantityLimits
              size={100}
              className="max-h-14 w-full object-contain text-blue-900 dark:text-white"
            />
            <h3 className="text-lg font-semibold mt-2 text-blue-900 dark:text-white">
              Product QuantityLimits
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
