import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Tablet, Smartphone, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { EASE_EDITORIAL } from './MotionPrimitives';

const DEVICES = [
  { key: 'desktop', label: 'Desktop', Icon: Monitor, width: '100%', maxWidth: '1240px', radius: '8px', border: '1px solid #E0DDD5' },
  { key: 'tablet', label: 'Tablet', Icon: Tablet, width: '768px', maxWidth: '95%', radius: '18px', border: '8px solid #141413' },
  { key: 'mobile', label: 'Mobile', Icon: Smartphone, width: '390px', maxWidth: '95%', radius: '30px', border: '10px solid #141413' },
];

export default function DeviceSimulatorModal({ demo, onClose }) {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    if (!demo) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [demo, onClose]);

  const activeSpec = DEVICES.find((d) => d.key === device) || DEVICES[0];

  return (
    <AnimatePresence>
      {demo && (
        <motion.div
          className="simulator-modal active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="simulator-toolbar"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE_EDITORIAL }}
          >
            <span className="sim-title">PREVIEW — {demo.name.toUpperCase()}</span>

            <div className="device-switch">
              {DEVICES.map(({ key, label, Icon }) => {
                const isActive = device === key;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`device-btn ${isActive ? 'active' : ''}`}
                    style={{ position: 'relative', background: 'transparent', color: isActive ? '#F5F4F0' : '#575652' }}
                    onClick={() => setDevice(key)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="simDevicePill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: '#141413',
                          borderRadius: '4px',
                          zIndex: 0,
                        }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Icon size={13} /> {label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="sim-actions">
              <a
                href={demo.path}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              >
                Tab Baru <ArrowUpRight size={13} />
              </a>
              <a
                href={SITE_CONFIG.getWhatsAppUrl(demo.sampleOrderText)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ink"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              >
                Pesan Ini
              </a>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-line"
                style={{ padding: '0.35rem 0.6rem', fontSize: '0.78rem' }}
                aria-label="Tutup simulator"
              >
                <X size={15} />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="sim-viewport"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
          >
            <motion.div
              className="viewport-frame"
              animate={{
                width: activeSpec.width,
                maxWidth: activeSpec.maxWidth,
                borderRadius: activeSpec.radius,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ border: activeSpec.border }}
            >
              <iframe src={demo.path} title={`Preview ${demo.name}`} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
