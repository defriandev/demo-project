import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PortalHome from './pages/PortalHome';

const CafeDemo = lazy(() => import('./pages/demos/CafeDemo'));
const BarbershopDemo = lazy(() => import('./pages/demos/BarbershopDemo'));
const CompanyDemo = lazy(() => import('./pages/demos/CompanyDemo'));
const TravelDemo = lazy(() => import('./pages/demos/TravelDemo'));

function DemoLoader() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F3F2ED',
        color: '#121211',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.8rem',
        letterSpacing: '0.08em',
      }}
    >
      LOADING TEMPLATE...
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<DemoLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PortalHome />} />
          <Route path="/demo/cafe" element={<CafeDemo />} />
          <Route path="/demo/barbershop" element={<BarbershopDemo />} />
          <Route path="/demo/company" element={<CompanyDemo />} />
          <Route path="/demo/travel" element={<TravelDemo />} />
          <Route path="*" element={<PortalHome />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
