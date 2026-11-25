import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { EASE_EDITORIAL } from './MotionPrimitives';

export default function DemoMobileNav({
  links,
  bg = '#FFFFFF',
  text = '#121211',
  border = 'rgba(0,0,0,0.08)',
  accent = '#121211',
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="demo-mobile-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle Menu"
        style={{
          background: 'transparent',
          border: `1px solid ${border}`,
          color: text,
          borderRadius: '6px',
          padding: '0.42rem',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE_EDITORIAL }}
            style={{
              position: 'fixed',
              top: '117px',
              left: 0,
              right: 0,
              zIndex: 85,
              background: bg,
              borderBottom: `1px solid ${border}`,
              padding: '1rem 4% 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '0 16px 32px rgba(0,0,0,0.16)',
            }}
          >
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: text,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.45rem 0',
                  borderBottom: `1px solid ${border}`,
                }}
              >
                {item.label}
              </a>
            ))}
            <span style={{ fontSize: '0.75rem', color: accent, opacity: 0.85, paddingTop: '0.25rem' }}>
              Tap menu di atas untuk langsung menuju bagian halaman.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
