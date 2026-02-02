import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { Info } from "lucide-react";

export default function Page() {
  return (
    <Container
      as="div"
      className="w-full max-w-5xl mx-auto space-y-10 py-5 my-16"
    >
      <SectionHeader
        eyebrow="Penjadwalan"
        title="Jadwal Asisten Laboratorium"
        description="Informasi lengkap jadwal operasional dan tugas asisten di Lab Universitas Pamulang untuk kelas Reguler."
        className="py-8"
      />

      <Container as="section" className="w-full py-8">
        <BlurFade delay={0.25} direction="up" inView>
          <iframe
            data-testid="embed-iframe"
            src={`${process.env.NEXT_PUBLIC_JADWAL}/pubhtml?widget=true&amp;headers=false&chrome=false`}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full h-128 border-0 ring-1 ring-base-200 rounded"
          />
        </BlurFade>
        <BlurFade
          delay={0.45}
          direction="up"
          inView
          className="flex items-center gap-x-1.5 mt-4"
        >
          <Info className="size-3.5" />
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            delay={0.45}
            className="text-sm/6 text-base-foreground-400"
          >
            Menampilkan jadwal real-time tugas asisten laboratorium di
            lingkungan Universitas Pamulang.
          </TextAnimate>
        </BlurFade>
      </Container>
    </Container>
  );
}
