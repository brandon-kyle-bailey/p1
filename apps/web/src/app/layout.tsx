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
  title: "FlowSync - Sync Your Team's Workflow | Project Management Software",
  description:
    "Streamline project management, enhance team collaboration, and boost productivity with FlowSync's intuitive platform designed for modern teams. Start your free trial today.",
  keywords:
    "project management, team collaboration, workflow, productivity, task management, team sync",
  authors: [{ name: "FlowSync Team" }],
  creator: "FlowSync",
  publisher: "FlowSync",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flowsync.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FlowSync - Sync Your Team's Workflow",
    description:
      "Streamline project management and boost team productivity with FlowSync's intuitive platform.",
    url: "https://flowsync.com",
    siteName: "FlowSync",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlowSync - Project Management Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowSync - Sync Your Team's Workflow",
    description:
      "Streamline project management and boost team productivity with FlowSync's intuitive platform.",
    images: ["/og-image.jpg"],
    creator: "@flowsync",
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
