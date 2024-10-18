// pages/index.tsx
"use client";
import React, { useState, useEffect } from "react";
import { MenuItem } from "@/src/types/MenuItem";
import { data } from "@/src/components/Data/data";
import { CategoryButtons } from "./CategoryButtons";
import { ProductList } from "./ProductList";
import { ProductModal } from "./ProductModal";
import { SuccessPopup } from "./SuccessPopup";

const categories = ["All", "Men Fashion", "Women Fashion", "Watch", "Belt"];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState<boolean>(false);

  const filteredItems =
    selectedCategory === "All"
      ? data
      : data.filter((item: MenuItem) => item.category === selectedCategory);

  const handleOrderNow = (product: MenuItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsSuccessPopupOpen(true);
    setTimeout(() => {
      setIsSuccessPopupOpen(false);
    }, 5000);
  };
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (isModalOpen || isSuccessPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isSuccessPopupOpen]);

  return (
    <div id="Product" className="bg-white dark:bg-dark">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-extrabold text-center mb-10">
          Featured Collections
        </h1>

        <CategoryButtons
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect} // Use the event handler
        />

        <ProductList items={filteredItems} handleOrderNow={handleOrderNow} />

        <ProductModal
          isOpen={isModalOpen}
          product={selectedProduct}
          onClose={handleCloseModal}
          onSubmitOrder={handleOrderSubmit}
        />

        <SuccessPopup isOpen={isSuccessPopupOpen} />
      </div>
    </div>
  );
}
