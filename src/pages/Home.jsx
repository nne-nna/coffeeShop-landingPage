import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import SpecialCoffee from '../components/SpecialCoffee'
import SpecialDessert from '../components/SpecialDessert'
import ExploreProducts from '../components/ExploreProducts'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'

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
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home