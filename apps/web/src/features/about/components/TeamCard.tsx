import Image from "next/image";

interface Member {
  name: string;
  role: string;
  img: string;
}

function TeamCard({ name, role, img }: Member) {
  return (
    <div className="text-left space-y-3 group">
      <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden bg-stone-200">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
        />
      </div>
      <div>
        <h4 className="headline-lg text-lg text-primary">{name}</h4>
        <p className="text-xs text-secondary body-lg tracking-wider uppercase">
          {role}
        </p>
      </div>
    </div>
  );
}
export default TeamCard;
