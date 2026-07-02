import MenuCard from "./MenuCard";
import { MenuItem } from "../type";
import ComponentLoader from "../../../../../../packages/shared/components/CompoentsLoader"; 
import emptyAnimation from "../../../../public/loaders/cuptoCofee.json"; 

export default function MenuGrid({ items }: { items: MenuItem[] }) {
  console.log("MenuGrid received:", items);
  
  if (items.length === 0) {
    return (
      <div className="text-center py-15 flex flex-col items-center justify-center">
        {/* 3. Render the Lottie Loader */}
        <ComponentLoader 
          animationData={emptyAnimation} 
          width={250}
          height={250}
        />

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