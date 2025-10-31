
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCapIcon, HeartPulseIcon, UtensilsIcon, HotelIcon, PlaneIcon, ShoppingBagIcon, HomeIcon, DumbbellIcon, ScissorsIcon, ShoppingCartIcon, BuildingIcon, CarIcon } from 'lucide-react';
const industries = [{
  icon: GraduationCapIcon,
  title: 'Education & Schools',
  description: 'Student management systems, learning portals, and admission platforms',
  image: 'https://ninistutor.com/wp-content/uploads/2021/05/school-image.jpg',
  features: ['Student Portal', 'Attendance Tracking', 'Grade Management', 'Parent Communication']
}, {
  icon: HeartPulseIcon,
  title: 'Healthcare & Hospitals',
  description: 'Patient management, appointment scheduling, and telemedicine solutions',
  image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
  features: ['Patient Records', 'Appointment Booking', 'Prescription Management', 'Telemedicine']
}, {
  icon: UtensilsIcon,
  title: 'Restaurants & Cafes',
  description: 'Online ordering, table reservations, and kitchen management systems',
  image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
  features: ['Online Ordering', 'Table Booking', 'Menu Management', 'Delivery Integration']
}, {
  icon: HotelIcon,
  title: 'Hotels & Resorts',
  description: 'Booking engines, property management, and guest experience platforms',
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
  features: ['Room Booking', 'Guest Management', 'Housekeeping', 'Revenue Analytics']
}, {
  icon: PlaneIcon,
  title: 'Travel Agencies',
  description: 'Trip planning, booking management, and customer relationship tools',
  image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  features: ['Trip Planning', 'Flight Booking', 'Package Management', 'Customer Portal']
}, {
  icon: ShoppingBagIcon,
  title: 'Retail Stores',
  description: 'E-commerce platforms, inventory management, and POS systems',
  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
  features: ['E-commerce', 'Inventory Tracking', 'POS Integration', 'Customer Loyalty']
}, {
  icon: HomeIcon,
  title: 'Real Estate',
  description: 'Property listings, virtual tours, and lead management systems',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  features: ['Property Listings', 'Virtual Tours', 'Lead Management', 'Document Portal']
}, {
  icon: DumbbellIcon,
  title: 'Fitness Centers',
  description: 'Membership management, class scheduling, and workout tracking apps',
  image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
  features: ['Member Portal', 'Class Booking', 'Workout Tracking', 'Payment Processing']
}, {
  icon: ScissorsIcon,
  title: 'Salons & Spas',
  description: 'Appointment booking, stylist management, and customer profiles',
  image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
  features: ['Online Booking', 'Stylist Profiles', 'Service Packages', 'Loyalty Rewards']
}, {
  icon: ShoppingCartIcon,
  title: 'Pharmacies',
  description: 'Prescription management, inventory control, and delivery tracking',
  image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop',
  features: ['Prescription Tracking', 'Inventory Management', 'Delivery System', 'Patient Records']
}, {
  icon: BuildingIcon,
  title: 'Corporate Offices',
  description: 'Employee management, project tracking, and communication platforms',
  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  features: ['HR Management', 'Project Tracking', 'Time Management', 'Internal Communication']
}, {
  icon: CarIcon,
  title: 'Automotive Dealers',
  description: 'Inventory showcase, test drive booking, and financing calculators',
  image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800&h=600&fit=crop',
  features: ['Vehicle Showcase', 'Test Drive Booking', 'Finance Calculator', 'Trade-in Valuation']
}];
export function IndustryProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
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
            Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            Custom software tailored to your business needs
          </p>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.05
        }} whileHover={{
          scale: 1.03,
          boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)'
        }} className="bg-[#1a1f3a] rounded-xl overflow-hidden border border-gray-800 hover:border-[#00d9ff] transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a] to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#00d9ff] rounded-full flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-[#0a0e27]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {industry.title}
                </h3>
                <p className="text-gray-400 mb-4">{industry.description}</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm font-semibold text-[#00d9ff] mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1">
                    {industry.features.map((feature, idx) => <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#00d9ff] rounded-full"></span>
                        {feature}
                      </li>)}
                  </ul>
                </div>
                <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="mt-6 w-full bg-[#00d9ff] text-[#0a0e27] py-2 rounded-lg font-semibold hover:bg-[#00b8d9] transition-colors">
                  View Case Study
                </motion.button>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}