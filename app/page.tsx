import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";
import { AboutSection } from "@/components/home/about-section";
import { HeroContent } from "@/components/home/hero-content";
import { HeroGallery } from "@/components/home/hero-gallery";
import { CourseGrid } from "@/components/home/course-grid";
import { ActivitySection } from "@/components/home/activity-section";
import { LaboratoryGrid } from "@/components/home/laboratory-grid";
import { ContactSection } from "@/components/home/contact-section";
import { StatsSection } from "@/components/home/stats-section";
import { Card } from "@/components/ui/post-card";
import { SearchAlert } from "lucide-react";
import { Post } from "@/types";
import { wordPressService } from "@/services/wordpress";

async function getRecentPosts(): Promise<Post[]> {
  return await wordPressService.getPosts<Post>();
}

export default async function Home() {
  const recentPosts = await getRecentPosts();

  return (
    <>
      <Container
        as="div"
        aria-label="Hero secction"
        className="relative px-4 py-24 grid grid-cols-1 place-items-center sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-5"
      >
        <HeroContent />
        <HeroGallery />
      </Container>

      <Container
        as="div"
        aria-label="Stats section"
        className="px-4 py-14 sm:px-6 lg:px-8"
      >
        <StatsSection />
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

        <Container
          as="section"
          className="px-4 mb-10 pb-16 sm:px-6 py-8 lg:px-8"
        >
          {recentPosts.length === 0 ? (
            <div className="text-center py-8 w-full space-y-6">
              <SearchAlert className="size-20 text-base-foreground-300 mx-auto" />
              <p className="text-base-foreground-400 font-medium">
                Belum ada berita acara
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-5 gap-y-8 my-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Card
                  key={post.id}
                  featuredImage={post._embedded?.["wp:featuredmedia"]?.[0]}
                  title={post.title.rendered}
                  url={post.slug}
                  date={post.date}
                />
              ))}
            </div>
          )}
        </Container>
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
