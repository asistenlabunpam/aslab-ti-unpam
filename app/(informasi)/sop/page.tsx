import { Check, Info, SearchCheck, User } from "lucide-react";

type NestedItem = {
  title: string;
  subItems: string[];
};

type MainItem =
  | string
  | {
      title: string;
      items: (string | NestedItem)[];
    };

export default function Page() {
  const data: MainItem[] = [
    {
      title:
        "Laboran/teknisi mempersiapkan sarana prasarana Laboratorium Komputer bagi pengguna Laboratorium, yang meliputi:",
      items: [
        "Membuka ruang Lab dan memastikan bahwa ruangan dalam keadaan bersih",
        "Menyalakan AC dan lampu untuk menjamin keamanan dan kenyamanan Lab.",
        "Menyiapkan buku pemakaian lab",
      ],
    },
    "Asisten lab/dosen pengampu mata kuliah memastikan bahwa komputer dan sarana/prasarana pendukung siap digunakan",
    {
      title:
        "Pada saat pelaksanaan praktikum, mahasiswa memasuki ruangan dengan tertib, dan harus mematuhi aturan-aturan berikut:",
      items: [
        "Tidak diperbolehkan membawa makanan dan minuman kedalam ruang laboratorium",
        "Menempati kursi/bangku yang tersedia",
        {
          title: "Menyalakan komputer sesuai dengan urutan sbb:",
          subItems: [
            "Nyalakan stavolt yang terhubung dengan komputer.",
            "Nyalakan komputer, mouse dan keyboard",
            "Memilih/membuka software sesuai dengan instruksi dari asisten/instruktur",
            "Jika ada permasalahan, segera melaporkan pada asisten/teknisi",
          ],
        },
        "Melaksanakan praktikum dengan tertib",
        {
          title:
            "Setelah praktikum dilaksanakan, praktikan wajib melakukan hal-hal berikut:",
          subItems: [
            "Menutup software yang telah digunakan",
            "Mematikan (shut down) computer",
            "Mematikan mouse dan keyboard",
            "Mematikan stavolt",
            "Meninggalkan ruangan dengan tertib",
          ],
        },
      ],
    },
    "Setelah semua aktivitas praktikum selesai, dan tidak ada mahasiswa di dalam lab, laboran memastikan bahwa semua komputer dan stavolt sudah dimatikan dan mematikan AC.",
  ];

  return (
    <div className="w-full my-28 py-8 px-4 sm:px-6 lg:px-8">
      <p className="text-base/7 font-semibold text-base-foreground-300">
        Standar Operasional Prosedur
      </p>
      <h1 className="mt-2 scroll-m-20 text-4xl font-semibold tracking-tight text-balance text-base-foreground-100 sm:text-5xl">
        Laboratorium Komputer Program Studi Teknik Informatika Fakultas Teknik
        &ndash; Universitas Pamulang
      </h1>
      <p className="mt-6 text-base-foreground-300 text-xl/8">
        Tujuan disusunnya standar operasional prosedur laboratorium Komputer
        adalah untuk membantu memperlancar pengelolaan laboratorium Komputer
        guna memaksimalkan kegunaan dari laboratorium Komputer beserta semua
        sumber daya yang ada didalamnya, sehingga dapat membantu mewujudkan visi
        dan misi dari Program Studi Teknik Informatika S2. Kegiatan yang ada
        dalam lingkup pengelolaan laboratorium Komputer meliputi praktikum,
        penggunaan peralatan laboratorium Komputer, penggunaan laboratorium
        Komputer untuk penelitian, simulasi atau sejenisnya.
      </p>

      <div className="mt-10 max-w-4xl text-base-foreground-300">
        <section>
          <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight text-pretty text-base-foreground-100">
            Fungsi dan Struktur Laboratorium
          </h2>

          <div className="py-4 my-4">
            <div>
              <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
                Fungsi
              </h3>
              <p className="text-base/7 mt-3">
                Fungsi utama dari laboratorium Komputer sebagai sarana untuk
                melakukan praktik atau penerapan atas teori, penelitian dan
                pengembangan keilmuan di Program Studi Teknik Informatika,
                sehingga menjadi unsur penting dalam kegiatan pendidikan dan
                penelitian, khususnya di bidang pembelajaran.
              </p>
              <ul className="text-base/7 text-base-foreground-300 my-5 [&>li]:mt-3">
                {[
                  "Pusat praktik, latihan, penelitian, tugas akhir dan sumber pembelajaran bagi dosen dan mahasiswa Program Studi Teknik Informatika",
                  "Pusat penelitian, pengabdian masyarakat dan pengembangan bagi dosen dan mahasiswa Program Studi Teknik Informatika.",
                  "Pusat pengembangan keilmuan seperti Basis Data, Algoritma dan Pemrograman, Struktur Data, dan Jaringan komputer pada Program Studi Teknik Informatika.",
                ].map((list, index) => (
                  <li
                    key={list}
                    className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                  >
                    <span className="shrink-0 inline-flex justify-center items-center size-10 mt-1 rounded-full bg-blue-50 font-medium text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30 sm:text-lg sm:size-12">
                      {index + 1}
                    </span>
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full mt-16">
              <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
                Struktur Laboratorium
              </h3>
              <p className="text-base/7 mt-3">
                Struktur laboratorium Program Studi Teknik Informatika terdiri
                atas Ketua Laboratorium, Laboran, Asisten Praktikum dan Peserta
                Praktikum.
              </p>

              <ul className="text-base/7 text-base-foreground-300 my-5 [&>li]:mt-3">
                {[
                  "Pembina adalah Ketua Program Studi yang berperan memberikan arahan dalam pengembangan serta pelaksanaan kegiatan laboratorium.",
                  "Kepala Laboratorium bertugas mengelola laboratorium dengan memanfaatkan seluruh sumber daya secara terencana, terkontrol, dan berkelanjutan.",
                  "Asisten Laboratorium adalah pihak yang ditunjuk untuk membantu pengelolaan, pengembangan, serta kelancaran pelaksanaan praktikum.",
                  "Dosen bertugas melaksanakan kegiatan pengajaran di dalam laboratorium.",
                  "Mahasiswa adalah peserta praktikum yang telah terdaftar pada mata kuliah terkait di semester berjalan.",
                ].map((list, index) => (
                  <li
                    key={list}
                    className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                  >
                    <span className="shrink-0 inline-flex justify-center items-center size-10 mt-1 rounded-full bg-blue-50 font-medium text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30 sm:text-lg sm:size-12">
                      {index + 1}
                    </span>
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="scroll-m-20 text-3xl text-base-foreground-100 font-semibold tracking-tight first:mt-0">
            Tata Tertib Laboratorium
          </h2>
          <p className="text-base/7 text-base-foreground-300 mt-3 mb-6">
            Tata Tertib yang berlaku di Laboratorium Komputer Program Studi
            Teknik Informatika sebagai berikut:
          </p>

          <div className="space-y-5">
            <div className="mt-8">
              <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
                Tata Tertib Penggunaan Laboratorium Komputer
              </h3>
              <ul className="text-base/7 text-base-foreground-300 my-6 [&>li]:mt-3">
                {[
                  "Mahasiswa atau dosen wajib mengisi buku kunjungan laboratorium di luar jadwal praktikum",
                  "Mahasiswa atau dosen yang meminjam peralatan laboratorium wajib mengikuti ketentuan peminjaman dan pengembalian",
                  "Mahasiswa dilarang membuat keributan di dalam laboratorium",
                  "Dilarang makan, minum, dan merokok di dalam laboratorium",
                  "Sampah harus dibuang pada tempat yang telah disediakan",
                  "Seluruh pengguna laboratorium wajib menjaga kebersihan laboratorium",
                  "Setiap pengguna laboratorium wajib merapikan kembali peralatan yang telah digunakan",
                  "Dilarang membawa peralatan laboratorium keluar ruangan tanpa izin",
                  "Dilarang membawa pulang peralatan laboratorium",
                  "Setiap pengguna laboratorium wajib menjaga keamanan inventaris laboratorium",
                  "Apabila terjadi kerusakan, pengguna wajib melapor dan mengganti peralatan tersebut",
                  "Apabila tidak ada yang mengakui kerusakan, seluruh pengguna wajib mengganti peralatan",
                ].map((list) => (
                  <li
                    key={list}
                    className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:items-center sm:gap-x-5 sm:rounded-xl"
                  >
                    <span className="shrink-0 inline-flex justify-center items-center size-10 mt-1 p-3 rounded-full bg-green-50 text-green-700 inset-ring inset-ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:inset-ring-green-500/20 sm:size-12">
                      <Check className="size-full" />
                    </span>
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-10">
              <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
                Tata Tertib Praktek Laboratorium
              </h3>

              <ul className="text-base/7 text-base-foreground-300 my-6 [&>li]:mt-3">
                {[
                  "Setiap mahasiswa wajib mengikuti kegiatan praktikum",
                  "Mahasiswa wajib berpakaian sopan dan rapi saat berada di dalam laboratorium",
                  "Mahasiswa harus hadir di ruang praktikum 5 menit sebelum kegiatan dimulai",
                  "Mahasiswa wajib mempelajari materi praktikum dan melakukan persiapan sebelum praktikum berlangsung",
                  "Selama praktikum berlangsung, mahasiswa dilarang membuat keributan, makan, minum, dan merokok",
                  "Setelah praktikum selesai, mahasiswa wajib membersihkan dan merapikan tempat kerja",
                  "Mahasiswa yang tidak dapat mengikuti praktikum wajib melapor kepada asisten praktikum",
                  "Seluruh peralatan laboratorium yang digunakan menjadi tanggung jawab mahasiswa",
                  "Mahasiswa yang terlambat lebih dari 15 menit tidak diperkenankan mengikuti praktikum",
                  "Setiap pengguna dilarang mengubah pengaturan komputer dalam bentuk apa pun",
                  "Setiap pengguna dilarang memasukkan data atau program tanpa izin pihak laboratorium",
                  "Setiap pengguna dilarang menghapus atau memindahkan data maupun perangkat lunak",
                  "Setiap pengguna dilarang bermain game atau melakukan aktivitas tidak berkaitan",
                  "Setiap pengguna dilarang melakukan tindakan yang dapat merusak fasilitas laboratorium",
                  "Penggunaan laboratorium harus sesuai dengan jadwal yang telah ditentukan",
                ].map((list) => (
                  <li
                    key={list}
                    className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:items-center sm:gap-x-4 sm:rounded-xl"
                  >
                    <span className="shrink-0 inline-flex justify-center items-center size-8 mt-1 p-2 rounded-full bg-green-50 text-green-700 inset-ring inset-ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:inset-ring-green-500/20">
                      <Check className="size-full" />
                    </span>
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="scroll-m-20 text-3xl text-base-foreground-100 font-semibold tracking-tight first:mt-0">
            Prosedur Pemakaian Laboratorium untuk Praktikum Mata Kuliah
            Persiapan
          </h2>

          <div className="mt-6">
            <div>
              <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
                Persiapan
              </h3>

              <p className="text-base/7 text-base-foreground-300 mt-2">
                Sebelum praktikum dilaksanakan, tahap-tahap yang harus dilakukan
                adalah:
              </p>

              <ul className="text-base/7 text-base-foreground-300 mt-3 mb-6 [&>li]:mt-3">
                {[
                  {
                    title:
                      "Dosen yang bersangkutan mendaftarkan rencana pelaksanaan mata kuliah yang diampunya kepada Ketua Laboratorium. Permintaan ini dilengkapi dengan:",
                    items: [
                      "Jadwal pelaksanaan",
                      "Software yang digunakan",
                      "Jumlah mahasiswa peserta praktikum tersebut",
                      "Jumlah pertemuan praktikum",
                    ],
                  },
                  "Laboran/Teknisi menyiapkan jadwal pelaksanaan, software yang diperlukan dan berkoordinasi dengan Ketua Laboratorium/Dosen yang bersangkutan",
                ].map((list, index) =>
                  typeof list === "object" ? (
                    <li
                      key={index}
                      className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                    >
                      <span className="shrink-0 inline-flex justify-center items-center size-9 mt-1 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                        <User className="size-full" />
                      </span>
                      <div>
                        {list.title}
                        <ul className="text-base/7 text-base-foreground-300 my-4 ml-6 [&>li]:mt-2">
                          {list.items.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex gap-x-3">
                              <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 rounded-full bg-static-50 text-[0.5rem] font-medium text-static-600 ring-1 ring-inset ring-static-500/10 dark:bg-static-400/10 dark:text-static-400 dark:ring-static-400/20">
                                {subIndex + 1}
                              </span>
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li
                      key={list}
                      className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                    >
                      <span className="shrink-0 inline-flex justify-center items-center size-9 mt-1 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                        <User className="size-full" />
                      </span>
                      <p>{list}</p>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
                Pelaksanaan
              </h3>

              <p className="text-base/7 text-base-foreground-300 mt-2">
                Pada saat praktikum dilaksanakan, tahap-tahap yang harus
                dilakukan adalah:
              </p>

              <ul className="text-base/7 text-base-foreground-300 my-6 [&>li]:mt-3">
                {data.map((list, index) => {
                  if (typeof list === "string") {
                    return <li key={index}>{list}</li>;
                  }

                  return (
                    <li
                      key={index}
                      className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                    >
                      <span className="shrink-0 inline-flex justify-center items-center size-9 mt-1 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                        <User className="size-full" />
                      </span>
                      <div>
                        {list.title}
                        <ul className="text-base/7 text-base-foreground-300 my-4 ml-6 list-decimal [&>li]:mt-3">
                          {list.items.map((subItem, subIndex) => {
                            if (typeof subItem === "string") {
                              return (
                                <li key={subIndex} className="flex gap-x-3">
                                  <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 rounded-full bg-static-50 text-[0.5rem] font-medium text-static-600 ring-1 ring-inset ring-static-500/10 dark:bg-static-400/10 dark:text-static-400 dark:ring-static-400/20">
                                    {subIndex + 1}
                                  </span>
                                  {subItem}
                                </li>
                              );
                            }

                            return (
                              <li
                                key={`${index}-${subIndex}`}
                                className="flex gap-x-3"
                              >
                                <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 rounded-full bg-static-50 text-[0.5rem] font-medium text-static-600 ring-1 ring-inset ring-static-500/10 dark:bg-static-400/10 dark:text-static-400 dark:ring-static-400/20">
                                  {subIndex + 1}
                                </span>
                                <div className="flex gap-x-3">
                                  <div>
                                    {subItem.title}
                                    <ul className="text-base/7 text-base-foreground-300 my-4 ml-6 [&>li]:mt-2">
                                      {subItem.subItems.map(
                                        (nestedItem, nestedIndex) => (
                                          <li
                                            key={`${index}-${subIndex}-${nestedIndex}`}
                                            className="flex gap-x-3"
                                          >
                                            <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 p-1 rounded-full bg-green-50 text-green-700 inset-ring inset-ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:inset-ring-green-500/20">
                                              <Check />
                                            </span>
                                            {nestedItem}
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="scroll-m-20 text-3xl text-base-foreground-100 font-semibold tracking-tight first:mt-0">
            Prosedur Pemakaian Laboratorium untuk Pelaksanaan Penelitian dan
            Tugas Akhir Mahasiswa
          </h2>

          <div className="my-5">
            <div>
              <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold mt-8 mb-4 tracking-tight">
                Mahasiswa
              </h3>
              <p className="text-base/7 text-base-foreground-300">
                Jika seorang dosen akan melaksanakan penelitian yang dalam
                pelaksanaannya akan menggunakan sarana prasarana Laboratorium
                dan melibatkan mahasiswa, maka tahap-tahap yang harus dilakukan
                adalah:
              </p>

              <ul className="text-base/7 text-base-foreground-300 my-6 [&>li]:mt-3">
                {[
                  {
                    title:
                      "Dosen yang bersangkutan mendaftarkan rencana pelaksanaan penelitian kepada Ketua Laboratorium, sesuai dengan yang dicantumkan dalam proposal penelitian. Permintaan ini dilengkapi dengan:",
                    items: [
                      "Jadwal pelaksanaan",
                      "Software yang digunakan",
                      "Dosen dan mahasiswa Tugas Akhir yang terlibat dalam penelitian",
                    ],
                  },
                  "Laboran/Teknisi menyiapkan jadwal pelaksanaan, software yang diperlukan dan berkoordinasi dengan Ketua Laboratorium/Dosen yang bersangkutan",
                ].map((list, index) =>
                  typeof list === "object" ? (
                    <li
                      key={index}
                      className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                    >
                      <span className="shrink-0 inline-flex justify-center items-center size-9 mt-1 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                        <User className="size-full" />
                      </span>
                      <div>
                        {list.title}
                        <ul className="text-base/7 text-base-foreground-300 my-4 [&>li]:mt-2">
                          {list.items.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex gap-x-3">
                              <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 rounded-full bg-static-50 text-[0.5rem] font-medium text-static-600 ring-1 ring-inset ring-static-500/10 dark:bg-static-400/10 dark:text-static-400 dark:ring-static-400/20">
                                {subIndex + 1}
                              </span>
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li
                      key={list}
                      className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                    >
                      <span className="shrink-0 inline-flex justify-center items-center size-9 mt-1 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                        <User className="size-full" />
                      </span>
                      <p>{list}</p>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="my-10">
              <h3 className="scroll-m-20 text-2xl text-base-foreground-200 font-semibold tracking-tight">
                Pelaksanaan
              </h3>

              <p className="text-base/7 text-base-foreground-300 mt-3">
                Pada saat penelitian dilaksanakan, tahap-tahap yang harus
                dilakukan adalah:
              </p>

              <ul className="text-base/7 text-base-foreground-300 my-6 [&>li]:mt-3">
                {[
                  "Laboran/teknisi mempersiapkan sarana prasarana Laboratorium Komputer bagi dosen/mahasiswa peneliti.",
                  "Asisten lab/dosen peneliti memastikan bahwa komputer dan sarana/prasarana pendukung siap digunakan.",
                  {
                    title:
                      "Pada saat pelaksanaan penelitian, dosen/mahasiswa harus mematuhi aturan-aturan berikut:",
                    items: [
                      {
                        title:
                          "Tidak diperbolehkan membawa makanan dan minuman kedalam ruang laboratorium",
                        type: "a",
                      },
                      {
                        title: "Menempati kursi/bangku yang tersedia",
                        type: "a",
                      },
                      {
                        title: "Menyalakan komputer sesuai dengan urutan sbb:",
                        type: "a",
                        subItems: [
                          "Nyalakan stavolt yang terhubung dengan komputer.",
                          "Nyalakan komputer, mouse dan keyboard",
                          "Memilih/membuka software sesuai dengan instruksi dari asisten/instruktur",
                          "Jika ada permasalahan, segera melaporkan pada asisten/teknisi",
                        ],
                      },
                      {
                        title:
                          "Setelah kegiatan penelitian dilaksanakan, dosen/mahasiswa peneliti wajib melakukan hal-hal berikut:",
                        type: "a",
                        subItems: [
                          "Menutup software yang telah digunakan",
                          "Mematikan (shut down) computer",
                          "Mematikan mouse dan keyboard",
                          "Mematikan stavolt",
                          "Meninggalkan ruangan dengan tertib",
                        ],
                      },
                    ],
                  },
                ].map((list, index) =>
                  typeof list === "object" ? (
                    <li
                      key={index}
                      className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                    >
                      <span className="shrink-0 inline-flex justify-center items-center size-9 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                        <User className="size-full" />
                      </span>
                      <div>
                        {list.title}
                        <ul className="text-base/7 text-base-foreground-300 my-4 [&>li]:mt-3">
                          {list.items.map((subItem, subIndex) => (
                            <li
                              key={`${index}-${subIndex}`}
                              className="flex gap-x-3"
                            >
                              <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 rounded-full bg-static-50 text-[0.5rem] font-medium text-static-600 ring-1 ring-inset ring-static-500/10 dark:bg-static-400/10 dark:text-static-400 dark:ring-static-400/20">
                                {subIndex + 1}
                              </span>
                              {subItem.subItems ? (
                                <div>
                                  {subItem.title}
                                  <ul className="text-base/7 text-base-foreground-300 my-4 ml-6 [&>li]:mt-2">
                                    {subItem.subItems.map(
                                      (nestedItem, nestedIndex) => (
                                        <li
                                          key={`${index}-${subIndex}-${nestedIndex}`}
                                          className="flex gap-x-3"
                                        >
                                          <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 p-1 rounded-full bg-green-50 text-green-700 inset-ring inset-ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:inset-ring-green-500/20">
                                            <Check />
                                          </span>
                                          {nestedItem}
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                </div>
                              ) : (
                                subItem.title
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li
                      key={list}
                      className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:items-center sm:gap-x-5 sm:rounded-xl"
                    >
                      <span className="shrink-0 inline-flex justify-center items-center size-9 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                        <User className="size-full" />
                      </span>
                      <p>{list}</p>
                    </li>
                  ),
                )}
              </ul>

              <p className="text-base/7 text-base-foreground-300">
                Setelah semua aktivitas penelitian selesai dilaksanakan,
                dosen/mahasiswa diharapkan membuat laporan yang berisi
                hasil-hasil penelitian (daftar luaran penelitian) yang nantinya
                akan digunakan sebagai pendukung dokumentasi kegiatan
                laboratorium.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="scroll-m-20 text-3xl text-base-foreground-100 font-semibold tracking-tight first:mt-0">
            Prosedur Pemakaian Laboratorium untuk Pelaksanaan Workshop, atau
            Pelatihan
          </h2>

          <p className="text-base/7 text-base-foreground-300 mt-6">
            Prosedur yang harus dilaksanakan jika tim dosen/mahasiswa akan
            menggunakan sarana prasarana Laboratorium untuk workshop atau
            pelatihan yang pesertanya berasal dari luar Program Studi Teknik
            Informatika adalah:
          </p>

          <ul className="text-base/7 text-base-foreground-300 my-6 [&>li]:mt-3">
            {[
              "Koordinator (dosen/mahasiswa) kegiatan mengajukan permohonan/proposal kepada Ketua Program Studi Teknik Informatika beserta keperluan peminjaman alat/ruangan Laboratorium yang dituju.",
              "Apabila permohonan/proposal tersebut disetujui oleh Ketua Program Studi Teknik Informatika, maka Ketua Program Studi Teknik Informatika akan memberikan disposisi kepada Ketua Laboratorium tentang keperluan pemakaian ruang/lab tersebut.",
              {
                title:
                  "Koordinator kegiatan yang bersangkutan mendaftarkan rencana pelaksanaan penelitian kepada Ketua Laboratorium, sesuai dengan yang dicantumkan dalam proposal penelitian. Permintaan ini dilengkapi dengan:",
                items: [
                  "Jadwal pelaksanaan",
                  "Software yang digunakan",
                  "Dosen/laboran/asisten yang terlibat dalam kegiatan.",
                  "Daftar peserta kegiatan",
                ],
              },
              "Laboran/Teknisi menyiapkan jadwal pelaksanaan, sarana dan prasarana, dan software yang diperlukan dan berkoordinasi dengan Ketua Laboratorium/Koordinator kegiatan yang bersangkutan.",
              "Pada saat kegiatan dilaksanakan, koordinator kegiatan/laboran harus memastikan bahwa seluruh tahap kegiatan di Lab harus sesuai dengan SOP pemakaian sarana dan prasarana Lab untuk praktikum.",
              "Setelah semua aktivitas Pelatihan/Workshop selesai dilaksanakan, dosen/mahasiswa koordinator diharapkan membuat laporan kepada Ketua Program Studi Teknik Informatika (tembusan kepada Ketua Laboratorium) yang berisi ringkasan kegiatan yang nantinya akan digunakan sebagai pendukung dokumentasi kegiatan laboratorium.",
            ].map((list, index) =>
              typeof list === "object" ? (
                <li
                  key={index}
                  className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                >
                  <span className="shrink-0 inline-flex justify-center items-center size-9 mt-1 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                    <Info className="size-full" />
                  </span>
                  <div>
                    {list.title}
                    <ul className="text-base/7 text-base-foreground-300 my-4 [&>li]:mt-2">
                      {list.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex gap-x-3">
                          <span className="shrink-0 inline-flex justify-center items-center mt-1.5 size-4 rounded-full bg-static-50 text-[0.5rem] font-medium text-static-600 ring-1 ring-inset ring-static-500/10 dark:bg-static-400/10 dark:text-static-400 dark:ring-static-400/20">
                            {subIndex + 1}
                          </span>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li
                  key={list}
                  className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:gap-x-5 sm:rounded-xl"
                >
                  <span className="shrink-0 inline-flex justify-center items-center size-9 mt-1 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                    <Info className="size-full" />
                  </span>
                  <p>{list}</p>
                </li>
              ),
            )}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="scroll-m-20 text-3xl text-base-foreground-100 font-semibold tracking-tight first:mt-0">
            Prosedur Perawatan dan Perbaikan Laboratorium
          </h2>

          <p className="text-base/7 text-base-foreground-300 my-5">
            Prosedur perawatan Lab yang berlaku di Laboratorium Komputer Program
            Studi Teknik Informatika sebagai berikut:
          </p>

          <ul className="text-base/7 text-base-foreground-300 my-6 [&>li]:mt-3">
            {[
              "Laboran mengecek semua peralatan laboratorium setiap bulan",
              "Laboran mengisi form kondisi peralatan laboratorium",
              "Laboran mendata peralatan yang rusak dan memasukkan pada form peralatan rusak",
              "Laboran mengecek apakah peralatan tersebut dapat diperbaiki sendiri, bila tidak maka laboran memberitahu dan meminta persetujuan Ketua Laboratorium untuk perbaikan diluar atau mengganti dengan yang baru",
              "Ketua Laboratorium menyetujui dan menandatangani",
              "Surat pengajuan peralatan laboratorium ditujukan kepada Ketua Program Studi Teknik Informatika",
            ].map((list) => (
              <li
                key={list}
                className="flex gap-x-3.5 w-full bg-base-50 p-5 border border-base-200 rounded-lg sm:items-center sm:gap-x-5 sm:rounded-xl"
              >
                <span className="shrink-0 inline-flex justify-center items-center size-9 mt-1 p-2.5 rounded-full bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
                  <SearchCheck className="size-full" />
                </span>
                <p>{list}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
