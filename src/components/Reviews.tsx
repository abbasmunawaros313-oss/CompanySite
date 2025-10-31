import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon } from 'lucide-react';
const reviews = [{
  name: 'Ahsan Khan',
  role: 'Hotel Owner',
  company: 'Grand Plaza Hotel',
  review: 'They built us a stunning booking system that increased our direct reservations by 200%. The mobile app is incredibly user-friendly.',
  rating: 5
}, {
  name: 'Dr. Abbas Khan',
  role: 'School Principal',
  company: 'Riverside Academy',
  review: 'The student management portal they developed has transformed how we handle admissions and parent communication. Absolutely phenomenal work.',
  rating: 5
}, {
  name: 'Ali Pharmacy',
  role: 'Medical Store Owner',
  company: 'HealthCare Pharmacy',
  review: 'Our inventory management system is now seamless. The prescription tracking feature has saved us countless hours and eliminated errors.',
  rating: 5
}, {
  name: 'Autak Cafe',
  role: 'Restaurant Owner',
  company: 'Autak Cafe',
  review: 'The online ordering platform they created has doubled our delivery orders. The integration with our POS system was flawless.',
  rating: 5
}, {
  name: 'Adan Khusa',
  role: 'Gym Owner',
  company: 'FitLife Fitness Center',
  review: 'The membership management app is a game-changer. Our members love the class booking feature and workout tracking.',
  rating: 5
}, {
  name: 'Dr. Sara Malik',
  role: 'Clinic Director',
  company: 'City Medical Clinic',
  review: 'The patient portal and appointment scheduling system has reduced no-shows by 60%. Our staff loves how easy it is to use.',
  rating: 5
}, {
  name: 'Muhammad Taqi',
  role: 'Retail Store Manager',
  company: 'Fashion Avenue',
  review: 'Their e-commerce solution integrated perfectly with our physical stores. Sales have increased by 150% since launch.',
  rating: 5
}, {
  name: 'Amin Ahmed',
  role: 'Spa Owner',
  company: 'Serenity Wellness Spa',
  review: 'The booking and customer management system is beautiful and intuitive. Our clients frequently compliment the user experience.',
  rating: 5
}, {
  name: 'Sana Riaz',
  role: 'Car Dealership Owner',
  company: 'Premier Auto Sales',
  review: 'The inventory showcase website they built generates 50+ quality leads per week. The virtual tour feature is outstanding.',
  rating: 5
}, {
  name: 'Dr. Zainab Qureshi',
  role: 'Dental Practice Owner',
  company: 'Bright Smile Dentistry',
  review: 'The patient management system with automated reminders has improved our efficiency tremendously. Highly recommended!',
  rating: 5
}, {
  name: "Omar Farooq",
  role: 'Real Estate Broker',
  company: 'Prime Properties',
  review: 'The property listing platform with virtual tours has revolutionized how we showcase homes. Closing deals faster than ever.',
  rating: 5
}, {
  name: 'Laila Hassan',
  role: 'Salon Owner',
  company: 'Glamour Beauty Lounge',
  review: 'The appointment booking app with stylist profiles has increased our bookings by 80%. The reminder system is perfect.',
  rating: 5
}, {
  name: 'Ahmed Raza',
  role: 'Hardware Store Owner',
  company: "Builder's Depot",
  review: 'Their inventory and point-of-sale system handles our complex product catalog effortlessly. Best investment we have made.',
  rating: 5
}, {
  name: 'Fatima Noor',
  role: 'Bakery Owner',
  company: 'Sweet Dreams Bakery',
  review: 'The custom order management system and online storefront have expanded our customer base beyond our neighborhood.',
  rating: 5
}, {
  name: 'Hassan Ali',
  role: 'Tutoring Center Director',
  company: 'Academic Excellence',
  review: 'The student progress tracking and parent portal keeps everyone connected. Enrollment has grown 40% since implementation.',
  rating: 5
}];
export function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  });
  return <section className="py-24 px-6 bg-[#0a0e27]" ref={ref}>
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            Trusted by businesses across industries
          </p>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.05
        }} whileHover={{
          scale: 1.02,
          boxShadow: '0 0 25px rgba(0, 217, 255, 0.2)'
        }} className="bg-[#1a1f3a] p-6 rounded-xl border border-gray-800 hover:border-[#00d9ff] transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 fill-[#00d9ff] text-[#00d9ff]" />)}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{review.review}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-sm text-[#00d9ff]">{review.role}</p>
                <p className="text-sm text-gray-500">{review.company}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}