import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { member } from "@/constants/anggota";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroContent() {
  return (
    <Container
      as="section"
      className="relative w-full lg:max-w-3xl xl:max-w-3xl"
    >
      <a
        href="https://github.com/asistenlabunpam"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center w-max rounded-full bg-base-50 mb-8 px-2 py-1 text-sm text-base-foreground-400 border border-base-200 hover:border-base-300 transition-colors"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="size-5">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="mx-2 h-4 w-px bg-base-200" />
        <span className="hidden sm:block">
          Kunjungi repositori open source GitHub ASLAB
        </span>
        <span className="block sm:hidden">Kunjungi GitHub ASLAB</span>
        <ChevronRight className="group-hover:translate-x-1 ml-1.5 size-3.5 transition-transform" />
      </a>

      <h1 className="text-5xl font-semibold tracking-tight text-base-foreground-100 max-w-2xl lg:text-6xl lg:max-w-none">
        ASLAB TI{" "}
        <span className="text-base-foreground-300">Universitas Pamulang</span>
      </h1>

      <p className="mt-8 text-sm/6 text-base-foreground-400 sm:text-base/7 sm:max-w-xl">
        Platform resmi informasi Laboratorium Teknik Informatika UNPAM. Akses
        jadwal asistensi, modul praktikum, peraturan lab, dan berita acara
        terbaru dengan mudah.
      </p>

      <div className="mt-10 flex items-center gap-x-4">
        <Button size="lg" className="rounded-full" asChild>
          <Link href="#about">Tentang ASLAB</Link>
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="group gap-x-2 rounded-full"
          asChild
        >
          <Link href="/mata-kuliah">
            Mata Kuliah <ChevronRight className="size-3 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      <div className="relative group flex items-center gap-x-3.5 w-max mt-12">
        <div className="flex items-center -space-x-2.5 group-hover:-space-x-1.5">
          {member[0].anggota.slice(0, 5).map((member) => (
            <div key={member.name}>
              <div className="relative size-7 aspect-square overflow-hidden rounded-full outline-2 outline-base-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <Link href="/asisten-laboratorium" className="absolute inset-0">
          <span hidden>Lihat asisten lab</span>
        </Link>

        <div className="flex items-center gap-x-2 text-sm/6 text-base-foreground-400 group-hover:text-base-foreground-500">
          <p>Lihat {member.flatMap((item) => item.anggota).length} Asisten Lab</p>
          <ArrowRight className="size-3 group-hover:translate-x-1" />
        </div>
      </div>
    </Container>
  );
}
