import React from 'react';
import { Star, Droplets, Clock, Leaf } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  benefits: string[];
  rating: number;
  volume: string;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Echinacea Immune Support",
      description: "Boost your natural immunity with our premium echinacea tincture, harvested at peak potency.",
      price: "$24.99",
      image: "https://images.pexels.com/photos/6334/purple-flower-plant-bloom.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      benefits: ["Immune Support", "Antioxidant Rich", "Natural Energy"],
      rating: 4.9,
      volume: "2 fl oz"
    },
    {
      id: 2,
      name: "Ashwagandha Stress Relief",
      description: "Ancient adaptogen to help manage stress and promote overall goodness and vitality.",
      price: "$29.99",
      image: "https://images.pexels.com/photos/4202926/pexels-photo-4202926.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      benefits: ["Stress Relief", "Better Sleep", "Mental Clarity"],
      rating: 4.8,
      volume: "2 fl oz"
    },
    {
      id: 3,
      name: "Turmeric Anti-Inflammatory",
      description: "Powerful anti-inflammatory support with organic turmeric and black pepper for enhanced absorption.",
      price: "$22.99",
      image: "https://images.pexels.com/photos/4198887/pexels-photo-4198887.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      benefits: ["Anti-Inflammatory", "Joint Support", "Digestive Health"],
      rating: 4.7,
      volume: "2 fl oz"
    },
    {
      id: 4,
      name: "Elderberry Goodness",
      description: "Traditional elderberry extract for seasonal goodness and immune system support.",
      price: "$26.99",
      image: "https://images.pexels.com/photos/5094943/pexels-photo-5094943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      benefits: ["Seasonal Support", "Antioxidants", "Immune Health"],
      rating: 4.9,
      volume: "2 fl oz"
    },
    {
      id: 5,
      name: "Milk Thistle Liver Support",
      description: "Support your liver's natural detoxification processes with our potent milk thistle extract.",
      price: "$27.99",
      image: "https://images.pexels.com/photos/4226864/pexels-photo-4226864.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      benefits: ["Liver Support", "Detoxification", "Cellular Health"],
      rating: 4.8,
      volume: "2 fl oz"
    },
    {
      id: 6,
      name: "Valerian Sleep Support",
      description: "Gentle, natural sleep aid to help you achieve restful, rejuvenating sleep without dependency.",
      price: "$23.99",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      benefits: ["Better Sleep", "Relaxation", "Natural Calm"],
      rating: 4.6,
      volume: "2 fl oz"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Tinctures
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each tincture is carefully crafted using traditional extraction methods and the highest quality organic herbs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Droplets className="h-4 w-4" />
                      <span>{product.volume}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>30 days</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <Leaf className="h-4 w-4" />
                    <span className="text-xs font-medium">Organic</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;