import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Adams",
            role: "Coffee Enthusiast",
            avatar: "/api/placeholder/50/50",
            rating: 5,
            text: "I've been ordering beans from you for the last year. After trying the signature dark Brazilian blend, I can honestly say it's the best coffee I've ever had."
        },
        {
            name: "Sarah Williams",
            role: "Food Blogger",
            avatar: "/api/placeholder/50/50",
            rating: 5,
            text: "The attention to detail in their coffee preparation is unmatched. Each cup is perfectly crafted, and their service is exceptional."
        },
        {
            name: "Michael Chen",
            role: "Regular Customer",
            avatar: "/api/placeholder/50/50",
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
        <div className="bg-[#FDF8F3] py-20">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-center mb-2">OUR HAPPY CUSTOMERS</h2>
                <p className="text-center text-gray-600 mb-12">What people say about us</p>

                <div className="relative">
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#E6B17E] transition-colors z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="grid grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg relative group hover:shadow-xl transition-all duration-300"
                            >
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E6B17E]/20" />
                                <div className="flex items-center mb-6">
                                    <img 
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full ring-4 ring-[#E6B17E]/20"
                                    />
                                    <div className="ml-4">
                                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex text-[#E6B17E] mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#E6B17E] transition-colors z-10"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;