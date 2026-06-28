export type BadgeType = "Featured" | "Seasonal" | "Best Seller";

export interface MenuItem {
  id: string;
  name: string;
  price: string | number;
  description: string;
  image: string;
  category: string;
  badge?: BadgeType | null;
}

export interface HeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}
