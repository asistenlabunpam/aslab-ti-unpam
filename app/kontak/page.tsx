import { Container } from "@/components/container";
import { SectionHeader } from "@/components/heading";
import { ContactCard } from "@/components/ui/contact-card";
import { contacts } from "@/constants";

export default function Page() {
  return (
    <Container
      as="section"
      className="space-y-12 px-4 my-12 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeader
        eyebrow="Layanan Bantuan"
        title="Kontak Pengelola Lab"
        description="Hubungi tim teknis atau administrasi kami untuk informasi terkait peminjaman ruang, kendala fasilitas, atau konsultasi kegiatan praktikum."
      />

      <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        {contacts.map((item) => (
          <ContactCard key={item.title} {...item} />
        ))}
      </ul>
    </Container>
  );
}
