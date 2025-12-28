import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ValueProp } from '../types';

const features: ValueProp[] = [
  {
    title: "Dignity & Respect",
    description: "Every process is handled with the highest level of respect, honoring the deceased and their families.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: "Global Compliance",
    description: "We navigate complex international and regional laws to ensure full legal compliance in every transport.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: "Sensitivity",
    description: "Compassionate client handling during difficult moments, supporting families through the logistical process.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Efficient Timing",
    description: "Strong partner coordination with airlines and funeral homes ensures fast turnaround times.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-brand-black relative overflow-hidden scroll-mt-24">
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=60&w=1280&auto=format&fit=crop" 
          alt="Abstract dark background" 
          className="w-full h-full object-cover grayscale opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="mb-20 text-center">
            <h2 className="text-xs font-bold text-brand-accent tracking-[0.4em] uppercase mb-4">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Our Core Values</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 border border-brand-accent/20 rounded-full group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500">
                  <div className="text-brand-accent group-hover:text-brand-black transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-serif">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;