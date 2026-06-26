import { Button } from "@sip-happens/shared";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#C17F4E]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2A1C14]/5 blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="mt-7 font-display text-4xl leading-[1.15] tracking-tight md:text-6xl">
          <em className="font-bold">Sip Happens.</em>{" "}
          <span className="text-[#C17F4E]">Great</span>
          <br className="hidden md:block" />
          <span className="text-[#C17F4E]">Coffee</span>{" "}
          <em className="font-bold">Happens Here.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-[#2A1C14]/65 md:text-lg">
          Step into a world where every bean tells a story. Experience artisanal
          brews in a space designed for modern connection.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="brown" text="Explore Our Menu" size="lg" />
          <Button variant="light_brown" text="Our Location" size="lg" />
        </div>
      </div>
    </div>
  );
}
