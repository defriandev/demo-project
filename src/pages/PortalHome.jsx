import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Github } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import DeviceSimulatorModal from '../components/DeviceSimulatorModal';
import { PageTransition, FadeInUp, StaggerGrid, StaggerItem, EASE_EDITORIAL } from '../components/MotionPrimitives';
import '../styles/portal.css';

const FILTERS = [
  { key: 'all', label: 'Semua (04)' },
  { key: 'fnb', label: 'F&B' },
  { key: 'service', label: 'Grooming' },
  { key: 'corporate', label: 'Corporate' },
  { key: 'travel', label: 'Travel' },
];

const WORKFLOW_STEPS = [
  {
    num: '01 / KONSULTASI',
    title: 'Pilih Basis Desain',
    desc: 'Tentukan template industri yang paling mendekati alur bisnis Anda, atau diskusikan kebutuhan penyesuaian tata letak.',
  },
  {
    num: '02 / KUSTOMISASI',
    title: 'Integrasi Konten',
    desc: 'Logo, palet warna, foto asli usaha, daftar menu/layanan, dan nomor WhatsApp Anda disusun menjadi satu kesatuan.',
  },
  {
    num: '03 / UJI COBA',
    title: 'Review & Revisi',
    desc: 'Anda memeriksa hasil akhir langsung di smartphone maupun desktop. Penyesuaian dilakukan hingga siap rilis.',
  },
  {
    num: '04 / RILIS',
    title: 'Online & Serah Terima',
    desc: 'Website mengudara dengan domain pilihan (.com / .id) serta panduan ringkas pengelolaan konten ke depannya.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Sejak pakai menu digital dan reservasi meja langsung ke WhatsApp, pelanggan yang datang weekend tidak perlu antre lama. Tampilannya bersih dan cepat dibuka di HP.',
    author: 'Raka Pratama',
    business: 'Owner Kopi Seduh Senja, Bandung',
  },
  {
    quote:
      'Klien B2B kami jauh lebih percaya waktu lihat company profile baru. Proses pengerjaannya rapi, komunikatif, dan revisinya cepat ditangani.',
    author: 'Dimas Wijaya',
    business: 'Co-Founder Arka Logistik, Jakarta',
  },
  {
    quote:
      'Fitur kalkulator estimasi trip sangat membantu customer memilih paket liburan sebelum chat ke admin. Closing rate lewat WhatsApp naik signifikan.',
    author: 'Nadia Kusuma',
    business: 'Founder Nusa Trip, Bali',
  },
];

const FAQS = [
  {
    q: 'Berapa lama waktu pengerjaan hingga website online?',
    a: 'Rata-rata 3 hingga 7 hari kerja sejak materi (logo, foto, daftar harga/menu) diterima lengkap. Untuk kebutuhan peluncuran mendesak, jadwal dapat disesuaikan.',
  },
  {
    q: 'Apakah domain dan hosting sudah termasuk dalam paket?',
    a: 'Ya, seluruh paket sudah mencakup pendaftaran domain (.com / .id) dan server hosting aktif selama 1 tahun penuh. Tahun berikutnya cukup membayar biaya perpanjangan standar.',
  },
  {
    q: 'Apakah harga, menu, atau foto bisa diubah di kemudian hari?',
    a: 'Bisa. Data menu dan layanan dipisahkan dari struktur halaman sehingga mudah diperbarui. Selama masa garansi, kami juga membantu pembaruan konten secara gratis.',
  },
  {
    q: 'Bagaimana skema pembayarannya?',
    a: 'Skema pembayaran dibagi dua tahap: uang muka (DP) 50% di awal pengerjaan, dan pelunasan 50% setelah website selesai Anda review dan siap dipublikasikan.',
  },
];

const DOCK_ITEMS = [
  { id: 'top', label: 'Top', hideSm: true },
  { id: 'katalog', label: 'Katalog', hideSm: false },
  { id: 'alur', label: 'Alur', hideSm: true },
  { id: 'paket', label: 'Paket', hideSm: false },
  { id: 'faq', label: 'FAQ', hideSm: true },
];

export default function PortalHome() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [simDemo, setSimDemo] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSection, setActiveSection] = useState('top');

  // Scroll-Spy for Floating Bottom Dock
  useEffect(() => {
    const ids = DOCK_ITEMS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0.01 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const filteredDemos = SITE_CONFIG.demos.filter(
    (d) => activeFilter === 'all' || d.category === activeFilter
  );

  const getSpanClass = (idx, total) => {
    if (total === 1) return 'span-7';
    return idx === 0 || idx === 3 ? 'span-7' : 'span-5';
  };

  return (
    <PageTransition>
      <div className="portal-page">
        {/* Minimal Topbar */}
        <header className="topbar">
          <div className="container topbar-inner">
            <a href="#top" className="brand-mark">
              <motion.span
                className="brand-dot"
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span>{SITE_CONFIG.developerName}</span>
            </a>

            <div className="topbar-status">
              <span className="status-dot" />
              <span>AVAILABLE FOR NEW PROJECTS &bull; 2026</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
                style={{ padding: '0.52rem 0.85rem' }}
                aria-label="GitHub Profile"
              >
                <Github size={15} /> <span className="dock-hide-sm">GitHub</span>
              </a>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                href={SITE_CONFIG.getWhatsAppUrl('Halo defriandev, saya tertarik konsultasi pembuatan website untuk bisnis saya.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ink"
              >
                Konsultasi <ArrowUpRight size={14} />
              </motion.a>
            </div>
          </div>
        </header>

        {/* Swiss Blueprint 12-Col Hero */}
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-main">
              <motion.div
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
              >
                <span>{SITE_CONFIG.developerName.toUpperCase()} &bull; {SITE_CONFIG.developerRole.toUpperCase()}</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE_EDITORIAL }}
              >
                Website bisnis yang rapi, cepat, dan siap menerima order.
              </motion.h1>
            </div>

            <motion.div
              className="hero-aside"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE_EDITORIAL }}
            >
              <p className="hero-desc">
                Katalog arsitektur website siap pakai berbasis React untuk F&amp;B, barbershop, agensi, hingga tour &amp; travel. Terhubung langsung ke WhatsApp Anda.
              </p>
              <div className="hero-meta-row">
                <span>01 / REACT SPA</span>
                <span>02 / FRAMER MOTION</span>
                <span>03 / WA DIRECT</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overlapping Layer Catalog Sheet */}
        <section className="overlap-catalog-wrapper" id="katalog">
          <div className="container">
            <div className="catalog-sheet">
              <FadeInUp className="section-header-bar">
                <div>
                  <span className="section-kicker">Selected Templates</span>
                  <h2 className="section-heading">Katalog Live Demo</h2>
                </div>

                <div className="filter-tabs" style={{ position: 'relative' }}>
                  {FILTERS.map((f) => {
                    const isActive = activeFilter === f.key;
                    return (
                      <button
                        key={f.key}
                        type="button"
                        className="filter-btn"
                        style={{
                          position: 'relative',
                          color: isActive ? '#F3F2ED' : '#565550',
                          background: 'transparent',
                        }}
                        onClick={() => setActiveFilter(f.key)}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="portalFilterPill"
                            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: '#121211',
                              borderRadius: '5px',
                              zIndex: 0,
                            }}
                          />
                        )}
                        <span style={{ position: 'relative', zIndex: 1 }}>{f.label}</span>
                      </button>
                    );
                  })}
                </div>
              </FadeInUp>

              <motion.div layout className="staggered-demo-grid">
                <AnimatePresence mode="popLayout">
                  {filteredDemos.map((demo, idx) => (
                    <motion.article
                      layout
                      key={demo.id}
                      className={`demo-card ${getSpanClass(idx, filteredDemos.length)}`}
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4, delay: idx * 0.05, ease: EASE_EDITORIAL }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="browser-chrome">
                        <div className="browser-dots">
                          <span /><span /><span />
                        </div>
                        <div className="browser-url">{demo.domainLabel}</div>
                        <div style={{ width: 28 }} />
                      </div>

                      <div className="demo-thumb-wrap">
                        <img
                          src={demo.previewImage}
                          alt={demo.name}
                          className="demo-thumb-img"
                          loading="lazy"
                        />
                      </div>

                      <div className="demo-card-body">
                        <div className="demo-meta-top">
                          <span>{demo.index} / {demo.categoryLabel.toUpperCase()}</span>
                          <span>UNIQUE LAYOUT</span>
                        </div>
                        <h3 className="demo-title">{demo.name}</h3>
                        <p className="demo-desc">{demo.description}</p>

                        <div className="demo-specs">
                          {demo.features.map((feat) => (
                            <span key={feat} className="spec-pill">{feat}</span>
                          ))}
                        </div>

                        <div className="demo-actions">
                          <Link to={demo.path} className="btn btn-ink">
                            Buka Live <ArrowUpRight size={14} />
                          </Link>
                          <motion.button
                            whileTap={{ scale: 0.97 }}
                            type="button"
                            className="btn btn-line"
                            onClick={() => setSimDemo(demo)}
                          >
                            Simulasi Layar
                          </motion.button>
                          <motion.a
                            whileTap={{ scale: 0.97 }}
                            href={SITE_CONFIG.getWhatsAppUrl(demo.sampleOrderText)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-line"
                          >
                            Pesan
                          </motion.a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Developer Credibility & Client Social Proof */}
        <section className="section-block" id="bukti">
          <div className="container">
            <FadeInUp
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
                padding: '1.75rem 2rem',
                background: '#FFFFFF',
                border: '1px solid var(--border-hairline)',
                borderRadius: '12px',
                marginBottom: '3rem',
              }}
            >
              <div>
                <span className="section-kicker" style={{ marginBottom: '0.25rem' }}>BUILT &amp; MAINTAINED BY</span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
                  {SITE_CONFIG.developerName}{' '}
                  <span style={{ fontWeight: 400, color: 'var(--ink-secondary)', fontSize: '1rem' }}>
                    — {SITE_CONFIG.developerRole}
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', marginTop: '0.35rem', maxWidth: 620 }}>
                  Fokus membangun antarmuka web modern dengan React, Vite, dan animasi yang ringan. Kode bersih, responsif di semua layar, dan mudah dikembangkan ke depannya.
                </p>
              </div>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ink"
              >
                <Github size={15} /> github.com/defriandev <ArrowUpRight size={14} />
              </motion.a>
            </FadeInUp>

            <StaggerGrid className="pricing-grid">
              {TESTIMONIALS.map((t) => (
                <StaggerItem
                  key={t.author}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: '12px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.25rem',
                  }}
                >
                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-primary)', lineHeight: 1.65 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '0.9rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.author}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                      {t.business}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Workflow */}
        <section className="section-block" id="alur">
          <div className="container">
            <FadeInUp className="section-header-bar">
              <div>
                <span className="section-kicker">Workflow</span>
                <h2 className="section-heading">Alur Pengerjaan</h2>
              </div>
            </FadeInUp>

            <StaggerGrid className="process-grid">
              {WORKFLOW_STEPS.map((step) => (
                <StaggerItem key={step.num} className="process-item">
                  <span className="process-num">{step.num}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-block" id="paket">
          <div className="container">
            <FadeInUp className="section-header-bar">
              <div>
                <span className="section-kicker">Investment</span>
                <h2 className="section-heading">Pilihan Paket Website</h2>
              </div>
            </FadeInUp>

            <StaggerGrid className="pricing-grid">
              <StaggerItem className="pricing-card">
                <div className="pricing-label">Tier 01 / UMKM</div>
                <div className="pricing-name">Landing Page</div>
                <p className="pricing-desc">Satu halaman ringkas untuk profil usaha lokal, kafe kecil, atau jasa personal.</p>
                <div className="pricing-amount">Rp 950rb <span>/ proyek</span></div>
                <ul className="pricing-list">
                  <li><Check size={14} /> 1 Halaman responsif desktop &amp; mobile</li>
                  <li><Check size={14} /> Tombol order langsung ke WhatsApp</li>
                  <li><Check size={14} /> Domain .com &amp; hosting aktif 1 tahun</li>
                  <li><Check size={14} /> Peta lokasi Google Maps</li>
                  <li><Check size={14} /> Garansi pemeliharaan 1 bulan</li>
                </ul>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={SITE_CONFIG.getWhatsAppUrl('Halo defriandev, saya tertarik memesan Paket Landing Page (Rp 950.000).')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line"
                >
                  Pilih Paket Ini
                </motion.a>
              </StaggerItem>

              <StaggerItem className="pricing-card featured">
                <div className="pricing-label">Tier 02 / Paling Banyak Dipilih</div>
                <div className="pricing-name">Bisnis Pro</div>
                <p className="pricing-desc">Arsitektur lengkap dengan katalog dinamis, filter, dan formulir reservasi terstruktur.</p>
                <div className="pricing-amount">Rp 2.450rb <span>/ proyek</span></div>
                <ul className="pricing-list">
                  <li><Check size={14} /> Multi-section hingga 5 halaman</li>
                  <li><Check size={14} /> Filter katalog menu / layanan / paket</li>
                  <li><Check size={14} /> Form booking &amp; kalkulator estimasi WA</li>
                  <li><Check size={14} /> Optimasi kecepatan &amp; struktur SEO dasar</li>
                  <li><Check size={14} /> Domain .com &amp; cloud hosting 1 tahun</li>
                  <li><Check size={14} /> Email bisnis (nama@domainanda.com)</li>
                  <li><Check size={14} /> Garansi &amp; bantuan update 3 bulan</li>
                </ul>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={SITE_CONFIG.getWhatsAppUrl('Halo defriandev, saya tertarik memesan Paket Bisnis Pro (Rp 2.450.000).')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ink"
                >
                  Pilih Bisnis Pro
                </motion.a>
              </StaggerItem>

              <StaggerItem className="pricing-card">
                <div className="pricing-label">Tier 03 / Corporate</div>
                <div className="pricing-name">Custom Solution</div>
                <p className="pricing-desc">Dibangun khusus dari nol untuk perusahaan, agensi, atau alur transaksi spesifik.</p>
                <div className="pricing-amount">Mulai 4.8jt <span>/ proyek</span></div>
                <ul className="pricing-list">
                  <li><Check size={14} /> Desain antarmuka 100% kustom</li>
                  <li><Check size={14} /> Etalase studi kasus &amp; portofolio B2B</li>
                  <li><Check size={14} /> Kalkulator RFQ / estimasi proyek</li>
                  <li><Check size={14} /> Integrasi API atau database eksternal</li>
                  <li><Check size={14} /> Dukungan teknis &amp; SLA prioritas</li>
                </ul>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={SITE_CONFIG.getWhatsAppUrl('Halo defriandev, saya tertarik konsultasi Paket Custom Solution (Mulai Rp 4.800.000).')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line"
                >
                  Diskusi Kebutuhan
                </motion.a>
              </StaggerItem>
            </StaggerGrid>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-block" id="faq">
          <div className="container faq-split">
            <FadeInUp className="faq-sticky">
              <span className="section-kicker">F.A.Q</span>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>Pertanyaan Umum</h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
                Hal-hal teknis dan administratif yang paling sering ditanyakan sebelum memulai pengerjaan website.
              </p>
            </FadeInUp>

            <div className="faq-list">
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className="faq-item">
                    <button
                      type="button"
                      className="faq-trigger"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      <span>{item.q}</span>
                      <motion.span
                        className="faq-icon"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: EASE_EDITORIAL }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{ paddingBottom: '1.35rem', fontSize: '0.9rem', color: 'var(--ink-secondary)', lineHeight: 1.65 }}>
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container">
          <FadeInUp className="footer-cta">
            <h2 className="footer-heading">
              Punya proyek atau bisnis yang ingin segera online?
            </h2>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={SITE_CONFIG.getWhatsAppUrl('Halo defriandev, saya ingin konsultasi pembuatan website bisnis.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink"
              style={{ padding: '0.85rem 1.6rem', fontSize: '0.92rem' }}
            >
              Hubungi via WhatsApp <ArrowUpRight size={15} />
            </motion.a>
          </FadeInUp>

          <div className="footer-bottom">
            <span>&copy; 2026 {SITE_CONFIG.developerName} — {SITE_CONFIG.developerRole}</span>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              GITHUB.COM/DEFRIANDEV
            </a>
          </div>
        </footer>

        {/* Floating Bottom Pill Dock with Scroll-Spy Active Pill */}
        <motion.div
          className="floating-dock-wrap"
          initial={{ opacity: 0, y: 24, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          transition={{ duration: 0.55, delay: 0.35, ease: EASE_EDITORIAL }}
        >
          <nav className="floating-dock" aria-label="Quick navigation">
            {DOCK_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`dock-link ${item.hideSm ? 'dock-hide-sm' : ''}`}
                  style={{
                    position: 'relative',
                    color: isActive ? '#121211' : '#C7C5BD',
                    background: 'transparent',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dockActivePill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: '#F3F2ED',
                        borderRadius: '999px',
                        zIndex: 0,
                      }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                </a>
              );
            })}
            <a
              href={SITE_CONFIG.getWhatsAppUrl('Halo defriandev, saya tertarik konsultasi pembuatan website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="dock-cta"
            >
              Chat WA <ArrowUpRight size={13} />
            </a>
          </nav>
        </motion.div>

        <DeviceSimulatorModal demo={simDemo} onClose={() => setSimDemo(null)} />
      </div>
    </PageTransition>
  );
}
