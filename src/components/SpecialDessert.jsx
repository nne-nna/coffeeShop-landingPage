import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const SpecialDessert = () => {
    const desserts = [
        { name: "Gulab Jamun", price: "Rs. 199", image: assets.desert1 },
        { name: "Chocolate Tiramisu", price: "Rs. 299", image: assets.desert2 },
        { name: "Churros", price: "Rs. 179", image: assets.desert3 },
        { name: "Australian Lamingtons", price: "Rs. 259", image: assets.desert4 },
        // Additional desserts
        { name: "Black Forest Cake", price: "Rs. 399", image: assets.desert1 },
        { name: "Crème Brûlée", price: "Rs. 279", image: assets.desert2 },
        { name: "Apple Pie", price: "Rs. 229", image: assets.desert3 },
        { name: "Chocolate Mousse", price: "Rs. 199", image: assets.desert4 },
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
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-3xl font-bold text-center mb-2">OUR SPECIAL DESSERTS</h2>
                <p className="text-center text-gray-600 mb-12">Sweet treats to complement your coffee</p>
                
                <div className="relative">
                    <button 
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-[#E6B17E] transition-colors z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    
                    <div className="grid grid-cols-4 gap-8 overflow-hidden">
                        {desserts.slice(startIndex, startIndex + itemsToShow).map((dessert, index) => (
                            <div key={index} className="group relative bg-[#FDF8F3] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img 
                                        src={dessert.image} 
                                        alt={dessert.name}
                                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="font-semibold text-lg">{dessert.name}</h3>
                                    <p className="text-[#E6B17E] font-medium mt-1">{dessert.price}</p>
                                    <button className="mt-4 px-6 py-2 bg-[#2C1810] text-white rounded-full flex items-center justify-center gap-2 w-full transform hover:bg-[#E6B17E] transition-all duration-300">
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

export default SpecialDessert;