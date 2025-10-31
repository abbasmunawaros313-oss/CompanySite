
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRightIcon, PlayIcon } from 'lucide-react';
export function Hero() {
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-[#00d9ff] rounded-full" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }} animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }} transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }} />)}
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <TypeAnimation sequence={['We Build the High-Performance Software', 1000, 'We Build the High-Performance Software That Powers Your Business']} wrapper="span" speed={50} className="text-white" />
          </h1>
          <motion.p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }}>
            We partner with visionary companies to design, build, and scale
            exceptional digital products.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8
        }}>
            <motion.button className="bg-[#00d9ff] text-[#0a0e27] px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2" whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)'
          }} whileTap={{
            scale: 0.95
          }}>
              Schedule a Free Consultation
              <ArrowRightIcon size={20} />
            </motion.button>
            <motion.button className="border-2 border-[#00d9ff] text-[#00d9ff] px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2" whileHover={{
            scale: 1.05,
            backgroundColor: 'rgba(0, 217, 255, 0.1)'
          }} whileTap={{
            scale: 0.95
          }}>
              View Our Work
              <PlayIcon size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }}>
        <div className="w-6 h-10 border-2 border-[#00d9ff] rounded-full flex justify-center">
          <motion.div className="w-1.5 h-1.5 bg-[#00d9ff] rounded-full mt-2" animate={{
          y: [0, 16, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} />
        </div>
      </motion.div>
    </div>;
}