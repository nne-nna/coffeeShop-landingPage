import React from 'react';
import { Search, ShoppingCart, ArrowLeft, ArrowRight } from 'lucide-react';

const Home = () => {
  const furnitureItems = [
    { id: 1, name: 'Blue Armchair', price: '$299', image: '/api/placeholder/200/200' },
    { id: 2, name: 'Wooden Sofa', price: '$599', image: '/api/placeholder/200/200' },
    { id: 3, name: 'Lounge Chair', price: '$399', image: '/api/placeholder/200/200' },
    { id: 4, name: 'Shell Chair', price: '$349', image: '/api/placeholder/200/200' }
  ];

  const features = [
    { title: 'Free Shopping', description: 'We combine interior and exterior design service' },
    { title: 'Save Money', description: 'We combine interior and exterior design service' },
    { title: 'Contact With Us', description: 'We combine interior and exterior design service' }
  ];

  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      {/* Navigation */}
      <nav className="px-8 py-4 flex items-center justify-between bg-white/50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-gray-800">style.art</h1>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Reviews</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-700" />
          <ShoppingCart className="w-5 h-5 text-gray-700" />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-8 py-16 relative">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Modern Furniture</h2>
          <p className="text-gray-600 mb-8">
            We combine interior and exterior design service and often provide them as a single solution.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full">
              Start Now
            </button>
            <button className="px-6 py-2 bg-[#e8d5c4] text-gray-800 rounded-full">
              Read More
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#e8d5c4] rounded-l-full -z-10" />
      </div>

      {/* Features Section */}
      <div className="px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-2">Hot Deals For You</h3>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-gray-800" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full" />
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Product */}
      <div className="px-8 py-16 bg-[#e8d5c4]">
        <h3 className="text-2xl font-semibold mb-8">This Week Featured Product</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
              50% OFF
            </span>
            <h4 className="text-xl font-semibold mb-4">Luxury Armchair</h4>
            <p className="text-gray-600 mb-4">
              Being able to sit back and relax in your favourite armchair is truly one of the greatest feelings in life...
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full">
              Add to Cart
            </button>
          </div>
          <div className="relative">
            <img src="/api/placeholder/400/400" alt="Featured armchair" className="rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-8 py-16">
        <h3 className="text-2xl font-semibold mb-8">A Huge Collection Of Furniture</h3>
        <div className="flex space-x-4 mb-8">
          <button className="px-4 py-1 bg-[#e8d5c4] text-gray-800 rounded-full">All Items</button>
          <button className="px-4 py-1 text-gray-600 rounded-full">Chairs</button>
          <button className="px-4 py-1 text-gray-600 rounded-full">Sofas</button>
          <button className="px-4 py-1 text-gray-600 rounded-full">Tables</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {furnitureItems.map((item) => (
            <div key={item.id} className="bg-[#e8d5c4] p-4 rounded-2xl">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h4 className="font-semibold mb-2">{item.name}</h4>
              <p className="text-blue-600 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 py-16 bg-[#e8d5c4]">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold mb-4">Other Info</h5>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Media</h5>
            <ul className="space-y-2">
              <li>Image Gallery</li>
              <li>Video Gallery</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Be social</h5>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;