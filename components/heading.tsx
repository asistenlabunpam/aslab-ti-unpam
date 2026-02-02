import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  containerClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  containerClassName,
  ...props
}: SectionHeaderProps) {
  return (
    <section
      className={cn(
        "bg-transparent px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "max-w-2xl lg:text-center lg:mx-auto",
          containerClassName
        )}
      >
        {eyebrow && (
          <p className="text-base/7 font-semibold text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-500">
            {eyebrow}
          </p>
        )}

        <h2 className="scroll-m-20 text-5xl text-base-foreground-100 font-semibold tracking-tight mt-3 mb-5 first:mt-0">
          {title}
        </h2>

        {description && (
          <p className="text-base/7 text-pretty text-base-foreground-400">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
