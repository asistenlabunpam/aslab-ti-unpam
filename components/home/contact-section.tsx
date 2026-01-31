import { Container } from "@/components/container";
import { ContactCard } from "@/components/ui/contact-card";
import { contacts } from "@/constants";

export function ContactSection() {
  return (
    <section className="space-y-12 px-4 mb-10 pb-10 py-14 sm:px-6 lg:px-8">
      <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        {contacts.map((item) => (
          <ContactCard key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}
