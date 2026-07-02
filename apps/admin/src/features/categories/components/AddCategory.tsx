"use client";
import { CategoryType } from "@/features/overview/types";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@/store/services/api/categoriesApi";
import { Button, Input } from "@sip-happens/shared";
import React, { Dispatch, useState } from "react";

type AddCategoryProps = {
  closeDrawer: Dispatch<React.SetStateAction<boolean>>;
  updateSelectedCategory?: CategoryType | null;
};
const AddCategory: React.FC<AddCategoryProps> = ({
  closeDrawer,
  updateSelectedCategory,
}) => {
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [category, setCategory] = useState<string>(
    updateSelectedCategory?.name || "",
  );

  const resetForm = () => {
    setCategory("");
    closeDrawer(false);
  };
  const handleSaveCategory = () => {
    if (updateSelectedCategory) {
      updateCategory({
        id: updateSelectedCategory.id,
        name: category,
        slug: category?.toLowerCase().replace(" ", "-"),
      })
        .unwrap()
        .then((res) => {
          console.log("Category updated successfully:", res);
        });
    } else {
      createCategory({
        name: category,
        slug: category?.toLowerCase().replace(" ", "-"),
      })
        .unwrap()
        .then((res) => {
          console.log("Category created successfully:", res);
        });
    }
    resetForm();
  };
  return (
    <div className="flex flex-col rounded-2xl w-full p-9 space-y-4">
      <div>
        <label
          htmlFor="category-name"
          className="label-sm text-on-surface-variant"
        >
          Category Name
        </label>
        <Input
          id="category-name"
          placeholder="Caramel Macchiato"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="flex justify-between px-5 mt-3">
        <Button
          variant="grey"
          onClick={() => {
            resetForm();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="dark_brown"
          onClick={() => {
            handleSaveCategory();
          }}
        >
          Save Category
        </Button>
      </div>
    </div>
  );
};

export default AddCategory;
