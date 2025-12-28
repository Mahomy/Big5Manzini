import React, { FormEvent } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out to Big 5 Manzini. We will respond with the utmost urgency.");
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-[#080808] relative overflow-hidden scroll-mt-24">
       {/* Subtle decorative background */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Form Side */}
          <AnimatedSection>
            <h2 className="text-xs font-bold text-brand-accent tracking-[0.4em] uppercase mb-4">Urgent Enquiry</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">Request Repatriation Assistance</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-3">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-[#121212] border border-brand-gray/20 text-white px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors rounded-none placeholder:text-gray-600"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                   <label htmlFor="phone" className="block text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-3">Phone Number</label>
                   <input 
                    type="tel" 
                    id="phone"
                    required
                    className="w-full bg-[#121212] border border-brand-gray/20 text-white px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors rounded-none placeholder:text-gray-600"
                    placeholder="e.g. 064 910 0074"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="type" className="block text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-3">Service Required</label>
                <select 
                  id="type"
                  className="w-full bg-[#121212] border border-brand-gray/20 text-white px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors rounded-none appearance-none"
                >
                  <option>International Repatriation</option>
                  <option>Cross-Border Road Transport</option>
                  <option>Documentation Assistance</option>
                  <option>Airport Clearance</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-3">Message / Special Instructions</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-[#121212] border border-brand-gray/20 text-white px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors rounded-none placeholder:text-gray-600"
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-brand-accent text-brand-black font-black uppercase tracking-[0.2em] px-12 py-5 hover:bg-white transition-all duration-300 shadow-2xl"
              >
                Submit Request
              </button>
            </form>
          </AnimatedSection>

          {/* Info Side */}
          <AnimatedSection delay={200} className="flex flex-col justify-center">
            <div className="bg-brand-dark/30 border border-brand-accent/10 p-10 md:p-16 relative">
                <div className="absolute top-0 right-0 p-4">
                   <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJDe35rYINbK8fVoC7SgdizZGQ-sTpIukRWGfFWDu6nX68wHUd6vUkwUnGrTaNckdef8xvP-PsOLTECseSlcNpBGJVFbvISbc3AH-ob0kxXxe9PEOf8-dT-fmM2bo8qD4Uw4j-6G4Yvo9SezNdXMAA1T_T3HR023HiM33j70TfQ3ELUZEfm79HWavQVdA/s1024/Logo.jpg" 
                    alt="Logo" 
                    className="w-20 h-20 opacity-20"
                   />
                </div>
                
                <h4 className="text-3xl font-serif text-white mb-12 border-b border-brand-accent/20 pb-6">Contact Details</h4>
                
                <div className="space-y-12">
                  <div className="flex items-start">
                    <div className="mr-6 bg-brand-accent/10 p-3 text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1.01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-brand-accent uppercase font-black tracking-widest mb-1">Direct Hotline</span>
                      <a href="tel:0649100074" className="text-white text-2xl font-serif hover:text-brand-accent transition-colors">064 910 0074</a>
                      <span className="block text-sm text-gray-500 mt-1">CEO: P Manzini</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-6 bg-brand-accent/10 p-3 text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-brand-accent uppercase font-black tracking-widest mb-1">Headquarters</span>
                      <p className="text-white text-xl font-serif">170 Block E<br />Mabopane, 0190</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-6 bg-brand-accent/10 p-3 text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-brand-accent uppercase font-black tracking-widest mb-1">Response Hours</span>
                      <p className="text-white text-lg font-serif">Available 24/7 for Emergencies</p>
                      <p className="text-gray-500 text-sm mt-1 uppercase tracking-tighter">Global coverage, regional focus</p>
                    </div>
                  </div>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;