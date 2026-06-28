import { Button } from "@sip-happens/shared";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-primary text-white py-20 px-4 text-center">
      <div className="max-w-2xl mx-auto space-y-6 ">
        <h2 className="headline-xl  text-3xl md:text-4xl tracking-wide leading-tight">
          Ready to experience the difference?
        </h2>
        <p className="text-white/80 text-sm md:text-base base max-w-md mx-auto leading-relaxed">
          Join us today and explore a rotating selection of exceptionally
          roasted beans.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
          <Button text="Visit Our Café" variant="light_brown" size="lg" />
          <Button text="Explore the Menu" variant="dark_brown" size="lg" />
        </div>
      </div>
    </section>
  );
}
