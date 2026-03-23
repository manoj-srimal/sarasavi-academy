"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section - Circle Shape & Border එකතු කර ඇත */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-14 w-14 p-0.5 bg-white/30 rounded-full border border-white/50 shadow-lg backdrop-blur-sm overflow-hidden transition-transform group-hover:scale-110 group-hover:rotate-3">
            <div className="relative h-full w-full rounded-full overflow-hidden bg-white">
              <Image 
                src="/images/logo.jpeg" 
                alt="Sarasavi Academy Logo" 
                fill 
                className="object-cover scale-110" // object-cover මගින් රවුම ඇතුළට පින්තූරය ලස්සනට සකස් කරයි
                priority 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              SARASAVI<span className="text-blue-500">.</span>
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}>
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-bold hover:text-blue-500 transition-colors ${scrolled ? 'text-slate-900' : 'text-white/90'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <a 
            href="/application.pdf" 
            download="Sarasavi_Academy_Application.pdf"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
          >
            Join Now <Download size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blue-600 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-4 md:hidden border-t border-slate-100"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-slate-800 border-b border-slate-50 pb-3 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/application.pdf" 
            download="Sarasavi_Academy_Application.pdf"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-4 bg-blue-600 text-white rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20"
          >
            Join Now <Download size={20} />
          </a>
        </motion.div>
      )}
    </nav>
  );
}