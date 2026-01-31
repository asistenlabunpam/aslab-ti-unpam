import { ContactProps } from "@/types";

export function ContactCard({ title, value, icon: Icon }: Readonly<ContactProps>) {
  return (
    <li className="flex items-start gap-x-3.5 rounded-lg bg-base-50 p-4 border border-base-200">
      <div className="shrink-0 inline-flex size-11 items-center justify-center rounded-full bg-blue-50 p-3 text-blue-700 inset-ring inset-ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/20">
        <Icon className="size-full" aria-hidden />
      </div>

      <div className="w-full">
        <h3 className="text-lg font-semibold text-base-foreground-200">
          {title}
        </h3>
        <p className="text-sm/6 text-base-foreground-400">{value}</p>
      </div>
    </li>
  );
}
