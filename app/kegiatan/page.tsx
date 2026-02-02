import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";
import { Card } from "@/components/ui/apple-cards-carousel";
import { BlurFade } from "@/components/ui/blur-fade";
import { data } from "@/constants";

export default function Page() {
  return (
    <Container
      as="section"
      className="space-y-12 px-4 my-12 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeader
        eyebrow="Jadwal & Aktivitas"
        title="Kegiatan ASLAB"
        description="Berbagai kegiatan praktikum, workshop, dan pelatihan yang tersedia di laboratorium. Dapatkan informasi lengkap mengenai jadwal, materi, dan instruktur untuk setiap sesi pembelajaran."
      />

      <Container
        as="div"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((card, index) => (
          <BlurFade key={card.title} delay={0.5 + index * 0.15} direction="up" inView>
            <Card
              card={card}
              index={index}
              defaultClass={false}
              className="relative group flex h-96 w-auto max-w-sm mx-auto flex-col items-start justify-start overflow-hidden p-2 rounded-xl bg-base-100 sm:max-w-none sm:mx-0 md:h-128 md:rounded-3xl"
            />
          </BlurFade>
        ))}
      </Container>
    </Container>
  );
}
