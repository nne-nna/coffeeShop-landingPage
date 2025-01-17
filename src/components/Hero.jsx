import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img 
          src="/api/placeholder/1920/600" 
          alt="Coffee pouring" 
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center text-white px-8">
        <p className="text-xl mb-2">Welcome!...</p>
        <h1 className="text-5xl font-bold mb-6">
          We serve the richest coffee<br />
          in the city!
        </h1>
        <button className="bg-brown-600 text-white px-6 py-2 rounded-full w-fit">
          Order Now
        </button>
      </div>
    </div>
  )
}

export default Hero