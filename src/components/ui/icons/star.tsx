import React from "react";

import { cn } from "@/lib/utils";

import type { IconProps } from "../icons";

const StarIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    className={cn("size-4 fill-current text-orange-500", className)}
    viewBox="0 0 24 24"
    {...props}
  >
    <g data-name="Layer 2">
      <path
        d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
        data-name="star"
      />
    </g>
  </svg>
);

export { StarIcon };
