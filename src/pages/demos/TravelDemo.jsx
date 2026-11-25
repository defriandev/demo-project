import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, MapPin, Clock, ArrowUpRight, Check } from 'lucide-react';
import DemoBar from '../../components/DemoBar';
import DemoFooter from '../../components/DemoFooter';
import DemoMobileNav from '../../components/DemoMobileNav';
import { PageTransition, FadeInUp, EASE_EDITORIAL } from '../../components/MotionPrimitives';
import { SITE_CONFIG } from '../../data/siteConfig';
import { TRAVEL_PACKAGES, AGENCY_INFO } from '../../data/travelData';
import '../../styles/demos.css';

const TRAVEL_CATS = [
  { key: 'all', label: 'Semua' },
  { key: 'private-vip', label: 'Private VIP' },
  { key: 'open-trip', label: 'Open Trip' },
  { key: 'honeymoon', label: 'Honeymoon' },
  { key: 'international', label: 'International' },
];

export default function TravelDemo() {
  const [cat, setCat] = useState('all');
  const [selectedPkg, setSelectedPkg] = useState(TRAVEL_PACKAGES[0]);
  const [pax, setPax] = useState(2);

  const formatRupiah = (n) => `Rp ${n.toLocaleString('id-ID')}`;
  const filteredPackages = TRAVEL_PACKAGES.filter(
    (p) => cat === 'all' || p.category === cat
  );

  const totalEstimate = selectedPkg.price * pax;
  const bookingMsg =
    `Halo ${AGENCY_INFO.name}, saya tertarik memesan paket wisata:\n\n` +
    `Paket: ${selectedPkg.title}\n` +
    `Destinasi: ${selectedPkg.destination}\n` +
    `Jumlah Peserta: ${pax} Orang\n` +
    `Estimasi Total: ${formatRupiah(totalEstimate)}\n\n` +
    `Mohon informasi ketersediaan tanggal keberangkatan.`;

  return (
    <PageTransition>
      {/* Cormorant Garamond Editorial Luxury + Plus Jakarta Sans, Sunlit Magazine */}
      <div
        className="demo-wrap"
        style={{
          background: '#FFFFFF',
          color: '#0F172A',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <DemoBar activeId="travel" theme="light" />

        {/* Navbar */}
        <header
          className="demo-nav"
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div className="demo-container demo-nav-inner">
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: '1.55rem',
                color: '#0F172A',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              <Compass size={20} color="#0284C7" />
              <span>Wonder Tour</span>
            </a>

            <ul className="demo-nav-links" style={{ color: '#475569' }}>
              <li><a href="#packages" style={{ color: 'inherit' }}>Expeditions</a></li>
              <li><a href="#booking" style={{ color: 'inherit' }}>Trip Calculator</a></li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#booking"
                style={{
                  background: '#0F172A',
                  color: '#fff',
                  padding: '0.55rem 1.2rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                }}
              >
                Plan Your Trip
              </motion.a>
              <DemoMobileNav
                links={[
                  { href: '#packages', label: 'Expeditions' },
                  { href: '#booking', label: 'Trip Calculator' },
                ]}
                bg="#FFFFFF"
                text="#0F172A"
                border="#E2E8F0"
                accent="#0284C7"
              />
            </div>
          </div>
        </header>

        {/* Split Full-Bleed Photo Hero (Image Left, Editorial Copy Right) */}
        <section id="hero" className="travel-split-hero" style={{ borderBottom: '1px solid #E2E8F0' }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
            style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}
          >
            <img
              src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=80"
              alt="Raja Ampat Luxury Voyage"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_EDITORIAL }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '4rem clamp(1.5rem, 5vw, 4.5rem)',
              background: '#F8FAFC',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#0284C7',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Bespoke Voyages &amp; Phinisi Charters
            </span>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2.8rem, 4.8vw, 4.3rem)',
                fontWeight: 600,
                lineHeight: 1.04,
                marginBottom: '1.25rem',
              }}
            >
              Unforgettable Journeys, <em>Tailored</em> for You.
            </h1>
            <p style={{ color: '#475569', fontSize: '1rem', marginBottom: '2rem', maxWidth: 460 }}>
              Dari berlayar di Raja Ampat hingga menyusuri salju Alpen Swiss. Semua itinerary dirancang khusus dengan layanan concierge 24 jam.
            </p>
            <div>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#packages"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#0284C7',
                  color: '#fff',
                  padding: '0.8rem 1.65rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                Jelajahi Destinasi <ArrowUpRight size={15} />
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Portrait Image-Overlay Destination Cards */}
        <section id="packages" className="demo-section">
          <div className="demo-container">
            <FadeInUp style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0284C7' }}>CURATED DESTINATIONS</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.8rem', fontWeight: 600 }}>
                  Pilihan Paket Ekspedisi
                </h2>
              </div>

              <div className="demo-tab-row">
                {TRAVEL_CATS.map((c) => {
                  const isActive = cat === c.key;
                  return (
                    <button
                      key={c.key}
                      type="button"
                      className="demo-tab-btn"
                      onClick={() => setCat(c.key)}
                      style={{
                        position: 'relative',
                        background: 'transparent',
                        color: isActive ? '#fff' : '#475569',
                        borderColor: '#E2E8F0',
                        borderRadius: '999px',
                      }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="travelTabPill"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          style={{ position: 'absolute', inset: 0, background: '#0F172A', borderRadius: '999px', zIndex: 0 }}
                        />
                      )}
                      <span style={{ position: 'relative', zIndex: 1 }}>{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </FadeInUp>

            <motion.div layout className="demo-grid-2">
              <AnimatePresence mode="popLayout">
                {filteredPackages.map((pkg) => (
                  <motion.div
                    layout
                    key={pkg.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                    whileHover={{ y: -4 }}
                    style={{
                      position: 'relative',
                      height: '430px',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      boxShadow: '0 18px 40px -15px rgba(15, 23, 42, 0.2)',
                    }}
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(15,23,42,0.92) 15%, rgba(15,23,42,0.35) 55%, rgba(15,23,42,0.1) 100%)',
                        padding: '1.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        color: '#fff',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', padding: '0.28rem 0.75rem', borderRadius: '999px', fontSize: '0.74rem', fontWeight: 600 }}>
                          {pkg.badge}
                        </span>
                        <span style={{ fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                          <Clock size={12} /> {pkg.duration}
                        </span>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.78rem', color: '#7DD3FC', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: '0.35rem' }}>
                          <MapPin size={12} /> {pkg.destination}
                        </div>
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.85rem', fontWeight: 600, lineHeight: 1.15, marginBottom: '0.5rem' }}>
                          {pkg.title}
                        </h3>
                        <p style={{ fontSize: '0.84rem', color: '#CBD5E1', marginBottom: '1.1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {pkg.desc}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.18)' }}>
                          <div>
                            <span style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'block' }}>Mulai dari</span>
                            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{formatRupiah(pkg.price)}</span>
                          </div>
                          <motion.a
                            whileTap={{ scale: 0.96 }}
                            href="#booking"
                            onClick={() => setSelectedPkg(pkg)}
                            style={{
                              background: '#fff',
                              color: '#0F172A',
                              padding: '0.48rem 1rem',
                              borderRadius: '999px',
                              textDecoration: 'none',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                            }}
                          >
                            Hitung Trip
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Trip Calculator */}
        <section id="booking" className="demo-section" style={{ background: '#F1F5F9', borderTop: '1px solid #E2E8F0' }}>
          <div className="demo-container demo-grid-2" style={{ alignItems: 'start' }}>
            <FadeInUp style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0284C7' }}>TRIP CALCULATOR</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.7rem', fontWeight: 600 }}>
                  Rencanakan Perjalanan Anda
                </h2>
              </div>

              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem' }}>1. Pilih Destinasi</p>
                <div className="demo-option-grid">
                  {TRAVEL_PACKAGES.map((p) => (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={p.id}
                      type="button"
                      className="demo-option-btn"
                      onClick={() => setSelectedPkg(p)}
                      style={{
                        background: selectedPkg.id === p.id ? '#E0F2FE' : '#FFFFFF',
                        border: `1px solid ${selectedPkg.id === p.id ? '#0284C7' : '#CBD5E1'}`,
                        color: '#0F172A',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        borderRadius: '10px',
                      }}
                    >
                      <div>{p.destination}</div>
                      <div style={{ fontSize: '0.76rem', color: '#0284C7', marginTop: 2 }}>{formatRupiah(p.price)} / pax</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem' }}>2. Jumlah Peserta: {pax} Orang</p>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={pax}
                  onChange={(e) => setPax(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#0284C7' }}
                />
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div
                style={{
                  background: '#0F172A',
                  color: '#F8FAFC',
                  borderRadius: '18px',
                  padding: '2.25rem',
                }}
              >
                <span style={{ fontSize: '0.74rem', letterSpacing: '0.1em', color: '#94A3B8' }}>ESTIMASI BIAYA</span>
                <motion.div
                  key={totalEstimate}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.7rem', fontWeight: 700, color: '#38BDF8', margin: '0.35rem 0' }}
                >
                  {formatRupiah(totalEstimate)}
                </motion.div>
                <p style={{ fontSize: '0.86rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
                  Untuk {pax} peserta &bull; {selectedPkg.duration}
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.55rem', marginBottom: '1.75rem', fontSize: '0.86rem' }}>
                  {selectedPkg.highlights.map((h) => (
                    <li key={h} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <Check size={14} color="#38BDF8" /> {h}
                    </li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={SITE_CONFIG.getWhatsAppUrl(bookingMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#0284C7',
                    color: '#fff',
                    padding: '0.9rem',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  Booking Trip via WhatsApp <ArrowUpRight size={15} />
                </motion.a>
              </div>
            </FadeInUp>
          </div>
        </section>

        <DemoFooter
          brandName={AGENCY_INFO.name}
          tagline="Bespoke Luxury Expeditions & Private Phinisi Charters."
          address={AGENCY_INFO.address}
          hours="Senin – Minggu : 09:00 – 17:00 WIB (24/7 Concierge)"
          instagram="@wondertour.travel"
          bg="#0F172A"
          text="#F8FAFC"
          muted="#94A3B8"
          accent="#38BDF8"
          border="rgba(255,255,255,0.1)"
          orderText={`Halo ${AGENCY_INFO.name}, saya ingin konsultasi paket wisata.`}
        />
      </div>
    </PageTransition>
  );
}
