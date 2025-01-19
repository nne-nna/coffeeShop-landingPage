import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Adams",
            role: "Coffee Enthusiast",
            avatar: assets.testimonial1,
            rating: 5,
            text: "I've been ordering beans from you for the last year. After trying the signature dark Brazilian blend, I can honestly say it's the best coffee I've ever had."
        },
        {
            name: "Sarah Williams",
            role: "Food Blogger",
            avatar: assets.testimonial2,
            rating: 5,
            text: "The attention to detail in their coffee preparation is unmatched. Each cup is perfectly crafted, and their service is exceptional."
        },
        {
            name: "Michael Chen",
            role: "Regular Customer",
            avatar: assets.testimonial3,
            rating: 5,
            text: "Not only is their coffee amazing, but the atmosphere and staff make every visit special. It's become my favorite spot in the city."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div className="bg-[#FDF8F3] py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">OUR HAPPY CUSTOMERS</h2>
                <p className="text-center text-gray-600 mb-8 sm:mb-12">What people say about us</p>

                <div className="relative">
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 
                                 bg-white shadow-lg rounded-full flex items-center justify-center 
                                 hover:bg-[#E6B17E] transition-colors z-10"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode="wait">
                            {[currentIndex].map((index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="col-span-1 md:col-span-2 lg:col-span-3 md:px-12 lg:px-24"
                                >
                                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg relative group hover:shadow-xl transition-all duration-300">
                                        <Quote className="absolute top-6 right-6 w-8 sm:w-10 h-8 sm:h-10 text-[#E6B17E]/20" />
                                        <div className="flex items-center mb-6">
                                            <img 
                                                src={testimonials[index].avatar}
                                                alt={testimonials[index].name}
                                                className="w-12 sm:w-14 h-12 sm:h-14 rounded-full ring-4 ring-[#E6B17E]/20"
                                            />
                                            <div className="ml-4">
                                                <h3 className="font-semibold text-base sm:text-lg">{testimonials[index].name}</h3>
                                                <p className="text-gray-500 text-xs sm:text-sm">{testimonials[index].role}</p>
                                            </div>
                                        </div>
                                        <div className="flex text-[#E6B17E] mb-4">
                                            {[...Array(testimonials[index].rating)].map((_, i) => (
                                                <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                            {testimonials[index].text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 
                                 bg-white shadow-lg rounded-full flex items-center justify-center 
                                 hover:bg-[#E6B17E] transition-colors z-10"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </button>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 
                                     ${idx === currentIndex ? 'bg-[#E6B17E] w-4' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;