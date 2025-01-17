import React from 'react'

const SpecialCoffee = () => {
    const coffees = [
        { name: "Latte Coffee", price: "Rs. 199", image: "/api/placeholder/300/300" },
        { name: "Original Coffee", price: "Rs. 159", image: "/api/placeholder/300/300" },
        { name: "Iced Coffee", price: "Rs. 149", image: "/api/placeholder/300/300" },
        { name: "Filter Coffee", price: "Rs. 99", image: "/api/placeholder/300/300" },
      ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
        <h2 className="text-2xl font-semibold text-center mb-8">OUR SPECIAL COFFEE</h2>
        <div className="grid grid-cols-4 gap-8">
            {coffees.map((coffee, index) => (
                <div key={index} className="group relative">
                    <img 
                        src={coffee.image} 
                        alt={coffee.name}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="mt-4">
                        <h3 className="font-medium">{coffee.name}</h3>
                        <p className="text-gray-600">{coffee.price}</p>
                        <button className="mt-2 px-4 py-1 bg-brown-600 text-white rounded-full">
                        Order Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SpecialCoffee