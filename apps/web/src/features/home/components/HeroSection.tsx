import { Button } from "@sip-happens/shared";
import { ArrowRight } from "lucide-react";
import { nomenclature } from "../../../../../../packages/shared/constants/nomenclature";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-7 font-display text-4xl leading-[1.15] tracking-tight md:text-6xl">
            {" "}
            <em className="headline-xxl">Sip Happens.</em>{" "}
            <span className="text-[#C68B59] headline-xxl">Great</span>{" "}
            <br className="hidden md:block" />{" "}
            <span className="text-[#C68B59] headline-xxl">Coffee</span>{" "}
            <em className="headline-xxl">Happens Here.</em>{" "}
          </h1>

          <p className="mx-auto mt-6 max-w-xs text-sm leading-7 base text-on-surface-variant sm:max-w-lg sm:text-base md:mt-8 md:max-w-2xl md:text-lg lg:text-xl">
            {nomenclature.HOME_PARA}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
            <Button
              variant="brown"
              size="lg"
              text="Explore Our Menu"
              rightIcon={<ArrowRight size={18} color="#fff" />}
              className="w-full sm:w-auto"
            />

            <Button
              variant="light_white"
              size="lg"
              text="Our Location"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
