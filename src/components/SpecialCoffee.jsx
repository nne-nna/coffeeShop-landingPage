import React, { useState, useEffect } from 'react';
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
    const [currentItems, setCurrentItems] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCurrentItems(1);
            } else if (window.innerWidth < 1024) {
                setCurrentItems(2);
            } else {
                setCurrentItems(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setStartIndex((prev) => 
            prev + currentItems >= coffees.length ? 0 : prev + currentItems
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) => 
            prev === 0 ? Math.max(0, coffees.length - currentItems) : Math.max(0, prev - currentItems)
        );
    };

    return (
        <div className="bg-[#FDF8F3] py-12 md:py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
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
                    className="absolute top-0 -right-32 md:-right-64 w-48 md:w-96 h-48 md:h-96 bg-[#E6B17E]/10 rounded-full blur-3xl"
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
                    className="absolute bottom-0 -left-32 md:-left-64 w-48 md:w-96 h-48 md:h-96 bg-[#967259]/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1810] mb-3 md:mb-4">
                        OUR SPECIAL COFFEE
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                        Discover our handcrafted selection of premium coffees, each prepared with passion and expertise
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative px-4 md:px-12">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white 
                                 shadow-lg rounded-full flex items-center justify-center hover:bg-[#E6B17E] 
                                 transition-colors group focus:outline-none"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white" />
                    </button>

                    {/* Cards Container */}
                    <div className="overflow-hidden">
                        <div 
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                            style={{
                                transform: `translateX(-${(startIndex * 100) / currentItems}%)`,
                                transition: 'transform 0.5s ease-in-out',
                                gridTemplateColumns: `repeat(${coffees.length}, minmax(0, 1fr))`,
                                width: `${(coffees.length * 100) / currentItems}%`
                            }}
                        >
                            {coffees.map((coffee, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <motion.div 
                                        whileHover={{ y: -10 }}
                                        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative overflow-hidden rounded-lg aspect-square">
                                            <motion.img 
                                                src={coffee.image} 
                                                alt={coffee.name}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                        <div className="mt-4 text-center">
                                            <h3 className="font-semibold text-lg md:text-xl text-[#2C1810]">{coffee.name}</h3>
                                            <p className="text-[#E6B17E] font-medium mt-1">{coffee.price}</p>
                                            <p className="mt-2 text-gray-600 text-sm line-clamp-2">{coffee.description}</p>
                                            <motion.button 
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="mt-4 px-6 py-2 bg-[#2C1810] text-white rounded-full flex items-center 
                                                         justify-center gap-2 w-full hover:bg-[#E6B17E] transition-all duration-300"
                                            >
                                                <ShoppingCart className="w-4 h-4" />
                                                <span>Order Now</span>
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white 
                                 shadow-lg rounded-full flex items-center justify-center hover:bg-[#E6B17E] 
                                 transition-colors group focus:outline-none"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialCoffee;