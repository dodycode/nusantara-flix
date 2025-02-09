import { cn } from "@/lib/utils";

import type { IconProps } from "../icons";

export const HamburgerMenuIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    className={cn("size-4", className)}
    {...props}
  >
    <path
      d="M3 12H15M3 6H21M3 18H21"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
