import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: 'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMkr6lGpdDBxf5r68YGK5XKr6m5rWLXi_OSXgGCiZZyT5MXxDS-TgCyIfXtQJA-1Y9SDoKcXK8S7ppg-KluE0QxD_aUpvWPc1SMeuxe53fuXAWgJ1WTGfR8bSySpBWxD5hu22jLWTFTiv5hbl-qEzTSpLWtZcqEh5E1QtNPH7vYESz0AITaECYJ2zj6C4/s1024/Hero%20Section.png")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <AnimatedSection>
          <span className="inline-block text-brand-accent font-bold tracking-[0.3em] uppercase text-xs mb-4">Dignity • Professionalism • Compassion</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            BIG 5 MANZINI
          </h1>
          <h2 className="text-xl md:text-3xl text-brand-accent/90 font-light tracking-wide mb-8 italic">
            Global Repatriation & Cross-Border Logistics
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Dignified, professional, and compassionate transportation of deceased persons across borders. We honor cultural traditions with seamless global logistics.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            onClick={(e) => handleScroll(e, '#services')}
            className="inline-block px-10 py-4 bg-brand-accent text-brand-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 transform hover:scale-105 rounded-sm shadow-xl"
          >
            Our Core Services
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-block px-10 py-4 border border-white/30 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
          >
            Emergency Contact
          </a>
        </AnimatedSection>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-brand-accent">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;