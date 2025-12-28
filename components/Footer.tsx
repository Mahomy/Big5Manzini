import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-20 border-t border-brand-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <div className="mb-12 md:mb-0 max-w-sm">
            <div className="flex items-center mb-6">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJDe35rYINbK8fVoC7SgdizZGQ-sTpIukRWGfFWDu6nX68wHUd6vUkwUnGrTaNckdef8xvP-PsOLTECseSlcNpBGJVFbvISbc3AH-ob0kxXxe9PEOf8-dT-fmM2bo8qD4Uw4j-6G4Yvo9SezNdXMAA1T_T3HR023HiM33j70TfQ3ELUZEfm79HWavQVdA/s1024/Logo.jpg" 
                alt="Big 5 Manzini" 
                className="h-12 w-12 rounded-full border border-brand-accent/30 mr-4"
              />
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                BIG 5 <span className="text-brand-accent">MANZINI</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              South Africa–based repatriation and deceased transport specialist. Dedicated to providing dignified and compassionate logistics services across Africa and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div>
              <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-6">Navigation</h4>
              <ul className="space-y-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-brand-accent transition-colors">About Us</a></li>
                <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-brand-accent transition-colors">Services</a></li>
                <li><a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="hover:text-brand-accent transition-colors">Gallery</a></li>
                <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-brand-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-6">Legal</h4>
              <ul className="space-y-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer">Compliance</li>
                <li className="hover:text-white cursor-pointer">Privacy</li>
                <li className="hover:text-white cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gray/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Big 5 Manzini. Professional Repatriation Logistics.</p>
          <div className="mt-6 md:mt-0 flex space-x-8">
            <span className="hover:text-brand-accent transition-colors cursor-pointer">Regulatory Compliant</span>
            <span className="hover:text-brand-accent transition-colors cursor-pointer">24/7 Global Response</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;