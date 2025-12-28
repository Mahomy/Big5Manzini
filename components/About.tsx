import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-40 bg-brand-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <AnimatedSection>
              <h2 className="text-xs font-bold text-brand-accent tracking-[0.4em] uppercase mb-4">About the Company</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Dignified Logistics for Difficult Moments.</h3>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Big 5 Manzini is a South Africa–based repatriation and deceased transport service company dedicated to providing <span className="text-white italic">dignified, professional, and compassionate</span> transportation of deceased persons across borders.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="border-l-2 border-brand-accent pl-6">
                  <h4 className="text-brand-accent font-bold uppercase text-xs tracking-widest mb-2">Our Mission</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To provide respectful, reliable, and seamless services that honor cultural traditions and meet international logistical standards.
                  </p>
                </div>
                <div className="border-l-2 border-brand-accent pl-6">
                  <h4 className="text-brand-accent font-bold uppercase text-xs tracking-widest mb-2">Our Vision</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    To become a trusted repatriation partner globally by delivering ethical, compliant, and efficient funeral logistics.
                  </p>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed">
                We specialize in coordinating international and regional transport solutions while supporting families with sensitivity and respect. From coordination with airlines to liaison with embassies, we handle every detail.
              </p>

              <div className="mt-8 flex items-center space-x-6 p-6 bg-brand-dark/50 border border-brand-gray/10 rounded-sm">
                <div className="h-16 w-16 bg-brand-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                   <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                </div>
                <div>
                  <h5 className="text-white font-serif text-xl">P Manzini</h5>
                  <p className="text-brand-accent text-sm font-bold tracking-widest uppercase">Chief Executive Officer</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <AnimatedSection delay={300}>
              <div className="relative rounded-sm overflow-hidden shadow-2xl group border border-brand-accent/20">
                <div className="absolute inset-0 bg-brand-accent/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5DsMatOmKd9G7y2wO8KODNVbPaySNpbT9DVWJGN29p0-UPFs52pcIrbP9sMJIeF_LeeAJ-1WDzZDPv6gK2yLJAP4nC8NwbTy41PQ_QJdD0VvCab_-XQeVBrXLzo7BDcZwrD8qGobEqJxR9RwH9j67gntB8nNe-LoaBgnyTmUvV7_17R5IBmZFtrklj8U/s275/Image1.jfif" 
                  alt="Dignified Service" 
                  className="w-full h-[500px] md:h-[650px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                />
                
                {/* Floating Stats */}
                <div className="absolute bottom-8 -left-8 bg-brand-accent p-8 shadow-2xl hidden md:block border border-white/10">
                   <p className="text-brand-black text-4xl font-serif font-bold">100%</p>
                   <p className="text-brand-black/70 text-xs font-bold uppercase tracking-widest">Compliance Guaranteed</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-brand-accent/30 z-0"></div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;