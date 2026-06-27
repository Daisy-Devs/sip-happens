import { Button } from "@sip-happens/shared";
import { nomenclature } from "@sip-happens/shared/constants/nomenclature";
import { ArrowRight } from "lucide-react";
import React from "react";

type MenuItem = {
  id: number;
  tag: string;
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    tag: "Signature Blend",
    name: "The Velvet Latte",
    description:
      "Micro-foamed milk infused with Madagascar vanilla and our seasonal single-origin espresso.",
    price: "$6.50",
    image: "/SpecialtyLatte.png",
    featured: true,
  },
  {
    id: 2,
    tag: "",
    name: "Midnight Cold Brew",
    description:
      "Steeped for 18 hours, finished with a vanilla cold-foam crown.",
    price: "",
    image: "/ColdBrew.png",
  },
  {
    id: 3,
    tag: "",
    name: "Artisan Mocha",
    description: "70% dark Tanzanian cacao and velvet milk, dusted with cocoa.",
    price: "",
    image: "/Mocha.png",
  },
];

export default function Selections() {
  const featuredItem = menuItems.find((item) => item.featured) || menuItems[0];

  const otherItems = menuItems.filter((item) => item.id !== featuredItem?.id);

  return (
    <section className="px-5 py-16 bg-[#F8F3EC] sm:px-6 md:px-8 lg:px-10 xl:px-0 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl ">
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
            rightIcon={<ArrowRight size={18} color="#C68B59" />}
          />
        </div>
        {/* Menu Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Featured Item */}
          {featuredItem && (
            <div className="group relative overflow-hidden rounded-3xl h-180 md:h-205 lg:h-225">
              {" "}
              <img
                src={featuredItem.image}
                alt={featuredItem.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1A100A] via-[#1A100A]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <span className="text-[15px] font-medium uppercase tracking-[0.18em] text-[#C68B59]">
                  {featuredItem.tag}
                </span>

                <h3 className="mt-2 headline-lg  text-3xl text-white">
                  {featuredItem.name}
                </h3>

                <p className="mt-2 max-w-sm text-sm text-white body-md ">
                  {featuredItem.description}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="headline-md text-[#C68B59]">
                    {featuredItem.price}
                  </span>

                  <Button variant="dark_white" text="Quick Add" size="sm" />
                </div>
              </div>
            </div>
          )}
          {/* Remaining Items */}
          <div className="grid gap-5">
            {" "}
            {otherItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl"
              >
                {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full md:h-84.25 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />{" "}
                <div className="absolute inset-0 bg-linear-to-t from-[#1A100A] via-[#1A100A]/20 to-transparent" />{" "}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  {" "}
                  <div>
                    {" "}
                    <span className="text-[10px] headline-md uppercase tracking-[0.18em] text-[#C17F4E]">
                      {" "}
                      {item.tag}{" "}
                    </span>{" "}
                    <h3 className="mt-1 body-md text-xl text-white">
                      {" "}
                      {item.name}{" "}
                    </h3>{" "}
                    <p className="mt-1 base text-sm text-white">
                      {" "}
                      {item.description}{" "}
                    </p>{" "}
                  </div>{" "}
                  <span className="font-display text-base text-white">
                    {" "}
                    {item.price}{" "}
                  </span>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
