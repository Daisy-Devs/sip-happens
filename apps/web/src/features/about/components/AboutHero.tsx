import { nomenclature } from "@sip-happens/shared/constants/nomenclature";
import Image from "next/image";
import bgAbout from "../../../../public/about/bgAbout.png";

export default function AboutHero() {
  return (
    <div className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
      <Image
        src={bgAbout}
        alt="About Background"
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-[#231005]/40 mix-blend-multiply z-10" />
      <div className="relative z-20 text-center max-w-3xl px-4 text-white">
        <h1 className="text-4xl md:text-4xl headline-xl mb-4 tracking-wide">
          {nomenclature.ABOUT_HEADING}
        </h1>
        <p className="text-sm md:text-base text-stone-200 body-md max-w-xl mx-auto leading-relaxed">
          {nomenclature.ABOUT_PARA}
        </p>
      </div>
    </div>
  );
}
