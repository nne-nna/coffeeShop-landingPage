import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1A0F0A] text-white/80">
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Coffee</h3>
                        <p className="mb-6">Experience the perfect blend of tradition and innovation in every cup.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-[#E6B17E] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-[#E6B17E] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-[#E6B17E] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-[#E6B17E] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
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
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[#E6B17E]" />
                                <span>123 Coffee Street, City, Country</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#E6B17E]" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#E6B17E]" />
                                <span>info@coffeeshop.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Opening Hours</h4>
                        <ul className="space-y-3">
                            <li>Monday - Friday: 8:00 AM - 9:00 PM</li>
                            <li>Saturday: 9:00 AM - 10:00 PM</li>
                            <li>Sunday: 10:00 AM - 8:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p>&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;