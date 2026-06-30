
//   return (
//     <Card className="border-none bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group w-70">
//       <div className="relative aspect-square w-full overflow-hidden ">
//         <Image
//           src={item.image}
//           alt={item.name}
//           fill
//           className="object-cover group-hover:scale-103 transition-transform duration-500 ease-in-out"
//         />

import Image from "next/image";
import { MenuItem, BadgeType } from "../type"; 
import { Badge, Card, CardContent } from "@sip-happens/shared";

function MenuCard({ item }: { item: MenuItem }) {
  const badgeStyles: Record<BadgeType, string> = {
    Featured: "bg-emerald-800/10 text-emerald-800 border-emerald-800/20",
    Seasonal: "bg-amber-700/10 text-amber-700 border-amber-700/20",
    "Best Seller": "bg-amber-900/10 text-amber-900 border-amber-900/20",
  };

  return (

    <Card className="border-none bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group pt-0 pb-0 w-full max-w-sm mx-auto">
      
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-in-out"
        />

        {item.badge && (
          <Badge
            variant="green"
            className={`absolute left-4 top-4 font-medium px-2.5 py-0.5 rounded-md border text-[11px] ${
              badgeStyles[item.badge as BadgeType] || ""
            }`}
          >
            {item.badge}
          </Badge>
        )}
      </div>

      
      <CardContent className="px-5 pt-5 pb-5 flex-1 flex flex-col justify-between space-y-2">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="headline-xl text-lg md:text-xl text-primary tracking-tight line-clamp-1">
            {item.name}
          </h3>

          <span className="text-sm body-lg font-bold text-secondary shrink-0">
            {typeof item.price === "number" ? `$${item.price.toFixed(2)}` : item.price}
          </span>
        </div>

        <p className="text-on-surface-variant text-xs md:text-sm baset leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default MenuCard;
