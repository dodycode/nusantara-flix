import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import { Toaster } from "@/components/ui/sonner";
import { env } from "@/env";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.NODE_ENV === "production"
      ? "https://nusantara-flix.vercel.app"
      : "http://localhost:3000",
  ),
  title: "Nusantara Flix",
  description:
    "Nusantara Flix is your premier destination for exploring the best of Indonesian cinema and television. Discover popular movies and TV series featuring renowned Indonesian actors and actresses.",
  keywords:
    "Indonesian movies, Indonesian TV series, Nusantara Flix, Popular Indonesian actors, Indonesian actresses, Explore Indonesian films, Indonesian entertainment, T3 stack app",
  authors: [
    {
      name: "Dodycode",
      url: "https://dodycode.com",
    },
  ],
  openGraph: {
    title: "Nusantara Flix",
    description:
      "Explore the best of Indonesian cinema and television with Nusantara Flix. Discover popular movies and TV series featuring your favorite actors and actresses.",
    url: new URL(
      env.NODE_ENV === "production"
        ? "https://nusantara-flix.vercel.app"
        : "http://localhost:3000",
    ),
    siteName: "Nusantara Flix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nusantara Flix",
    description:
      "Explore the best of Indonesian cinema and television with Nusantara Flix. Discover popular movies and TV series featuring your favorite actors and actresses.",
    creator: "@dodypras__",
    site: "@dodypras__",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      // To fix next-theme hydration error in next 15
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <TRPCReactProvider>
            <NextTopLoader />
            {children}
            <Toaster />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
