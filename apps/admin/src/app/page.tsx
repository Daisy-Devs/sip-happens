"use client";
import AddProduct from "@/features/menu-management/components/AddProduct";
import { ProductsColumns } from "@/features/overview/columns";
import Analytics from "@/features/overview/components/Analytics";
import { DataTable, Input, ResponsiveDrawer } from "@sip-happens/shared";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex h-full w-full flex-col items-center py-16 px-7 bg-background sm:items-start md:space-y-12">
      <ResponsiveDrawer title="Add New Product" open={open} setOpen={() => {}}>
        <AddProduct setOpen={setOpen} />
      </ResponsiveDrawer>
      <Analytics />
      <DataTable
        columns={ProductsColumns}
        tableTopComponent={
          <div className="flex items-center justify-between py-6 px-7">
            <h1 className="headline-md text-on-surface">Menu Items</h1>
            <Input variant={"small"} leftIcon={<Search />} placeholder="Search menu" />
          </div>
        }
        data={[
          {
            actions: "helli",
            category: "helli",
            description:
              "Smooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blend",
            name: "helli",
            picture:
              "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
            price: "4.5",
            status: "Available",
          },
          {
            actions: "helli",
            category: "helli",
            description:
              "Smooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blend",
            name: "helli",
            picture:
              "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
            price: "4.5",
            status: "Available",
          },
          {
            actions: "helli",
            category: "helli",
            description:
              "Smooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blend",
            name: "helli",
            picture:
              "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
            price: "4.5",
            status: "Available",
          },
          {
            actions: "helli",
            category: "helli",
            description:
              "Smooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blendSmooth Ethiopian blend",
            name: "helli",
            picture:
              "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
            price: "4.5",
            status: "Available",
          },
        ]}
        emptyMessage="No products were added"
        rowLimit={3}
        showPagination
      />
    </main>
  );
}
