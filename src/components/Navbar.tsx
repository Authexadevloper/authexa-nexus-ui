
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426]/80 backdrop-blur-md border-b border-[#00F5FF]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img 
                src="/lovable-uploads/0ce76609-2adc-44e4-9208-f73401fc60f2.png" 
                alt="Authexa Logo" 
                className="h-10 w-auto filter drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-[#00F5FF]/20 rounded-lg blur-lg -z-10" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-[#00F5FF] bg-clip-text text-transparent font-mono">
              Authexa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 font-mono ${
                  isActive(item.path)
                    ? 'text-[#00F5FF]'
                    : 'text-white hover:text-[#00F5FF]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00F5FF]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 border border-[#00F5FF]/50 rounded-lg text-[#00F5FF] font-semibold text-sm transition-all duration-300 hover:border-[#00F5FF] font-mono"
            >
              Get Demo
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#00F5FF] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors font-mono ${
                  isActive(item.path)
                    ? 'text-[#00F5FF] bg-[#00F5FF]/10'
                    : 'text-white hover:text-[#00F5FF] hover:bg-[#00F5FF]/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-[#00F5FF]/20 to-purple-500/20 border border-[#00F5FF]/50 rounded-lg text-[#00F5FF] font-semibold text-sm font-mono">
              Get Demo
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
