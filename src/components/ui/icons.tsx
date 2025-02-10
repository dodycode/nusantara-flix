import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CirclePlayIcon,
  FileQuestionIcon,
  FileTextIcon,
  GalleryHorizontalEndIcon,
  PanelLeftIcon,
  XIcon,
} from "lucide-react";

import { FacebookIcon } from "./icons/facebook-icon";
import { HamburgerMenuIcon } from "./icons/hamburger-menu-icon";
import { InstagramIcon } from "./icons/instagram-icon";
import { SpinnerIcon } from "./icons/spinner-icon";
import { StarIcon } from "./icons/star";
import { TwitterIcon } from "./icons/twitter-icon";
import { WebsiteIcon } from "./icons/website-icon";

const icons = {
  galleryVerticalEnd: GalleryHorizontalEndIcon,
  spinner: SpinnerIcon,
  panelLeft: PanelLeftIcon,
  fileText: FileTextIcon,
  FileQuestion: FileQuestionIcon,
  close: XIcon,
  hamburgerMenu: HamburgerMenuIcon,
  star: StarIcon,
  play: CirclePlayIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  website: WebsiteIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
} as const;

export type IconProps = Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>;
export type Icon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export type IconType = keyof typeof icons;

const Icon: React.FC<{
  type: IconType;
  className?: string;
  style?: React.CSSProperties;
}> = ({ type, className, style }) => {
  const IconComponent = icons[type];

  return <IconComponent className={className} style={style} />;
};

export { Icon };
