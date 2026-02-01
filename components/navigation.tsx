"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PROFILE_MENU, INFO_MENU } from "@/constants/navigation";

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavLink href="/">Beranda</NavLink>

        <NavDropdown title="Profil" items={PROFILE_MENU} />
        <NavDropdown title="Informasi" items={INFO_MENU} />

        <NavLink href="/jadwal-laboratorium">Jadwal</NavLink>
        <NavLink href="/kontak">Kontak</NavLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link href={href}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function NavDropdown({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    href: string;
    description: string;
  }[];
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-96 space-y-1 p-2">
          {items.map((item) => (
            <NavDropdownItem key={item.href} {...item} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function NavDropdownItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block rounded-md p-3 text-sm transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
          )}
        >
          <div className="font-medium leading-none">{title}</div>
          <p className="mt-1 line-clamp-2 text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
