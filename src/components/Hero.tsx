import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Seamless Goods Transportation
            <span className="block text-blue-600">at Your Fingertips</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book reliable trucks for your business logistics needs with real-time tracking
            and competitive pricing.
          </motion.p>
          
          <motion.button
            className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Book a Truck
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { title: '24/7 Support', value: 'Always Available' },
            { title: 'Fleet Size', value: '1000+ Trucks' },
            { title: 'Successful Deliveries', value: '50,000+' }
          ].map((stat) => (
            <div key={stat.title} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-600">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;