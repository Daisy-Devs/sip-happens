import Image from "next/image";
import { MenuItem, BadgeType } from "../type";
import { Badge, Card, CardContent } from "@sip-happens/shared";

// Cloudinary loader to dynamically fetch sharp, correctly-sized images
const cloudinaryLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  // If it's already a full URL, we split it to inject optimization parameters
  if (src.includes("res.cloudinary.com")) {
    const parts = src.split("/upload/");
    if (parts.length === 2) {
      return `${parts[0]}/upload/f_auto,q_${quality || 85},w_${width}/${parts[1]}`;
    }
  }
  return src;
};

function MenuCard({ item }: { item: MenuItem }) {
  console.log("MenuCard:", item);

  const badgeStyles: Record<BadgeType, string> = {
    Featured: "bg-emerald-800/10 text-emerald-800 border-emerald-800/20",
    Seasonal: "bg-amber-700/10 text-amber-700 border-amber-700/20",
    "Best Seller": "bg-amber-900/10 text-amber-900 border-amber-900/20",
  };

  // Map backend API's "tags" array or fallback to "featured" flag if badge is missing
  const activeBadge: BadgeType | null = 
    item.badge || 
    (item.tags && item.tags.length > 0 ? (item.tags[0] as BadgeType) : null) ||
    (item.featured ? "Featured" : null);

  return (
    <Card className="border-none bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group pt-0 pb-0 w-full max-w-sm mx-auto">
      {/* Aspect ratio container with high-priority positioning context */}
      <div className="relative aspect-square w-full overflow-hidden bg-stone-100 z-0">
        <Image
          loader={cloudinaryLoader}
          src={item.image_url || "/placeholder-food.jpg"}
          alt={item.name}
          fill
          priority={item.featured || false} // Loads critical above-the-fold images faster
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />

        {activeBadge && (
          <Badge
            variant="green"
            className={`absolute left-4 top-4 font-semibold px-2.5 py-1 rounded-md border text-[11px] tracking-wide z-10 shadow-sm ${
              badgeStyles[activeBadge] || ""
            }`}
          >
            {activeBadge}
          </Badge>
        )}
      </div>

      <CardContent className="px-5 pt-5 pb-5 flex-1 flex flex-col justify-between space-y-2">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="headline-xl text-lg md:text-xl text-primary tracking-tight line-clamp-1">
            {item.name}
          </h3>

          <span className="text-sm body-lg font-bold text-secondary shrink-0">
            {typeof item.price === "number"
              ? `$${item.price.toFixed(2)}`
              : item.price}
          </span>
        </div>

        <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default MenuCard;