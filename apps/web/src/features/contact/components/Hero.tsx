import React from "react";
import Image from "next/image";
import coffeeHeader from "../../../../public/coffee-header.png";

const Hero = () => {
  return (
    <section className="relative h-90 w-full overflow-hidden">
      <Image
        src={coffeeHeader}
        alt="Coffee Header Background"
        placeholder="blur"
        priority
        fill
        sizes="100vw"
        className="object-cover object-center z-0"
      />
      <div className="flex w-full h-full bg-[#231005]/30 dark:bg-[#765847]/40 justify-center items-center flex-col">
        <span className="headline-xl text-surface">Get in Touch</span>
        <span className="body-lg text-surface text-center w-lg">
          We&#39;d love to hear from you. Whether it&#39;s a question about our
          beans or just to say hi, our doors are always open.
        </span>
      </div>
    </section>
  );
};

export default Hero;
