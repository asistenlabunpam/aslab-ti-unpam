export interface Navigation {
  title: string;
  href: string;
  description: string;
}

export interface NavigationGroup {
  category: string;
  items: Navigation[];
}