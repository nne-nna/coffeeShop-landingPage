import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1A0F0A] text-white/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Coffee</h3>
                        <p className="mb-6 text-sm sm:text-base">
                            Experience the perfect blend of tradition and innovation in every cup.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="hover:text-[#E6B17E] transition-colors p-2 hover:bg-white/5 rounded-full"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 sm:mb-6">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                            {['Home', 'About Us', 'Menu', 'Products', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-[#E6B17E] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 sm:mb-6">Contact</h4>
                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[#E6B17E] flex-shrink-0" />
                                <span>123 Coffee Street, City, Country</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#E6B17E] flex-shrink-0" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#E6B17E] flex-shrink-0" />
                                <span className="break-all">info@coffeeshop.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 sm:mb-6">Opening Hours</h4>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                            <li>Monday - Friday: 8:00 AM - 9:00 PM</li>
                            <li>Saturday: 9:00 AM - 10:00 PM</li>
                            <li>Sunday: 10:00 AM - 8:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
                    <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;