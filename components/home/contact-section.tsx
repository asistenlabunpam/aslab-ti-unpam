import { Container } from "@/components/container";
import { contacts } from "@/constants";
import { Info } from "lucide-react";
import { ContactCard } from "../ui/contact-card";
import { operational } from "@/lib/utils";

export function ContactSection() {
  return (
    <Container
      as="section"
      className="space-y-12 px-4 mb-10 pb-10 py-14 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-3xl mx-auto">
        <div className="-mt-6 divide-y divide-base-200 border-b border-base-200">
          {contacts.map((item) => (
            <ContactCard key={item.title} {...item} isOpen={operational()} />
          ))}
        </div>

        <div className="mt-8 flex gap-x-2 text-sm/6 text-base-foreground-400 md:justify-center">
          <Info className="shrink-0 size-3.5 mt-1" />
          <p>
            Hubungi kami melalui informasi kontak di atas untuk mendapatkan
            bantuan lebih lanjut.
          </p>
        </div>
      </div>
    </Container>
  );
}
