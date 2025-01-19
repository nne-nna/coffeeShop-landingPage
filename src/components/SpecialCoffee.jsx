import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const SpecialCoffee = () => {
    const coffees = [
        { name: "Latte Coffee", price: "Rs. 199", image: assets.special1 },
        { name: "Original Coffee", price: "Rs. 159", image: assets.special2 },
        { name: "Iced Coffee", price: "Rs. 149", image: assets.special3 },
        { name: "Filter Coffee", price: "Rs. 99", image: assets.special4 },

        { name: "Cappuccino", price: "Rs. 179", image: assets.special1 },
        { name: "Espresso", price: "Rs. 129", image: assets.special2 },
        { name: "Mocha", price: "Rs. 189", image: assets.special3 },
        { name: "Americano", price: "Rs. 139", image: assets.special4 },
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
        <div className="bg-[#FDF8F3] py-16">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-center mb-2">OUR SPECIAL COFFEE</h2>
                <p className="text-center text-gray-600 mb-12">Discover our handcrafted coffee selection</p>
                
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#E6B17E] transition-colors z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    
                    <div className="grid grid-cols-4 gap-8 overflow-hidden">
                        {coffees.slice(startIndex, startIndex + itemsToShow).map((coffee, index) => (
                            <div key={index} className="group relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img 
                                        src={coffee.image} 
                                        alt={coffee.name}
                                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="font-semibold text-lg">{coffee.name}</h3>
                                    <p className="text-[#E6B17E] font-medium mt-1">{coffee.price}</p>
                                    <button className="mt-4 px-6 py-2 bg-[#2C1810] text-white rounded-full flex items-center justify-center gap-2 w-full transform hover:bg-[#E6B17E] transition-all duration-300 group">
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>Order Now</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#E6B17E] transition-colors z-10"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialCoffee;