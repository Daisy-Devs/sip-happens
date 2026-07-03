export type BadgeType = "Featured" | "Seasonal" | "Best Seller";
export interface MenuItem {
  id: string;
  name: string;
  price: string | number;
  description: string;
  image_url: string;
  category_id?: string;
  featured?: boolean;    
  tags?: string[];       
  badge?: BadgeType | null;
}
export interface HeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export interface FilterProps {
  categories: CategoryItem[];
  activeCategory: string;
  onCategoryChange: (name: string) => void;
}
export interface CategoryItem {
  id: string;
  name: string;
  productCount?: number;
}