import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  // Use clsx only. twMerge collapses custom text-* typography utilities
  // with text color classes and causes incorrect visual output.
  return clsx(inputs)
}
