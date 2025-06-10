
import { ExternalLink, MapPin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Ittou Aouragh",
      role: "Chief Executive Officer (CEO)",
      education: "Bachelor's Degree in Economics | Specialized Agricultural Technician",
      description: "Ittou leads AgroBioGaz with a strong background in both economics and agriculture, driving the company's vision and growth.",
      location: "Agadir, Morocco",
      gender: "Female",
      nationality: "Moroccan",
      email: "ittouaouragh20@gmail.com",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Saad-eddine El Assri",
      role: "Chief Technology Officer (CTO)",
      education: "Specialized Agricultural Technician",
      description: "Saad-eddine manages the technical aspects and implementation of biodigesters, focusing on solutions adapted to Moroccan agricultural contexts.",
      location: "Azrou-Ait Melloul, Morocco",
      gender: "Male",
      nationality: "Moroccan",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Fatima Elkssir",
      role: "Chief Marketing Officer (CMO)",
      education: "Cell and Molecular Biologist | Biomedical Engineer",
      description: "Fatima brings scientific expertise and leads marketing, communication, and stakeholder engagement efforts.",
      location: "Agadir, Morocco",
      gender: "Female",
      nationality: "Moroccan",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            A Multidisciplinary Team with Strong Agricultural Expertise
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-blue-600 mb-3">{member.education}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{member.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{member.gender} | {member.nationality}</span>
                    </div>
                    {member.email && (
                      <div className="pt-2">
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      LinkedIn Profile
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company LinkedIn */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Our Company</h2>
          <a 
            href="https://www.linkedin.com/company/agrobiogaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            AgroBioGaz on LinkedIn
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
