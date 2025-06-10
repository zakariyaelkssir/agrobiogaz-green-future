
import { Target, Users, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AgroBioGaz</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            A Moroccan startup dedicated to promoting green energy in agriculture through innovative biogas technology
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  AgroBioGaz is a Moroccan startup dedicated to promoting green energy in agriculture 
                  through innovative biogas technology. We help farmers and cooperatives turn 
                  agricultural waste into clean energy and organic fertilizer.
                </p>
                <p>
                  Founded by three young professionals with complementary expertise in agriculture, 
                  biology, and economics, AgroBioGaz bridges science and practice to deliver real, 
                  scalable impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/fe72c9d2-2eae-4291-92f0-70e4a3b3f162.png"
                alt="Agricultural collage showing farming equipment, tomatoes, corn, and agricultural fields"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To accelerate the transition toward sustainable and autonomous agriculture in Africa 
              through biogas-based solutions.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modular Biodigesters</h3>
              <p className="text-gray-700">
                Custom biodigester systems designed for farms and cooperatives of all sizes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Maintenance</h3>
              <p className="text-gray-700">
                Complete technical installation, comprehensive training, and ongoing maintenance support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnostics</h3>
              <p className="text-gray-700">
                Environmental and economic diagnostics to optimize your agricultural operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
