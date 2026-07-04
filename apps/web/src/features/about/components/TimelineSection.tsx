import { Badge } from "@sip-happens/shared";
import { Coffee, Store, Heart } from "lucide-react";
import Image from "next/image";

interface RowProps {
  year: string;
  text: string;
  img: string;
  icon: React.ElementType;
  reverse?: boolean;
}

const timelineData: RowProps[] = [
  {
    year: "2018",
    text: 'The first "Sip Happens" popup opens in a small garage in Portland, fueled by a passion for ethically sourced single-origin beans.',
    img: "/about/Foundingmoments.png",
    icon: Coffee,
    reverse: false,
  },
  {
    year: "2020",
    text: "We opened our first physical flagship cafe, bridging the gap between exceptional roasting craft and fine, minimalist modern interior design.",
    img: "/about/Flagship.png",
    icon: Store,
    reverse: true,
  },
  {
    year: "Today",
    text: "Serving premium specialty coffee to our growing online community, live cafes, and subscription boxes globally without compromising our core sourcing traits.",
    img: "/about/Community1.png",
    icon: Heart,
    reverse: false,
  },
];

function TimelineRow({ year, text, img, icon: Icon, reverse }: RowProps) {
  return (
    <div
      className={`relative flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center justify-between my-16 md:my-24 gap-8 md:gap-16 z-10`}
    >
      <div
        className={`w-full md:w-1/2 flex flex-col ${reverse ? "md:items-start md:pl-12" : "md:items-end md:text-right md:pr-12"} space-y-2`}
      >
        <span className="text-secondary headline-xl text-2xl font-bold tracking-wide">
          {year}
        </span>
        <p className="text-on-surface-variant body-md text-sm md:text-base leading-relaxed max-w-sm">
          {text}
        </p>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container border-4 border-background shadow-md">
          <Icon
            className="h-5 w-5 text-on-primary-container"
            strokeWidth={2.5}
          />
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 flex ${reverse ? "justify-end md:pr-12" : "justify-start md:pl-12"}`}
      >
        <div className="relative w-full max-w-md aspect-16/10 rounded-2xl overflow-hidden shadow-md group bg-timeline-card border-outline-varian">
          <Image
            src={img}
            alt={`Sip Happens in ${year}`}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-102"
          />
        </div>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 bg-surface-container rounded-sm mt-6 mb-6">
      <div className="text-center mb-10">
        <Badge variant="green">THE JOURNEY</Badge>
        <h2 className="headline-xxl  text-4xl md:text-5xl text-primary mt-3">
          Our Story
        </h2>
      </div>

      <div className="relative">
        <div
          className="absolute left-1/2 top-4 bottom-4 hidden w-0.5 -translate-x-1/2 md:block
  bg-linear-to-b from-timeline/10 via-timeline/50 to-timeline/10"
        />
        <div className="space-y-12 md:space-y-0  p-6">
          {timelineData.map((item, index) => (
            <TimelineRow key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
