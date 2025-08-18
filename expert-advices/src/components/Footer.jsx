import React from 'react'
import './Components.css'
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footerBg relative bg-slate-900 text-white">
            <div className="absolute inset-0 bg-slate-900/70 z-0" />
            {/* Newsletter Section */}
            <div className="px-4 sm:px-8 lg:px-16 py-16 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="py-10">
                        <div className="border border-white/20 backdrop-blur-xs px-6 md:px-10 py-8 flex flex-col lg:flex-row items-center justify-between gap-12">

                            {/* Left - Text */}
                            <div className="flex-1 text-center lg:text-left">
                                <p className="text-sm font-semibold tracking-wider text-white mb-2 uppercase">Subscribe Newsletter</p>
                                <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white">
                                    Subscribe & Get Latest<br />
                                    Update From Us!
                                </h2>
                            </div>

                            {/* Right - Form */}
                            <div className="flex-1 w-full">
                                <p className="text-white/80 mb-4 text-sm lg:text-base text-center lg:text-left">
                                    Subscribe us & receive our offers and updates in your inbox directly.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        placeholder="Email Address.."
                                        className="flex-1 px-6 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="cursor-pointer bg-[#0c0c2e] hover:bg-[#1a1a40] text-white px-6 py-3 rounded-md font-semibold uppercase tracking-widest transition duration-400">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Footer Content */}
                    <div className="grid gap-12 md:grid-cols-2 z-10 lg:grid-cols-3 mt-12">
                        {/* Company Description */}
                        <div>
                            <p className="text-gray-300 z-10 leading-relaxed tracking-wide">
                                Experts Advises is a trusted financial advisory firm dedicated to helping individuals and businesses make informed financial decisions. We offer strategic solutions in planning, investing, protection, and growth.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-6 text-white border-l-2 border-white pl-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {["Home", "About", "Services", "Career", "Contact"].map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="text-gray-300 hover:text-white transition duration-200 flex items-center gap-4 text-base">
                                            <div className="w-3 h-3 rounded-full border-2 border-white flex items-center justify-center">
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                            </div>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* <div>
                            <h3 className="mb-6 text-white border-l-2 border-white pl-4">
                                Social Media
                            </h3>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition duration-200">
                                    <Facebook size={24} className="text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition duration-200">
                                    <Twitter size={24} className="text-white" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-lg flex items-center justify-center transition duration-200">
                                    <Youtube size={24} className="text-white" />
                                </a>
                            </div>
                        </div> */}

                        <div>
                            <h3 className="mb-6 text-white border-l-2 border-white pl-4">
                                Get in Touch
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-start space-x-4">
                                    <MapPin size={20} className="text-white mt-1 flex-shrink-0" />
                                    <p className="leading-relaxed">
                                        Office no. 506, 5th floor, commercial building, Plaza Madyam, Mansarovar, Jaipur 302020
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone size={20} className="text-white flex-shrink-0" />
                                    <p>Mob: 8871528396</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail size={20} className="text-white flex-shrink-0" />
                                    <p>expertsadvisespvtltd@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t relative z-10 border-slate-700 px-4 sm:px-8 lg:px-16 py-4">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                    <div className="flex space-x-3">
                        {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                            <a key={idx} href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition duration-200">
                                <Icon size={18} className="text-white" />
                            </a>
                        ))}
                    </div>
                    <p className="text-center text-sm">
                        © 2025 Experts Advises. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
