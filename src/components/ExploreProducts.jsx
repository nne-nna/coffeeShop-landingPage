import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight } from 'lucide-react';

const ExploreProducts = () => {
    return (
        <div className="relative bg-[#2C1810] py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Background coffee beans - Hidden on mobile for better performance */}
            <img 
                src={assets.productPage}
                alt="Coffee beans"
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-20 transform -translate-x-1/4"
            />
            <img 
                src={assets.productPage}
                alt="Coffee beans"
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-20 transform translate-x-1/4"
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                            Discover Our Premium Coffee Bean Selection
                        </h2>
                        <p className="text-sm sm:text-base text-white/80 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                            Experience the finest coffee beans sourced from legendary coffee-growing regions. 
                            Each bean is carefully selected and roasted to perfection.
                        </p>
                        <button className="group bg-[#E6B17E] text-white px-6 sm:px-8 py-3 rounded-full 
                                         flex items-center gap-2 hover:bg-white hover:text-[#2C1810] 
                                         transition-all duration-300 mx-auto md:mx-0">
                            <span>Explore Products</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] via-transparent to-transparent z-10 
                                      md:opacity-100 opacity-50" />
                        <img 
                            src={assets.productPage}
                            alt="Premium coffee beans"
                            className="w-full rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 
                                     transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreProducts;