import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/coffee-header.png')] bg-cover bg-center bg-no-repeat h-90">
      <div className="flex w-full h-full bg-[#231005]/30 dark:bg-[#765847]/40 justify-center items-center flex-col">
        <span className="headline-xl text-surface">Get in Touch</span>
        <span className="body-lg text-surface text-center w-lg">
          We'd love to hear from you. Whether it's a question about our beans or
          just to say hi, our doors are always open.
        </span>
      </div>
    </section>
  );
};

export default Hero;
