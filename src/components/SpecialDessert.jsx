import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../assets/assets';
import { ChevronLeft, ChevronRight, ShoppingCart, Cake } from 'lucide-react';

const SpecialDessert = () => {
    const desserts = [
        { name: "Gulab Jamun", price: "Rs. 199", image: assets.desert1, description: "Classic Indian sweet soaked in rose syrup" },
        { name: "Chocolate Tiramisu", price: "Rs. 299", image: assets.desert2, description: "Coffee-flavored Italian dessert" },
        { name: "Churros", price: "Rs. 179", image: assets.desert3, description: "Spanish fried dough with cinnamon" },
        { name: "Australian Lamingtons", price: "Rs. 259", image: assets.desert4, description: "Sponge cake with chocolate coating" },
        { name: "Black Forest Cake", price: "Rs. 399", image: assets.desert1, description: "German chocolate cherry cake" },
        { name: "Crème Brûlée", price: "Rs. 279", image: assets.desert2, description: "French custard with caramelized top" },
        { name: "Apple Pie", price: "Rs. 229", image: assets.desert3, description: "Classic American comfort dessert" },
        { name: "Chocolate Mousse", price: "Rs. 199", image: assets.desert4, description: "Light and airy chocolate delight" },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4;

    const nextSlide = () => {
        setStartIndex((prev) => 
            prev + itemsToShow >= desserts.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) => 
            prev === 0 ? desserts.length - itemsToShow : prev - 1
        );
    };

    return (
        <div className="bg-white py-24 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: -360,
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 -right-64 w-96 h-96 bg-[#E6B17E]/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: 360,
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-0 -left-64 w-96 h-96 bg-[#967259]/5 rounded-full blur-3xl"
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
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Cake className="w-8 h-8 text-[#E6B17E]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2C1810]">
                            OUR SPECIAL DESSERTS
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Indulge in our exquisite selection of desserts, perfectly paired with your favorite coffee
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
                    
                    {/* Dessert Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                            {desserts.slice(startIndex, startIndex + itemsToShow).map((dessert, index) => (
                                <motion.div
                                    key={`${dessert.name}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <motion.div 
                                        whileHover={{ y: -10 }}
                                        className="group bg-[#FDF8F3] rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative overflow-hidden rounded-xl">
                                            <motion.img 
                                                src={dessert.image} 
                                                alt={dessert.name}
                                                className="w-full h-64 object-cover"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <motion.div 
                                                className="absolute inset-0 bg-black/20"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                            />
                                        </div>
                                        <div className="mt-4 text-center">
                                            <h3 className="font-semibold text-xl text-[#2C1810]">{dessert.name}</h3>
                                            <p className="text-[#E6B17E] font-medium mt-1">{dessert.price}</p>
                                            <p className="mt-2 text-gray-600 text-sm">{dessert.description}</p>
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

export default SpecialDessert;