import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2 text-blue-600"
          whileHover={{ scale: 1.05 }}
        >
          <Truck size={28} />
          <span className="text-xl font-bold">TruckGo</span>
        </motion.div>
        
        <div className="flex gap-8">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;