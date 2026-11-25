import React from 'react';
import { motion } from 'framer-motion';

export const EASE_EDITORIAL = [0.22, 1, 0.36, 1];

export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUp({ children, delay = 0, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: EASE_EDITORIAL }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({ children, className = '', style = {} }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_EDITORIAL },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
