
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">AgroBioGaz</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              From Farm to Energy: A Virtuous Cycle. Empowering farmers through sustainable biogas solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">agrobiogazmaroc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">+212 777 652 947</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Agadir, Morocco</span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Values</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">🌿</span>
                <span className="text-gray-300">Sustainable</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">🔋</span>
                <span className="text-gray-300">Affordable</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">♻️</span>
                <span className="text-gray-300">Circular</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AgroBioGaz. All rights reserved. | Accelerating sustainable agriculture in Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
