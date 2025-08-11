import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumino – Make Your Impact Evident | Developer Contribution Tracking",
  description:
    "Lumino automatically tracks and visualizes your contributions across GitHub, Linear, and more. Showcase your impact to teams, projects, and organizations with clarity and confidence.",
  keywords:
    "developer impact tracking, contribution tracking, github analytics, engineering metrics, team productivity, project contributions, developer portfolio",
  authors: [{ name: "Lumino Team" }],
  creator: "Lumino",
  publisher: "Lumino",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lumino.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumino – Make Your Impact Evident",
    description:
      "Track and visualize your contributions automatically. Lumino connects with GitHub, Linear, and more to showcase your value.",
    url: "https://lumino.com",
    siteName: "Lumino",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumino – Developer Impact Tracking Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumino – Make Your Impact Evident",
    description:
      "Lumino automatically tracks and visualizes your contributions across GitHub, Linear, and more.",
    images: ["/og-image.jpg"],
    creator: "@lumino",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
