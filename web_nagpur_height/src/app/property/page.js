'use client';
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import AdviceToolsSection from '@/components/AdviceToolsSection';
import WhatsApp from '@/components/WhatsApp';
import { Properties } from '../../data/properties.json';
import { AiOutlineSearch } from 'react-icons/ai';

const Property = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [placeholder, setPlaceholder] = useState('Search Plots...');
  const placeholderRef = useRef(0);
  const placeholders = ['Search Plots...', 'Search Flats...', 'Search Apartments...'];

  useEffect(() => {
    const interval = setInterval(() => {
      placeholderRef.current = (placeholderRef.current + 1) % placeholders.length;
      setPlaceholder(placeholders[placeholderRef.current]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const filteredProperties = Properties.filter((property) =>
    `${property.title} ${property.location} ${property.type}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <WhatsApp />

      {/* Hero Section */}
      <section
        className="relative py-12 md:py-16 md:mt-16"
        style={{
          backgroundImage: "url('/images/back22.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-left md:text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Find Your Dream Property in Nagpur
          </h1>
          <p className="text-base md:text-2xl text-white">
            Discover the best residential and commercial properties in Nagpur
          </p>
        </div>
      </section>

      {/* Search Box */}
      <div className="container mx-auto px-4 mt-6 md:mt-10 flex justify-center">
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 md:p-4 pr-12 border border-gray-300 rounded-lg shadow-sm text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 placeholder:text-black bg-white text-black"
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-600 hover:text-blue-800 transition"
          >
            <AiOutlineSearch size={24} />
          </button>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-black">
          Featured Properties
        </h2>

        {filteredProperties.length === 0 ? (
          <p className="text-center text-gray-500">No matching properties found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {filteredProperties.map((property) => {
              const slug = property.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '');

              return (
                <div
                  key={property.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      priority={false}
                    />
                  </div>
                  <div className="p-2 md:p-4">
                    <span className="inline-block px-1 py-0.5 md:px-2 md:py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-1 md:mb-2">
                      {property.type}
                    </span>
                    <h3 className="text-sm md:text-xl font-bold text-black mb-1 line-clamp-1">{property.title}</h3>
                    <p className="text-xs md:text-base text-gray-600 line-clamp-1">{property.location}</p>
                    <p className="text-xs md:text-base text-gray-600 line-clamp-1">{property.area}</p>
                    <p className="text-sm md:text-lg font-semibold text-blue-700 my-1 md:my-3">{property.price}</p>
                    <Link href={`/property/${property.id}-${slug}`} passHref>
                      <button className="w-full bg-blue-600 text-white py-1 md:py-2 text-xs md:text-base rounded-md hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <AdviceToolsSection />
      <Footer />
    </div>
  );
};

export default Property;
