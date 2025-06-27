import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import WhatsApp from '@/components/WhatsApp';

const Contact = () => {

  const offices = [
    {
      id: 1,
      name: 'Main Office',
      address: 'Hingna naka, Near Bellari Restaurant, Nagpur - 440016',
      phone: '+91 9096076177',
      email: 'nagpurheightsofficial@gmail.com',
      hours: 'Mon-Sat: 10:00 AM - 7:00 PM'
    },
   
  ];

  return (
    <div>
      <Header />
      <WhatsApp />
      <main className="pt-0 md:pt-14 pb-12 bg-white">

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
            <h1 className="text-5xl  mb-4 text-white">Contact Us</h1>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Office Locations */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Office</h3>
                  <div className="space-y-6">
                    {offices.map(office => (
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

                {/* Emergency Contact */}
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

                {/* Social Media */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {/* <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a> */}
                    <a href="https://www.instagram.com/nagpurheights?igsh=cjFrMmN5ZXVyczY5" className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    {/* <a href="#" className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
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
}

export default Contact;
