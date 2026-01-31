import { Container } from "@/components/container";
import { HERO_IMAGES } from "@/constants/home";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroGallery() {
  return (
    <Container
      as="section"
      className="grid w-full grid-cols-2 gap-2 my-10 py-10 lg:p-12"
    >
      {HERO_IMAGES.map((img, index) => (
        <div
          key={img.src}
          className={cn(
            "relative aspect-square overflow-hidden rounded-lg",
            index % 2 === 1 ? "-mt-3.5" : "",
          )}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}
    </Container>
  );
}
