"use client";
import { categoryColumns } from "@/features/categories/columns";
import AddCategory from "@/features/categories/components/AddCategory";
import { CategoryType } from "@/features/overview/types";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "@/store/services/api/categoriesApi";
import { Button, DataTable, ResponsiveDrawer, toast } from "@sip-happens/shared";
import { useState } from "react";

const Categories = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [editCategory, setEditCategory] = useState<CategoryType | null>(null);
  const { data } = useGetCategoriesQuery({});
  const [deleteCategory]=useDeleteCategoryMutation();

  const categoriesData = data?.categories?.map((category: CategoryType) => ({
    ...category,
    actions: {
      edit: () => {
        setEditCategory(category);
        setShowAddCategory(true);
      },
      delete: () => {
        deleteCategory(category.id).unwrap().then((res) => {
          console.log("Category deleted successfully:", res);
          toast.success("Category deleted successfully");
        }).catch((err) => {
          console.error("Failed to delete category:", err);
          toast.error("Failed to delete category");
        });
      },
    },
  }))||[];

  return (
    <main className="flex h-full w-full justify-start md:justify-center py-16 bg-background md:space-y-12">
      <ResponsiveDrawer
        title="Add New Category"
        open={showAddCategory}
        setOpen={() => {
          if (showAddCategory) {
            setShowAddCategory(false);
          }
        }}
      >
        <AddCategory updateSelectedCategory={editCategory} closeDrawer={setShowAddCategory} />
      </ResponsiveDrawer>
      <DataTable
        columns={categoryColumns}
        tableTopComponent={
          <div className="flex justify-end pr-15 py-6">
            <Button
              onClick={() => {
                setShowAddCategory(true);
              }}
              variant="light_brown"
            >
              Add Category
            </Button>
          </div>
        }
        data={categoriesData}
        emptyMessage="No categories were added"
        rowLimit={7}
        showPagination
      />
    </main>
  );
};

export default Categories;
