"use client";

import ReactPlayer from "react-player/lazy";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { generateVideoEmbedUrl } from "@/lib/utils";

import { Button } from "./ui/button";

const FullscreenVideo: React.FC<{
  url: string;
  btnText: string;
  urlSite: string;
}> = ({ url, btnText, urlSite }) => {
  const isMobile = useIsMobile();

  if (!url || !urlSite) return null;

  const videoURL = generateVideoEmbedUrl(urlSite, url);
  if (!videoURL) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button LeftIcon="play" size="lg">
          {btnText}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="h-dvh min-w-[70vw] border-none bg-transparent p-0 lg:h-auto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="hidden">&nbsp;</DialogTitle>
        <ReactPlayer
          url={videoURL}
          width="100%"
          height={isMobile ? "100dvh" : "500px"}
          playing={true}
          loop={true}
          playsinline={true}
          stopOnUnmount={true}
        />
      </DialogContent>
    </Dialog>
  );
};

export { FullscreenVideo };
