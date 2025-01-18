import React from 'react';
import { assets } from '../assets/assets';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="lato relative h-screen">
      <div className="absolute inset-0">
        <img 
          src={assets.hero_image} 
          alt="Coffee pouring" 
          className="w-full h-full object-cover brightness-[0.35] transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center text-white px-8">
        <p className="text-xl mb-2 animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          Welcome to our coffee house...
        </p>
        <h1 className="text-6xl font-bold mb-8 leading-tight animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          We serve the richest coffee<br />
          <span className="text-[#E6B17E]">in the city!</span>
        </h1>
        <div className="flex gap-6 items-center animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
          <button className="group bg-white hover:bg-[#E6B17E] text-black px-8 py-3 rounded-full w-fit font-semibold transition-all duration-300 flex items-center gap-2">
            Order Now
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;