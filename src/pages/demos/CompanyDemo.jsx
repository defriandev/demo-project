import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowUpRight, Check } from 'lucide-react';
import DemoBar from '../../components/DemoBar';
import DemoFooter from '../../components/DemoFooter';
import DemoMobileNav from '../../components/DemoMobileNav';
import { PageTransition, FadeInUp, StaggerGrid, StaggerItem, EASE_EDITORIAL } from '../../components/MotionPrimitives';
import { SITE_CONFIG } from '../../data/siteConfig';
import { CASE_STUDIES, LEADERSHIP_TEAM, COMPANY_INFO } from '../../data/companyData';
import '../../styles/demos.css';

const CASE_CATS = [
  { key: 'all', label: 'All_Cases' },
  { key: 'web-app', label: 'Web_Platform' },
  { key: 'cloud', label: 'Cloud_IoT' },
  { key: 'mobile', label: 'Mobile_App' },
  { key: 'ui-ux', label: 'Design_System' },
];

const BENTO_METRICS = [
  { value: '99.99%', label: 'ENTERPRISE UPTIME SLA' },
  { value: '2.5M+', label: 'DAILY TRANSACTIONS' },
  { value: 'ISO 27001', label: 'SECURITY CERTIFIED' },
  { value: '12+ YRS', label: 'ENGINEERING HERITAGE' },
];

const PROJECT_TYPES = [
  { label: 'Enterprise Web App', price: 35000000, weeks: 6 },
  { label: 'Mobile App (iOS & Android)', price: 45000000, weeks: 8 },
  { label: 'Cloud Migration & DevOps', price: 25000000, weeks: 4 },
];

const SCALES = [
  { label: 'Startup / MVP', mult: 1 },
  { label: 'Growth Scale', mult: 1.5 },
  { label: 'Enterprise SLA', mult: 2.2 },
];

export default function CompanyDemo() {
  const [cat, setCat] = useState('all');
  const [projType, setProjType] = useState(PROJECT_TYPES[0]);
  const [scale, setScale] = useState(SCALES[0]);

  const estimatedCost = Math.round(projType.price * scale.mult);
  const estimatedWeeks = Math.round(projType.weeks * scale.mult);
  const formatRupiah = (n) => `Rp ${n.toLocaleString('id-ID')}`;

  const filteredCases = CASE_STUDIES.filter(
    (c) => cat === 'all' || c.category === cat
  );

  const rfqMsg =
    `Halo ${COMPANY_INFO.name}, kami ingin mendiskusikan proyek digital:\n\n` +
    `Jenis Proyek: ${projType.label}\n` +
    `Skala: ${scale.label}\n` +
    `Estimasi Budget: ${formatRupiah(estimatedCost)} (~${estimatedWeeks} Minggu)\n\n` +
    `Mohon jadwalkan sesi discovery call.`;

  return (
    <PageTransition>
      {/* Space Grotesk + JetBrains Mono, Midnight Architectural Bento */}
      <div
        className="demo-wrap"
        style={{
          background: '#080A0F',
          color: '#E2E8F0',
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <DemoBar activeId="company" theme="dark" />

        {/* Navbar */}
        <header
          className="demo-nav"
          style={{
            background: 'rgba(8, 10, 15, 0.92)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="demo-container demo-nav-inner">
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#F8FAFC',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              <Layers size={18} color="#38BDF8" />
              <span>NEXA_SYS</span>
            </a>

            <ul className="demo-nav-links" style={{ color: '#94A3B8', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem' }}>
              <li><a href="#cases" style={{ color: 'inherit' }}>// CASES</a></li>
              <li><a href="#team" style={{ color: 'inherit' }}>// TEAM</a></li>
              <li><a href="#estimator" style={{ color: 'inherit' }}>// ESTIMATOR</a></li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#estimator"
                style={{
                  background: '#38BDF8',
                  color: '#080A0F',
                  padding: '0.48rem 1rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  fontWeight: 700,
                }}
              >
                INIT_PROPOSAL ↗
              </motion.a>
              <DemoMobileNav
                links={[
                  { href: '#cases', label: 'Studi Kasus' },
                  { href: '#team', label: 'Leadership' },
                  { href: '#estimator', label: 'Estimator' },
                ]}
                bg="#080A0F"
                text="#F8FAFC"
                border="rgba(255,255,255,0.12)"
                accent="#38BDF8"
              />
            </div>
          </div>
        </header>

        {/* Bento Metrics Hero */}
        <section id="hero" className="demo-container company-bento-hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
              background: '#0E121B',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  color: '#38BDF8',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                [ ENTERPRISE DIGITAL ARCHITECTURE ]
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.3rem)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.25rem',
                }}
              >
                Scalable Systems Built for Modern Enterprises.
              </h1>
              <p style={{ color: '#94A3B8', fontSize: '0.96rem', maxWidth: 480, marginBottom: '2rem' }}>
                Partner rekayasa perangkat lunak untuk korporasi &amp; startup dalam membangun arsitektur cloud, fintech, dan sistem desain modular.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#cases"
                style={{
                  background: '#38BDF8',
                  color: '#080A0F',
                  padding: '0.7rem 1.3rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                }}
              >
                Explore Case Studies
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#estimator"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: '#F8FAFC',
                  padding: '0.7rem 1.3rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                }}
              >
                Project Estimator
              </motion.a>
            </div>
          </motion.div>

          {/* Right 2x2 Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {BENTO_METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.06, ease: EASE_EDITORIAL }}
                style={{
                  background: '#0E121B',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '6px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#64748B' }}>
                  0{i + 1}
                </span>
                <div>
                  <div style={{ fontSize: '1.85rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '-0.02em' }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#94A3B8', marginTop: 4 }}>
                    {m.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies: Wide Horizontal Split Rows */}
        <section id="cases" className="demo-section" style={{ background: '#0C0F16', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="demo-container">
            <FadeInUp style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: '#38BDF8' }}>// DEPLOYED SYSTEMS</span>
                <h2 style={{ fontSize: '2.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  Studi Kasus Terpilih
                </h2>
              </div>

              <div className="demo-tab-row">
                {CASE_CATS.map((c) => {
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
                        color: isActive ? '#080A0F' : '#94A3B8',
                        borderColor: 'rgba(255,255,255,0.12)',
                        borderRadius: '4px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.75rem',
                      }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="companyTabPill"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          style={{ position: 'absolute', inset: 0, background: '#38BDF8', borderRadius: '3px', zIndex: 0 }}
                        />
                      )}
                      <span style={{ position: 'relative', zIndex: 1 }}>{c.label}</span>
                    </button>
                  );
                })}
              </div>
            </FadeInUp>

            <motion.div layout style={{ display: 'grid', gap: '1.5rem' }}>
              <AnimatePresence mode="popLayout">
                {filteredCases.map((cs) => (
                  <motion.div
                    layout
                    key={cs.id}
                    className="company-case-row"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                    style={{
                      background: '#111622',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '6px',
                    }}
                  >
                    <img
                      src={cs.image}
                      alt={cs.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', minHeight: 240, maxHeight: 290, objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#38BDF8', marginBottom: '0.4rem' }}>
                        CLIENT // {cs.client.toUpperCase()}
                      </div>
                      <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.65rem' }}>{cs.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1.25rem' }}>{cs.summary}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {cs.metrics.map((m) => (
                          <span
                            key={m}
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.72rem',
                              padding: '0.25rem 0.6rem',
                              borderRadius: '3px',
                              background: 'rgba(56,189,248,0.1)',
                              border: '1px solid rgba(56,189,248,0.25)',
                              color: '#7DD3FC',
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Leadership Strip */}
        <section id="team" className="demo-section">
          <div className="demo-container">
            <FadeInUp style={{ marginBottom: '2rem' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: '#38BDF8' }}>// CORE LEADERSHIP</span>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                Engineering &amp; Product Leads
              </h2>
            </FadeInUp>

            <StaggerGrid className="demo-grid-3">
              {LEADERSHIP_TEAM.map((m) => (
                <StaggerItem
                  key={m.name}
                  style={{
                    background: '#0E121B',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '6px',
                    padding: '1.6rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <img
                    src={m.avatar}
                    alt={m.name}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '6px',
                      objectFit: 'cover',
                      flexShrink: 0,
                      border: '1px solid rgba(56,189,248,0.4)',
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{m.name}</h3>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#38BDF8', marginBottom: '0.5rem' }}>
                      {m.role}
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#94A3B8' }}>{m.bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Estimator */}
        <section id="estimator" className="demo-section" style={{ background: '#0C0F16', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="demo-container demo-grid-2" style={{ alignItems: 'start' }}>
            <FadeInUp style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.74rem', color: '#38BDF8' }}>// SCOPE ESTIMATOR</span>
                <h2 style={{ fontSize: '2.3rem', fontWeight: 700 }}>Simulasi Anggaran Proyek</h2>
              </div>

              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: '#38BDF8', marginBottom: '0.6rem' }}>
                  01. SELECT_SOLUTION
                </p>
                <div className="demo-option-grid">
                  {PROJECT_TYPES.map((pt) => (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={pt.label}
                      type="button"
                      className="demo-option-btn"
                      onClick={() => setProjType(pt)}
                      style={{
                        background: projType.label === pt.label ? 'rgba(56,189,248,0.14)' : '#121826',
                        border: `1px solid ${projType.label === pt.label ? '#38BDF8' : 'rgba(255,255,255,0.08)'}`,
                        color: '#F8FAFC',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        borderRadius: '4px',
                      }}
                    >
                      {pt.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: '#38BDF8', marginBottom: '0.6rem' }}>
                  02. ARCHITECTURE_SCALE
                </p>
                <div className="demo-option-grid">
                  {SCALES.map((sc) => (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      key={sc.label}
                      type="button"
                      className="demo-option-btn"
                      onClick={() => setScale(sc)}
                      style={{
                        background: scale.label === sc.label ? 'rgba(56,189,248,0.14)' : '#121826',
                        border: `1px solid ${scale.label === sc.label ? '#38BDF8' : 'rgba(255,255,255,0.08)'}`,
                        color: '#F8FAFC',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        borderRadius: '4px',
                      }}
                    >
                      {sc.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div
                style={{
                  background: '#111622',
                  border: '1px solid rgba(56,189,248,0.35)',
                  borderRadius: '6px',
                  padding: '2rem',
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: '#94A3B8' }}>
                  ESTIMATED_BUDGET
                </span>
                <motion.div
                  key={estimatedCost}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: '2.15rem', fontWeight: 700, color: '#38BDF8', margin: '0.5rem 0' }}
                >
                  {formatRupiah(estimatedCost)}
                </motion.div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
                  TIMELINE: ~{estimatedWeeks} WEEKS
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.55rem', marginBottom: '1.75rem', fontSize: '0.86rem' }}>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Check size={14} color="#38BDF8" /> {projType.label}</li>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Check size={14} color="#38BDF8" /> Scale: {scale.label}</li>
                  <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Check size={14} color="#38BDF8" /> CI/CD &amp; Technical Handover</li>
                </ul>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={SITE_CONFIG.getWhatsAppUrl(rfqMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#38BDF8',
                    color: '#080A0F',
                    padding: '0.85rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  Ajukan Proposal via WhatsApp <ArrowUpRight size={15} />
                </motion.a>
              </div>
            </FadeInUp>
          </div>
        </section>

        <DemoFooter
          brandName={COMPANY_INFO.name}
          tagline="Empowering Enterprises with Scalable Digital Architecture."
          address={COMPANY_INFO.address}
          hours="Senin – Jumat : 08:30 – 18:00 WIB"
          instagram="@nexadigital.id"
          bg="#05070B"
          text="#F8FAFC"
          muted="#94A3B8"
          accent="#38BDF8"
          border="rgba(255,255,255,0.08)"
          orderText={`Halo ${COMPANY_INFO.name}, kami ingin konsultasi proyek perusahaan.`}
        />
      </div>
    </PageTransition>
  );
}
