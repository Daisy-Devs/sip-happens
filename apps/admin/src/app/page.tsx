"use client";
import AddProduct from "@/features/menu-management/components/AddProduct";
import { ProductsColumns } from "@/features/overview/columns";
import Analytics from "@/features/overview/components/Analytics";
import { ProductType, StatsType } from "@/features/overview/types";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/store/services/api/productsApi";
import {
  hideAddProduct,
  showAddProduct,
} from "@/store/services/slice/authSlice";
import { useAppSelector } from "@/store/store";
import { Button, DataTable, Input, ResponsiveDrawer, toast } from "@sip-happens/shared";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const User = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const router=useRouter();
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
  const statisticsData: StatsType = data?.stats || null;
  console.log(data);
  const [updateProductData, setUpdateProductData] =
    useState<ProductType | null>(null);
  return (
    <div className="flex h-full w-full pl-12 pb-30 md:pl-80  flex-col items-start md:items-center py-16 px-7 bg-background md:space-y-12">
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
      <Analytics statisticsData={statisticsData} />
      <DataTable
        columns={ProductsColumns}
        tableTopComponent={
          <div className="flex items-center justify-between py-6 px-7">
            <div className="flex gap-2">
            <h1 className="headline-md text-on-surface">Menu Items</h1>
            <Input
              variant={"small"}
              leftIcon={<Search />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search menu"
            /></div>
            <Button onClick={() => router.push("/menu-management")} size="sm" variant="light_brown">See all products</Button>
          </div>
        }
        data={productsData}
        emptyMessage="No products were added"
        rowLimit={3}
        showPagination={false}
      />
    </div>
  );
}
