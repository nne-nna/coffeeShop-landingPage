import React from 'react'

const ExploreProducts = () => {
  return (
    <div className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <img 
          src="/api/placeholder/400/400" 
          alt="Coffee beans in hands"
          className="w-1/3 rounded-lg"
        />
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Check out our best coffee beans</h2>
          <button className="bg-brown-600 text-white px-6 py-2 rounded-full">
            Explore our products
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExploreProducts