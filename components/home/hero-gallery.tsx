// hero-gallery.tsx
import { Container } from "@/components/container";
import { HERO_IMAGES } from "@/constants/home";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BlurFade } from "../ui/blur-fade";

export function HeroGallery() {
  return (
    <Container as="section" className="flex-1 w-full mb-8 lg:mb-0">
      <div className="grid grid-cols-2 w-full my-5 py-8 sm:grid-cols-4 sm:my-5 sm:py-10 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 lg:my-0 lg:py-8">
        {HERO_IMAGES.map((img, index) => (
          <BlurFade
            key={img.src}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg sm:aspect-4/5 lg:aspect-square",
              "sm:rounded-xl lg:rounded-2xl",
              index === 1 || index === 3
                ? "mt-0 sm:-mt-4 lg:-mt-8"
                : index === 2
                  ? "mt-0"
                  : "",
            )}
            delay={0.15 + index * 0.15}
            direction="up"
            inView
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 50vw"
              priority={index < 2}
              className="object-cover"
            />
          </BlurFade>
        ))}
      </div>
    </Container>
  );
}
