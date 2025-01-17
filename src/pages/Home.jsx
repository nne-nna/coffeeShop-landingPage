import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import SpecialCoffee from '../components/SpecialCoffee'
import SpecialDessert from '../components/SpecialDessert'
import ExploreProducts from '../components/ExploreProducts'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
        <Navbar />
        <Hero />
        <Features />
        <SpecialCoffee />
        <SpecialDessert />
        <ExploreProducts />
        <Testimonials />
        <div className="bg-[#f5f5f5] py-16">
            <div className="max-w-7xl mx-auto px-8 text-center">
                <h2 className="text-2xl font-semibold mb-6">Join in and get 15% off!</h2>
                <div className="flex items-center justify-center space-x-4">
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="px-4 py-2 rounded-full border"
                    />
                    <button className="bg-brown-600 text-white px-6 py-2 rounded-full">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home