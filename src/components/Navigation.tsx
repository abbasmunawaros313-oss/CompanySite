import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Import lucide icons

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#0a0e27]/95 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-[#00d9ff]">Ignite </span> Solutions
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00d9ff] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <motion.button
              className="bg-[#00d9ff] text-[#0a0e27] px-6 py-2 rounded-lg font-semibold"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0e27]/95 backdrop-blur-lg shadow-lg md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg hover:text-[#00d9ff] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {link.name}
                </a>
              ))}
              <motion.button
                className="bg-[#00d9ff] text-[#0a0e27] px-8 py-3 rounded-lg font-semibold w-full"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                Get a Free Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}