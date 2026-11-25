import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Search, Calendar, MapPin, Star, ArrowUpRight } from 'lucide-react';
import DemoBar from '../../components/DemoBar';
import DemoFooter from '../../components/DemoFooter';
import DemoMobileNav from '../../components/DemoMobileNav';
import { PageTransition, FadeInUp, StaggerGrid, StaggerItem, EASE_EDITORIAL } from '../../components/MotionPrimitives';
import { SITE_CONFIG } from '../../data/siteConfig';
import { MENU_DATA, CAFE_INFO, CAFE_GALLERY } from '../../data/cafeData';
import '../../styles/demos.css';

const CATEGORIES = [
  { key: 'all', label: 'Semua' },
  { key: 'signature', label: 'Signature' },
  { key: 'coffee', label: 'Manual Brew' },
  { key: 'non-coffee', label: 'Non-Coffee' },
  { key: 'food', label: 'Main Course' },
  { key: 'pastry', label: 'Pastry' },
];

export default function CafeDemo() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    guests: '2 Orang',
    area: 'Indoor No-Smoking AC',
    date: '',
    time: '',
    notes: '',
  });

  const currentHour = new Date().getHours();
  const isOpen = currentHour >= CAFE_INFO.openHour && currentHour < CAFE_INFO.closeHour;

  const filteredMenu = MENU_DATA.filter((item) => {
    const matchCat = category === 'all' || item.category === category;
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const formatRupiah = (n) => `Rp ${n.toLocaleString('id-ID')}`;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Halo ${CAFE_INFO.name}, saya ingin melakukan reservasi meja:\n\n` +
      `Nama: ${booking.name}\n` +
      `WhatsApp: ${booking.phone}\n` +
      `Jumlah Tamu: ${booking.guests}\n` +
      `Tanggal: ${booking.date} (${booking.time} WIB)\n` +
      `Area: ${booking.area}\n` +
      `Catatan: ${booking.notes || '-'}`;
    window.open(SITE_CONFIG.getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <PageTransition>
      {/* Fraunces + DM Sans, Warm Terracotta & Organic Cream */}
      <div
        className="demo-wrap"
        style={{
          background: '#FBF8F3',
          color: '#2B1D14',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <DemoBar activeId="cafe" theme="light" />

        {/* Navbar */}
        <header
          className="demo-nav"
          style={{
            background: 'rgba(251, 248, 243, 0.92)',
            borderBottom: '1px solid #EAE0D3',
          }}
        >
          <div className="demo-container demo-nav-inner">
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                fontSize: '1.35rem',
                color: '#2B1D14',
                textDecoration: 'none',
              }}
            >
              <Coffee size={20} color="#A85D34" />
              <span>Kala Roastery</span>
            </a>

            <ul className="demo-nav-links" style={{ color: '#6E5646' }}>
              <li><a href="#menu" style={{ color: 'inherit' }}>Menu Board</a></li>
              <li><a href="#gallery" style={{ color: 'inherit' }}>Suasana</a></li>
              <li><a href="#reservation" style={{ color: 'inherit' }}>Reservasi</a></li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.32rem 0.85rem',
                  borderRadius: '999px',
                  background: isOpen ? '#E3F2E8' : '#FCE8E6',
                  color: isOpen ? '#1E6B3A' : '#A5281B',
                }}
              >
                {isOpen ? 'Buka • 07:00–22:00' : 'Tutup • Buka 07:00'}
              </span>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#reservation"
                style={{
                  background: '#A85D34',
                  color: '#fff',
                  padding: '0.52rem 1.15rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                }}
              >
                Booking Meja
              </motion.a>
              <DemoMobileNav
                links={[
                  { href: '#menu', label: 'Menu Board' },
                  { href: '#gallery', label: 'Suasana' },
                  { href: '#reservation', label: 'Reservasi' },
                ]}
                bg="#FBF8F3"
                text="#2B1D14"
                border="#EAE0D3"
                accent="#A85D34"
              />
            </div>
          </div>
        </header>

        {/* Centered Editorial Hero + Wide Panoramic Banner */}
        <section id="hero" className="demo-container" style={{ padding: '4.5rem 0 3.5rem', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
            style={{ maxWidth: 760, margin: '0 auto 2.5rem' }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#A85D34',
                marginBottom: '1rem',
              }}
            >
              Artisanal Coffee &amp; All-Day Kitchen
            </span>
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(2.6rem, 5.2vw, 4.3rem)',
                fontWeight: 500,
                lineHeight: 1.08,
                marginBottom: '1.25rem',
              }}
            >
              Seduhan <em>hangat</em> dari dataran tinggi Nusantara.
            </h1>
            <p style={{ color: '#6E5646', fontSize: '1.05rem', marginBottom: '2rem' }}>
              Disangrai dalam batch kecil setiap pagi, disajikan bersama pastry renyah dan hidangan rumahan di ruang terbuka yang tenang.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#menu"
                style={{
                  background: '#2B1D14',
                  color: '#FBF8F3',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                Lihat Menu Board
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#reservation"
                style={{
                  border: '1px solid #CBB9A6',
                  color: '#2B1D14',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                Reservasi Tempat
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_EDITORIAL }}
            style={{ borderRadius: '24px', overflow: 'hidden', height: '420px', boxShadow: '0 24px 50px -15px rgba(43,29,20,0.18)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80"
              alt="Kala Coffee Panoramic"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        </section>

        {/* Horizontal 2-Column Cafe Menu Board */}
        <section id="menu" className="demo-section" style={{ background: '#FFFFFF', borderTop: '1px solid #EAE0D3', borderBottom: '1px solid #EAE0D3' }}>
          <div className="demo-container">
            <FadeInUp style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#A85D34', letterSpacing: '0.08em' }}>DAILY MENU BOARD</span>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2.5rem', fontWeight: 500 }}>
                  Racikan Barista &amp; Dapur
                </h2>
              </div>

              <div style={{ position: 'relative', minWidth: '260px' }}>
                <Search size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#A85D34' }} />
                <input
                  type="text"
                  placeholder="Cari kopi atau pastry..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="demo-input"
                  style={{ paddingLeft: '2.4rem', border: '1px solid #E3D7C8', background: '#FBF8F3', borderRadius: '999px' }}
                />
              </div>
            </FadeInUp>

            <div className="demo-tab-row" style={{ marginBottom: '2rem' }}>
              {CATEGORIES.map((c) => {
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
                      color: isActive ? '#FBF8F3' : '#6E5646',
                      borderColor: '#E3D7C8',
                      borderRadius: '999px',
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="cafeTabPill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        style={{ position: 'absolute', inset: 0, background: '#A85D34', borderRadius: '999px', zIndex: 0 }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1 }}>{c.label}</span>
                  </button>
                );
              })}
            </div>

            <motion.div layout className="cafe-menu-board">
              <AnimatePresence mode="popLayout">
                {filteredMenu.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                    whileHover={{ y: -2 }}
                    style={{
                      display: 'flex',
                      gap: '1.1rem',
                      padding: '1rem',
                      borderRadius: '16px',
                      background: '#FBF8F3',
                      border: '1px solid #EAE0D3',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      style={{
                        width: 105,
                        height: 105,
                        borderRadius: '12px',
                        objectFit: 'cover',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 700 }}>{item.name}</h3>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: '0.78rem', color: '#A85D34', fontWeight: 700 }}>
                          <Star size={12} fill="#A85D34" /> {item.rating}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: '#6E5646', marginBottom: '0.65rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.description}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#2B1D14' }}>{formatRupiah(item.price)}</span>
                        <motion.a
                          whileTap={{ scale: 0.95 }}
                          href={SITE_CONFIG.getWhatsAppUrl(`Halo ${CAFE_INFO.name}, saya ingin memesan ${item.name} (${formatRupiah(item.price)}).`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            background: '#2B1D14',
                            color: '#FBF8F3',
                            padding: '0.35rem 0.8rem',
                            borderRadius: '999px',
                            textDecoration: 'none',
                            fontSize: '0.76rem',
                            fontWeight: 600,
                          }}
                        >
                          Pesan <ArrowUpRight size={12} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Asymmetric Bento Gallery */}
        <section id="gallery" className="demo-section">
          <div className="demo-container">
            <FadeInUp style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#A85D34', letterSpacing: '0.08em' }}>RUANG &amp; SUASANA</span>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2.5rem', fontWeight: 500 }}>
                Sudut Favorit Pengunjung
              </h2>
            </FadeInUp>

            <StaggerGrid className="cafe-bento-gallery">
              {CAFE_GALLERY.map((g) => (
                <StaggerItem
                  key={g.caption}
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(43,29,20,0.68), transparent 55%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '1rem',
                      color: '#FBF8F3',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {g.caption}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Reservation */}
        <section id="reservation" className="demo-section" style={{ background: '#2B1D14', color: '#FBF8F3' }}>
          <div className="demo-container demo-grid-2" style={{ alignItems: 'center' }}>
            <FadeInUp>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#E29E75', letterSpacing: '0.08em' }}>RESERVASI MEJA</span>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '2.6rem', fontWeight: 500, marginBottom: '1rem' }}>
                Amankan Meja Anda Sebelum Datang
              </h2>
              <p style={{ color: '#D6C6B8', marginBottom: '1.5rem' }}>
                Cocok untuk kerja remote, meeting santai, atau kumpul akhir pekan. Konfirmasi langsung via WhatsApp.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E29E75', fontSize: '0.9rem' }}>
                <MapPin size={16} /> {CAFE_INFO.address}
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <form
                onSubmit={handleBookingSubmit}
                style={{
                  background: '#FBF8F3',
                  color: '#2B1D14',
                  padding: '2rem',
                  borderRadius: '20px',
                  display: 'grid',
                  gap: '0.95rem',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap"
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    className="demo-input"
                    style={{ border: '1px solid #DFD3C3', background: '#fff', borderRadius: '10px' }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="No. WhatsApp"
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    className="demo-input"
                    style={{ border: '1px solid #DFD3C3', background: '#fff', borderRadius: '10px' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <select
                    value={booking.guests}
                    onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                    className="demo-input"
                    style={{ border: '1px solid #DFD3C3', background: '#fff', borderRadius: '10px' }}
                  >
                    <option>1 - 2 Orang</option>
                    <option>3 - 4 Orang</option>
                    <option>5 - 8 Orang</option>
                    <option>Lebih dari 8 Orang</option>
                  </select>
                  <select
                    value={booking.area}
                    onChange={(e) => setBooking({ ...booking, area: e.target.value })}
                    className="demo-input"
                    style={{ border: '1px solid #DFD3C3', background: '#fff', borderRadius: '10px' }}
                  >
                    <option>Indoor No-Smoking AC</option>
                    <option>Outdoor Garden</option>
                    <option>Indoor Smoking Area</option>
                  </select>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <input
                    type="date"
                    required
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="demo-input"
                    style={{ border: '1px solid #DFD3C3', background: '#fff', borderRadius: '10px' }}
                  />
                  <input
                    type="time"
                    required
                    value={booking.time}
                    onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                    className="demo-input"
                    style={{ border: '1px solid #DFD3C3', background: '#fff', borderRadius: '10px' }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Catatan tambahan (opsional)"
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  className="demo-input"
                  style={{ border: '1px solid #DFD3C3', background: '#fff', borderRadius: '10px' }}
                />
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{
                    background: '#A85D34',
                    color: '#fff',
                    border: 'none',
                    padding: '0.9rem',
                    borderRadius: '999px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Calendar size={16} /> Kirim Reservasi ke WhatsApp
                </motion.button>
              </form>
            </FadeInUp>
          </div>
        </section>

        <DemoFooter
          brandName={CAFE_INFO.name}
          tagline="Artisan Coffee, Crafted Bites & Modern Serenity."
          address={CAFE_INFO.address}
          hours="Setiap Hari : 07:00 – 22:00 WIB"
          instagram="@kalacoffee.demo"
          bg="#1E140E"
          text="#FBF8F3"
          muted="#C6B6A8"
          accent="#E29E75"
          border="rgba(255,255,255,0.1)"
          orderText={`Halo ${CAFE_INFO.name}, saya ingin tanya informasi menu dan reservasi.`}
        />
      </div>
    </PageTransition>
  );
}
