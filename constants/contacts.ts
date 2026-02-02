import { ContactProps } from "@/types";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const contacts: ContactProps[] = [
  {
    title: "Lokasi",
    value: "Jl. Raya Puspitek, Buaran, Kec. Pamulang, Kota Tangerang Selatan, Banten 15310",
    icon: MapPin,
    url: "https://maps.app.goo.gl/Z24J2grmozGutxfy8",
  },
  {
    title: "Email",
    value: "laporanpraktikum.aslab@gmail.com",
    icon: Mail,
    url: "mailto:laporanpraktikum.aslab@gmail.com",
  },
  {
    title: "Telefon",
    value: "+62 813-1985-1597",
    icon: Phone,
    url: "https://wa.me/6281319851597?text=Halo%20kak%2C%20saya%20dapat%20info%20dari%20website%20Profil%20ASLAB%20dan%20ingin%20bertanya%20lebih%20lanjut.%20Terima%20kasih%20ya.",
  },
  {
    title: "Jam Operasional",
    value: "11.00 AM - 23.00 PM",
    icon: Clock,
  },
];