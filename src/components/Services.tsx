import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MonitorIcon, SmartphoneIcon, PaletteIcon, CloudIcon } from 'lucide-react';
const services = [{
  icon: MonitorIcon,
  title: 'Custom Web Development',
  description: 'We build fast, secure, and scalable web applications from the ground up.'
}, {
  icon: SmartphoneIcon,
  title: 'Mobile App Development',
  description: 'Engaging native and hybrid mobile apps for both iOS and Android.'
}, {
  icon: PaletteIcon,
  title: 'UI/UX Design',
  description: 'We create intuitive, beautiful, and user-centric designs that people love.'
}, {
  icon: CloudIcon,
  title: 'Cloud & DevOps',
  description: 'We optimize your infrastructure for scale, security, and high availability on AWS, Azure, and Google Cloud.'
}];
export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="services" className="py-24 px-6 bg-[#0d1230]" ref={ref}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.05,
          boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)'
        }} className="bg-[#1a1f3a] p-8 rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all cursor-pointer">
              <service.icon className="w-12 h-12 text-[#00d9ff] mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}