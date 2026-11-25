import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Clock, Check, ArrowUpRight } from 'lucide-react';
import DemoBar from '../../components/DemoBar';
import DemoFooter from '../../components/DemoFooter';
import DemoMobileNav from '../../components/DemoMobileNav';
import { PageTransition, FadeInUp, StaggerGrid, StaggerItem, EASE_EDITORIAL } from '../../components/MotionPrimitives';
import { SITE_CONFIG } from '../../data/siteConfig';
import { SERVICES_DATA, MASTER_BARBERS, BARBERSHOP_INFO } from '../../data/barberData';
import '../../styles/demos.css';

const BARBER_CATS = [
  { key: 'all', label: 'ALL SERVICES' },
  { key: 'haircut', label: 'HAIRCUT' },
  { key: 'shaving', label: 'SHAVE & BEARD' },
  { key: 'grooming', label: 'FACIAL CARE' },
  { key: 'package', label: 'VIP PACKAGE' },
];

const TIME_SLOTS = [
  'Pagi (10:00 - 13:00 WIB)',
  'Sore (14:00 - 17:00 WIB)',
  'Malam (18:00 - 21:00 WIB)',
];

export default function BarbershopDemo() {
  const [category, setCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0]);
  const [selectedBarber, setSelectedBarber] = useState('Siapa Saja yang Siap');
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);

  const formatRupiah = (n) => `Rp ${n.toLocaleString('id-ID')}`;

  const filteredServices = SERVICES_DATA.filter(
    (s) => category === 'all' || s.category === category
  );

  const bookingWaMsg =
    `Halo ${BARBERSHOP_INFO.name}, saya ingin booking jadwal grooming:\n\n` +
    `Layanan: ${selectedService.name} (${formatRupiah(selectedService.price)})\n` +
    `Master Barber: ${selectedBarber}\n` +
    `Waktu Kedatangan: ${selectedSlot}\n\n` +
    `Mohon konfirmasi ketersediaan kursi. Terima kasih!`;

  return (
    <PageTransition>
      {/* Oswald Condensed Display + Plus Jakarta Sans, Dark Industrial Heritage */}
      <div
        className="demo-wrap"
        style={{
          background: '#0D0D0C',
          color: '#F2EFE9',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <DemoBar activeId="barbershop" theme="dark" />

        {/* Navbar */}
        <header
          className="demo-nav"
          style={{
            background: 'rgba(13, 13, 12, 0.92)',
            borderBottom: '1px solid rgba(201, 158, 103, 0.22)',
          }}
        >
          <div className="demo-container demo-nav-inner">
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: '1.35rem',
                color: '#F2EFE9',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
            >
              <Scissors size={18} color="#C99E67" />
              <span>FORT WORTH</span>
            </a>

            <ul className="demo-nav-links" style={{ color: '#A19D94', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.8rem' }}>
              <li><a href="#services" style={{ color: 'inherit' }}>Pricelist</a></li>
              <li><a href="#barbers" style={{ color: 'inherit' }}>Barbers</a></li>
              <li><a href="#booking" style={{ color: 'inherit' }}>Booking</a></li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#booking"
                style={{
                  background: '#C99E67',
                  color: '#0D0D0C',
                  padding: '0.5rem 1.15rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: '0.88rem',
                  letterSpacing: '0.06em',
                  fontWeight: 700,
                }}
              >
                BOOK CHAIR
              </motion.a>
              <DemoMobileNav
                links={[
                  { href: '#services', label: 'Pricelist' },
                  { href: '#barbers', label: 'Barbers' },
                  { href: '#booking', label: 'Booking' },
                ]}
                bg="#0D0D0C"
                text="#F2EFE9"
                border="rgba(201,158,103,0.25)"
                accent="#C99E67"
              />
            </div>
          </div>
        </header>

        {/* Full-Bleed Dark Atmospheric Hero */}
        <section
          id="hero"
          style={{
            position: 'relative',
            minHeight: '540px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundImage:
              "linear-gradient(rgba(13,13,12,0.72), rgba(13,13,12,0.88)), url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1400&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '5rem 1.5rem',
            borderBottom: '1px solid rgba(201, 158, 103, 0.25)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_EDITORIAL }}
            style={{ maxWidth: 740 }}
          >
            <div
              style={{
                display: 'inline-block',
                border: '1px solid #C99E67',
                padding: '0.35rem 1rem',
                fontFamily: "'Oswald', sans-serif",
                fontSize: '0.82rem',
                letterSpacing: '0.18em',
                color: '#C99E67',
                marginBottom: '1.5rem',
              }}
            >
              EST. 2018 &bull; GENTLEMEN GROOMING LOUNGE
            </div>

            <h1
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(3rem, 6.5vw, 5.2rem)',
                fontWeight: 700,
                lineHeight: 0.98,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                marginBottom: '1.25rem',
              }}
            >
              LOOKING YOUR BEST NEVER GOES OUT OF STYLE
            </h1>

            <p style={{ color: '#C7C2B8', fontSize: '1.02rem', maxWidth: 540, margin: '0 auto 2rem' }}>
              Potongan presisi, handuk uap panas aromaterapi kayu cendana, peralatan steril UV, dan kopi espresso gratis.
            </p>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#booking"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#C99E67',
                color: '#0D0D0C',
                padding: '0.85rem 2rem',
                borderRadius: '2px',
                textDecoration: 'none',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.08em',
              }}
            >
              RESERVE YOUR CHAIR <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </section>

        {/* Classic Barbershop Ledger Pricelist */}
        <section id="services" className="demo-section" style={{ background: '#121210' }}>
          <div className="demo-container">
            <FadeInUp style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.85rem', letterSpacing: '0.15em', color: '#C99E67' }}>
                  SERVICE LEDGER
                </span>
                <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.75rem', textTransform: 'uppercase', lineHeight: 1.05 }}>
                  Grooming Pricelist
                </h2>
              </div>

              <div className="demo-tab-row">
                {BARBER_CATS.map((c) => {
                  const isActive = category === c.key;
                  return (
                    <button
                      key={c.key}
                      type="button"
                      className="demo-tab-btn"
                      onClick={() => setCategory(c.key)}
                      style={{
                        position: 'relative',
                        background: 'transparent',
                        color: isActive ? '#0D0D0C' : '#A19D94',
                        borderColor: 'rgba(201, 158, 103, 0.35)',
                        borderRadius: '2px',
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: '0.06em',
                      }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="barberTabPill"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          style={{ position: 'absolute', inset: 0, background: '#C99E67', borderRadius: '1px', zIndex: 0 }}
                        />
                      )}
                      <span style={{ position: 'relative', zIndex: 1 }}>{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </FadeInUp>

            <motion.div layout style={{ display: 'grid', gap: '1rem' }}>
              <AnimatePresence mode="popLayout">
                {filteredServices.map((srv) => {
                  const isSelected = selectedService.id === srv.id;
                  return (
                    <motion.div
                      layout
                      key={srv.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                        padding: '1.4rem 1.6rem',
                        background: isSelected ? 'rgba(201, 158, 103, 0.08)' : '#181815',
                        border: `1px solid ${isSelected ? '#C99E67' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius: '2px',
                      }}
                    >
                      <div style={{ flex: '1 1 420px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                          <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.3rem', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                            {srv.name}
                          </h3>
                          <span style={{ fontSize: '0.72rem', color: '#C99E67', border: '1px solid rgba(201,158,103,0.4)', padding: '0.1rem 0.45rem' }}>
                            {srv.badge}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.86rem', color: '#A19D94' }}>{srv.description}</p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.45rem', color: '#C99E67' }}>
                            {formatRupiah(srv.price)}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#8A867E', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                            <Clock size={11} /> {srv.duration}
                          </div>
                        </div>

                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href="#booking"
                          onClick={() => setSelectedService(srv)}
                          style={{
                            background: '#C99E67',
                            color: '#0D0D0C',
                            padding: '0.55rem 1.15rem',
                            borderRadius: '2px',
                            textDecoration: 'none',
                            fontFamily: "'Oswald', sans-serif",
                            letterSpacing: '0.06em',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                          }}
                        >
                          SELECT
                        </motion.a>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Master Barbers */}
        <section id="barbers" className="demo-section">
          <div className="demo-container">
            <FadeInUp style={{ marginBottom: '2rem' }}>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.85rem', letterSpacing: '0.15em', color: '#C99E67' }}>THE CRAFTSMEN</span>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.75rem', textTransform: 'uppercase' }}>
                Meet Our Master Barbers
              </h2>
            </FadeInUp>

            <StaggerGrid className="demo-grid-3">
              {MASTER_BARBERS.map((b) => (
                <StaggerItem
                  key={b.id}
                  style={{ background: '#161614', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}
                >
                  <img src={b.image} alt={b.name} style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block', filter: 'contrast(1.05)' }} loading="lazy" />
                  <div style={{ padding: '1.4rem' }}>
                    <div style={{ fontSize: '0.75rem', color: '#C99E67', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>
                      {b.role} &bull; {b.experience}
                    </div>
                    <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.35rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{b.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#A19D94', marginBottom: '1.2rem' }}>{b.bio}</p>
                    <motion.a
                      whileTap={{ scale: 0.97 }}
                      href="#booking"
                      onClick={() => setSelectedBarber(b.name)}
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        background: 'transparent',
                        border: '1px solid #C99E67',
                        color: '#C99E67',
                        padding: '0.55rem',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: '0.08em',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                      }}
                    >
                      BOOK {b.name.split(' ')[0].toUpperCase()}
                    </motion.a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Chair Booking */}
        <section id="booking" className="demo-section" style={{ background: '#121210', borderTop: '1px solid rgba(201,158,103,0.2)' }}>
          <div className="demo-container demo-grid-2" style={{ alignItems: 'start' }}>
            <FadeInUp style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.85rem', letterSpacing: '0.15em', color: '#C99E67' }}>INSTANT RESERVATION</span>
                <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', textTransform: 'uppercase' }}>
                  Reserve Your Chair
                </h2>
              </div>

              <div>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.6rem', color: '#C99E67', textTransform: 'uppercase' }}>1. Layanan Terpilih</p>
                <div className="demo-option-grid">
                  {SERVICES_DATA.map((s) => (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={s.id}
                      type="button"
                      className="demo-option-btn"
                      onClick={() => setSelectedService(s)}
                      style={{
                        background: selectedService.id === s.id ? 'rgba(201,158,103,0.16)' : '#1A1A17',
                        border: `1px solid ${selectedService.id === s.id ? '#C99E67' : 'rgba(255,255,255,0.08)'}`,
                        color: '#F2EFE9',
                        borderRadius: '2px',
                      }}
                    >
                      <div style={{ fontWeight: 600, fontSize: '0.84rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#C99E67', marginTop: 2 }}>{formatRupiah(s.price)}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.6rem', color: '#C99E67', textTransform: 'uppercase' }}>2. Master Barber</p>
                <div className="demo-option-grid">
                  {['Siapa Saja yang Siap', ...MASTER_BARBERS.map((b) => b.name)].map((name) => (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={name}
                      type="button"
                      className="demo-option-btn"
                      onClick={() => setSelectedBarber(name)}
                      style={{
                        background: selectedBarber === name ? 'rgba(201,158,103,0.16)' : '#1A1A17',
                        border: `1px solid ${selectedBarber === name ? '#C99E67' : 'rgba(255,255,255,0.08)'}`,
                        color: '#F2EFE9',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        borderRadius: '2px',
                      }}
                    >
                      {name}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.6rem', color: '#C99E67', textTransform: 'uppercase' }}>3. Waktu Kedatangan</p>
                <div className="demo-option-grid">
                  {TIME_SLOTS.map((slot) => (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={slot}
                      type="button"
                      className="demo-option-btn"
                      onClick={() => setSelectedSlot(slot)}
                      style={{
                        background: selectedSlot === slot ? 'rgba(201,158,103,0.16)' : '#1A1A17',
                        border: `1px solid ${selectedSlot === slot ? '#C99E67' : 'rgba(255,255,255,0.08)'}`,
                        color: '#F2EFE9',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        borderRadius: '2px',
                      }}
                    >
                      {slot}
                    </motion.button>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div
                style={{
                  background: '#1A1A17',
                  border: '1px solid #C99E67',
                  borderRadius: '2px',
                  padding: '2.2rem',
                }}
              >
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '0.85rem', letterSpacing: '0.12em', color: '#A19D94' }}>
                  BOOKING SUMMARY
                </span>
                <motion.div
                  key={selectedService.price}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.6rem', color: '#C99E67', margin: '0.4rem 0' }}
                >
                  {formatRupiah(selectedService.price)}
                </motion.div>
                <p style={{ fontSize: '0.85rem', color: '#A19D94', marginBottom: '1.5rem' }}>
                  Durasi: ~{selectedService.duration}
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', marginBottom: '1.75rem', fontSize: '0.86rem' }}>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Check size={14} color="#C99E67" /> {selectedService.name}</li>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Check size={14} color="#C99E67" /> Barber: {selectedBarber}</li>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Check size={14} color="#C99E67" /> Slot: {selectedSlot}</li>
                </ul>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={SITE_CONFIG.getWhatsAppUrl(bookingWaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#C99E67',
                    color: '#0D0D0C',
                    padding: '0.9rem',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                  }}
                >
                  CONFIRM VIA WHATSAPP <ArrowUpRight size={16} />
                </motion.a>
              </div>
            </FadeInUp>
          </div>
        </section>

        <DemoFooter
          brandName={BARBERSHOP_INFO.name}
          tagline="Heritage Gentlemen Grooming Lounge & Precision Haircuts."
          address={BARBERSHOP_INFO.address}
          hours={BARBERSHOP_INFO.hours}
          instagram="@fortworthbarber.id"
          bg="#080807"
          text="#F2EFE9"
          muted="#9E9A90"
          accent="#C99E67"
          border="rgba(201,158,103,0.2)"
          orderText={`Halo ${BARBERSHOP_INFO.name}, saya ingin booking jadwal potong rambut.`}
        />
      </div>
    </PageTransition>
  );
}
