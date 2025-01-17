import React from 'react'

const SpecialDessert = () => {
    const desserts = [
        { name: "Gulab Jamun", price: "Rs. 199", image: "/api/placeholder/300/300" },
        { name: "Chocolate Tiramisu", price: "Rs. 299", image: "/api/placeholder/300/300" },
        { name: "Churros", price: "Rs. 179", image: "/api/placeholder/300/300" },
        { name: "Australian Lamingtons", price: "Rs. 259", image: "/api/placeholder/300/300" },
    ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <h2 className="text-2xl font-semibold text-center mb-8">OUR SPECIAL DESSERT</h2>
      <div className="grid grid-cols-4 gap-8">
        {desserts.map((dessert, index) => (
          <div key={index} className="group relative">
            <img 
              src={dessert.image} 
              alt={dessert.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="font-medium">{dessert.name}</h3>
              <p className="text-gray-600">{dessert.price}</p>
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

export default SpecialDessert