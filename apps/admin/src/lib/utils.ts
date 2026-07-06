import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertSnakeCasetoTitleCase(str: string|undefined) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).replace("_", " ");
}

export function convertTitleCaseToSnakeCase(str: string|undefined) {
  if (!str) return "";
  return str.toLowerCase().replace(/ /g, "_");
}
