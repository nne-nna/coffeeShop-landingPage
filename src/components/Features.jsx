import React from 'react'

const Features = () => {
    const features = [
        { icon: "☕", label: "Hot Coffee" },
        { icon: "🥤", label: "Cold Coffee" },
        { icon: "🥡", label: "Take Away" },
        { icon: "🫘", label: "Coffee Beans" },
      ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
        <div className="grid grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                    <span className="text-4xl mb-4">{feature.icon}</span>
                    <span className="text-gray-700">{feature.label}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features