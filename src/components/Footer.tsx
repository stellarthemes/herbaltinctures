import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Pure Botanicals</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Dedicated to providing the highest quality herbal tinctures using sustainable, 
              organic practices and traditional extraction methods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">About</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Benefits</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Pure Botanicals. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Made with natural ingredients</span>
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-400">100% Organic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;