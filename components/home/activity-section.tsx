import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data } from "@/constants";
import { BlurFade } from "../ui/blur-fade";

export function ActivitySection() {
  const cards = data.map((card, index) => (
    <BlurFade key={card.title} delay={0.25 + index * 0.15} direction="right" inView>
      <Card card={card} index={index} />
    </BlurFade>
  ));

  return (
    <div className="size-full">
      <Carousel items={cards} />
    </div>
  );
}
