import { UploadBox } from "@/components/UploadBox";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@sip-happens/shared";

type AddProductProps={
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const AddProduct: React.FC<AddProductProps> = ({setOpen}) => {
  return (
    <div className="flex flex-col rounded-2xl w-full p-9 space-y-4">
      <div>
        <label
          htmlFor="product-name"
          className="label-sm text-on-surface-variant"
        >
          Product Name
        </label>
        <Input id="product-name" placeholder="Caramel Macchiato" />
      </div>
      <div className="flex gap-2">
        <div>
          <label
            htmlFor="category"
            className="label-sm text-on-surface-variant"
          >
            Category
          </label>
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="coffee">Coffee</SelectItem>
                <SelectItem value="drink">Drink</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
          className="block p-3 w-full rounded-md bg-surface text-[16px] text-on-surface-variant placeholder:text-outline-variant transition-colors disabled:pointer-events-none disabled:opacity-50 shadow-[inset_2px_2px_6px_#E8DED2]"
          id="description"
          rows={6}
          placeholder="Describe the product for the customer"
        ></textarea>
      </div>
      <div>
        <label htmlFor="status" className="label-sm text-on-surface-variant">
          Status
        </label>
        <Select>
          <SelectTrigger id="status">
            <SelectValue placeholder="Select Availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="low-stock">Low Stock</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="image" className="label-sm text-on-surface-variant">
          Product Image
        </label>
        <UploadBox onlyImage title="Product Image" onChange={() => {}} subtitle="Drag and drop or click to upload"/>
      </div>
      <div>
        <label htmlFor="tags" className="label-sm text-on-surface-variant">
          Tags
        </label>
        <Input id="tags" placeholder="Dessert, Beverages" />
      </div>
      <div className="flex justify-between">
        <label
          htmlFor="featured-product"
          className="label-sm text-on-surface-variant"
        >
          Featured Product
        </label>
        <Switch />
      </div>
      <div className="flex justify-between px-5 mt-3">
          <Button variant="grey" onClick={() => setOpen(false)}>Cancel</Button>
        <Button variant="dark_brown">Save Product</Button>
      </div>
    </div>
  );
};

export default AddProduct;
