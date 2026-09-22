import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import WhyMindfl from './pages/WhyMindfl';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

// Scroll to top or specific element on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#1F291E]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* 5 Major Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-mindfl" element={<WhyMindfl />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />

            {/* Seamless Aliases / Redirects to corresponding sections inside the 5 major pages */}
            <Route path="/founders-message" element={<Navigate to="/about#founders-message" replace />} />
            <Route path="/team" element={<Navigate to="/about#our-team" replace />} />
            <Route path="/thinkers" element={<Navigate to="/why-mindfl#thinkers-behind-mindfl" replace />} />
            <Route path="/watch-and-learn" element={<Navigate to="/why-mindfl#watch-and-learn" replace />} />
            <Route path="/architecture" element={<Navigate to="/programs#architecture" replace />} />
            <Route path="/admissions" element={<Navigate to="/contact" replace />} />
            <Route path="/community" element={<Navigate to="/contact#community" replace />} />
            
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
