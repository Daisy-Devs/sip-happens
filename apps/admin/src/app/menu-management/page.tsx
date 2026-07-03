"use client";
import { productsColumns } from "@/features/menu-management/columns";
import AddProduct from "@/features/menu-management/components/AddProduct";
import { ProductType } from "@/features/overview/types";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/store/services/api/productsApi";
import {
  hideAddProduct,
  showAddProduct,
} from "@/store/services/slice/authSlice";
import { useAppSelector } from "@/store/store";
import {
  Button,
  DataTable,
  Input,
  ResponsiveDrawer,
  toast,
} from "@sip-happens/shared";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MenuManagement = () => {
  const User = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const { data } = useGetProductsQuery({
    search: debouncedSearch,
  });
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchQuery]);
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProductData, setUpdateProductData] =
    useState<ProductType | null>(null);
  const productsData =
    data?.products.map((product: ProductType) => ({
      ...product,
      actions: {
        edit: () => {
          setUpdateProductData(product);
          dispatch(showAddProduct());
        },
        delete: () => {
          deleteProduct(product.id)
            .unwrap()
            .then((res) => {
              console.log("Product deleted successfully:", res);
              toast.success("Product deleted successfully");
            })
            .catch((err) => {
              console.error("Failed to delete product:", err);
              toast.error("Failed to delete product");
            });
        },
      },
      category: product.categories.name,
      description: product.description,
      name: product.name,
      picture:
        product.image_url ||
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWltYWdlLWljb24gbHVjaWRlLWltYWdlIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIi8+PHBhdGggZD0ibTIxIDE1LTMuMDg2LTMuMDg2YTIgMiAwIDAgMC0yLjgyOCAwTDYgMjEiLz48L3N2Zz4=",
      price: product.price.toString(),
      status: "Available",
    })) || [];
  return (
    <div className="flex h-full flex-col items-start md:items-center py-16 bg-background md:space-y-12 overflow-x-scroll">
      <ResponsiveDrawer
        title="Add New Product"
        open={User?.addingProduct || false}
        setOpen={() => {
          if (User?.addingProduct) {
            dispatch(hideAddProduct());
          }
        }}
      >
        <AddProduct
          productData={updateProductData}
          setOpen={() => {
            if (User?.addingProduct) {
              dispatch(hideAddProduct());
            }
          }}
          setUpdateProductData={setUpdateProductData}
        />
      </ResponsiveDrawer>
      <DataTable
        columns={productsColumns}
        tableTopComponent={
          <div className="flex items-center justify-between pl-4 pr-30 py-6">
          <div className="flex gap-2 px-3">
            <h1 className="headline-md text-on-surface">Menu Items</h1>
            <Input
              variant={"small"}
              leftIcon={<Search />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search menu"
            />
          </div>
            <Button
              onClick={() => {
                dispatch(showAddProduct());
              }}
              size={"sm"}
              variant="light_brown"
            >
              Add Product
            </Button>
          </div>
        }
        data={productsData}
        emptyMessage="No products were added"
        rowLimit={7}
        showPagination
      />
    </div>
  );
};

export default MenuManagement;
