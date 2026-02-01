import { Navigation, NavigationGroup } from "@/types";

export const PROFILE_MENU: Navigation[] = [
  {
    title: "Asisten Laboratorium",
    href: "/asisten-laboratorium",
    description:
      "Informasi anggota Asisten Laboratorium di lingkungan Fakultas Teknik.",
  },
  {
    title: "Struktur Organisasi",
    href: "/struktur-organisasi",
    description: "Susunan organisasi Laboratorium Komputer.",
  },
];

export const INFO_MENU: Navigation[] = [
  {
    title: "Standar Operasional Prosedur",
    href: "/sop",
    description:
      "Pedoman dan tata cara operasional Laboratorium Komputer untuk menjamin kelancaran dan keamanan kegiatan.",
  },
  {
    title: "Mata Kuliah",
    href: "/mata-kuliah",
    description:
      "Daftar mata kuliah praktikum yang diselenggarakan dan dilaksanakan di Laboratorium Komputer.",
  },
  {
    title: "Denah Laboratorium",
    href: "/denah-laboratorium",
    description:
      "Informasi tata letak ruang dan fasilitas Laboratorium Komputer.",
  },
  {
    title: "Berita Acara",
    href: "/berita-acara",
    description:
      "Dokumentasi dan laporan resmi pelaksanaan kegiatan dan kejadian di Laboratorium Komputer.",
  },
  {
    title: "Recruitment",
    href: "/recruitment",
    description:
      "Informasi pendaftaran dan seleksi calon Asisten Laboratorium.",
  },
];

export const MAIN_NAVIGATION: NavigationGroup[] = [
  {
    category: "Utama",
    items: [{ title: "Beranda", href: "/", description: "Halaman beranda" }],
  },
  {
    category: "Profil",
    items: PROFILE_MENU,
  },
  {
    category: "Informasi",
    items: INFO_MENU,
  },
  {
    category: "Lainnya",
    items: [
      {
        title: "Jadwal Laboratorium",
        href: "/jadwal-laboratorium",
        description: "Jadwal penggunaan laboratorium",
      },
      {
        title: "Kontak",
        href: "/kontak",
        description: "Informasi kontak",
      },
      {
        title: "Kegiatan",
        href: "/kegiatan",
        description: "Kegiatan terbaru",
      },
    ],
  },
];

export function flattenNavigationItems() {
  return MAIN_NAVIGATION.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      category: group.category,
    })),
  );
}
