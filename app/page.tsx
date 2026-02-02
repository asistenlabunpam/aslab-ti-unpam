import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";
import { AboutSection } from "@/components/home/about-section";
import { HeroContent } from "@/components/home/hero-content";
import { HeroGallery } from "@/components/home/hero-gallery";
import { CourseGrid } from "@/components/home/course-grid";
import { ActivitySection } from "@/components/home/activity-section";
import { LaboratoryGrid } from "@/components/home/laboratory-grid";
import { ContactSection } from "@/components/home/contact-section";
import { NewsGrid } from "@/components/home/news-grid";

export default function Home() {
  return (
    <>
      <Container
        as="div"
        aria-label="Hero section"
        className="relative flex flex-col lg:flex-row items-center px-4 py-24 sm:px-6 lg:px-8 lg:py-20"
      >
        <HeroContent />
        <HeroGallery />
      </Container>

      <Container
        as="div"
        id="about"
        aria-label="About section"
        className="px-4 py-14 sm:px-6 lg:px-8"
      >
        <AboutSection />
      </Container>

      <Container
        as="div"
        aria-label="Course section"
        className="space-y-12 px-4 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Kurikulum Praktikum"
          title="Mata Kuliah Laboratorium"
          description="Daftar mata kuliah berbasis praktikum yang dirancang untuk menyelaraskan teori akademik dengan implementasi teknologi terkini di industri."
        />
        <CourseGrid />
      </Container>

      <Container
        as="div"
        aria-label="Activity section"
        className="space-y-12 px-4 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Aktivitas Lab"
          title="Kegiatan & Dokumentasi"
          description="Potret kesibukan mahasiswa dalam mengeksplorasi teknologi, mulai dari sesi praktikum terjadwal hingga kolaborasi riset dan pengembangan inovasi digital."
        />
        <ActivitySection />
      </Container>

      <Container
        as="div"
        aria-label="Laboratory section"
        className="space-y-12 px-4 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Fasilitas Unggulan"
          title="Ruang Laboratorium"
          description="Eksplorasi berbagai ruang laboratorium spesifik yang dilengkapi dengan infrastruktur mutakhir untuk mendukung kegiatan praktikum, riset, dan inovasi mahasiswa."
        />
        <LaboratoryGrid />
      </Container>

      <Container as="div">
        <SectionHeader
          eyebrow="Arsip Dokumentasi"
          title="Berita Acara Kegiatan"
          description="Memuat berita acara seluruh kegiatan yang dilaksanakan oleh Asisten Laboratorium Teknik Informatika Universitas Pamulang"
          className="mt-24"
        />
        <NewsGrid />
      </Container>

      <Container
        as="section"
        aria-label="Contact section"
        className="space-y-12 px-4 mb-10 pb-10 py-14 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Layanan Bantuan"
          title="Kontak Pengelola Lab"
          description="Hubungi tim teknis atau administrasi kami untuk informasi terkait peminjaman ruang, kendala fasilitas, atau konsultasi kegiatan praktikum."
        />
        <ContactSection />
      </Container>
    </>
  );
}
