import Image from "next/image";
import { JSX } from "react";

const ActivityContent = ({ category }: { category: string }) => {
  const contentMap: Record<string, JSX.Element> = {
    Asistensi: (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={index}
              className="bg-base-100 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0 
                  ? "Apa yang kami lakukan?"
                  : index === 1
                  ? "Bagaimana cara kami melakukannya?"
                  : "Dampak yang kami harapkan"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Asistensi laboratorium adalah layanan pendampingan akademik yang dibantu oleh asisten laboratorium untuk mendukung proses belajar mahasiswa dengan dosen dalam memahami materi praktikum secara mendalam."
                  : index === 1
                  ? "Melalui sistem penjadwalan yang terintegrasi dan pendampingan langsung oleh asisten laboratorium. Kami menyelenggarakan responsi, pengawasan praktikum mandiri, serta pemeliharaan perangkat lunak dan perangkat keras agar siap digunakan kapan saja."
                  : "Meningkatkan pemahaman praktis mahasiswa terhadap teori perkuliahan. Laboratorium menjadi pusat kolaborasi yang produktif, menghasilkan lingkungan belajar yang suportif, serta memastikan standar kompetensi teknis mahasiswa tercapai."}
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
              className="bg-base-100 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0
                  ? "Apa itu Kamisan-TI?"
                  : index === 1
                  ? "Bagaimana kami berdialog?"
                  : "Dampak yang kami harapkan"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Kamisan-TI adalah forum diskusi atau dialog sebagai jembatan komunikasi antara Program Studi dengan seluruh mahasiswa Program Studi Teknik Informatika Universitas Pamulang."
                  : index === 1
                  ? "Melalui sesi tatap muka rutin yang interaktif, di mana mahasiswa dapat menyampaikan aspirasi, kendala akademik, hingga saran pengembangan kurikulum secara langsung kepada pimpinan prodi."
                  : "Terciptanya transparansi informasi dan solusi kolektif atas berbagai isu akademik maupun kemahasiswaan, demi kemajuan ekosistem belajar di Teknik Informatika Universitas Pamulang."}
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
              className="bg-base-100 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0
                  ? "Seminar Nasional TI UNPAM"
                  : index === 1
                  ? "Wadah Diseminasi Teknologi"
                  : "Tujuan & Capaian Ilmiah"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Seminar Nasional Teknik Informatika Universitas Pamulang adalah acara tahunan yang mempertemukan akademisi, praktisi, dan mahasiswa untuk berbagi pengetahuan terkini di bidang teknologi informasi melalui presentasi makalah ilmiah dan diskusi panel."
                  : index === 1
                  ? "Program studi menyeleksi beberapa anggota Asisten laboratorium untuk berperan sebagai panitia, bertanggung jawab dalam koordinasi acara, pendaftaran peserta, serta dokumentasi kegiatan guna memastikan kelancaran seminar dari awal hingga akhir."
                  : "Menjadi platform utama untuk diseminasi hasil riset dan inovasi di bidang teknologi informasi, sekaligus memperluas jejaring profesional antar peserta demi pengembangan karir dan kolaborasi riset di masa depan."}
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
              className="bg-base-100 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0
                  ? "Apa yang kami lakukan?"
                  : index === 1
                  ? "Bagaimana cara kami melakukannya?"
                  : "Hasil yang diharapkan"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Bootcamp Internal ASLAB adalah program pelatihan intensif yang dirancang untuk meningkatkan keterampilan teknis anggota Asisten Laboratorium melalui serangkaian workshop, proyek praktis, dan sesi mentoring."
                  : index === 1
                  ? "Asisten Lab menyelenggarakan serangkaian sesi pelatihan yang mencakup topik-topik terkini di bidang teknologi informasi, dipandu oleh instruktur berpengalaman serta didukung oleh materi pembelajaran yang komprehensif dan studi kasus nyata."
                  : "Peserta diharapkan mampu menguasai keterampilan teknis yang relevan dengan kebutuhan industri, meningkatkan kemampuan problem-solving, serta siap berkontribusi secara efektif dalam proyek-proyek pengembangan teknologi di lingkungan akademik maupun profesional."}
              </p>

              <div className="relative aspect-video overflow-hidden rounded-md lg:rounded-xl">
                <Image
                  src={
                    index === 0
                      ? "/images/bootcamp/bootcamp-mobile-programming.webp"
                      : index === 1
                      ? "/images/bootcamp/bootcamp-web-programming.webp"
                      : "/images/bootcamp/bootcamp-1.webp"
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
              className="bg-base-100 p-8 rounded-3xl mb-4 space-y-4 md:p-14"
            >
              <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
                {index === 0
                  ? "Apa itu Rapat Evaluasi?"
                  : index === 1
                  ? "Tujuan Rapat Evaluasi"
                  : "Manfaat bagi Organisasi"}
              </h3>

              <p className="text-base-foreground-400 text-base md:text-2xl">
                {index === 0
                  ? "Rapat Evaluasi ASLAB adalah pertemuan yang diadakan untuk meninjau kinerja, membahas tantangan, dan merencanakan strategi pengembangan laboratorium serta kegiatan asisten laboratorium."
                  : index === 1
                  ? "Melalui diskusi terbuka, analisis data kinerja, dan umpan balik dari anggota, rapat ini bertujuan untuk mengidentifikasi area perbaikan serta menetapkan langkah-langkah konkret guna meningkatkan efektivitas operasional laboratorium."
                  : "Rapat evaluasi memberikan kesempatan bagi seluruh anggota untuk berkontribusi dalam proses pengambilan keputusan, memperkuat kerja sama tim, serta memastikan bahwa laboratorium terus berkembang sesuai dengan kebutuhan akademik dan teknologi terkini."}
              </p>

              <div className="relative aspect-video overflow-hidden rounded-md lg:rounded-xl">
                <Image
                  src={
                    index === 0
                      ? "/images/evaluasi/evaluasi-1.webp"
                      : index === 1
                      ? "/images/evaluasi/evaluasi-3.webp"
                      : "/images/evaluasi/evaluasi-2.webp"
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
    <div className="bg-base-100 p-8 rounded-3xl mb-4 space-y-4 md:p-14">
      <h3 className="text-base-foreground-300 font-semibold md:text-2xl">
        Kegiatan Organisasi
      </h3>
      <p className="text-base-foreground-400 text-base md:text-2xl">
        Aktivitas pengembangan skill dan networking untuk anggota organisasi.
      </p>
    </div>
  );
};

export const data = [
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
    src: "/images/evaluasi/evaluasi-1.webp",
    content: <ActivityContent category="Evaluasi" />,
  },
];
