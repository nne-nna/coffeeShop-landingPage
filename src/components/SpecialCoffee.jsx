import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const SpecialCoffee = () => {
    const coffees = [
        { name: "Latte Coffee", price: "Rs. 199", image: assets.special1, description: "Smooth espresso with steamed milk" },
        { name: "Original Coffee", price: "Rs. 159", image: assets.special2, description: "Classic brew with rich flavor" },
        { name: "Iced Coffee", price: "Rs. 149", image: assets.special3, description: "Chilled perfection for hot days" },
        { name: "Filter Coffee", price: "Rs. 99", image: assets.special4, description: "Traditional drip-brewed delight" },
        { name: "Cappuccino", price: "Rs. 179", image: assets.special1, description: "Perfect balance of espresso and foam" },
        { name: "Espresso", price: "Rs. 129", image: assets.special2, description: "Pure coffee intensity" },
        { name: "Mocha", price: "Rs. 189", image: assets.special3, description: "Coffee with chocolate indulgence" },
        { name: "Americano", price: "Rs. 139", image: assets.special4, description: "Bold and smooth classic" },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4;

    const nextSlide = () => {
        setStartIndex((prev) => 
            prev + itemsToShow >= coffees.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) => 
            prev === 0 ? coffees.length - itemsToShow : prev - 1
        );
    };

    return (
        <div className="bg-[#FDF8F3] py-24 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: 360,
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 -right-64 w-96 h-96 bg-[#E6B17E]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: -360,
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-0 -left-64 w-96 h-96 bg-[#967259]/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
                        OUR SPECIAL COFFEE
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our handcrafted selection of premium coffees, each prepared with passion and expertise
                    </p>
                </motion.div>
                
                <div className="relative">
                    {/* Navigation Buttons */}
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 w-12 h-12 bg-white shadow-lg rounded-full 
                                 flex items-center justify-center hover:bg-[#E6B17E] transition-colors z-10 group"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                    </motion.button>
                    
                    {/* Coffee Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                            {coffees.slice(startIndex, startIndex + itemsToShow).map((coffee, index) => (
                                <motion.div
                                    key={`${coffee.name}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <motion.div 
                                        whileHover={{ y: -10 }}
                                        className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative overflow-hidden rounded-xl">
                                            <motion.img 
                                                src={coffee.image} 
                                                alt={coffee.name}
                                                className="w-full h-64 object-cover"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <div className="mt-4 text-center">
                                            <h3 className="font-semibold text-xl text-[#2C1810]">{coffee.name}</h3>
                                            <p className="text-[#E6B17E] font-medium mt-1">{coffee.price}</p>
                                            <p className="mt-2 text-gray-600 text-sm">{coffee.description}</p>
                                            <motion.button 
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="mt-4 px-6 py-3 bg-[#2C1810] text-white rounded-full flex items-center justify-center gap-2 w-full 
                                                         hover:bg-[#E6B17E] transition-all duration-300 group cursor-pointer"
                                            >
                                                <ShoppingCart className="w-4 h-4" />
                                                <span>Order Now</span>
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 w-12 h-12 bg-white shadow-lg rounded-full 
                                 flex items-center justify-center hover:bg-[#E6B17E] transition-colors z-10 group"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default SpecialCoffee;