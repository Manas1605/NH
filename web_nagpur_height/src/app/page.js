'use client';
import { useState } from 'react';
import { useLenis } from '../lib/temp'; // ✅ correct path

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import AdviceToolsSection from '../components/AdviceToolsSection';
import ProminentProjects from '@/components/ProminentProjects';
import WhatsApp from '@/components/WhatsApp';
import { Properties } from '../data/properties.json';
import WhyChooseUs from '@/components/WhyChooseUs';

const Home = () => {
  useLenis();
  const [showAllProperties, setShowAllProperties] = useState(false);
  const displayedProperties = showAllProperties ? Properties : Properties.slice(0, 8);

  const toggleFullscreen = () => {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
      element.requestFullscreen?.().catch(err => {
        console.error('Fullscreen error:', err);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      <WhatsApp />

      {/* Hero Section */}
      <section className="relative w-full">
        {/* Mobile-only Top-left White Logo */}
        <div className="absolute top-[-6px] left-4 z-30 block md:hidden">
          <Link href="/" className="block">
            <img
              src="/logos/whitelogo.png"
              alt="Nagpur Heights Logo"
              className="h-22 w-auto drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Fullscreen Button - Top Right (Mobile Only) */}
        <button
          onClick={toggleFullscreen}
          className="md:hidden absolute top-4 right-4 z-40 bg-white/30 backdrop-blur-sm p-2 rounded-full"
          aria-label="Toggle fullscreen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

       {/* Desktop: Fullscreen video */}
<div className="hidden md:block relative h-screen w-full overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-110"
  >
    <source src="/video/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute inset-0 bg-black/30 z-10" />

  {/* Bottom-left fixed text */}
  <div className="absolute bottom-0 left-0 z-20 p-6 text-white">
    <h1 className="text-6xl lg:text-8xl font-light leading-tight">
      Explore Properties<br />In Nagpur
    </h1>
  </div>
  {/* Scroll Down Indicator */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center text-white animate-bounce">
    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
    <span className="text-sm font-light tracking-wider">Scroll Down</span>
  </div>
</div>



        {/* Mobile: Image with overlaid text */}
        <div className="block md:hidden relative w-full h-[40vh] overflow-hidden">
          <img
            src="/logos/Mobile.jpg"
            alt="Mobile Banner"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 h-full flex flex-col justify-end items-center text-center px-4 pb-10">
            <h1 className="text-3xl font-bold text-white mb-2">
              Find Your Dream Property in Nagpur
            </h1>
            <p className="text-lg text-white">
              Discover the best residential and commercial properties in Nagpur
            </p>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Properties</h2>
          {!showAllProperties && (
            <button
              onClick={() => setShowAllProperties(true)}
              className="hidden md:block text-blue-600 hover:underline font-medium"
            >
              View More
            </button>
          )}
        </div>

        {/* Mobile carousel - shows all properties */}
        <div className="block md:hidden overflow-x-auto -mx-2 px-2 pb-2">
          <div className="flex gap-2">
            {Properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Desktop grid - shows 8 properties initially */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Prominent Projects */}
      <ProminentProjects />

      {/* Remaining Sections (no AOS) */}
      <AdviceToolsSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
