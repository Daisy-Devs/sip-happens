import { Button } from "@sip-happens/shared";
import { FilterProps } from "../type";

export default function MenuFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterProps) {
  return (
    <div className="w-full flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none snap-x mask-gradient">
      {categories.map((category) => {
        // Match active styling using category name string
        const isActive = activeCategory === category.name;

        return (
          <Button
            key={category.id}
            onClick={() => {
              console.log("Filtering by Name String:", category.name);
              onCategoryChange(category.name); // Sends category name directly upstream
            }}
            className={`rounded-full px-5 py-2 text-xs font-medium tracking-wide transition-all duration-300 snap-center shrink-0 ${
              isActive
                ? "bg-secondary text-white hover:bg-[#4A2E1A]"
                : "border-on-background text-on-background bg-[#82746E]/10 hover:bg-background hover:text-[#2C1A11]"
            }`}
          >
            {/* Display user-friendly text for 'all' query value */}
            {category.name === "all" ? "All Menu" : category.name}
          </Button>
        );
      })}
    </div>
  );
}