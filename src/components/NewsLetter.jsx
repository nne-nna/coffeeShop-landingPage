import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
    return (
        <div className="relative bg-[#2C1810] py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('path-to-coffee-pattern.jpg')] opacity-5" />
            
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Join Our Coffee Club</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter and get 15% off your first order, plus exclusive access to new products and special offers.
                    </p>
                    
                    <form className="flex items-center justify-center gap-4 max-w-xl mx-auto">
                        <div className="relative flex-grow">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-6 py-3 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[#E6B17E] transition-all"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="group bg-[#E6B17E] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#2C1810] transition-all duration-300"
                        >
                            Subscribe
                            <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;