'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { MdContacts } from 'react-icons/md';
import { BiSolidInfoCircle } from 'react-icons/bi';
import { FaBuilding } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = pathname === '/';
  const showWhiteLogo = isHome && !isScrolled;

  const handleScroll = () => setIsScrolled(window.scrollY > 50);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isActive = (href) => (href === '/' ? pathname === href : pathname.startsWith(href));
  const linkColor = isScrolled || !isHome ? 'text-gray-600' : 'text-white';
  const hoverColor = 'hover:text-blue-600';
  const activeColor = 'text-blue-600 font-medium';

  const linkClasses = (href) =>
    `relative ${isActive(href) ? activeColor : linkColor} ${hoverColor}
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:h-[2px] after:w-0 hover:after:w-full 
     after:bg-blue-600 after:transition-all after:duration-300`;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <>
      {/* 🖥 Desktop Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
          ${isScrolled || !isHome ? 'bg-white shadow-md' : 'bg-transparent'} hidden md:block`}
      >
        <div className="w-full flex items-center justify-between py-1">
          {/* Logo */}
          <div className="ml-[5%]">
            <Link href="/" className="flex items-center">
              <img
                src={showWhiteLogo ? '/logos/whitelogo.png' : '/logos/NAGPUR_HEIGHTS_LOGO.png'}
                alt="Nagpur Heights Logo"
                className={showWhiteLogo ? 'h-24 w-auto' : 'h-16 w-auto'}
              />
            </Link>
          </div>

          {/* Top Nav */}
          <nav className="flex items-center space-x-10 mr-[5%]">
            <Link href="/" className={linkClasses('/')}>Buy</Link>
            <Link href="/property" className={linkClasses('/property')}>Properties</Link>
            <Link href="/about" className={linkClasses('/about')}>About</Link>
            <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
            <button
              onClick={toggleFullscreen}
              className={`${linkColor} ${hoverColor} flex items-center justify-center`}
              aria-label="Toggle fullscreen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* 📱 Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg z-40 flex justify-around items-center h-20 md:hidden px-2">
        <BottomNavLink href="/" label="Buy" Icon={AiFillHome} active={pathname === '/'} />
        <BottomNavLink href="/property" label="Properties" Icon={FaBuilding} active={pathname.startsWith('/property')} />
        <div className="relative -top-8">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-200 border-4 border-white"
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp className="w-7 h-7" />
          </a>
        </div>
        <BottomNavLink href="/about" label="About" Icon={BiSolidInfoCircle} active={pathname.startsWith('/about')} />
        <BottomNavLink href="/contact" label="Contact" Icon={MdContacts} active={pathname.startsWith('/contact')} />
      </nav>
    </>
  );
};

const BottomNavLink = ({ href, label, Icon, active }) => {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 ${
        active
          ? 'text-blue-600 bg-blue-50/50'
          : 'text-gray-500 hover:text-blue-500 hover:bg-gray-100/50'
      }`}
    >
      <div className={`p-2 rounded-full ${active ? 'bg-blue-100' : ''}`}>
        <Icon className={`w-5 h-5 ${active ? 'scale-110' : ''} transition-transform`} />
      </div>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
};

export default Header;
