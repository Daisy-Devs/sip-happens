import { Input } from "@sip-happens/shared";
import { Search } from "lucide-react";
import { HeroProps } from "../type"; 

export default function MenuHero({ searchQuery, onSearchChange }: HeroProps) {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-6">
      <h1 className="headline-xxl text-4xl md:text-5xl tracking-tight text-primary">
        Crafted with Heart, Poured with Passion
      </h1>
      <p className="text-on-surface-variant text-sm md:text-base base leading-relaxed">
        Discover our curated selection of artisanal roasts and handcrafted delights. Every sip tells a story of origin, quality, and the perfect moment.
      </p>
      
  
      <div className="relative max-w-md mx-auto pt-4">
        <Input
          variant="search"
          type="text"
          placeholder="Search for your favorite brew or pastry..."
          leftIcon={<Search size={18} color="#82746E" />}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}