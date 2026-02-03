import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh text-center px-6 py-24 sm:py-32 lg:px-8">
      <p className="text-8xl font-semibold bg-linear-to-r bg-clip-text text-transparent from-sky-500 to-blue-500 sm:text-9xl">
        Oops!
      </p>
      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight text-balance mt-10 mb-5 sm:text-4xl">
        Sepertinya Kamu Tersesat
      </h2>
      <p className="text-base/7 text-pretty text-base-foreground-400 sm:text-xl/relaxed">
        Halaman yang kamu cari tidak ada di sini. Mungkin sudah pindah atau
        tautannya salah ketik.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button size="lg">
          <Link href="/">Kembali</Link>
        </Button>
        <Button size="lg" variant="ghost" className="group">
          <Link href="/kontak" className="flex items-center gap-x-1.5">
            Bantuan <ArrowRight className="size-3 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
