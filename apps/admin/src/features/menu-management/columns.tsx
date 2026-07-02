"use client";
import { categoryColors } from "@/constants";
import { Button, Switch } from "@sip-happens/shared";
import { getCategoryColor } from "@sip-happens/shared/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";

export type Product = {
  picture: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  price: string;
  status: string;
  featured: boolean;
  actions: {
    edit: () => void;
    delete: () => void;
  };
};
export const productsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => (
      <div className="px-3 py-5 w-72 overflow-clip">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-highest">
            <Image
              alt={row.original.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              src={row.original.picture}
            />
          </div>
          <div>
            <p className="body-md text-on-surface">{row.original.name}</p>
            <p className="label-sm font-normal text-on-surface-variant">
              {row.original.description}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return (
        <p
          className={
            "label-sm px-1.5 py-1 uppercase rounded-full text-on-surface text-center " +
            getCategoryColor(categoryColors, row.original.category)
          }
        >
          {row.original.category}
        </p>
      );
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.original.tags;
      return (
        <div className="w-35 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag}
              className="label-sm px-1.5 py-1 uppercase rounded-full text-secondary bg-secondary/10 text-center"
            >
              {tag}
            </p>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <p className="label-md text-on-surface">${row.original.price}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          {row.original.status === "Available" ? (
            <div className="w-2 h-2 rounded-full bg-on-tertiary-container"></div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-error"></div>
          )}
          <p className="font-label-md text-on-surface">{row.original.status}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "featured",
    header: "Featured",
    cell: ({ row }) => {
      return <Switch checked={row.original.featured} />;
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center gap-2 pr-6">
          <Button
            onClick={() => {
              row.original.actions.edit();
            }}
            variant="light_white"
            className="p-2 rounded-lg text-on-surface-variant transition-colors bg-none"
          >
            <SquarePen />
          </Button>
          <Button
            variant="light_white"
            className="p-2 ml-3 rounded-lg text-on-surface-variant transition-colors bg-none"
            onClick={() => {
              row.original.actions.delete();
            }}
          >
            <Trash2 />
          </Button>
        </div>
      );
    },
  },
];
