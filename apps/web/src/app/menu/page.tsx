"use client";

import React, { useState, useEffect } from "react";
import MenuFilters from "../../features/menu/components/MenuFilters";
import MenuGrid from "../../features/menu/components/MenuGrid";
import {
  useGetUserProductsQuery,
  useGetCategoryQuery,
} from "@/store/services/api/productApi";
import { CategoryItem } from "../../features/menu/type";
import MenuHero from "@/features/menu/components/MenuHero";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const { data: categoriesResponse, isLoading: categoriesLoading } =
    useGetCategoryQuery({});

  const {
    data: productsResponse,
    isLoading: productsLoading,
    isFetching,
  } = useGetUserProductsQuery({
    search: debouncedSearch,
    category: activeCategory,
    page,
  });

  const categoriesList = categoriesResponse?.data?.categories || [];
  const productsList = productsResponse?.data?.products || [];
  const pagination = productsResponse?.data?.pagination;

  const validCategories = categoriesList.filter((category: CategoryItem) => {
    if (!category) return false;
    return category.productCount === undefined || category.productCount > 0;
  });

  const transformedCategories = [
    { id: "all", name: "all" },
    ...validCategories,
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <MenuHero />

      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
          className="w-full px-4 py-2.5 rounded-full border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary bg-on-primary text-on-surface"
        />
      </div>

      <div className="mb-10">
        {categoriesLoading ? (
          <div className="h-10 w-full bg-stone-100 animate-pulse rounded-full" />
        ) : (
          <MenuFilters
            categories={transformedCategories}
            activeCategory={activeCategory}
            onCategoryChange={(name) => {
              setActiveCategory(name);
              setPage(1);
            }}
          />
        )}
      </div>

      <div
        className={
          isFetching || productsLoading ? "opacity-60 transition-opacity" : ""
        }
      >
        {productsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-80 w-full bg-stone-100 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <MenuGrid items={productsList} />
        )}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="px-4 py-2 border rounded-full text-xs disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs text-stone-500">
            Page {pagination.currentPage} of {pagination.totalPages}
          </span>
          <button
            disabled={page === pagination.totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 border rounded-full text-xs disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
