"use client";

import { Button } from "@sip-happens/shared";
import { nomenclature } from "@sip-happens/shared/constants/nomenclature";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useGetFeaturedProductsQuery } from "@/store/services/api/productApi";
import ComponentLoader from "../../../../../../packages/shared/components/CompoentsLoader";
import emptyAnimation from "../../../../public/loaders/Coffee.json";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ProductItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  featured: boolean;
  categories?: {
    name: string;
    slug: string;
  };
};

export default function Selections() {
  const router = useRouter();

  const {
    data: apiResponse,
    isLoading,
    isError,
  } = useGetFeaturedProductsQuery({});

  const menuItems: ProductItem[] = apiResponse?.data || [];

  const featuredItem =
    menuItems.find((item) => item.featured && item.image_url) ||
    menuItems.find((item) => item.featured) ||
    menuItems[0];
  const otherItems = menuItems.filter((item) => item.id !== featuredItem?.id);
  console.log("Featured:", featuredItem);

  return (
    <section className="px-5 py-16 bg-surface-container text-on-surface sm:px-6 md:px-8 lg:px-10 xl:px-0 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl text-primary">
              <em className="headline-xl">The</em>{" "}
              <em className="text-5xl headline-md">Selection</em>
            </h2>
            <p className="mt-2 max-w-md text-sm text-on-surface-variant">
              {nomenclature.SELECTION_PARA}
            </p>
          </div>

          <Button
            variant="link"
            text="View Full Menu"
            rightIcon={<ArrowRight size={18} className="text-secondary" />}
            onClick={() => router.push("/menu")}
          />
        </div>

        {menuItems.length === 0 ? (
          <div className="text-center py-15 flex flex-col items-center justify-center">
            <ComponentLoader
              animationData={emptyAnimation}
              width={300}
              height={300}
            />
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:h-auto">
            {featuredItem && (
              <div className="group relative overflow-hidden rounded-3xl h-125 lg:h-full w-full">
                <Image
                  src={featuredItem.image_url || "/placeholder-food.jpg"}
                  alt={featuredItem.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1A100A]/80 via-[#1A100A]/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-10">
                  <span className="text-[13px] font-medium uppercase tracking-[0.18em] text-secondary-fixed">
                    {featuredItem.categories?.name || "Signature Blend"}
                  </span>

                  <h3 className="mt-2 headline-lg text-3xl text-[#FFFFFE]">
                    {featuredItem.name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm text-[#FFFFFE]/90 body-md">
                    {featuredItem.description}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <span className="headline-md text-secondary-fixed">
                      {typeof featuredItem.price === "number"
                        ? `$${featuredItem.price.toFixed(2)}`
                        : featuredItem.price}
                    </span>
                    <Button variant="dark_white" text="Quick Add" size="sm" />
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 h-125 lg:h-full">
              {otherItems.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl h-full w-full"
                >
                  <img
                    src={item.image_url || "/placeholder-food.jpg"} 
                    alt={item.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1A100A]/70 via-[#1A100A]/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                    <h3 className="body-md text-xl font-medium text-[#FFFFFE]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#FFFFFE]/80 max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
