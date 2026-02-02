import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { ScrollTopButton } from "@/components/scrolltop-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ASLAB TI - Universitas Pamulang | Laboratorium Teknologi Informasi",
    template: "%s | ASLAB TI UNPAM"
  },
  description: "Website resmi Asisten Laboratorium Teknologi Informasi Universitas Pamulang. Portal informasi, materi pembelajaran, dan kegiatan laboratorium.",
  keywords: [
    "ASLAB TI UNPAM",
    "Universitas Pamulang",
    "Laboratorium Teknologi Informasi",
    "Teknik Informatika",
    "Praktikum TI",
    "Asisten Lab UNPAM",
    "Pendidikan Teknologi"
  ],  
  openGraph: {
    title: "ASLAB TI - Universitas Pamulang",
    description: "Website resmi Asisten Laboratorium Teknologi Informasi Universitas Pamulang",
    url: "https://aslab-ti-unpam.vercel.app",
    siteName: "ASLAB TI UNPAM",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/asistensi/asistensi-mobile-programming.webp",
        width: 1200,
        height: 630,
        alt: "ASLAB TI Universitas Pamulang"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ASLAB TI - Universitas Pamulang",
    description: "Website resmi Asisten Laboratorium Teknologi Informasi Universitas Pamulang",
    images: ["/images/asistensi/asistensi-data-mining.webp"],
    creator: "@aslabti_unpam"
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
    }
  },
  alternates: {
    canonical: "https://aslab-ti-unpam.vercel.app",
    languages: {
      "id-ID": "https://aslab-ti-unpam.vercel.app/id",
    }
  },
  category: "education",
  authors: [
    { name: "ASLAB TI UNPAM", url: "https://aslab-ti-unpam.vercel.app" },
    { name: "Universitas Pamulang" }
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id-ID"
      className="scroll-smooth overflow-y-auto"
      suppressHydrationWarning
    >
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "font-sans antialiased w-full bg-base-50 overflow-x-hidden",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          <Header />
          <main id="main" tabIndex={-1} className="w-full bg-transparent min-w-1 max-w-none">
            {children}
            <ScrollTopButton />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
