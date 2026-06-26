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
    tag: "Cold Brew",
    name: "Midnight Cold Brew",
    description:
      "Steeped for 18 hours, finished with a vanilla cold-foam crown.",
    price: "$5.75",
    image:
      "/ColdBrew.png",
  },
  {
    id: 3,
    tag: "House Favorite",
    name: "Artisan Mocha",
    description:
      "70% dark Tanzanian cacao and velvet milk, dusted with cocoa.",
    price: "$6.00",
    image:
      "Mocha.png",
  },
];

export default function Selections() {
  const featuredItem =
    menuItems.find((item) => item.featured) || menuItems[0];

  const otherItems = menuItems.filter(
    (item) => item.id !== featuredItem?.id
  );

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              <em className="italic">The</em> Selection
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#2A1C14]/60">
              Our baristas&apos; handpicked favorites, roasted to perfection in
              small batches.
            </p>
          </div>

          <a
            href="/menu"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#9C6638] hover:underline"
          >
            View Full Menu
          </a>
        </div>

        {/* Menu Grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Featured Item */}
          {featuredItem && (
            <div className="group relative overflow-hidden rounded-3xl h-[650px] md:h-[700px]">
              <img
                src={featuredItem.image}
                alt={featuredItem.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1A100A] via-[#1A100A]/20 to-transparent" />

              <div className="absolute right-6 top-6 flex items-center gap-3">
                <span className="font-display text-lg text-[#F5EFE6]">
                  {featuredItem.price}
                </span>

                <button
                  aria-label={`Quick add ${featuredItem.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5EFE6] text-[#2A1C14] transition-colors hover:bg-[#C17F4E]"
                >
                  +
                </button>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#C17F4E]">
                  {featuredItem.tag}
                </span>

                <h3 className="mt-2 font-display text-3xl text-[#F5EFE6]">
                  {featuredItem.name}
                </h3>

                <p className="mt-2 max-w-sm text-sm text-[#F5EFE6]/75">
                  {featuredItem.description}
                </p>
              </div>
            </div>
          )}

          {/* Remaining Items */}
          <div className="grid gap-5">
            {otherItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full md:h-84.25 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1A100A] via-[#1A100A]/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#C17F4E]">
                      {item.tag}
                    </span>

                    <h3 className="mt-1 font-display text-lg text-[#F5EFE6]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#F5EFE6]/70">
                      {item.description}
                    </p>
                  </div>

                  <span className="font-display text-base text-[#F5EFE6]">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}