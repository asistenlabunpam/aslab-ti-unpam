import { Container } from "@/components/container";
import { Figure } from "@/components/figure";
import { SectionHeader } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { rooms } from "@/constants";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <SectionHeader
        eyebrow="Denah & Lokasi"
        title="Tata Letak Laboratorium"
        description="Eksplorasi layout dan posisi setiap ruang laboratorium Teknik Informatika di Gedung C, Lantai 8."
        className="mt-24 py-10"
      />

      <Container
        as="section"
        className="w-full bg-transparent px-4 mb-24 sm:px-6 lg:px-8"
      >
        <Figure
          image="/images/denah_lab.webp"
          imageProps={{ fill: true }}
          imageWrapperClassName="relative aspect-video"
          caption="Denah Lantai 8 Gedung C, Kampus Viktor, Program Studi Teknik Informatika Universitas Pamulang."
        />
      </Container>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Ruang & Fasilitas"
          title="Profil Ruang Laboratorium"
          description="Informasi teknis dan fasilitas pendukung pembelajaran di setiap ruang laboratorium yang digunakan oleh Asisten Laboratorium."
          className="mt-24"
        />

        <div className="mt-20 divide-y divide-base-200">
          {rooms.map((room) => (
            <div
              key={room.number}
              className="py-10 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-5">
                <Figure
                  image={room.image || ""}
                  imageProps={{ fill: true }}
                  imageWrapperClassName="relative aspect-video"
                  caption={`Gambar Ruang Laboratorium ${room.number} Prodi Teknik Informatika.`}
                />
              </div>
              <div className="mt-4 lg:col-span-7 lg:mt-0">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Ruang Laboratorium {room.number}
                </h3>
                <p className="text-base/7 text-base-foreground-300 mt-5">
                  {room.summary}
                </p>

                <div className="flex items-center gap-x-5 w-full mt-7">
                  <div className="shrink-0 flex items-center gap-x-2 text-sm/6 text-base-foreground-400">
                    <MapPin className="size-4" />
                    <p>{room.location}</p>
                  </div>
                  <Separator className="flex-auto w-full" />
                  <Button className="group rounded-full" asChild>
                    <Link href={`/laboratorium/${room.number}`}>
                      Selengkapnya{" "}
                      <ArrowRight className="size-3 group-hover:-rotate-45" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
