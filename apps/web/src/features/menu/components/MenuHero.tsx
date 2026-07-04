import { Input } from "@sip-happens/shared";
import { Search } from "lucide-react";
import { HeroProps } from "../type";
import { nomenclature } from "@sip-happens/shared/constants/nomenclature";

export default function MenuHero() {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-6 mb-5">
      <h1 className="headline-xxl text-4xl md:text-5xl tracking-tight text-primary">
        {nomenclature.MENU_HEADING}
      </h1>
      <p className="text-on-surface-variant text-sm md:text-base base leading-relaxed">
        {nomenclature.MENU_PARA}{" "}
      </p>
    </div>
  );
}
