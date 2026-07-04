"use client";

import { Button } from "@sip-happens/shared";
import { nomenclature } from "@sip-happens/shared/constants/nomenclature";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="w-full bg-primary text-white py-20 px-4 text-center">
      <div className="max-w-2xl mx-auto space-y-6 ">
        <h2 className="headline-xl  text-3xl md:text-4xl tracking-wide leading-tight">
          {nomenclature.CTA_HEADING}
        </h2>
        <p className="text-white/80 text-sm md:text-base base max-w-md mx-auto leading-relaxed">
          {nomenclature.CTA_PARA}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
          <Button text="Visit Our Café" variant="light_brown" size="sm" onClick={() => router.push("/contact")} />
          <Button text="Explore the Menu" variant="dark_brown" size="sm" onClick={() => router.push("/menu")}/>
        </div>
      </div>
    </section>
  );
}
