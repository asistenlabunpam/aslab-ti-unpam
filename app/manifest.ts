import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ASLAB TI - Universitas Pamulang",
    short_name: "ASLAB TI UNPAM",
    description:
      "Website resmi Asisten Laboratorium Teknologi Informasi Universitas Pamulang",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0066cc",
    icons: [
      {
        src: "/images/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/favicons/favicon-32x32.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
