import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const WhatsApp = () => {
  return (
    <div className="hidden md:flex fixed bottom-4 right-4 z-50 flex-col items-center space-y-4">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919096076177"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-green-500 transition-colors duration-300 text-4xl"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/your_username" // replace with your username
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-500 transition-colors duration-300 text-4xl"
        title="Follow on Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default WhatsApp;
