import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';
import WhatsApp from '@/components/WhatsApp';


const About = () => {

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
      <main className="pt-14 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative h-64  text-white">
          <Image
            src="/images/back22.jpg"
            alt="Nagpur skyline"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl  mb-4 text-white">Our Story</h1>
            <p className="text-2xl mb-8 text-white">
              Transforming Nagpur's real estate landscape
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                To redefine real estate in Nagpur by delivering exceptional service,
                transparent transactions, and properties that become cherished homes.
              </p>
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Why Choose Nagpur Heights?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">✓</span>
                    Local market expertise
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">✓</span>
                    Comprehensive property verification
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">✓</span>
                    Transparent pricing & documentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">✓</span>
                    Post-sale support & assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
              Meet Our <span className="text-indigo-600">Team</span>
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-indigo-100"
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
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-600 italic mb-4">
                  "Nagpur Heights helped me find my dream home in Dharampeth. Their attention to detail and market knowledge is unmatched."
                </p>
                <p className="font-bold text-black">- Anjali Mehta</p>
                <p className="text-sm text-gray-500">Homeowner since 2024</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-600 italic mb-4">
                  "As an NRI, I needed trustworthy partners to manage my property investment. The team exceeded all expectations."
                </p>
                <p className="font-bold">- Rajiv Nair</p>
                <p className="text-sm text-gray-500">Investor from Dubai</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
