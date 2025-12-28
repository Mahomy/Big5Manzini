import React from 'react';
import AnimatedSection from './AnimatedSection';

interface GalleryItem {
  src: string;
  label: string;
}

const galleryItems: GalleryItem[] = [
  { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5DsMatOmKd9G7y2wO8KODNVbPaySNpbT9DVWJGN29p0-UPFs52pcIrbP9sMJIeF_LeeAJ-1WDzZDPv6gK2yLJAP4nC8NwbTy41PQ_QJdD0VvCab_-XQeVBrXLzo7BDcZwrD8qGobEqJxR9RwH9j67gntB8nNe-LoaBgnyTmUvV7_17R5IBmZFtrklj8U/s275/Image1.jfif", label: "Professional Care" },
  { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt7zz0ioLC8oLHqn08yK2fbt6WturHh6c9QoMDNg5QEHoN2QTVO1vPc7FGLQMRSU93oP_EiymzwG6FyLW1RBDYWrTm-ZnPw7xvl7xSGzU_e2V8r1msbNwCb_Wmxo2IdwM34H2iCNvJJkS7rKu15AlqpOcevyt-whtNFp9qZFM4gAK4tMfrc_kz020DDuw/s275/image3.jfif", label: "Transport Logistics" },
  { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieWj9wwKAF0q3Zwc3h_N4miVO3dEP6pLJoM0mUT0kcVRHzakGN7g1ltYRDqdmzUDkC_iwkzwHjcv4oaZNfOXxtGNxYtnXc737nZuzTaNGb2iRwr9YjXUVsgm41Z_d68fpzOiL-11m4r0uB8pIw-tdKxn7oXiv94018SCxY3qYoyQuOSK-Af2KHCnioASs/s275/Images.jfif", label: "Reliable Support" },
  { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=75&w=600&auto=format&fit=crop", label: "Global Air Cargo" },
  { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=75&w=600&auto=format&fit=crop", label: "International Compliance" },
  { src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=75&w=600&auto=format&fit=crop", label: "Regional Transit" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=75&w=600&auto=format&fit=crop", label: "Family Support" },
  { src: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=75&w=600&auto=format&fit=crop", label: "Dignified Liaison" },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-brand-black scroll-mt-24 border-y border-brand-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-xs font-bold text-brand-accent tracking-[0.4em] uppercase mb-4">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Visual Presence</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <AnimatedSection key={index} delay={(index % 4) * 100}>
              <div className="group relative overflow-hidden aspect-[4/5] cursor-pointer bg-brand-dark border border-brand-accent/10">
                <img 
                  src={item.src} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Hover Overlay with Label */}
                <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8">
                  <div className="w-12 h-1 bg-brand-accent mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="text-white font-serif text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;