
import { ArrowRight, Leaf, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                AgroBioGaz
              </h1>
              <h2 className="text-xl md:text-2xl text-green-600 font-semibold">
                From Farm to Energy: A Virtuous Cycle
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer anaerobic biodigester systems tailored to agricultural needs. 
                By converting organic farm waste into energy and fertilizer, we empower 
                farmers and cooperatives to reduce costs, boost productivity, and protect the environment.
              </p>
            </div>

            {/* Value Props */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Sustainable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Affordable</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">Circular</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/solution"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 group"
              >
                Explore Our Solution
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/team"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="Sustainable farm landscape"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
              <Leaf className="w-12 h-12 text-green-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
              <Zap className="w-10 h-10 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
