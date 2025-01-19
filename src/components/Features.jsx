import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        { 
          image: assets.hot_coffee, 
          label: "Hot Coffee",
          description: "Freshly brewed perfection" 
        },
        { 
          image: assets.cold_coffee, 
          label: "Cold Coffee",
          description: "Refreshingly smooth" 
        },
        { 
          image: assets.take_away, 
          label: "Take Away",
          description: "Coffee on the go" 
        },
        { 
          image: assets.coffee_bean, 
          label: "Coffee Beans",
          description: "Premium selection" 
        },
    ];

    return (
        <div className="bg-gradient-to-b from-[#2C1810] to-[#422419] text-white">
            <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {features.map((feature, index) => ( 
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center p-6 sm:p-8 rounded-xl sm:rounded-2xl 
                                     bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 
                                     cursor-pointer"
                        >
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#E6B17E] to-[#967259] 
                                              rounded-full opacity-75 group-hover:opacity-100 blur transition-all 
                                              duration-300" />
                                <div className="relative p-4 sm:p-6 bg-[#2C1810] rounded-full">
                                    <img 
                                        src={feature.image} 
                                        alt={feature.label}
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain 
                                                 transition-transform duration-300 group-hover:scale-110" 
                                    />
                                </div>
                            </div>
                            <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold tracking-wide text-center">
                                {feature.label}
                            </h3>
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/60 text-center">
                                {feature.description}
                            </p>
                            <div className="mt-3 sm:mt-4 h-0.5 w-8 sm:w-12 bg-gradient-to-r from-transparent 
                                          via-[#E6B17E] to-transparent opacity-0 group-hover:opacity-100 
                                          transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;