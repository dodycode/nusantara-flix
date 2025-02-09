export interface NavItem {
  href: string;
  title: string;
}

export const navItems = [
  {
    href: "/movies",
    title: "Movies",
  },
  {
    href: "/tv",
    title: "TV Shows",
  },
] as const satisfies NavItem[];
