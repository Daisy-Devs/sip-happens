
import MenuCard from "./MenuCard";
import { MenuItem } from "../type";


export default function MenuGrid({ items }: { items: MenuItem[] }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-stone-400 font-light">
          No items found matching your selection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4 animate-in fade-in duration-300">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}
