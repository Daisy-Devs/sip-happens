"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryItem, GalleryCategory } from "../types";

const mockGalleryData: GalleryItem[] = [
  {
    id: "1",
    media_url: "/menu/LatteArt.png",
    caption: "Our sunlit sanctuary",
    category: "interior",
    permalink: "https://instagram.com",
  },
  {
    id: "2",
    media_url: "/images/food-1.jpg",
    caption: "Freshly baked croissants",
    category: "food",
  },
  {
    id: "3",
    media_url: "/images/interior-2.jpg",
    caption: "The espresso station",
    category: "interior",
  },
  {
    id: "4",
    media_url: "/images/drinks-1.jpg",
    caption: "Morning latte art",
    category: "drinks",
  },
  {
    id: "5",
    media_url: "/images/customer-1.jpg",
    caption: "Productive afternoons",
    category: "customer",
  },
  {
    id: "6",
    media_url: "/images/drinks-2.jpg",
    caption: "Iced caramel macchiato",
    category: "drinks",
  },
];

const categories: GalleryCategory[] = [
  { id: "all", label: "All Moments" },
  { id: "interior", label: "Interior" },
  { id: "drinks", label: "Drinks" },
  { id: "food", label: "Food" },
  { id: "customer", label: "Customer Moments" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? mockGalleryData
      : mockGalleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="">
      <section className="max-w-3xl mx-auto text-center px-4 pt-16 pb-12">
        <h1 className="headline-xxl text-4xl md:text-5xl tracking-tight text-primary mb-6">
          Our Visual Story
        </h1>
        <p className="text-on-surface-variant base text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Step inside our sanctuary of caffeine and craft. Explore the textures,
          the light, and the moments that make Sip Happens more than just a
          café.
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-3 px-4 mb-16 max-w-4xl mx-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2 text-sm rounded-full transition-all duration-200 font-medium ${
              activeCategory === category.id
                ? "bg-secondary-container text-on-secondary-container shadow-sm"
                : "bg-[#ECE7E1] text-neutral-700 hover:bg-[#E2DDD6]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const cardContent = (
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer">
                <Image
                  src={item.media_url}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Clean caption display when hovered */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-light line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
            return item.permalink ? (
              <a
                key={item.id}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {cardContent}
              </a>
            ) : (
              <div key={item.id}>{cardContent}</div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
