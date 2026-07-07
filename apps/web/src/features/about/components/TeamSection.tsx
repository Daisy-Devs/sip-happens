import TeamCard from "./TeamCard";
import { StaticImageData } from "next/image";

import founderImg from "../../../../public/about/Founder.png";
import managerImg from "../../../../public/about/Manager.png";
import chiefImg from "../../../../public/about/Chief.png";
import greenImg from "../../../../public/about/Green.png";

interface Member {
  name: string;
  role: string;
  img: StaticImageData;
}

const teamMembers: Member[] = [
  {
    name: "Julian Vance",
    role: "Founder & Head Roaster",
    img: founderImg,
  },
  {
    name: "Elena Rossi",
    role: "Head of Quality Control",
    img: managerImg,
  },
  { name: "Marcus Thorne", role: "Community Lead", img: chiefImg },
  { name: "Sam Chen", role: "Chief Barista", img: greenImg },
];

export default function TeamSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10 text-center bg-surface-container rounded-2xl m-8">
      <h2 className="headline-xxl text-4xl text-primary mb-12">
        The Minds Behind the Mug
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            img={member.img}
          />
        ))}
      </div>
    </section>
  );
}
