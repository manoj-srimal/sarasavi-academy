"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, ArrowRight, Award, Quote, Mail, Phone, 
  MapPin, Users, BookOpen, Globe, Star, ShieldCheck, Heart,
  Facebook, Youtube, MessageCircle 
} from 'lucide-react';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Icons සඳහා විශේෂාංග ලැයිස්තුව
  const features = [
    { title: "Expert Coaching", desc: "Guided by BA English professionals.", icon: Star },
    { title: "Flexible Learning", desc: "Physical and Online session availability.", icon: Globe },
    { title: "Proven Results", desc: "100% focus on speaking & grammar mastery.", icon: ShieldCheck },
  ];

  // සංඛ්‍යාත්මක දත්ත (Stats)
  const stats = [
    { label: "Active Students", value: "500+", icon: <Users size={24} /> },
    { label: "Success Rate", value: "100%", icon: <Award size={24} /> },
    { label: "Course Modules", value: "12+", icon: <BookOpen size={24} /> },
  ];

  // පින්තූර 6 සහ ඒවායේ ඇලවීම් (Angles)
  const memories = [
    { src: "/images/mem-1.jpeg", angle: "-rotate-3", caption: "Rewarding Excellence" },
    { src: "/images/mem-2.jpeg", angle: "rotate-2", caption: "Focus & Dedication" },
    { src: "/images/mem-3.jpeg", angle: "-rotate-2", caption: "Supportive Learning" },
    { src: "/images/mem-4.jpeg", angle: "rotate-3", caption: "Identity & Pride" },
    { src: "/images/mem-5.jpeg", angle: "-rotate-1", caption: "Our Growing Family" },
    { src: "/images/mem-6.jpeg", angle: "rotate-2", caption: "Shared Victories" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/cover-g.png" 
            alt="Sarasavi Academy Hero" 
            fill 
            className="object-cover brightness-[0.35]"
            priority
          />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-widest uppercase bg-blue-600 rounded-full">
              Excellence in English Education
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              Sarasavi <span className="text-blue-400">English</span> Academy
            </h1>
            <p className="text-lg md:text-3xl italic font-light max-w-3xl mx-auto text-blue-100/90 leading-relaxed border-l-4 border-blue-500 pl-6 py-2">
              &quot;Perfecting the rule, Polishing The voice and building the person&quot;
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/courses">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
                  Explore Courses <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 bg-white relative z-20 -mt-16 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-5"
            >
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">{stat.icon}</div>
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-slate-900">{stat.value}</h4>
                <p className="text-slate-500 font-medium text-sm md:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. MISSION SECTION */}
      <section className="py-28 bg-gradient-to-b from-white to-blue-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-slate-900 mb-10 tracking-tight underline decoration-blue-200 underline-offset-8">Our Mission</h2>
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <p className="relative text-xl md:text-2xl leading-relaxed text-slate-700 italic bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-blue-100">
                &quot;Our mission is to provide a transformative learning experience by anchoring students in the core principles of English Grammar, while nurturing their confidence to speak elegantly, ensuring every learner evolves into a well-rounded and globally competitive individual.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. KEY FEATURES SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why Choose <span className="text-blue-600">Sarasavi</span>?</h2>
            <p className="text-slate-500 mt-4">We provide a unique learning ecosystem tailored for success.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all group"
              >
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHAIRMAN MESSAGE SECTION (Updated with Premium Look) */}
      <section className="py-28 px-6 bg-slate-50 overflow-hidden relative">
        {/* Background Decorative Element */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Image & Title with Premium Styling */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                {/* Image Glow Background */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
                {/* The Image Container */}
                <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image 
                    src="/images/chairman.jpeg" 
                    alt="Chairman Sumedha Ekanayake" 
                    fill 
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Name & Title Box */}
              <div className="mt-10 text-center lg:text-left bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all group hover:border-blue-100 hover:shadow-blue-100/50">
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Sumedha Ekanayake
                </h3>
                <p className="text-blue-600 font-semibold flex items-center justify-center lg:justify-start gap-2.5 mt-2 uppercase text-xs tracking-wider">
                  <Award size={18} /> BA in English Degree
                </p>
                <div className="w-full h-px bg-slate-100 my-4"></div>
                <p className="text-slate-500 text-sm font-medium tracking-wide">
                  Chairman - Sarasavi English Academy
                </p>
              </div>
            </motion.div>

            {/* Right: Message Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col justify-center h-full pt-10"
            >
              <div className="inline-flex items-center gap-3 text-blue-600 font-bold mb-6 uppercase tracking-widest text-sm">
                <div className="w-12 h-px bg-blue-600"></div> Leadership Message
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tighter">
                Education with a <span className="text-blue-600 font-black">Global Vision</span>
              </h2>
              
              <div className="space-y-6 text-xl text-slate-700 leading-relaxed font-light relative">
                <Quote className="absolute -top-6 -left-8 text-blue-100 h-20 w-20 -z-10 opacity-60" />
                
                <p>
                  At <span className="font-bold text-slate-900">Sarasavi English Academy</span>, we believe that language is more than just a subject; it is the key that unlocks a world of endless opportunities.
                </p>
                
                {/* Special Quote Box */}
                <div className="bg-white p-10 rounded-3xl border border-slate-100 italic font-medium text-slate-900 shadow-xl border-l-4 border-l-blue-600 transition-all hover:border-blue-100 hover:shadow-blue-100/50">
                  &quot;We don&apos;t just teach grammar; we build personalities. By anchoring our students in the core principles of the language and polishing their speaking skills, we prepare them to stand tall on any global stage.&quot;
                </div>
                
                <p>
                  Our commitment is to ensure that every student who walks through our doors leaves as a refined, well-rounded, and globally competitive individual, ready to face the challenges of the modern world with confidence and elegance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. ACADEMY MEMORIES SECTION (6 Images, Mobile Responsive) */}
      <section className="py-32 bg-white px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center justify-center gap-2 mb-4">
              <Heart className="text-red-500 fill-red-500" size={20} />
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Life at Sarasavi</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Cherished <span className="text-blue-600">Memories</span></h2>
            <p className="text-slate-500 mt-4 text-lg italic">&quot;A glimpse into our journey of building confident voices&quot;</p>
          </div>

          {/* Grid: 2 columns on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            {memories.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative group cursor-pointer ${img.angle} p-2 md:p-4 bg-white shadow-lg border border-slate-50 rounded-sm`}
              >
                <div className="relative h-48 md:h-80 w-full overflow-hidden bg-slate-100 mb-3">
                  <Image 
                    src={img.src} 
                    alt={img.caption} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <p className="text-center text-xs md:text-base font-medium text-slate-700 italic">
                  {img.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          
          <div className="space-y-6">
            <h3 className="text-3xl font-black italic tracking-tighter text-blue-400">SARASAVI.</h3>
            <p className="text-slate-400">Perfecting the rule, Polishing The voice and building the person.</p>
            
            {/* SOCIAL MEDIA ICONS - අලුතින් එකතු කළ කොටස */}
            <div className="flex items-center gap-4 pt-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1CHy3r6LEE/?mibextid=wwXIfr" target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/10 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              
              {/* WhatsApp */}
              <a href="https://wa.me/qr/WIHUWR5NPVILA1" target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300 border border-white/10 group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              
              {/* YouTube */}
              <a href="https://youtube.com/@sarasavienglishacademy?si=WKPBZkrW39AjwLZk" target="_blank" className="p-3 bg-white/5 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 border border-white/10 group">
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>

              {/* Website/Globe */}
              <a href="https://www.tiktok.com/@sarasavienglisgacadamy_0?_r=1&_t=ZS-94eQliAdcFl
" className="p-3 bg-white/5 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 border border-white/10 group">
                <Globe size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            {/* ------------------------------------------- */}
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact Us</h4>
            <div className="space-y-4 text-slate-400">
              <p className="flex items-center gap-3"><Phone size={18} className="text-blue-400"/> 077 754 7018 / 070 416 8773</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-blue-400"/> info@sarasavi.edu</p>
              <a href="https://maps.app.goo.gl/KzHs8b6AvJfapfvY8" target="_blank" className="hover:text-blue-400 flex items-center gap-2">
                <MapPin size={18} className="text-blue-400"/> Get Directions
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <div className="flex flex-col gap-2 text-slate-400 font-medium">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/courses" className="hover:text-blue-400 transition-colors">Our Programs</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
            </div>
          </div>

        </div>

        {/* Copyright section (optional but looks professional) */}
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Sarasavi English Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}