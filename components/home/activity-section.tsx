"use client";

import { Container } from "@/components/container";
import { Figure } from "@/components/figure";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { activities } from "@/constants";
import { ActivityItem } from "@/types";

interface ActivityGridProps {
  items: ActivityItem[];
}

function ActivityGrid({ items }: ActivityGridProps) {
  if (!items.length) {
    return (
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Belum ada aktivitas
      </p>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Figure
          key={item.src}
          image={item.src}
          imageWrapperClassName="aspect-video"
          imageProps={{ fill: true }}
          caption={item.caption}
        />
      ))}
    </div>
  );
}

export function ActivitySection() {
  const kegiatan = activities.filter((item) => item.category === "kegiatan");
  const asistensi = activities.filter((item) => item.category === "asistensi");

  return (
    <Container as="section" className="mx-auto">
      <Tabs defaultValue="semua">
        <TabsList variant="line" className="mx-auto">
          <TabsTrigger value="semua">Semua</TabsTrigger>
          <TabsTrigger value="kegiatan">Kegiatan</TabsTrigger>
          <TabsTrigger value="asistensi">Asistensi</TabsTrigger>
        </TabsList>

        <TabsContent value="semua">
          <ActivityGrid items={activities} />
        </TabsContent>

        <TabsContent value="kegiatan">
          <ActivityGrid items={kegiatan} />
        </TabsContent>

        <TabsContent value="asistensi">
          <ActivityGrid items={asistensi} />
        </TabsContent>
      </Tabs>
    </Container>
  );
}
