# Studio Web Showcase — Katalog Demo Website Bisnis

Katalog interaktif dan arsitektur template website bisnis berbasis **React + Vite** yang dibangun dan dikelola oleh **[defriandev](https://github.com/defriandev/)**.

Project ini berfungsi sebagai **etalase (*showcase*) siap pakai** untuk mendemonstrasikan berbagai gaya desain, tata letak, dan alur konversi WhatsApp bagi calon klien UMKM maupun perusahaan sebelum memesan pembuatan website.

---

## Scope Website (Ruang Lingkup)

### 1. Dalam Ruang Lingkup (*In-Scope*)
- **Portal Katalog Utama (`/`):**
  - Desain *Swiss Editorial* dengan *12-column staggered grid* (`7:5` & `5:7`) dan *overlapping layer*.
  - Filter kategori industri (`F&B`, `Grooming`, `Corporate`, `Travel`).
  - **Interactive Device Simulator** untuk menguji tampilan demo langsung dalam mode **Desktop**, **Tablet**, dan **Mobile**.
  - Informasi alur pengerjaan, pilihan paket investasi, testimoni klien, FAQ, dan *floating bottom dock* dengan *scroll-spy*.
- **4 Halaman Demo Niche Mandiri (Masing-masing dengan font, gaya visual, dan layout berbeda):**
  1. **Kala Coffee & Roastery (`/demo/cafe`)** — *Fraunces + DM Sans*. Menu board 2-kolom dengan filter kategori, *live search*, status buka/tutup otomatis, galeri bento, dan formulir reservasi meja ke WhatsApp.
  2. **Fort Worth Barbershop (`/demo/barbershop`)** — *Oswald + Plus Jakarta Sans*. Hero *full-bleed* gelap, *ledger pricelist*, profil master barber, dan kalkulator booking kursi ke WhatsApp.
  3. **NEXA Enterprise Solutions (`/demo/company`)** — *Space Grotesk + JetBrains Mono*. Hero *bento metrics*, filter studi kasus B2B, profil tim kepemimpinan, dan estimator anggaran proyek.
  4. **Wonder Tour & Travel (`/demo/travel`)** — *Cormorant Garamond + Plus Jakarta Sans*. Split-screen hero, kartu destinasi *image-overlay*, dan kalkulator estimasi biaya perjalanan per peserta.
- **Arsitektur & Keamanan Frontend:**
  - *Code-splitting* per rute demo menggunakan `React.lazy()` & `Suspense`.
  - Animasi transisi halaman, filter morphing, dan *scroll-reveal* menggunakan `framer-motion`.
  - Sanitasi & validasi input form serta allowlist URL (`src/utils/security.js`), *sandboxed iframe* simulator, dan konfigurasi HTTP Security Headers (`Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) untuk Vercel dan Netlify.

### 2. Di Luar Ruang Lingkup (*Out-of-Scope*)
- **Tidak ada Backend / Database / CMS:** Data menu, layanan, dan studi kasus dikelola secara statis di `src/data/` agar ringan, cepat, dan mudah dipisahkan jika klien membeli salah satu template.
- **Tidak ada Autentikasi & Payment Gateway Otomatis:** Seluruh alur pemesanan, reservasi, dan permintaan penawaran (*RFQ*) diarahkan langsung ke WhatsApp untuk konversi manual yang lebih personal.

---

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Routing:** React Router DOM v7 (`React.lazy` per demo)
- **Animasi:** Framer Motion
- **Ikon:** Lucide React

---

## Struktur Direktori

```text
├── index.html                          # Entry point & Google Fonts
├── package.json
├── vite.config.js
├── vercel.json                         # Security headers & SPA rewrite (Vercel)
├── public/
│   └── _headers                        # Security headers (Netlify / Cloudflare Pages)
├── .env.example                        # Contoh konfigurasi environment variable
└── src/
    ├── App.jsx                         # Routing & lazy-loading halaman
    ├── main.jsx
    ├── components/
    │   ├── DemoBar.jsx                 # Switcher navigasi antar-demo
    │   ├── DemoFooter.jsx              # Footer reusable per demo
    │   ├── DemoMobileNav.jsx           # Drawer menu mobile per demo
    │   ├── DeviceSimulatorModal.jsx    # Simulator viewport Desktop/Tablet/Mobile
    │   └── MotionPrimitives.jsx        # Helper animasi Framer Motion
    ├── data/
    │   ├── siteConfig.js               # Konfigurasi pusat (No. WA, daftar demo)
    │   ├── cafeData.js
    │   ├── barberData.js
    │   ├── companyData.js
    │   └── travelData.js
    ├── pages/
    │   ├── PortalHome.jsx              # Landing page utama
    │   └── demos/
    │       ├── CafeDemo.jsx
    │       ├── BarbershopDemo.jsx
    │       ├── CompanyDemo.jsx
    │       └── TravelDemo.jsx
    ├── styles/
    │   ├── portal.css
    │   └── demos.css
    └── utils/
        └── security.js                 # Sanitasi input & validasi URL/path
```

---

## Menjalankan di Lokal

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Konfigurasi nomor WhatsApp (opsional):**
   Salin `.env.example` menjadi `.env.local` dan isi nomor WhatsApp aktif Anda:
   ```env
   VITE_WHATSAPP_NUMBER=6281234567890
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```

---

## Deployment

Repository ini siap di-deploy ke **Vercel** atau **Netlify** secara langsung:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variable:** Tambahkan `VITE_WHATSAPP_NUMBER` di pengaturan project platform hosting Anda.
