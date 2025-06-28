import React from 'react';
import { ArrowRight, Leaf, Award, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4202926/pexels-photo-4202926.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Pure Botanical
            <span className="block text-green-400">Wellness</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Handcrafted herbal tinctures made from the finest organic botanicals. 
            Experience the power of nature's healing wisdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg">
              <span>Shop Tinctures</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-sm font-medium">100% Organic</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-green-400" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-sm font-medium">Lab Tested</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;