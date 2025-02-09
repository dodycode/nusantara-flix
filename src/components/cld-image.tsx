"use client";

import type { CldImageProps } from "next-cloudinary";
import type { RefObject } from "react";
import { useState } from "react";
import Image from "next/image";
import { CldImage as CldImageDefault } from "next-cloudinary";

import { cn } from "@/lib/utils";

import { Skeleton } from "./ui/skeleton";

const CldImage = (
  props: CldImageProps & {
    ref?: RefObject<HTMLImageElement | null>;
    showloading?: boolean;
  },
) => {
  const [isLoading, setIsLoading] = useState(true);

  if (props.src.includes("placehold.co")) {
    return (
      <Image
        ref={props.ref}
        src={props.src}
        alt={props.alt}
        className={cn(
          props.className,
          "transition-opacity duration-300 ease-in-out",
        )}
        fill={props.fill}
        sizes={props.sizes}
        unoptimized
      />
    );
  }

  return (
    <>
      {props.showloading && isLoading && <Skeleton className="h-full w-full" />}
      <CldImageDefault
        ref={props.ref}
        className={cn(
          "transition-opacity duration-300 ease-in-out",
          props.className,
        )}
        style={{
          opacity: isLoading ? 0 : 1,
        }}
        onLoad={() => setIsLoading(false)}
        deliveryType="fetch"
        format="webp"
        {...props}
      />
    </>
  );
};

export default CldImage;
