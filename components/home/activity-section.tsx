"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data } from "@/constants";

export function ActivitySection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="size-full">
      <Carousel items={cards} />
    </div>
  );
}
