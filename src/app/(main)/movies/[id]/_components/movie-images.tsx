"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";

import type { Image } from "@/server/api/routers/tmdb/types/image";
import CldImage from "@/components/cld-image";
import { FullscreenImage } from "@/components/fullscreen-image";

type Props = {
  images: Image[];
};

const MovieImages: React.FC<Props> = ({ images }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleImageClick = (id: string) => {
    setSelectedId(id);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  const handleNavigate = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="movie-images">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Images</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => {
            if (!image.file_path) return;

            return (
              <div key={index} className="mt-8">
                <div
                  className="relative h-[300px] w-full"
                  onClick={() => handleImageClick(image.file_path)}
                >
                  <CldImage
                    src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                    alt="Movie Poster"
                    className="object-cover transition duration-150 ease-in-out hover:opacity-75"
                    sizes="500px"
                    fill
                    showloading
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <FullscreenImage
            images={images}
            currentId={selectedId}
            onClose={handleClose}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export { MovieImages };
