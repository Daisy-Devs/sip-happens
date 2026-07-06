"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useMediaQuery } from "../hooks/use-media-query";
import{
Drawer,
DrawerContent,
DrawerDescription,
DrawerHeader,
DrawerTitle,
} from "./ui/drawer"
type ResponsiveDrawerProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export function ResponsiveDrawer({
  children,
  title,
  description,
  open,
  setOpen,
}: ResponsiveDrawerProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton={false} className="md:max-w-[325px] lg:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} fixed={true}>
      <DrawerContent >
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
