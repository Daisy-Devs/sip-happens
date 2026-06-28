import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The oat milk latte here is unparalleled. It's not just coffee, it's a productivity ritual.",
    name: "Sarah Mitchell",
    role: "Content Creator",
    avatar: "/SaraMitchell.png",
  },
  {
    quote:
      "The most sophisticated pour-over menu I've encountered. The Ethiopian roast has such vivid berry notes.",
    name: "David Lin",
    role: "Coffee Connoisseur",
    avatar: "/SaraMitchell.png",
  },
  {
    quote:
      "Finally, a brand that marries ethical sourcing with a high-end aesthetic. My favorite morning spot.",
    name: "Marcus Thorne",
    role: "Architect",
    avatar: "/SaraMitchell.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#2A1C14] px-6 py-20 text-[#F5EFE6] md:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl md:text-4xl">
          <em className="headline-xl">Voices of the</em>
          {"  "}
          <span className="text-[#C68B59] text-5xl headline-md">
            {" "}
            Community
          </span>
        </h2>

        <div className="mt-16 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center">
          {testimonials.map((t, index) => {
            const isMiddle = index === 1;

            return (
              <div
                key={t.name}
                className={`p-10 h-70 
          relative rounded-3xl border border-[#F5EFE6]/10 bg-[#F5EFE6]/5 text-left
          transition-all duration-500
          ${
            isMiddle
              ? "z-20 scale-105 -translate-y-6 shadow-2xl md:w-90"
              : "z-10 scale-95 translate-y-6 opacity-90 md:w-82.5"
          }
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
                  {" "}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-9 w-9 rounded-full object-cover"
                  />{" "}
                  <div>
                    {" "}
                    <p className="text-sm font-medium">{t.name}</p>{" "}
                    <p className="text-xs text-[#F5EFE6]/50">{t.role}</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
