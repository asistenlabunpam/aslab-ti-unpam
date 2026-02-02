import { ElementType } from "react";

export interface ContactProps {
  title: string;
  value: string;
  icon: ElementType;
  url?: string;
  isOpen?: boolean;
};