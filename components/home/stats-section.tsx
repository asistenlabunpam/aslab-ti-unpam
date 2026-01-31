import { courses, member, rooms } from "@/constants";
import { Container } from "../container";
import { GraduationCap, Monitor, Users } from "lucide-react";
import { ComponentType } from "react";

interface Stat {
  label: string;
  value: number;
  icon: ComponentType<{ className?: string }>;
}

export function StatsSection() {
  const stats: Stat[] = [
    {
      label: "Asisten Laboratorium",
      value: member.flatMap((item) => item.anggota).length,
      icon: Users,
    },
    { label: "Ruang Laboratorium", value: rooms.length, icon: Monitor },
    { label: "Mata Kuliah", value: courses.length, icon: GraduationCap },
  ];

  return (
    <Container as="section" className="w-full space-y-10">
      <h2 className="text-lg/8 font-semibold text-base-foreground-200 lg:text-center">
        Dukungan Lengkap Untuk Kegiatan Praktikum
      </h2>

      <Container
        as="div"
        className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-base-300"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="py-1 w-full border-l lg:flex-none lg:py-0 lg:border-l-0"
          >
            <div className="flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <span className="shrink-0 inline-flex justify-center size-16 p-4 rounded-lg bg-static-50 text-xs font-medium text-base-foreground-300 inset-ring inset-ring-static-500/10 dark:bg-static-400/10 dark:text-static-400 dark:inset-ring-static-400/20">
                <stat.icon className="size-full" />
              </span>
              <div className="ml-6 flex flex-auto flex-col-reverse">
                <p className="font-medium text-base-foreground-300">
                  {stat.label}
                </p>
                <p className="text-2xl font-semibold text-base-foreground-100">
                  {stat.value} Total
                </p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
}
