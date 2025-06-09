
import { Leaf, DollarSign, Users, TrendingUp } from 'lucide-react';

const Impact = () => {
  const environmentalBenefits = [
    "Reduces methane emissions from waste",
    "Promotes organic farming practices",
    "Decreases dependency on chemical fertilizers",
    "Supports biodiversity conservation"
  ];

  const economicBenefits = [
    "Saves energy costs for farmers",
    "Creates rural green jobs",
    "Generates additional income streams",
    "Improves farm profitability"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Energy for Regeneration
          </p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Agriculture Through Innovation
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At AgroBioGaz, we believe that sustainable agriculture is the foundation of a healthier planet 
                and more prosperous communities. Our biogas solutions create a positive ripple effect that 
                extends far beyond individual farms.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Renewable Energy</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">Local</div>
                  <div className="text-sm text-gray-600">Community Focus</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="Environmental impact"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Environmental Benefits</h2>
              </div>
              <div className="space-y-4">
                {environmentalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Economic Impact</h2>
              </div>
              <div className="space-y-4">
                {economicBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Creating Lasting Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Sustainable Farming</h3>
              <p className="text-gray-700 text-center">
                Empowering farmers to adopt regenerative practices that heal the soil and increase biodiversity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Energy Independence</h3>
              <p className="text-gray-700 text-center">
                Helping rural communities achieve energy autonomy through locally produced renewable energy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Community Growth</h3>
              <p className="text-gray-700 text-center">
                Building stronger rural economies through innovation, education, and collaborative partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
