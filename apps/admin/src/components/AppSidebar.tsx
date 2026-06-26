import Link from "next/link";
import { LayoutPanelTop, Utensils } from 'lucide-react';

const AppSidebar = () => {
  return (
    <nav className="flex flex-col px-4 space-y-2 mt-4">
      <Link
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary-container text-on-secondary-container label-md"
        href="#"
      >
        {<LayoutPanelTop />}
        Overview
      </Link>
      <Link
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors label-md"
        href="#"
      >
        {<Utensils />}
        Menu Management
      </Link>
    </nav>
  );
};

export default AppSidebar;
