import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { QuoteIcon } from 'lucide-react';
const testimonials = [{
  quote: 'Working with Ignite solutions was a game-changer. They delivered on time and exceeded our every expectation.',
  name: 'Munawar Abbas',
  title: 'CEO, ExampleCo'
}, {
  quote: 'The level of expertise and professionalism was outstanding. Our app now has over 1 million active users thanks to their work.',
  name: 'Abbas Ali',
  title: 'CTO,  '
}, {
  quote: 'They transformed our outdated system into a modern, scalable platform. The results speak for themselves - 300% increase in efficiency.',
  name: 'Fayyaz Ahamad',
  title: 'VP of Operations, Enterprise Solutions'
}];
export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-24 px-6 bg-[#0a0e27] overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </motion.div>
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} initial={{
            opacity: 0,
            x: 100
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -100
          }} transition={{
            duration: 0.5
          }} className="text-center">
              <QuoteIcon className="w-16 h-16 text-[#00d9ff] mx-auto mb-8 opacity-50" />
              <p className="text-2xl md:text-3xl font-light mb-8 text-gray-200 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="text-xl font-semibold text-[#00d9ff]">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-400">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#00d9ff] w-8' : 'bg-gray-600'}`} />)}
          </div>
        </div>
      </div>
    </section>;
}
