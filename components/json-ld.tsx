export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ASLAB TI - Universitas Pamulang",
    "description": "Asisten Laboratorium Teknologi Informasi Universitas Pamulang",
    "url": "https://aslab-ti-unpam.vercel.app",
    "logo": "https://aslab-ti-unpam.vercel.app/logo.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Surya Kencana No.1",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15117",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "laporanpraktikum.aslab@gmail.com"
    },
    "sameAs": [
      "https://www.instagram.com/aslabti_unpam",
      "https://www.youtube.com/@aslabti_unpam",
      "https://github.com/asistenlabunpam"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
