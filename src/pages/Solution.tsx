
import { Zap, Leaf, Wifi, CheckCircle, Settings, Monitor } from 'lucide-react';

const Solution = () => {
  const benefits = [
    "Reduces energy costs",
    "Enhances energy autonomy", 
    "Turns waste into value",
    "Supports sustainable agriculture",
    "IoT-enabled for smarter, data-driven farming",
    "Suitable for smallholders and cooperatives"
  ];

  const services = [
    {
      icon: Settings,
      title: "On-site Installation",
      description: "Professional installation of biodigesters in various sizes tailored to your needs"
    },
    {
      icon: Monitor,
      title: "Training & Maintenance", 
      description: "Comprehensive user training and ongoing maintenance support"
    },
    {
      icon: Wifi,
      title: "IoT Monitoring",
      description: "Advanced monitoring tools and technical support for optimal performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solution</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Clean Energy from Farm Waste
          </p>
        </div>
      </section>

      {/* Main Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Customized Biodigester Systems
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                AgroBioGaz provides customized biodigester systems that transform agricultural waste into:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Biogas</h3>
                    <p className="text-gray-700">Clean, renewable energy for heating, electricity, and farm operations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Biofertilizer</h3>
                    <p className="text-gray-700">A nutrient-rich byproduct that improves soil health and reduces chemical dependency</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Biodigester technology"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Smart Technology */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
            <div className="text-center mb-8">
              <Wifi className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Technology Inside</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Our biodigesters are equipped with IoT-based sensors that monitor key parameters such as pH, 
                temperature, and digestion efficiency in real time. This ensures optimal bioconversion performance 
                and waste valorization, while allowing users to track and manage their systems via a simple digital interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Our Solution Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technology & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
