import { Coffee, LucideProps } from "lucide-react";
import React, { ReactNode } from "react";

type AnalyticsCardProps = {
    heading: string;
    subheading: string;
    value: string;
    icon: ReactNode
}
const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ heading, subheading, value,icon }) => {
  return (
    <div className="p-6 min-w-40 rounded-3xl flex flex-col bg-inverse-on-surface justify-between h-40 group hover:-translate-y-1 transition-transform shadow-[0_4px_4px_#e5bfaa]">
      <div className="flex justify-between items-start">
        <span className="text-secondary bg-secondary/10 p-2 rounded-xl">
          {icon}
        </span>
        <span className="text-on-tertiary-container label-md">{heading}</span>
      </div>
      <div>
        <p className="text-on-surface-variant label-md">{subheading}</p>
        <p className="headline-md">{value}</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
