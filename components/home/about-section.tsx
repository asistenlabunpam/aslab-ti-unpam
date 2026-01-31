import { Container } from "@/components/container";
import { courses, member, rooms, VISION_MISSION } from "@/constants";

export function AboutSection() {
  const stats = [
    {
      label: "Asisten Laboratorium",
      value: member.flatMap((item) => item.anggota).length,
    },
    { label: "Ruang Laboratorium", value: rooms.length },
    { label: "Mata Kuliah", value: courses.length },
  ];

  return (
    <>
      <h2 className="scroll-m-20 text-3xl font-semibold text-base-foreground-100 tracking-tight first:mt-0">
        Tentang Kami
      </h2>

      <Container
        as="section"
        className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row"
      >
        <div className="space-y-8 lg:w-full lg:max-w-3xl lg:flex-auto xl:max-w-4xl">
          <p className="text-xl/8 text-base-foreground-400">
            Asisten Laboratorium Teknik Informatika adalah tim pendukung
            praktikum di lingkungan kampus yang terdiri dari mahasiswa terpilih
            melalui proses seleksi ketat. Mereka memiliki komitmen tinggi
            terhadap tanggung jawab akademik dan organisasi, serta berperan
            membantu dosen dalam pelaksanaan praktikum.
          </p>
          <p className="text-base/7 text-base-foreground-300">
            Tugas utama aslab meliputi membimbing peserta praktikum dalam
            memahami materi dan instruksi, menjawab pertanyaan teknis mahasiswa,
            serta menyiapkan peralatan, komputer, software, dan jaringan sebelum
            praktikum dimulai. Selain itu, aslab juga mengawasi jalannya
            kegiatan praktikum untuk memastikan aturan laboratorium dipatuhi dan
            penggunaan peralatan berlangsung aman. Mereka turut bertanggung
            jawab dalam pemeliharaan peralatan dan software agar tetap berfungsi
            dengan baik, serta membantu pencatatan inventaris laboratorium.
          </p>
        </div>

        <div className="lg:flex lg:flex-auto lg:justify-center">
          <dl className="flex items-center gap-x-10 gap-y-8 w-full lg:flex-col lg:items-start lg:w-64 xl:w-80">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-y-3 pl-7 border-l border-base-300"
              >
                <dt className="text-base/7 text-base-foreground-400">
                  {stat.label}
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-base-foreground-200">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <Container
        as="section"
        className="flow-root space-y-6 my-8 py-8 w-full max-w-3xl"
      >
        <div className="bg-base-50 space-y-5 p-6 h-max border border-base-200 rounded-2xl">
          <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
            {VISION_MISSION.vision.title}
          </h3>
          <p className="text-base/7 text-base-foreground-400">
            {VISION_MISSION.vision.description}
          </p>
        </div>

        <div className="bg-base-50 space-y-5 p-6 h-max border border-base-200 rounded-2xl">
          <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
            {VISION_MISSION.mission.title}
          </h3>
          <ol className="list-decimal text-base/7 text-base-foreground-400 ml-6 [&>li]:mt-2">
            {VISION_MISSION.mission.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
      </Container>
    </>
  );
}
