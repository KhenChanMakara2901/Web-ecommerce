"use client";
import { useState } from "react";
import ProductFilterSidebar from "./ProductFilterSidebar";
import ProductGrid from "./ProductGrid";
import { MenuItem } from "@/src/types/MenuItem";
import { data } from "@/src/components/Data/data";

export default function page() {
  const [filteredProducts, setFilteredProducts] = useState<MenuItem[]>(data);

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-dark">
      <aside className="w-full md:w-1/5 p-4">
        <ProductFilterSidebar setFilteredProducts={setFilteredProducts} />
      </aside>
      <main className="w-full md:w-3/4 p-4">
        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  );
}
