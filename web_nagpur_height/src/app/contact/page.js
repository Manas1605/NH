'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import WhatsApp from '@/components/WhatsApp';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-xl shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-xl font-semibold text-blue-700">{question}</h3>
        {isOpen ? (
          <FaChevronUp className="text-blue-700 ml-4" />
        ) : (
          <FaChevronDown className="text-blue-700 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const offices = [
    {
      id: 1,
      name: 'Main Office',
      address: 'Hingna naka, Near Bellari Restaurant, Nagpur - 440016',
      phone: '+91 9096076177',
      email: 'nagpurheightsofficial@gmail.com',
      hours: 'Mon-Sat: 10:00 AM - 7:00 PM',
    },
  ];

  const faqs = [
    {
      question: 'Is Nagpur Heights a certified real estate consultant?',
      answer:
        'Yes, Nagpur Heights is a trusted and registered real estate advisory based in Nagpur. We only deal with RERA-approved projects and verified developers to ensure a secure experience for every client.',
    },
    {
      question: 'What kind of properties do you offer?',
      answer:
        'We deal in a wide range of properties—flats, open plots, row houses, duplexes, and commercial shops. Whether you’re a first-time homebuyer or looking for investment options, we have verified listings to suit your needs.',
    },
    {
      question: 'How do you verify properties before listing?',
      answer:
        'Every property listed with us undergoes legal scrutiny. We check RERA registration, sale deed, ownership status, and layout approvals. Transparency is our priority—we provide all documents to clients before final decisions.',
    },
    {
      question: 'Which locations in Nagpur do you primarily cover?',
      answer:
        'Our main focus areas include Hingna, MIHAN, Jamtha, Beltarodi, and Wardha Road. These zones are among Nagpur’s fastest-growing real estate hotspots, ideal for both residential and commercial investments.',
    },
  ];

  return (
    <div>
      <Header />
      <WhatsApp />
      <main className="pt-0 md:pt-14 pb-12 bg-white">
        {/* Hero Section */}
        <section className="relative h-64 text-white">
          <Image
            src="/images/back22.jpg"
            alt="Nagpur skyline"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl mb-4 text-white">Contact Us</h1>
            <p className="text-2xl mb-8 text-white">
              We're here to help with all your real estate needs
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Office</h3>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <div key={office.id} className="space-y-2">
                        <h4 className="font-medium text-blue-600">{office.name}</h4>
                        <div className="flex items-start">
                          <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" />
                          <p className="text-gray-600">{office.address}</p>
                        </div>
                        <div className="flex items-center">
                          <FaPhone className="text-blue-500 mr-3" />
                          <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-blue-600">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <FaEnvelope className="text-blue-500 mr-3" />
                          <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-blue-600">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="text-blue-500 mr-3" />
                          <p className="text-gray-600">{office.hours}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Urgent Help */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Urgent Assistance</h3>
                  <p className="text-gray-600 mb-4">
                    For after-hours emergencies or immediate property needs
                  </p>
                  <div className="flex items-center">
                    <FaPhone className="text-red-500 mr-3 text-xl" />
                    <a href="tel:+919096076177" className="text-lg font-bold text-red-600 hover:text-red-700">
                      +91 9096076177
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/nagpurheights?igsh=cjFrMmN5ZXVyczY5"
                      className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Find Our Offices</h2>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59549.83811210652!2d78.93928334863283!3d21.117952400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eaab3c6c93ff%3A0x80eeb13641e66b8e!2sBellari%20Bar%20And%20Restaurant!5e0!3m2!1sen!2sin!4v1746099991083!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Nagpur Heights Office Locations"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
