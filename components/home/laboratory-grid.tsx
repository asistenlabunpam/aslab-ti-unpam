import { Container } from "@/components/container";
import { RoomCard } from "@/components/ui/room-card";
import { rooms } from "@/constants";
import { BlurFade } from "../ui/blur-fade";

export function LaboratoryGrid() {
  return (
    <Container
      as="section"
      className="grid grid-cols-1 px-4 gap-x-5 gap-y-10 py-2 sm:grid-cols-2 xl:grid-cols-3"
    >
      {rooms.map((room, index) => (
        <BlurFade key={room.number} delay={0.45 + index * 0.15} direction="up" inView>
          <RoomCard
            number={room.number}
            code={room.code}
            image={room.image}
            description={room.description}
            location={room.location}
          />
        </BlurFade>
      ))}
    </Container>
  );
}
