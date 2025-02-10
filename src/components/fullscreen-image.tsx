import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import type { Image } from "@/server/api/routers/tmdb/types/image";
import { Icon } from "@/components/ui/icons";

import CldImage from "./cld-image";

interface FullscreenImageProps {
  images: Image[];
  currentId: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const baseURL = "https://image.tmdb.org/t/p/original";

export const FullscreenImage: React.FC<FullscreenImageProps> = ({
  images,
  currentId,
  onClose,
  onNavigate,
}) => {
  const currentIndex = images.findIndex((img) => img.file_path === currentId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, currentId]);

  const handlePrev = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    if (!images[prevIndex]) return;
    onNavigate(images[prevIndex].file_path);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    if (!images[nextIndex]) return;
    onNavigate(images[nextIndex].file_path);
  };

  if (currentIndex === -1 || !images[currentIndex]) {
    console.error("Invalid image index or empty images array");
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white hover:text-gray-300"
        aria-label="Close fullscreen view"
      >
        <Icon type="close" />
      </button>
      <button
        onClick={handlePrev}
        className="absolute left-4 z-50 text-white hover:text-gray-300"
        aria-label="Previous image"
      >
        <Icon type="arrowLeft" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 z-50 text-white hover:text-gray-300"
        aria-label="Next image"
      >
        <Icon type="arrowRight" />
      </button>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex h-full w-full items-center justify-center"
        >
          <CldImage
            src={`${baseURL}${currentImage.file_path}`}
            alt="movie poster"
            sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 500px"
            className="object-contain"
            priority={true}
            quality={90}
            fill
            showloading
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
