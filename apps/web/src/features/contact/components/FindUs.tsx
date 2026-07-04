import React from "react";

const FindUs = () => {
  return (
    <section className="flex flex-col py-22 items-center w-full bg-surface-container">
      <h2 className="headline-lg text-primary">Find Us</h2>
      <p className="body-md text-center text-on-surface-variant mb-13">
        Nestled in the heart of the Artisan Quarter, we're just a short walk
        from the central park.
      </p>
      <iframe
      
        className="border-8 border-on-primary dark:invert dark:hue-rotate-180 dark:brightness-90 dark:contrast-110 rounded-3xl w-[90%] h-125 shadow-[0_8px_30px_#fff] hover:shadow-[0_16px_45px_rgba(42,28,20,0.14)] hover:-translate-y-2 transition-all duration-300"
        src="https://maps.google.com/maps?q=Pune,India&z=13&output=embed"
        width="600"
        height="400"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default FindUs;
