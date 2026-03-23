"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, GraduationCap, Users, Coffee, BookOpen } from 'lucide-react';

export default function About() {
  // Stats - Icons pass as components to avoid TS errors
  const stats = [
    { icon: Users, label: "Happy Students", value: "2500+" },
    { icon: GraduationCap, label: "Programs", value: "03" },
    { icon: ShieldCheck, label: "Success Rate", value: "100%" },
  ];

  const facilities = [
    { 
      title: "Modern Classrooms", 
      desc: "Smart learning spaces designed for interactive English sessions.", 
      src: "/images/classroom.jpeg",
      icon: BookOpen
    },
    { 
      title: "Welcoming Reception", 
      desc: "Our friendly staff is always here to assist your educational journey.", 
      src: "/images/reception.png", 
      icon: Users
    },
    { 
      title: "Garden Study Area", 
      desc: "A peaceful outdoor environment perfect for speaking practice.", 
      src: "/images/garden.jpeg",
      icon: Coffee
    },
  ];

  return (
    // ඔයා එවපු පින්තූරයේ තියෙන Grey-White Gradient එක මෙතන background එකට දැම්මා
    <main className="min-h-screen bg-gradient-to-b from-[#8b939a] via-[#b3bac1] to-[#cbd2d8] text-slate-900 selection:bg-blue-200">
      
      {/* 1. Hero Header Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest uppercase bg-white/40 text-slate-800 rounded-full border border-white/50 backdrop-blur-sm">
              Our Identity
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900">
              About <span className="text-blue-800">Sarasavi</span> Academy
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto italic font-medium leading-relaxed">
              &quot;Perfecting the rule, Polishing The voice and building the person&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Story & Vision Section */}
      <section className="py-24 px-6 bg-white/20 backdrop-blur-sm border-y border-white/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-4 bg-white/40 rounded-[3rem] blur-2xl"></div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
              <Image src="/images/class.png" alt="Our Classroom" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
            <div className="group">
              <h3 className="flex items-center gap-4 text-3xl font-black mb-6 text-blue-800">
                <Target size={32} /> Our Vision
              </h3>
              <p className="text-lg text-slate-800 leading-relaxed border-l-4 border-blue-700 pl-6 bg-white/30 p-6 rounded-r-2xl">
                To be the leading English academy that empowers students to communicate with elegance and confidence on the global stage.
              </p>
            </div>
            <div className="bg-white/60 p-10 rounded-[2.5rem] border border-white shadow-xl">
              <h3 className="flex items-center gap-4 text-2xl font-bold mb-4 text-slate-900">
                <Eye className="text-blue-700" /> Why Choose Us?
              </h3>
              <p className="text-xl text-slate-800 font-bold italic leading-relaxed">
                &quot;We don&apos;t just teach grammar; we build personalities.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Infrastructure Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">World-Class <span className="text-blue-800">Facilities</span></h2>
            <div className="w-24 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group bg-white/40 rounded-[2.5rem] overflow-hidden border border-white hover:bg-white/70 transition-all shadow-lg">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8b939a]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-2 bg-blue-700 p-2 rounded-lg text-white">
                    <item.icon size={20} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3 text-slate-900 group-hover:text-blue-800 transition-colors">{item.title}</h3>
                  <p className="text-slate-700 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Statistics Section */}
      <section className="py-24 px-6 bg-slate-800/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} whileHover={{ y: -10 }} className="p-10 bg-white/50 border border-white rounded-[2.5rem] text-center shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-5 bg-blue-700 rounded-3xl text-white shadow-blue-200 shadow-lg">
                  <stat.icon size={32} />
                </div>
              </div>
              <h4 className="text-5xl font-black text-slate-900 mb-3">{stat.value}</h4>
              <p className="text-blue-800 font-black uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Core Values Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 md:p-24 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
            <GraduationCap size={300} />
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight italic">Our Core <span className="text-blue-500 underline underline-offset-8">Values</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col md:flex-row gap-8 group bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-all">
                <div className="p-5 bg-blue-600 h-fit w-fit mx-auto md:mx-0 rounded-3xl text-white">
                  <Heart size={30} />
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Student-Centric</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">We prioritize each student&apos;s individual growth and specific learning pace.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 group bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-all">
                <div className="p-5 bg-blue-600 h-fit w-fit mx-auto md:mx-0 rounded-3xl text-white">
                  <ShieldCheck size={30} />
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-2">Integrity</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">Providing honest guidance and maintaining the highest educational standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}