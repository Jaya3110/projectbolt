import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Truck, MapPin } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fast Booking Process',
    description: 'Book your truck in minutes with our streamlined process'
  },
  {
    icon: Truck,
    title: 'Reliable Fleet Options',
    description: 'Choose from our wide range of well-maintained vehicles'
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Track your shipment status with live updates'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">Experience the best in logistics solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;