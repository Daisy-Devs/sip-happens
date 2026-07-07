import { UploadBox } from "@/components/UploadBox";
import { CategoryType, ProductType } from "@/features/overview/types";
import { convertTitleCaseToSnakeCase } from "@/lib/utils";
import { useGetCategoriesQuery } from "@/store/services/api/categoriesApi";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "@/store/services/api/productsApi";
import {
  Button,
  Input,
  ProductSchema,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  toast,
} from "@sip-happens/shared";
import { useState } from "react";

type AddProductProps = {
  productData?: ProductType | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateProductData: React.Dispatch<
    React.SetStateAction<ProductType | null>
  >;
};
const AddProduct: React.FC<AddProductProps> = ({
  productData,
  setOpen,
  setUpdateProductData,
}) => {
  const { data } = useGetCategoriesQuery({});
  
  console.log("data", productData);
  const [updateProduct] = useUpdateProductMutation();
  const [createProduct] = useCreateProductMutation();
  const [product, setProduct] = useState({
    name: productData?.name || "",
    category: productData?.categories.slug || "",
    description: productData?.description || "",
    status: convertTitleCaseToSnakeCase(productData?.status) || "",
    tags: productData?.tags.join(", ") || "",
    featured: productData?.featured || false,
    price: productData?.price || "",
    image_url: {
      name: "",
      url: productData?.image_url || "",
      public_id: "",
      type: "image",
    },
  });
  const [error, setError] = useState({
    name: "",
    category_id: "",
    description: "",
    status: "",
    tags: "",
    price: "",
  });

  const resetForm = () => {
    setProduct({
      name: "",
      category: "",
      description: "",
      status: "",
      tags: "",
      featured: false,
      price: "",
      image_url: {
        name: "",
        url: "",
        public_id: "",
        type: "image",
      },
    });
    setUpdateProductData(null);
    setOpen(false);
  };
  const handleSaveProduct = () => {
    const result = ProductSchema.safeParse({
      ...product,
      image_url: product.image_url.url,
      category_id: data?.categories?.find(
        (cat: CategoryType) => cat.slug === product.category,
      )?.id,
      price: Number(product.price),
      tags: product.tags.split(",").map((tag) => tag.trim()),
    });
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setError({
        name: fieldErrors.name?.[0] ?? "",
        category_id: fieldErrors.category_id?.[0] ?? "",
        description: fieldErrors.description?.[0] ?? "",
        status: fieldErrors.status?.[0] ?? "",
        tags: fieldErrors.tags?.[0] ?? "",
        price: fieldErrors.price?.[0] ?? "",
      });
      return;
    }

    const image_url = product.image_url.url;
    if (productData) {
      updateProduct({
        ...product,
        id: productData.id,
        image_url,
        category_id: data?.categories?.find(
          (cat: CategoryType) => cat.slug === product.category,
        )?.id,
        price: Number(product.price),
        tags: product.tags.split(",").map((tag) => tag.trim()),
      })
        .unwrap()
        .then((res) => {
          toast.success("Product updated successfully");
          console.log("Product updated successfully:", res);
        })
        .catch((err) => {
          toast.error("Failed to update product");
          console.error("Failed to update product:", err);
        });
    } else {
      createProduct({
        ...product,
        image_url,
        category_id: data?.categories?.find(
          (cat: CategoryType) => cat.slug === product.category,
        )?.id,
        price: Number(product.price),
        tags: product.tags.split(",").map((tag) => tag.trim()),
      })
        .unwrap()
        .then((res) => {
          toast.success("Product created successfully");
          console.log("Product created successfully:", res);
        })
        .catch((err) => {
          toast.error("Failed to create product");
          console.error("Failed to create product:", err);
        });
    }
    // router.refresh();
    resetForm();
  };
  return (
    <div className="flex flex-col rounded-2xl w-full p-9 space-y-4 overflow-y-scroll md:overflow-y-auto">
      <div>
        <label
          htmlFor="product-name"
          className="label-sm text-on-surface-variant"
        >
          Product Name
        </label>
        <Input
          id="product-name"
          error={error.name}
          placeholder="Caramel Macchiato"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </div>
      <div className="flex gap-2">
        <div>
          <label
            htmlFor="category"
            className="label-sm text-on-surface-variant"
          >
            Category
          </label>
          <Select
            value={product.category}
            onValueChange={(value) => {
              console.log(value);
              setProduct({
                ...product,
                category: value,
              });
            }}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {data?.categories?.map((category: CategoryType) => (
                  <SelectItem key={category.id} value={category.slug}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {error.category_id && (
            <p className="text-error">{error.category_id}</p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className="label-sm text-on-surface-variant"
        >
          Description
        </label>
        <textarea
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="block p-3 w-full rounded-md bg-surface text-[16px] text-on-surface-variant placeholder:text-outline-variant transition-colors disabled:pointer-events-none disabled:opacity-50 shadow-[inset_2px_2px_6px_#E8DED2]"
          id="description"
          rows={6}
          placeholder="Describe the product for the customer"
        ></textarea>
      </div>
      <div></div>
      <div>
        <label
          htmlFor="product-price"
          className="label-sm text-on-surface-variant"
        >
          Product Price
        </label>
        <Input
          id="product-price"
          leftIcon={<span className="text-on-surface-variant">$</span>}
          placeholder="200"
          error={error.price}
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="status" className="label-sm text-on-surface-variant">
          Status
        </label>
        <Select
          value={product.status}
          onValueChange={(value) => setProduct({ ...product, status: value })}
        >
          <SelectTrigger id="status">
            <SelectValue placeholder="Select Availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="low_stock">Low Stock</SelectItem>
              <SelectItem value="out_of_stock">Out of Stock</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {error.status && (
          <p className="text-on-error-container text-sm mt-1">{error.status}</p>
        )}
      </div>
      <div>
        <label htmlFor="image" className="label-sm text-on-surface-variant">
          Product Image
        </label>
        <UploadBox
          value={product.image_url}
          title="Product Image"
          onChange={(value) => {
            setProduct({
              ...product,
              image_url: value,
            });
          }}
          subtitle="Click to upload an image (max 2MB)"
        />
      </div>
      <div>
        <label htmlFor="tags" className="label-sm text-on-surface-variant">
          Tags
        </label>
        <Input
          id="tags"
          value={product.tags}
          onChange={(e) => setProduct({ ...product, tags: e.target.value })}
          placeholder="Dessert, Beverages"
        />
      </div>
      <div className="flex justify-between">
        <label
          htmlFor="featured-product"
          className="label-sm text-on-surface-variant"
        >
          Featured Product
        </label>
        <Switch
          checked={product.featured}
          onCheckedChange={(checked) =>
            setProduct((prev) => ({ ...prev, featured: checked }))
          }
        />
      </div>
      <div className="flex justify-between md:px-5 mt-3">
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
            handleSaveProduct();
          }}
        >
          Save Product
        </Button>
      </div>
    </div>
  );
};

export default AddProduct;
