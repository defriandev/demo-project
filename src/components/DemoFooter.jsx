import React from 'react';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function DemoFooter({
  brandName,
  tagline,
  address,
  hours,
  instagram,
  bg = '#121211',
  text = '#F3F2ED',
  muted = '#9E9B93',
  accent = '#F3F2ED',
  border = 'rgba(255,255,255,0.1)',
  orderText,
}) {
  return (
    <footer
      style={{
        background: bg,
        color: text,
        borderTop: `1px solid ${border}`,
        padding: '3.5rem 0 2rem',
      }}
    >
      <div className="demo-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: `1px solid ${border}`,
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: accent }}>
              {brandName}
            </h3>
            <p style={{ fontSize: '0.86rem', color: muted, lineHeight: 1.6 }}>{tagline}</p>
          </div>

          <div style={{ display: 'grid', gap: '0.6rem', fontSize: '0.85rem', color: muted }}>
            <div style={{ fontWeight: 700, color: text, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Lokasi &amp; Jam Buka
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <MapPin size={15} color={accent} style={{ flexShrink: 0, marginTop: 3 }} />
              <span>{address}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Clock size={15} color={accent} style={{ flexShrink: 0 }} />
              <span>{hours}</span>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.6rem', fontSize: '0.85rem', color: muted, alignContent: 'start' }}>
            <div style={{ fontWeight: 700, color: text, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Kontak Langsung
            </div>
            <span>Instagram: {instagram}</span>
            <a
              href={SITE_CONFIG.getWhatsAppUrl(orderText)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: accent,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Chat WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.78rem',
            color: muted,
          }}
        >
          <span>&copy; 2026 {brandName}. All rights reserved.</span>
          <span>
            Template Showcase by{' '}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: text, textDecoration: 'underline' }}
            >
              @{SITE_CONFIG.developerName}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
