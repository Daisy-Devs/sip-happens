"use client";

import MenuFilters from "@/features/menu/components/MenuFilters";
import MenuGrid from "@/features/menu/components/MenuGrid";
import MenuHero from "@/features/menu/components/MenuHero";
import { useState, useMemo } from "react";
import { MenuItem } from "../../features/menu/type"; 

const MENU_DATA: MenuItem[] = [
  {
    id: "1",
    name: "Velvet Latte",
    price: "$5.25",
    description:
      "Triple-shot espresso with micro-foam and a hint of organic Madagascar vanilla.",
    image: "/menu/LatteArt.png",
    category: "Hot Coffee",
    badge: "Featured",
  },
  {
    id: "2",
    name: "Origin Pour-Over",
    price: "$6.50",
    description:
      "Single-origin beans rotated weekly, hand-poured for ultimate clarity and floral notes.",
    image: "/menu/PourOver.png",
    category: "Hot Coffee",
  },
  {
    id: "3",
    name: "Lavender Mist",
    price: "$6.75",
    description:
      "Cold brew topped with house-made lavender vanilla cold foam and honey drizzle.",
    image: "/menu/Lavender.png",
    category: "Iced Coffee",
    badge: "Seasonal",
  },
  {
    id: "4",
    name: "Honey Glazed Croissant",
    price: "$4.50",
    description:
      "Buttery, 72-layer fermented dough finished with organic mountain honey.",
    image: "/menu/Croissant.png",
    category: "Pastries",
  },
  {
    id: "5",
    name: "Ceremonial Matcha",
    price: "$5.75",
    description:
      "Stone-ground Uji matcha whisked with your choice of steamed plant-based milk.",
    image: "/menu/Matcha.png",
    category: "Specialty Drinks",
  },
  {
    id: "6",
    name: "Marble Cold Brew",
    price: "$5.50",
    description:
      "18-hour steep cold brew with a swirl of salted caramel and whole cream.",
    image: "/menu/IcedCoffee.png",
    category: "Iced Coffee",
  },
  {
    id: "7",
    name: "Signature Sourdough",
    price: "$12.00",
    description:
      "Hand-stretched sourdough, smashed avocado, heirloom tomatoes, and organic feta.",
    image: "/menu/AvocadoToast.png",
    category: "Sandwiches",
    badge: "Best Seller",
  },
  {
    id: "8",
    name: "Espresso Tiramisu",
    price: "$8.50",
    description:
      "Layers of ladyfingers soaked in our signature triple-shot espresso and whipped mascarpone.",
    image: "/menu/Tiramisu.png",
    category: "Desserts",
  },
];

const CATEGORIES = [
  "All Items",
  "Hot Coffee",
  "Iced Coffee",
  "Specialty Drinks",
  "Tea",
  "Pastries",
  "Sandwiches",
  "Desserts",
];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Items");

  const filteredItems = useMemo(() => {
    return MENU_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === "All Items" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#2C1A11]">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-12">
        <MenuHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <MenuFilters
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <MenuGrid items={filteredItems} />
      </div>
    </div>
  );
}
