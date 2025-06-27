import AdviceToolsSection from '@/components/AdviceToolsSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchFilters from '@/components/SearchFilters';
import React from 'react';

const Commercial = () => {
  return (
    <>
    <Header />
    <div
        className="relative py-16 mt-16 " // 90% opacity blue overlay
        style={{
          backgroundImage: "url('./images/back22.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10"> {/* z-10 brings content above overlay */}
          <h1 className="text-4xl font-bold mb-4 text-black">Find Your Dream Property in Nagpur</h1>
          <p className="text-xl mb-8 text-black">Discover the best residential and commercial properties in Nagpur</p>
          <SearchFilters />
        </div>
      </div>

        <div>
          <AdviceToolsSection />
        </div>

    <Footer />
    </>
    );
}

export default Commercial;
