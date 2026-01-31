import { Container } from "@/components/container";
import { RoomCard } from "@/components/ui/room-card";
import { rooms } from "@/constants";

export function LaboratoryGrid() {
  return (
    <Container
      as="section"
      className="grid grid-cols-1 px-4 gap-x-5 gap-y-10 py-2 sm:grid-cols-2 lg:grid-cols-3"
    >
      {rooms.map((room) => (
        <RoomCard
          key={room.number}
          number={room.number}
          code={room.code}
          image={room.image}
          description={room.description}
          location={room.location}
        />
      ))}
    </Container>
  );
}
