import { Course } from "@/types";
import { MagicCard } from "./magic-card";

export function CourseCard({
  icon: Icon,
  name,
  description,
  semester,
  sks,
}: Readonly<Course>) {
  return (
    <MagicCard className="group relative size-full p-6 bg-base-50 rounded-2xl">
      <div className="flex justify-between items-center w-full">
        <span className="inline-flex items-center rounded-full bg-blue-50 size-14 p-3 text-blue-700 inset-ring inset-ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/20">
          <Icon className="size-full" />
        </span>

        <div className="flex flex-col items-end gap-y-1">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 inset-ring inset-ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:inset-ring-sky-500/20">
            Semester {semester}
          </span>
          <span className="inline-flex items-center rounded-full bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700 inset-ring inset-ring-cyan-700/10 dark:bg-cyan-400/10 dark:text-cyan-400 dark:inset-ring-cyan-400/30">
            SKS {sks}
          </span>
        </div>
      </div>

      <div className="mt-16 space-y-2.5">
        <h3 className="scroll-m-20 text-xl text-base-foreground-200 font-semibold tracking-tight">
          {name}
        </h3>
        <p className="text-base/7 text-base-foreground-400">{description}</p>
      </div>
    </MagicCard>
  );
}
