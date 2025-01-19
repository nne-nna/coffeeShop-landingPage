import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { ChevronRight, Coffee, Clock, Star } from 'lucide-react';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { icon: Coffee, label: "Premium Coffee", value: "20+ Varieties" },
    { icon: Clock, label: "Years of Service", value: "10+ Years" },
    { icon: Star, label: "Happy Customers", value: "1000+" },
  ];

  return (
    <div className="lato relative min-h-screen">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src={assets.hero_image} 
          alt="Coffee pouring" 
          className="w-full h-full object-cover brightness-[0.35] transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#2C1810]/80"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex flex-col justify-center text-white px-4 sm:px-6 lg:px-8">
        {/* Floating coffee beans decoration - Hidden on mobile */}
        <div className="hidden md:block absolute right-0 top-1/4 w-32 h-32 opacity-20">
          <motion.img
            src={assets.coffee_bean}
            alt="Coffee Bean"
            className="w-full h-full object-contain"
            animate={{ 
              rotate: 360,
              y: [0, -20, 0]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl pt-16 md:pt-0"
        >
          <motion.p 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-2 text-[#E6B17E]"
          >
            Welcome to our coffee house...
          </motion.p>
          
          <motion.h1 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
          >
            We serve the richest coffee
            <span className="block text-[#E6B17E] mt-2">in the city!</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-xl"
          >
            Experience the perfect blend of premium beans and expert craftsmanship in every cup.
          </motion.p>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#E6B17E] hover:bg-[#d4946a] text-[#2C1810] px-6 sm:px-8 py-3 rounded-full w-full sm:w-fit font-semibold transition-all duration-300 flex items-center justify-center sm:justify-start gap-2"
            >
              Order Now
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 w-full sm:w-fit text-center"
            >
              View Menu
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 md:mt-0 md:absolute md:bottom-12 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 md:pb-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6"
                >
                  <div className="p-2 md:p-3 bg-[#E6B17E]/20 rounded-full">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#E6B17E]" />
                  </div>
                  <div>
                    <p className="text-[#E6B17E] font-semibold text-sm md:text-base">{stat.value}</p>
                    <p className="text-xs md:text-sm text-gray-300">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;