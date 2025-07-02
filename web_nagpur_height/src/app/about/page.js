'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const teamMembers = [
    {
      name: "Sarang Thakre",
      role: "Founder & CEO",
      bio: "2+ years in Nagpur real estate, transformed 5+ properties",
      image: "/images/founder1.jpeg"
    },
    {
      name: "Aditi Shukla",
      role: "Head of Sales",
      bio: "Top performer 5 years running, specializes in luxury properties",
      image: "/images/founder2.jpeg"
    },
  ];

  const stats = [
    { value: "5+", label: "Properties Sold" },
    { value: "₹3Cr+", label: "Transaction Value" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "1+", label: "Years Experience" }
  ];

  return (
    <div>
      <Header />
      <WhatsApp />

      <main className="pt-0 pb-12 bg-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-64 text-white">
          {/* Logo only on mobile, inside hero section */}
          <div className="absolute top-0 left-4 z-30 md:hidden">
            <Image
              src="/logos/whitelogo.png"
              alt="Nagpur Heights Logo"
              width={65}
              height={35}
              className="object-contain drop-shadow-md"
              priority
            />
          </div>

          <Image
            src="/images/back22.jpg"
            alt="Nagpur skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-2xl">
              Transforming Nagpur's real estate landscape
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-600 mb-8">
                To redefine real estate in Nagpur by delivering exceptional service,
                transparent transactions, and properties that become cherished homes.
              </p>
              <div
                data-aos="zoom-in"
                className="bg-blue-600 text-white p-8 rounded-xl shadow-md transition-all duration-500"
              >
                <h3 className="text-2xl font-bold mb-4">Why Choose Nagpur Heights?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm md:text-base">
                  <li className="flex items-start"><span className="text-blue-200 mr-2">✓</span>Local market expertise</li>
                  <li className="flex items-start"><span className="text-blue-200 mr-2">✓</span>Comprehensive property verification</li>
                  <li className="flex items-start"><span className="text-blue-200 mr-2">✓</span>Transparent pricing & documentation</li>
                  <li className="flex items-start"><span className="text-blue-200 mr-2">✓</span>Post-sale support & assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-800 mb-12">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="text-center transform transition duration-500"
                >
                  <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <h2 data-aos="fade-up" className="text-4xl font-extrabold text-center text-gray-800 mb-14">
              Meet Our <span className="text-indigo-600">Team</span>
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="rounded-full object-cover mx-auto mb-4 border-4 border-indigo-100"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-indigo-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-800 mb-12">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div data-aos="fade-right" className="bg-gray-50 p-6 rounded-xl shadow">
                <p className="text-gray-600 italic mb-4">
                  "Nagpur Heights helped me find my dream home in Dharampeth. Their attention to detail and market knowledge is unmatched."
                </p>
                <p className="font-bold text-black">- Anjali Mehta</p>
                <p className="text-sm text-gray-500">Homeowner since 2024</p>
              </div>
              <div data-aos="fade-left" className="bg-gray-50 p-6 rounded-xl shadow">
                <p className="text-gray-600 italic mb-4">
                  "As an NRI, I needed trustworthy partners to manage my property investment. The team exceeded all expectations."
                </p>
                <p className="font-bold text-black">- Rajiv Nair</p>
                <p className="text-sm text-gray-500">Investor from Dubai</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
