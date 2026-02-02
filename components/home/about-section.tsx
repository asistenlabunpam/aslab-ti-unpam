import { Container } from "@/components/container";
import { courses, member, rooms, VISION_MISSION } from "@/constants";
import { NumberTicker } from "../ui/number-ticker";
import { TextAnimate } from "../ui/text-animate";
import { BlurFade } from "../ui/blur-fade";

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
      <BlurFade delay={0.25} direction="up" inView>
        <h2 className="scroll-m-20 text-3xl font-semibold text-base-foreground-100 tracking-tight first:mt-0">
          Tentang Kami
        </h2>
      </BlurFade>

      <Container
        as="section"
        className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row"
      >
        <div className="space-y-8 lg:w-full lg:max-w-3xl lg:flex-auto xl:max-w-4xl">
          <BlurFade delay={0.45} direction="up" inView>
            <p className="text-xl/8 text-base-foreground-400">
              Asisten Laboratorium Teknik Informatika adalah tim pendukung
              praktikum di lingkungan kampus yang terdiri dari mahasiswa
              terpilih melalui proses seleksi ketat. Mereka memiliki komitmen
              tinggi terhadap tanggung jawab akademik dan organisasi, serta
              berperan membantu dosen dalam pelaksanaan praktikum.
            </p>
          </BlurFade>
          <BlurFade delay={0.55} direction="up" inView>
            <p className="text-base/7 text-base-foreground-300">
              Tugas utama aslab meliputi membimbing peserta praktikum dalam
              memahami materi dan instruksi, menjawab pertanyaan teknis
              mahasiswa, serta menyiapkan peralatan, komputer, software, dan
              jaringan sebelum praktikum dimulai. Selain itu, aslab juga
              mengawasi jalannya kegiatan praktikum untuk memastikan aturan
              laboratorium dipatuhi dan penggunaan peralatan berlangsung aman.
              Mereka turut bertanggung jawab dalam pemeliharaan peralatan dan
              software agar tetap berfungsi dengan baik, serta membantu
              pencatatan inventaris laboratorium.
            </p>
          </BlurFade>
        </div>

        <div className="lg:flex lg:flex-auto lg:justify-center">
          <dl className="flex flex-wrap items-center gap-x-10 gap-y-8 w-full lg:flex-col lg:items-start lg:w-64 xl:w-80">
            {stats.map((stat, index) => (
              <BlurFade
                key={stat.label}
                delay={0.35 + index * 0.25} direction="left" inView
                className="flex flex-col-reverse gap-y-3 pl-7 border-l border-base-300"
              >
                <dt className="text-base/7 text-base-foreground-400">
                  <TextAnimate delay={0.35} animation="slideLeft" by="character" once>
                    {stat.label}
                  </TextAnimate>
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-base-foreground-200">
                  <NumberTicker delay={0.65} value={stat.value} />
                </dd>
              </BlurFade>
            ))}
          </dl>
        </div>
      </Container>

      <Container
        as="section"
        className="flow-root space-y-6 my-8 py-8 w-full max-w-3xl"
      >
        <BlurFade delay={0.25} direction="up" inView className="bg-base-50 space-y-5 p-6 h-max border border-base-200 rounded-2xl">
          <BlurFade delay={0.45} direction="up" inView>
            <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
              {VISION_MISSION.vision.title}
            </h3>
          </BlurFade>
          <BlurFade delay={0.55} direction="up" inView>
            <p className="text-base/7 text-base-foreground-400">
              {VISION_MISSION.vision.description}
            </p>
          </BlurFade>
        </BlurFade>

        <BlurFade delay={0.55} direction="up" inView className="bg-base-50 space-y-5 p-6 h-max border border-base-200 rounded-2xl">
          <BlurFade delay={0.6} direction="up" inView>
            <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
              {VISION_MISSION.mission.title}
            </h3>
          </BlurFade>
          <ul className="text-base/7 text-base-foreground-400 ml-6 [&>div]:mt-2">
            {VISION_MISSION.mission.items.map((item, index) => (
              <BlurFade key={item} delay={0.7 + index * 0.15} direction="up" inView>
                <li className="flex gap-x-3">
                  <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 rounded-full bg-static-50 text-[0.5rem] font-medium text-static-600 ring-1 ring-inset ring-static-500/10 dark:bg-static-400/10 dark:text-static-400 dark:ring-static-400/20">
                    {index + 1}
                  </span>
                  <p>{item}</p>
                </li>
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </Container>
    </>
  );
}
