import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import mitchellAvatar from "../../../../public/SaraMitchell.png";

const testimonials = [
  {
    quote:
      "The oat milk latte here is unparalleled. It's not just coffee, it's a productivity ritual.",
    name: "Sarah Mitchell",
    role: "Content Creator",
    avatar: mitchellAvatar,
  },
  {
    quote:
      "The most sophisticated pour-over menu I've encountered. The Ethiopian roast has such vivid berry notes.",
    name: "David Lin",
    role: "Coffee Connoisseur",
    avatar: mitchellAvatar,
  },
  {
    quote:
      "Finally, a brand that marries ethical sourcing with a high-end aesthetic. My favorite morning spot.",
    name: "Marcus Thorne",
    role: "Architect",
    avatar: mitchellAvatar,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#2A1C14] px-6 py-20 text-[#F5EFE6] md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl md:text-4xl">
          <em className="block md:inline font-serif italic text-2xl md:text-3xl opacity-80">
            Voices of the
          </em>{" "}
          <span className="text-[#C68B59] text-4xl md:text-5xl font-bold tracking-tight block md:inline mt-2 md:mt-0">
            Community
          </span>
        </h2>

        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-center md:gap-6 lg:gap-8">
          {testimonials.map((t, index) => {
            const isMiddle = index === 1;

            return (
              <div
                key={t.name}
                className={`w-full max-w-md md:max-w-sm p-8 md:p-10 min-h-70 
                  relative rounded-3xl border border-[#F5EFE6]/10 bg-[#F5EFE6]/5 text-left
                  transition-all duration-300 ease-in-out cursor-default
                  
                  
                  hover:scale-[1.03] hover:border-[#C68B59]/40 hover:bg-[#F5EFE6]/10 hover:shadow-xl
                  
                  
                  ${
                    isMiddle
                      ? "z-20 md:scale-105 md:-translate-y-4 shadow-2xl border-[#C68B59]/20"
                      : "z-10 md:scale-95 md:translate-y-2 opacity-90"
                  }
                  
                  md:hover:scale-105 md:hover:-translate-y-4
                `}
              >
                <div className="flex gap-0.5 text-[#C17F4E]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="mt-4 font-display text-base italic leading-relaxed text-[#F5EFE6]/90">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    placeholder="blur"
                    width={36}
                    height={36}
                    className="rounded-full object-cover border border-[#F5EFE6]/20"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#F5EFE6]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[#F5EFE6]/50">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
