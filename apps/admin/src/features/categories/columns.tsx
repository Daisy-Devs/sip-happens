"use client";
import { Button } from "@sip-happens/shared";
import { ColumnDef } from "@tanstack/react-table";
import { Box, SquarePen, Trash2 } from "lucide-react";

export type Category = {
  name: string;
  productCount: number;
  actions: {
    edit: () => void;
    delete: () => void;
  };
};
export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="py-5 w-50 overflow-clip">
        <div className="flex items-center gap-3">
          <div className="w-6 align-middle rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-highest">
            <Box size={25} className="text-primary"/>
          </div>
          <div>
            <p className="body-md text-on-surface">{row.original.name}</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "productCount",
    header: "Product count",
    cell: ({ row }) => {
      return (
        <p className={"label-sm text-on-surface text-center"}>
          {row.original.productCount}
        </p>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
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
            disabled={row.original.productCount > 0}
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
