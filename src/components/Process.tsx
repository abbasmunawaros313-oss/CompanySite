import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SearchIcon, PenToolIcon, CodeIcon, RocketIcon } from 'lucide-react';
const steps = [{
  icon: SearchIcon,
  number: '1',
  title: 'Discover',
  description: 'We dive deep into your goals, users, and market.'
}, {
  icon: PenToolIcon,
  number: '2',
  title: 'Design',
  description: 'We craft pixel-perfect mockups and user-flow prototypes.'
}, {
  icon: CodeIcon,
  number: '3',
  title: 'Develop',
  description: 'Our expert engineers write clean, efficient, and testable code.'
}, {
  icon: RocketIcon,
  number: '4',
  title: 'Deploy',
  description: 'We launch your product and provide ongoing support for growth.'
}];
export function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section className="py-24 px-6 bg-[#0d1230]" ref={ref}>
      <div className="max-w-7xl mx-auto">
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
            Your Blueprint for Success
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </motion.div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9ff] via-[#00d9ff] to-[#00d9ff] transform -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} animate={inView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} className="relative">
                <div className="flex flex-col items-center text-center">
                  <motion.div whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)'
              }} className="w-24 h-24 bg-[#1a1f3a] border-4 border-[#00d9ff] rounded-full flex items-center justify-center mb-6 relative z-10">
                    <step.icon className="w-10 h-10 text-[#00d9ff]" />
                  </motion.div>
                  <div className="bg-[#1a1f3a] p-6 rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all">
                    <div className="text-[#00d9ff] text-2xl font-bold mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}