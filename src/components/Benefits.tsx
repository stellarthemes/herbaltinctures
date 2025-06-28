import React from 'react';
import { Shield, Zap, Leaf, Heart, Brain, Moon } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Immune Support",
      description: "Strengthen your body's natural defense system with powerful immune-boosting botanicals.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Zap,
      title: "Natural Energy",
      description: "Sustained energy without crashes, using adaptogenic herbs that support your vitality.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Heart,
      title: "Stress Relief",
      description: "Find balance and calm with traditional herbs known for their stress-reducing properties.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Enhance focus and cognitive function with nootropic herbs and brain-supporting compounds.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Moon,
      title: "Better Sleep",
      description: "Achieve restful, rejuvenating sleep with gentle, non-habit forming herbal sleep aids.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Leaf,
      title: "Digestive Health",
      description: "Support healthy digestion and gut wellness with traditional digestive herbs and bitters.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Herbal Tinctures?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tinctures offer superior bioavailability and potency compared to capsules or teas. 
            Experience the concentrated power of nature's pharmacy in every drop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The Science Behind Tinctures
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Superior Absorption</h4>
                    <p className="text-gray-600 text-sm">Liquid form allows for faster and more complete absorption than capsules.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Concentrated Potency</h4>
                    <p className="text-gray-600 text-sm">Alcohol extraction preserves and concentrates active compounds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Long Shelf Life</h4>
                    <p className="text-gray-600 text-sm">Properly stored tinctures maintain potency for years.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4226869/pexels-photo-4226869.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Herbal extraction process"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;