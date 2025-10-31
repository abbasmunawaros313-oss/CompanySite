
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const projects = [{
  name: 'Project Alpha - FinTech App',
  description: 'A revolutionary mobile banking platform with AI-powered insights',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
}, {
  name: 'Project Beta - E-Commerce Platform',
  description: 'Next-generation shopping experience with real-time inventory',
  image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop'
}, {
  name: 'Project Gamma - Healthcare Portal',
  description: 'Secure telemedicine platform connecting patients and doctors',
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
}, {
  name: 'Project Delta - Analytics Dashboard',
  description: 'Real-time business intelligence and data visualization suite',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
}];
export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="work" className="py-24 px-6 bg-[#0a0e27]" ref={ref}>
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
            From Idea to Impact: Our Work
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} className="relative group overflow-hidden rounded-xl cursor-pointer h-80">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8" whileHover={{
            boxShadow: 'inset 0 0 50px rgba(0, 217, 255, 0.2)'
          }}>
                <h3 className="text-2xl font-bold mb-2 text-[#00d9ff]">
                  {project.name}
                </h3>
                <p className="text-gray-300">{project.description}</p>
              </motion.div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}