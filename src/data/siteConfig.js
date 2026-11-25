export const SITE_CONFIG = {
  developerName: 'defriandev',
  developerRole: 'React & Frontend Engineer',
  githubUrl: 'https://github.com/defriandev/',
  whatsappNumber: '6281234567890', // Ganti dengan nomor WhatsApp aktif kamu
  getWhatsAppUrl(customText) {
    const text =
      customText ||
      'Halo, saya tertarik konsultasi pembuatan website untuk bisnis saya.';
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },
  demos: [
    {
      id: 'cafe',
      index: '01',
      name: 'Kala Coffee & Roastery',
      shortLabel: 'Cafe',
      category: 'fnb',
      categoryLabel: 'F&B / Hospitality',
      domainLabel: 'kalacoffee.id',
      description:
        'Katalog menu digital dengan filter kategori real-time, status jam operasional otomatis, dan formulir reservasi meja terhubung ke WhatsApp.',
      path: '/demo/cafe',
      previewImage:
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Filter Menu & Live Search',
        'Reservasi Meja via WA',
        'Status Buka/Tutup Otomatis',
      ],
      sampleOrderText:
        'Halo, saya tertarik membuat website Cafe & Resto seperti Demo Kala Coffee.',
    },
    {
      id: 'barbershop',
      index: '02',
      name: 'Fort Worth Barbershop',
      shortLabel: 'Barbershop',
      category: 'service',
      categoryLabel: 'Grooming & Service',
      domainLabel: 'fortworthbarber.id',
      description:
        'Website layanan grooming dengan kalkulator estimasi biaya treatment, pemilihan kapster favorit, dan penjadwalan slot kunjungan.',
      path: '/demo/barbershop',
      previewImage:
        'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Kalkulator Estimasi Treatment',
        'Profil Master Barber',
        'Booking Slot Waktu',
      ],
      sampleOrderText:
        'Halo, saya tertarik membuat website Barbershop / Salon seperti Demo Fort Worth Barbershop.',
    },
    {
      id: 'company',
      index: '03',
      name: 'NEXA Enterprise Solutions',
      shortLabel: 'Company',
      category: 'corporate',
      categoryLabel: 'Corporate & Agency',
      domainLabel: 'nexadigital.co.id',
      description:
        'Profil perusahaan B2B dengan etalase studi kasus terfilter, kalkulator estimasi proyek, dan alur pengajuan penawaran kerja sama.',
      path: '/demo/company',
      previewImage:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Filter Studi Kasus B2B',
        'Estimator Ruang Lingkup Proyek',
        'Profil Tim Kepemimpinan',
      ],
      sampleOrderText:
        'Halo, saya tertarik membuat website Company Profile / Agensi seperti Demo NEXA Enterprise.',
    },
    {
      id: 'travel',
      index: '04',
      name: 'Wonder Tour & Travel',
      shortLabel: 'Travel',
      category: 'travel',
      categoryLabel: 'Tourism & Charter',
      domainLabel: 'wondertour.id',
      description:
        'Katalog paket wisata domestik dan internasional dengan filter kategori perjalanan, spesifikasi armada carter, dan pemesanan trip langsung.',
      path: '/demo/travel',
      previewImage:
        'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1000&q=80',
      features: [
        'Filter Paket Open & Private Trip',
        'Spesifikasi Armada & Akomodasi',
        'Konsultasi Itinerary via WA',
      ],
      sampleOrderText:
        'Halo, saya tertarik membuat website Tour & Travel seperti Demo Wonder Tour.',
    },
  ],
};
