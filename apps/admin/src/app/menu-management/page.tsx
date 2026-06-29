"use client";
import { productsColumns } from "@/features/menu-management/columns";
import AddProduct from "@/features/menu-management/components/AddProduct";
import { Button, DataTable, Input, ResponsiveDrawer } from "@sip-happens/shared";
import { Search } from "lucide-react";
import React, { useState } from "react";

const MenuManagement = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex h-full w-full flex-col items-center py-16 px-7 bg-background sm:items-start md:space-y-12">
      <ResponsiveDrawer title="Add New Product" open={open} setOpen={() => {}}>
              <AddProduct setOpen={setOpen} />
      </ResponsiveDrawer>
      <DataTable
        columns={productsColumns}
        tableTopComponent={
          <div className="flex items-center justify-between py-6 px-7">
            <Input variant={"small"} leftIcon={<Search />} placeholder="Search menu" />
            <Button variant="light_brown">Add Product</Button>
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
            featured:true,
            tags:["dessert","bevie"],
            price: "4.5",
            status: "Available",
          },
        ]}
        emptyMessage="No products were added"
        rowLimit={7}
        showPagination
      />
    </main>
  );
};

export default MenuManagement;
