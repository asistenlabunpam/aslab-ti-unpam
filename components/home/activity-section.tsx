"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { JSX } from "react";

export function ActivitySection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="size-full">
      <Carousel items={cards} />
    </div>
  );
}

const ActivityContent = ({ category }: { category: string }) => {
  const contentMap: Record<string, JSX.Element> = {
    Asistensi: (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="bg-base-200 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0 
                  ? "Pelatihan Data Mining dan Analisis"
                  : index === 1
                  ? "Workshop Artificial Intelligence"
                  : "Hackathon Inovasi Teknologi"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Kegiatan intensif selama 2 hari untuk menguasai teknik data mining menggunakan Python dan R. Peserta belajar tentang clustering, classification, dan predictive analytics untuk pengambilan keputusan berbasis data."
                  : index === 1
                  ? "Sesi interaktif pengenalan machine learning dan neural networks. Implementasi real-world project dengan TensorFlow dan PyTorch untuk solusi bisnis dan riset."
                  : "Kompetisi 48 jam mengembangkan solusi teknologi untuk masalah sosial. Tim terbaik mendapat pendanaan inkubasi dan mentorship lanjutan."}
              </p>

              <div className="relative aspect-video overflow-hidden rounded-md lg:rounded-xl">
                <Image
                  src={
                    index === 0
                      ? "/images/asistensi/asistensi-basis-data.webp"
                      : index === 1
                      ? "/images/asistensi/asistensi-algoritma-pemrograman.webp"
                      : "/images/asistensi/asistensi-mobile-programming.webp"
                  }
                  alt={`Gambar kegiatan asistensi ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </>
    ),
    Kamisan: (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="bg-base-200 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0
                  ? "Diskusi Kamisan: Future of Education"
                  : index === 1
                  ? "Sharing Session Alumni Berprestasi"
                  : "Workshop Academic Writing"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Forum diskusi bulanan menghadirkan pakar pendidikan dan praktisi industri. Topik bulan ini membahas transformasi digital dalam pembelajaran dan skill yang dibutuhkan di era 4.0."
                  : index === 1
                  ? "Alumni sukses berbagi pengalaman karir dan tips meraih beasiswa. Sesi mencakup networking strategies, personal branding, dan roadmap pengembangan karier."
                  : "Pelatihan penulisan akademik untuk paper conference dan jurnal internasional. Fokus pada methodology, literature review, dan ethical publication practices."}
              </p>

              <div className="relative aspect-video overflow-hidden rounded-md lg:rounded-xl">
                <Image
                  src={
                    index === 0
                      ? "/images/kamisan/kamisan-2.webp"
                      : index === 1
                      ? "/images/kamisan/kamisan-3.webp"
                      : "/images/kamisan/kamisan-4.webp"
                  }
                  alt={`Gambar kegiatan pendidikan ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </>
    ),
    Kepanitiaan: (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="bg-base-200 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0
                  ? "Strategic Planning for Organizational Excellence"
                  : index === 1
                  ? "Leadership Development Program"
                  : "Project Management Certification Prep"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Workshop penyusunan roadmap organisasi 5 tahun ke depan. Menggunakan tools seperti SWOT analysis, OKR framework, dan balanced scorecard untuk alignment strategy."
                  : index === 1
                  ? "Program 3 bulan pengembangan kepemimpinan dengan coaching dari eksekutif perusahaan ternama. Fokus pada decision making, conflict resolution, dan team motivation."
                  : "Persiapan sertifikasi PMP dan CAPM dengan materi lengkap dan simulasi ujian. Mencakup seluruh knowledge areas dari PMBOK Guide edisi terbaru."}
              </p>

              <div className="relative aspect-video overflow-hidden rounded-md lg:rounded-xl">
                <Image
                  src={
                    index === 0
                      ? "/images/seminar/seminar-2.webp"
                      : index === 1
                      ? "/images/seminar/seminar-3.webp"
                      : "/images/seminar/seminar-4.webp"
                  }
                  alt={`Gambar kegiatan manajemen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </>
    ),
    Development: (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="bg-base-200 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0
                  ? "Full-Stack Web Development Bootcamp"
                  : index === 1
                  ? "Mobile App Development Intensive"
                  : "DevOps and Cloud Computing Workshop"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Program 8 minggu menguasai MERN stack (MongoDB, Express, React, Node.js). Setiap peserta menyelesaikan 3 proyek portfolio dan 1 capstone project."
                  : index === 1
                  ? "Pengembangan aplikasi cross-platform dengan React Native dan Flutter. Mencakup UI/UX design, API integration, dan deployment ke App Store/Play Store."
                  : "Implementasi CI/CD pipeline menggunakan Docker, Kubernetes, dan AWS. Hands-on lab dengan skenario production environment dan monitoring setup."}
              </p>

              <div className="relative aspect-video overflow-hidden rounded-md lg:rounded-xl">
                <Image
                  src={
                    index === 0
                      ? "/images/development/coding-bootcamp.webp"
                      : index === 1
                      ? "/images/development/mobile-dev.webp"
                      : "/images/development/devops-lab.webp"
                  }
                  alt={`Gambar kegiatan pengembangan ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </>
    ),
    Evaluasi: (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="bg-base-200 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0
                  ? "Malam Keakraban Angkatan 2024"
                  : index === 1
                  ? "Community Outreach Program"
                  : "Annual Organization Gathering"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Acara perkenalan dan bonding untuk anggota baru dengan games interaktif, talent show, dan sesi sharing dari senior. Membangun chemistry tim sejak dini."
                  : index === 1
                  ? "Program pengabdian masyarakat dengan mengajar coding ke anak-anak sekolah dan renovasi fasilitas belajar. Kolaborasi dengan NGO lokal untuk impact yang berkelanjutan."
                  : "Rekreasi tahunan seluruh anggota dengan team building activities, award ceremony, dan strategic reflection. Mengapresiasi pencapaian dan menyusun rencana tahun depan."}
              </p>

              <div className="relative aspect-video overflow-hidden rounded-md lg:rounded-xl">
                <Image
                  src={
                    index === 0
                      ? "/images/makrab/makrab-1.webp"
                      : index === 1
                      ? "/images/makrab/makrab-2.webp"
                      : "/images/makrab/makrab-3.webp"
                  }
                  alt={`Gambar kegiatan komunitas ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </>
    ),
  };

  return contentMap[category] || <DefaultContent />;
};

const DefaultContent = () => {
  return (
    <div className="bg-base-200 p-8 rounded-3xl mb-4 space-y-4 md:p-14">
      <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
        Kegiatan Organisasi
      </h3>
      <p className="text-base-foreground-400 text-base md:text-2xl">
        Aktivitas pengembangan skill dan networking untuk anggota organisasi.
      </p>
    </div>
  );
};

const data = [
  {
    category: "Asistensi",
    title: "Asistensi Kelas Laboratorium",
    src: "/images/asistensi/asistensi-data-mining.webp",
    content: <ActivityContent category="Asistensi" />,
  },
  {
    category: "Kamisan",
    title: "Kamisan Teknik Informatika",
    src: "/images/kamisan/kamisan-4.webp",
    content: <ActivityContent category="Kamisan" />,
  },
  {
    category: "Kepanitiaan",
    title: "Panitia Seminar Nasional TI.",
    src: "/images/seminar/seminar-1.webp",
    content: <ActivityContent category="Kepanitiaan" />,
  },
  {
    category: "Development",
    title: "Bootcamp Internal ASLAB",
    src: "/images/bootcamp/bootcamp-web-programming.webp",
    content: <ActivityContent category="Development" />,
  },
  {
    category: "Evaluasi",
    title: "Kegiatan Rapat Evaluasi ASLAB",
    src: "/images/makrab/makrab-4.webp",
    content: <ActivityContent category="Evaluasi" />,
  },
];
