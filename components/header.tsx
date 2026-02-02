"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Menu, SearchIcon, X } from "lucide-react";
import { MobileMenu } from "./mobile-header";
import { Button } from "./ui/button";
import { MainNavigation } from "./navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState, useMemo } from "react";
import { Separator } from "./ui/separator";
import { flattenNavigationItems } from "@/constants";

export function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openCommand, setOpenCommand] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const allItems = useMemo(() => flattenNavigationItems(), []);

  const filteredItems = useMemo(() => {
    if (!search.trim()) return allItems;
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, allItems]);

  const groupedItems = useMemo(() => {
    const grouped = new Map<string, typeof allItems>();
    filteredItems.forEach((item) => {
      const category = item.category;
      if (!grouped.has(category)) {
        grouped.set(category, []);
      }
      grouped.get(category)!.push(item);
    });
    return Array.from(grouped.entries());
  }, [filteredItems]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-base-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden lg:block">
          <MainNavigation />
        </div>

        <div className="flex items-center gap-x-2">
          <Button
            onClick={() => setOpenCommand(true)}
            variant="outline"
            size="sm"
            className="hidden font-normal w-fit rounded-full sm:flex"
          >
            <SearchIcon className="size-3.5" />
            Cari...
          </Button>
          <Button
            onClick={() => setOpenCommand(true)}
            variant="ghost"
            size="icon-sm"
            className="sm:hidden"
          >
            <SearchIcon className="size-3.5" />
          </Button>
          <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
            <Command>
              <CommandInput
                placeholder="Cari halaman atau navigasi..."
                value={search}
                onValueChange={setSearch}
              />
              <CommandList>
                <CommandEmpty>Tidak ada hasil ditemukan.</CommandEmpty>
                {groupedItems.map(([category, items]) => (
                  <CommandGroup key={category} heading={category}>
                    {items.map((item) => (
                      <CommandItem key={item.href} asChild>
                        <Link
                          href={item.href}
                          onClick={() => setOpenCommand(false)}
                        >
                          <div className="flex flex-col">
                            <span>{item.title}</span>
                            {item.description && (
                              <span className="text-xs text-muted-foreground">
                                {item.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </CommandList>
            </Command>
          </CommandDialog>

          <Separator orientation="vertical" className="w-auto h-14" />

          <AnimatedThemeToggler />

          <Button
            variant="outline"
            size="icon-sm"
            className="lg:hidden"
            onClick={() => setOpenMenu((v) => !v)}
            aria-label="Toggle menu"
          >
            {openMenu ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {openMenu && <MobileMenu onClose={() => setOpenMenu(false)} />}
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="relative w-28 h-7 shrink-0 md:h-8">
      <Image
        src="/logo.svg"
        alt="Logo Asisten Laboratorium Universitas Pamulang"
        priority
        fill
      />
    </Link>
  );
}
