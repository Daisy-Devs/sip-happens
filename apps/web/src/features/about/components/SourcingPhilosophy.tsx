import { nomenclature } from "@sip-happens/shared/constants/nomenclature";
import { ShieldCheck, Leaf, Coffee } from "lucide-react"; // Example icons, replace with your preferred icon library

interface PillarProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

function PhilosophyPillar({ icon: Icon, text }: PillarProps) {
  return (
    <div className="flex items-center gap-2 justify-center text-[#2C1A11]/80 font-medium text-sm">
      <div className="w-5 h-5 rounded-full bg-[#2C1A11]/10 flex items-center justify-center">
        <Icon className="w-3 h-3 text-[#2C1A11]" />
      </div>
      <span>{text}</span>
    </div>
  );
}

export default function SourcingPhilosophy() {
  return (
    <section className="w-full px-4 py-16 bg-linear-to-r from-[#5C3A21] to-[#3E2512]">
      <div className="max-w-4xl mx-auto bg-[#FFFFFF]/40 rounded-3xl p-8 md:p-12 text-center shadow-xl">
        <h2 className="headline-xxl text-2xl md:text-3xl text-primary mb-4">
          {nomenclature.SOURCE_HEADING}
        </h2>
        <p className="text-on-surface-variant base text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          {nomenclature.SOURCE_PARA}{" "}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 border-t border-[#2C1A11]/10 pt-6">
          <PhilosophyPillar icon={Coffee} text="Direct Trade" />
          <PhilosophyPillar icon={Leaf} text="Organic Beans" />
          <PhilosophyPillar icon={ShieldCheck} text="Ethically Grown" />
        </div>
      </div>
    </section>
  );
}
