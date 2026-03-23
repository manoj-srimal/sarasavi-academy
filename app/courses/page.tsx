"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, ArrowRight, Zap, Target, Phone } from 'lucide-react';

const courses = [
  {
    title: "Intensive 30-Day Program",
    duration: "30 Days",
    icon: <Zap className="text-amber-500" size={32} />,
    description: "Accelerated training focused on core grammar rules and daily conversational fluency for quick results.",
    features: ["Core Grammar Principles", "Daily Speaking Practice", "Vocabulary Building", "Confidence Boost Sessions"],
    color: "bg-white border-blue-50 hover:border-blue-200 hover:shadow-blue-100"
  },
  {
    title: "Mastery 60-Day Program",
    duration: "60 Days",
    icon: <Target className="text-blue-600" size={32} />,
    description: "A comprehensive guide designed to make you a proficient and professional English speaker.",
    features: ["Advanced Sentence Structures", "Public Speaking Mastery", "Professional Writing", "Global Communication Skills"],
    color: "bg-white border-blue-50 hover:border-blue-200 hover:shadow-blue-100"
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Our <span className="text-blue-600">Specialized</span> Programs
          </motion.h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`relative p-10 rounded-[2.5rem] border shadow-sm transition-all duration-300 ${course.color}`}
            >
              <div className="absolute top-6 right-6 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-xs uppercase tracking-widest">
                {course.duration}
              </div>
              <div className="mb-6 p-3 bg-blue-50 inline-block rounded-2xl">{course.icon}</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{course.title}</h3>
              <p className="text-lg text-slate-600 mb-8">{course.description}</p>
              <ul className="space-y-4 mb-10">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <CheckCircle className="text-green-500" size={20} /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-slate-900 transition-colors shadow-lg shadow-blue-100">
                Register Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center p-12 bg-white border border-blue-100 rounded-[3rem] shadow-sm">
          <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
            <Phone className="text-blue-600" /> Need Guidance?
          </h4>
          <div className="flex flex-wrap justify-center gap-8 font-black text-2xl text-blue-600">
            <span>077 754 7018</span>
            <span>070 416 8773</span>
          </div>
        </div>
      </div>
    </div>
  );
}