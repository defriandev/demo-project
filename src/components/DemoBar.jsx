import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function DemoBar({ activeId, theme = 'light' }) {
  const activeDemo = SITE_CONFIG.demos.find((d) => d.id === activeId);
  const isDark = theme === 'dark';

  const barStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 200,
    background: isDark ? '#0B0C10' : '#F5F4F0',
    color: isDark ? '#F5F4F0' : '#141413',
    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : '#E0DDD5'}`,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.8rem',
  };

  return (
    <div style={barStyle}>
      <div
        style={{
          maxWidth: '1240px',
          width: '92%',
          margin: '0 auto',
          minHeight: '46px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
          padding: '0.45rem 0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontWeight: 600,
              color: 'inherit',
              textDecoration: 'none',
              padding: '0.25rem 0.55rem',
              borderRadius: '4px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.16)' : '#C6C2B8'}`,
            }}
          >
            <ArrowLeft size={13} /> Katalog
          </Link>

          <span style={{ opacity: 0.3 }}>|</span>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
            {SITE_CONFIG.demos.map((demo) => {
              const isActive = demo.id === activeId;
              return (
                <Link
                  key={demo.id}
                  to={demo.path}
                  style={{
                    textDecoration: 'none',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem',
                    fontWeight: isActive ? 600 : 400,
                    background: isActive
                      ? isDark
                        ? '#F5F4F0'
                        : '#141413'
                      : 'transparent',
                    color: isActive
                      ? isDark
                        ? '#141413'
                        : '#F5F4F0'
                      : isDark
                      ? '#A1A1AA'
                      : '#575652',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {demo.index} / {demo.shortLabel}
                </Link>
              );
            })}
          </nav>
        </div>

        <a
          href={SITE_CONFIG.getWhatsAppUrl(activeDemo?.sampleOrderText)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.78rem',
            padding: '0.3rem 0.75rem',
            borderRadius: '4px',
            background: isDark ? '#F5F4F0' : '#141413',
            color: isDark ? '#141413' : '#F5F4F0',
          }}
        >
          Pesan Template Ini <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
