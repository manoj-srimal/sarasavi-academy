"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Clock, ArrowRight, Mail } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us Anytime",
      details: ["077 754 7018", "070 416 8773"],
      label: "Support"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Anuradhapura, Sri Lanka"],
      link: "https://maps.google.com",
      label: "Visit Us"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sun", "8:00 AM - 5:00 PM"],
      label: "Open Hours"
    }
  ];

  return (
    // Grey-White Premium Gradient Background
    <main className="min-h-screen bg-gradient-to-b from-[#8b939a] via-[#b3bac1] to-[#cbd2d8] text-slate-900 selection:bg-blue-200 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest uppercase bg-white/40 text-slate-800 rounded-full border border-white/50 backdrop-blur-sm">
              Connect With Us
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
              Get In <span className="text-blue-800">Touch</span>
            </h1>
            <div className="w-24 h-1.5 bg-blue-700 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-medium italic leading-relaxed">
              &quot;Perfecting the rule, Polishing The voice and building the person&quot;
            </p>
          </motion.div>
        </div>

        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-white/40 border border-white backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:bg-white/60"
            >
              <div className="mb-8 p-6 bg-blue-700 text-white rounded-[2rem] shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <item.icon size={32} />
              </div>
              
              <span className="text-blue-800 text-xs font-black uppercase tracking-[0.2em] mb-3">{item.label}</span>
              <h3 className="text-2xl font-black text-slate-900 mb-6">{item.title}</h3>
              
              <div className="space-y-3">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-slate-800 font-bold text-lg leading-tight">{detail}</p>
                ))}
              </div>
              
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 text-blue-700 font-black hover:gap-4 transition-all uppercase text-xs tracking-widest"
                >
                  Get Directions <ArrowRight size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-28 p-12 md:p-20 bg-slate-900 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Icon in background */}
          <div className="absolute -top-10 -right-10 p-10 opacity-10 rotate-12">
            <MessageCircle size={300} />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight italic">
              Ready to <span className="text-blue-500">Transform</span> <br className="hidden md:block" /> Your Personality?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium mb-12 leading-relaxed">
              We are dedicated to helping you master the English language. Reach out to us today and take the first step toward global confidence.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
               <a 
                 href="tel:0777547018"
                 className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/20 flex items-center gap-3"
               >
                 <Phone size={20} /> Call Manager
               </a>
               <div className="hidden sm:block h-10 w-px bg-slate-800"></div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-500">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold text-slate-300">sarasaviacademy@gmail.com</span>
               </div>
            </div>

            <div className="mt-16 flex justify-center items-center gap-6">
               <div className="h-px w-16 bg-blue-900"></div>
               <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-[10px]">Sarasavi English Academy</span>
               <div className="h-px w-16 bg-blue-900"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}