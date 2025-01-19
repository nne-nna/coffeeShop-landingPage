import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight } from 'lucide-react';

const ExploreProducts = () => {
    return (
      
        <div className="relative bg-[#2C1810] py-20 overflow-hidden">
            {/* Background coffee beans */}
            <img 
                src={assets.productPage}
                alt="Coffee beans"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-48 opacity-20 transform -translate-x-1/4"
            />
            <img 
                src={assets.productPage}
                alt="Coffee beans"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-48 opacity-20 transform translate-x-1/4"
            />
            
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between">
                    <div className="w-1/2 pr-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Discover Our Premium Coffee Bean Selection
                        </h2>
                        <p className="text-white/80 mb-8 leading-relaxed">
                            Experience the finest coffee beans sourced from legendary coffee-growing regions. 
                            Each bean is carefully selected and roasted to perfection.
                        </p>
                        <button className="group bg-[#E6B17E] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#2C1810] transition-all duration-300">
                            Explore Products
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="relative w-1/2">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] via-transparent to-transparent z-10" />
                        <img 
                            src={assets.productPage}
                            alt="Premium coffee beans"
                            className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreProducts;