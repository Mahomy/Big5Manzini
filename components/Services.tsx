import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "International Repatriation",
    description: "Regional (SADC) and global repatriation services. We coordinate with airlines and cargo services to ensure dignified transport across continents.",
    features: ["Airline & Cargo Coordination", "Embassy & Consulate Liaison", "Global Compliance Support"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=75&w=600&auto=format&fit=crop", // Stock: Plane/Global
    isPopular: true
  },
  {
    title: "Cross-Border Logistics",
    description: "Direct road transportation across South African borders. Professional collection from hospitals or mortuaries and delivery to final destinations.",
    features: ["Hospital & Mortuary Collection", "SADC Regional Transit", "Dedicated Fleet Handling"],
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt7zz0ioLC8oLHqn08yK2fbt6WturHh6c9QoMDNg5QEHoN2QTVO1vPc7FGLQMRSU93oP_EiymzwG6FyLW1RBDYWrTm-ZnPw7xvl7xSGzU_e2V8r1msbNwCb_Wmxo2IdwM34H2iCNvJJkS7rKu15AlqpOcevyt-whtNFp9qZFM4gAK4tMfrc_kz020DDuw/s275/image3.jfif",
    isPopular: false
  },
  {
    title: "Compliance & Care",
    description: "Handling of all critical documentation, including death certificates and permit guidance. Airport clearance and zinc lining arrangements.",
    features: ["Documentation Assistance", "Coffin & Zinc Lining", "Airport Handling & Clearance"],
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieWj9wwKAF0q3Zwc3h_N4miVO3dEP6pLJoM0mUT0kcVRHzakGN7g1ltYRDqdmzUDkC_iwkzwHjcv4oaZNfOXxtGNxYtnXc737nZuzTaNGb2iRwr9YjXUVsgm41Z_d68fpzOiL-11m4r0uB8pIw-tdKxn7oXiv94018SCxY3qYoyQuOSK-Af2KHCnioASs/s275/Images.jfif",
    isPopular: false
  }
];

const Services: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-40 bg-brand-dark scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-xs font-bold text-brand-accent tracking-[0.4em] uppercase mb-4">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Our Specialized Services</h3>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 150} className="h-full">
              <div 
                className={`relative h-full flex flex-col transition-all duration-500 hover:-translate-y-3 border-b-4 overflow-hidden group shadow-2xl ${
                  service.isPopular 
                    ? 'bg-brand-black border-brand-accent' 
                    : 'bg-[#151515] border-transparent hover:border-brand-accent'
                }`}
              >
                {/* Image Area */}
                <div className="h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                        loading="lazy"
                    />
                </div>

                {service.isPopular && (
                  <div className="absolute top-4 right-4 z-20 bg-brand-accent text-brand-black text-[10px] font-black px-4 py-1 uppercase tracking-widest shadow-lg">
                    Key Specialty
                  </div>
                )}
                
                <div className="p-8 md:p-12 flex flex-col flex-grow">
                  <h4 className="text-2xl font-serif text-white mb-6 group-hover:text-brand-accent transition-colors">{service.title}</h4>
                  <p className="text-gray-400 mb-10 leading-relaxed text-sm font-light">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-12 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-xs tracking-wide uppercase">
                        <svg className="w-4 h-4 mr-3 text-brand-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#contact" 
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="block text-center py-4 border border-brand-accent/30 text-white hover:bg-brand-accent hover:text-brand-black hover:border-brand-accent transition-all duration-500 text-xs font-bold uppercase tracking-widest"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;