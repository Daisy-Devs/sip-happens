import TeamCard from "./TeamCard";

interface Member {
  name: string;
  role: string;
  img: string;
}

const teamMembers: Member[] = [
  {
    name: "Julian Vance",
    role: "Founder & Head Roaster",
    img: "/about/Founder.png",
  },
  {
    name: "Elena Rossi",
    role: "Head of Quality Control",
    img: "/about/Manager.png",
  },
  { name: "Marcus Thorne", role: "Community Lead", img: "/about/Chief.png" },
  { name: "Sam Chen", role: "Chief Barista", img: "/about/Green.png" },
];

export default function TeamSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10 text-center bg-[#F8F3EC] rounded-2xl m-8">
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
