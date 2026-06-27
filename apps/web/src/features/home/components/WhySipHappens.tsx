import React from "react";
import { Leaf, Coffee, Wifi } from "lucide-react";
import { Badge, Input } from "@sip-happens/shared";

const features = [
  {
    icon: Leaf,
    title: "Ethically Sourced",
    description:
      "Direct-trade partnerships that ensure transparency and fairness at every step of the journey.",
  },
  {
    icon: Coffee,
    title: "Artisan Roasting",
    description:
      "Our in-house master roasters bring out the unique soul of every bean through small-batch precision.",
  },
  {
    icon: Wifi,
    title: "Modern Sanctuary",
    description:
      "Thoughtfully designed spaces with gigabit fiber and ergonomic comfort for the modern creative.",
  },
];

export const WhySipHappens = () => {
  return (
    <section className="px-6 py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto text-[#C68B59] text-md">THE EXPERIENCE</div>
        <h2 className=" font-display text-3xl md:text-4xl text-primary">
          <em className="headline-xl">Why</em>{" "}
          <em className='text-5xl headline-md'>
            {" "}
            Sip Happens?
          </em>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-on-surface-variant">
          Beyond the brew, we focus on the ritual. Every detail is meticulously
          curated to elevate your daily moment of pause.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-3 ">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="
    flex flex-col items-center rounded-2xl
    bg-white/80 p-10 text-center text-primary
    shadow-[0_8px_30px_rgba(42,28,20,0.08)]
    hover:shadow-[0_16px_45px_rgba(42,28,20,0.14)]
    hover:-translate-y-2
    transition-all duration-300
  "
              >
                {" "}
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-container text-[#C68B59]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg">{feature.title}</h3>
                <p className="mt-2 max-w-55 text-sm text-primary">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
