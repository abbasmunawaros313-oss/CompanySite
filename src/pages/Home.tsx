
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { IndustryProjects } from '../components/IndustryProjects';
import { TechStack } from '../components/TechStack';
import { Testimonials } from '../components/Testimonials';
import { Reviews } from '../components/Reviews';
import { Process } from '../components/Process';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
export function Home() {
  return <div className="w-full min-h-screen bg-[#0a0e27] text-white">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <IndustryProjects />
      <TechStack />
      <Testimonials />
      <Reviews />
      <Process />
      <CTA />
      <Footer />
    </div>;
}