import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const technologies = [{
  name: 'React',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
}, {
  name: 'Python',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
}, {
  name: 'Node.js',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
}, {
  name: 'Swift',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
}, {
  name: 'AWS',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
}, {
  name: 'Figma',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
}, {
  name: 'Docker',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
}, {
  name: 'TypeScript',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
}];
export function TechStack() {
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
            Our Tech Stack
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {technologies.map((tech, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.8
        }} animate={inView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.1,
          filter: 'drop-shadow(0 0 15px rgba(0, 217, 255, 0.5))'
        }} className="flex flex-col items-center justify-center p-6 bg-[#1a1f3a] rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all cursor-pointer">
              <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-3" />
              <span className="text-sm text-gray-400">{tech.name}</span>
            </motion.div>)}
        </div>
      </div>
    </section>;
}