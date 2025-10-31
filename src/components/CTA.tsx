import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon } from 'lucide-react';
export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section className="py-24 px-6 bg-gradient-to-r from-[#00d9ff] to-[#0088cc] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-white rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -30, 0],
        opacity: [0.3, 1, 0.3]
      }} transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={inView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 0.8
    }} className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#0a0e27]">
          Ready to Build Your Next Big Idea?
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-[#0a0e27]/80">
          Let's talk about your project. Our initial consultations are always
          free.
        </p>
        <motion.button className="bg-[#0a0e27] text-white px-12 py-5 rounded-lg font-semibold text-xl flex items-center justify-center gap-3 mx-auto" whileHover={{
        scale: 1.05,
        boxShadow: '0 0 40px rgba(10, 14, 39, 0.5)'
      }} whileTap={{
        scale: 0.95
      }}>
          Get in Touch
          <ArrowRightIcon size={24} />
        </motion.button>
      </motion.div>
    </section>;
}