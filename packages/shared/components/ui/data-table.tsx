"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EmptyState from "../EmptyState";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  rowLimit?: number;
  emptyMessage?: string;
  showPagination?: boolean;
  tableTopComponent?: React.ReactNode;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  rowLimit = 7,
  emptyMessage = "No data found",
  showPagination = true,
  tableTopComponent,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: rowLimit,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-11/12 bg-outline-variant/10 rounded-xl shadow-2xl">
      <div className="overflow-hidden">
        <Table>
          {tableTopComponent && (
            <caption className="caption-top">{tableTopComponent}</caption>
          )}
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="bg-table-header text-on-surface-variant body-md font-bold text-center uppercase border-none" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="bg-table-body">
            {table?.getRowModel()?.rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-0">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns?.length}
                  className="h-24 text-center"
                >
                  <div className="flex p-5 flex-col justify-between items-center">
                    <EmptyState />
                    <p className="text-sm text-gray-500 mt-1">{emptyMessage}</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {showPagination && (
        <div className="flex items-center justify-between px-8 py-4 mt-4">
          <div className="flex-1 text-sm text-muted-foreground">
            Showing {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()} of{" "}
            {table?.getFilteredRowModel()?.rows?.length} records
          </div>

          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant={'dark_brown'}
                className="size-8"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                leftIcon={<ChevronLeft />}
              />

              <Button
                size="sm"
                variant={'dark_brown'}
                className="size-8"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                leftIcon={<ChevronRight />}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
