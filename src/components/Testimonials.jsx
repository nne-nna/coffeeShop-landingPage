import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
          name: "John Adams",
          avatar: "/api/placeholder/50/50",
          rating: 5,
          text: "I've been ordering beans from you for the last year. But after trying the signature dark Brazilian blend that fundamentally got me hooked on your shop, I can honestly say it's the best type of coffee."
        },
        // Add more testimonials...
      ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
        <h2 className="text-2xl font-semibold text-center mb-12">OUR HAPPY CUSTOMERS</h2>
        <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                        <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="font-medium">{testimonial.name}</h3>
                            <div className="flex text-yellow-400">
                                {"★".repeat(testimonial.rating)}
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials