import { cn } from "@/lib/utils";
import { ContactProps } from "@/types";
import { ChevronRight } from "lucide-react";

export function ContactCard({
  title,
  value,
  icon: Icon,
  url,
  isOpen = true,
}: Readonly<ContactProps>) {
  const hasUrl = Boolean(url && isOpen);

  return (
    <div className="relative group flex gap-x-6 py-6">
      <div className="shrink-0 inline-flex justify-center items-center size-12 p-3 rounded-lg bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20">
        <Icon
          aria-hidden="true"
          className="size-full text-blue-500 dark:text-blue-400"
        />
      </div>

      <div className="flex-auto">
        <h3 className="text-xl font-semibold text-base-foreground-200 sm:text-2xl">
          {hasUrl ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          ) : (
            <span>{title}</span>
          )}
        </h3>

        <p className="text-sm/6 text-base-foreground-400 mt-1 sm:text-base/7">{value}</p>

        {!isOpen && title === "Jam Operasional" && (
          <p className="text-xs text-red-500 mt-1">
            Saat ini di luar jam operasional
          </p>
        )}
      </div>

      {hasUrl && (
        <div className="shrink-0 flex-none self-center">
          <ChevronRight
            aria-hidden="true"
            className="size-4 text-base-foreground-400 transition group-hover:translate-x-1"
          />
        </div>
      )}
    </div>
  );
}
