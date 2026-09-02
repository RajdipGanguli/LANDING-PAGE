import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogosMarquee from './components/LogosMarquee';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Campaigns from './components/Campaigns';
import Results from './components/Results';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookCallModal from './components/BookCallModal';
import ContactModal from './components/ContactModal';
import Toast from './components/Toast';

export default function App() {
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 4500);
  };

  const handleBookCall = () => {
    setBookModalOpen(true);
  };

  const handleContact = () => {
    setContactModalOpen(true);
  };

  const handleShowPrivacy = () => {
    showToast('Privacy Policy: All customer data is fully protected and confidential.');
  };

  return (
    <div className="app-root">
      {/* 0. Navbar */}
      <Navbar onBookCall={handleBookCall} />

      <main>
        {/* 1. Hero Section */}
        <Hero onBookCall={handleBookCall} onContact={handleContact} />

        {/* 2. Client Logos Marquee */}
        <LogosMarquee />

        {/* 3. About Us */}
        <AboutUs />

        {/* 4. How Can We Help You? (Meta, Google, TikTok) */}
        <Services onBookCall={handleBookCall} onContact={handleContact} />

        {/* 5. Campaigns We've Run */}
        <Campaigns />

        {/* 6. Results Speak For Themselves */}
        <Results onBookCall={handleBookCall} onContact={handleContact} />

        {/* 7. Why Work With Us? */}
        <WhyWorkWithUs />

        {/* 8. Transparent Pricing */}
        <Pricing onBookCall={handleBookCall} onContact={handleContact} />

        {/* 9. Don't Just Take Our Word For It (Testimonials) */}
        <Testimonials onBookCall={handleBookCall} onContact={handleContact} />

        {/* 10. Frequently Asked Questions (FAQ) */}
        <FAQ />
      </main>

      {/* 11. Footer */}
      <Footer onShowPrivacy={handleShowPrivacy} />

      {/* Modals & Toast */}
      <BookCallModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
        onSubmitSuccess={showToast}
      />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmitSuccess={showToast}
      />
      <Toast message={toastMessage} isVisible={toastVisible} />
    </div>
  );
}
