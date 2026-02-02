"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "motion/react";

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const variant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center min-h-dvh text-center px-6 py-24 sm:py-32 lg:px-8"
    >
      <motion.p 
        variants={variant}
        className="text-8xl font-semibold bg-linear-to-r bg-clip-text text-transparent from-sky-500 to-blue-500 sm:text-9xl"
      >
        Oops!
      </motion.p>

      <motion.h2 
        variants={variant}
        className="scroll-m-20 text-center text-3xl font-semibold tracking-tight text-balance mt-10 mb-5 sm:text-4xl"
      >
        Sepertinya Kamu Tersesat
      </motion.h2>

      <motion.p 
        variants={variant}
        className="text-base/7 text-pretty text-base-foreground-400 sm:text-xl/relaxed max-w-2xl"
      >
        Halaman yang kamu cari tidak ada di sini. Mungkin sudah pindah atau
        tautannya salah ketik.
      </motion.p>

      <motion.div 
        variants={variant}
        className="mt-10 flex items-center justify-center gap-x-4"
      >
        <Button size="lg" asChild>
          <Link href="/">Kembali</Link>
        </Button>

        <Button size="lg" variant="ghost" className="group" asChild>
          <Link href="/kontak" className="flex items-center gap-x-1.5">
            Bantuan 
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
