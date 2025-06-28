import React from 'react';
import { Heart, Users, Award, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4202926/pexels-photo-4202926.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Herbal preparation"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 rounded-2xl p-6 shadow-xl">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Crafted with Love,
                <span className="block text-green-600">Rooted in Tradition</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, we've been dedicated to creating the finest herbal tinctures using time-honored 
              extraction methods and sustainably sourced organic botanicals. Our passion for plant medicine drives 
              us to deliver products that truly make a difference in people's lives.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every tincture is hand-crafted in small batches, ensuring maximum potency and purity. We work directly 
              with organic farmers and wildcrafters to source the highest quality herbs, supporting sustainable 
              practices and fair trade.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Passion Driven</h3>
                  <p className="text-sm text-gray-600">Every product made with genuine care and expertise</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sustainable</h3>
                  <p className="text-sm text-gray-600">Ethically sourced from organic farms</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quality First</h3>
                  <p className="text-sm text-gray-600">Rigorous testing and quality standards</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Community</h3>
                  <p className="text-sm text-gray-600">Supporting wellness in our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;