"use client";
import { productsColumns } from "@/features/menu-management/columns";
import AddProduct from "@/features/menu-management/components/AddProduct";
import { hideAddProduct, showAddProduct } from "@/store/services/slice/authSlice";
import { useAppSelector } from "@/store/store";
import {
  Button,
  DataTable,
  Input,
  ResponsiveDrawer,
} from "@sip-happens/shared";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";

const MenuManagement = () => {
  const User = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <main className="flex h-full w-full flex-col items-start md:items-center py-16 bg-background md:space-y-12">
      <ResponsiveDrawer title="Add New Product" open={User?.addingProduct || false} setOpen={() => {}}>
        <AddProduct
          setOpen={() => {
            if (User?.addingProduct) {
              dispatch(hideAddProduct());
            }
          }}
        />
      </ResponsiveDrawer>
      <DataTable
        columns={productsColumns}
        tableTopComponent={
          <div className="flex items-center justify-between pl-7 pr-30 py-6">
            <Input
              variant={"small"}
              leftIcon={<Search />}
              placeholder="Search menu"
            />
            <Button onClick={()=>{dispatch(showAddProduct())}} variant="light_brown">Add Product</Button>
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
            featured: true,
            tags: ["dessert", "bevie"],
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
