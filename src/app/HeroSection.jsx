'use client'
import React, { useState, useEffect } from 'react';
import { Award, ArrowRight, Play,Phone } from 'lucide-react';

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="accueil" className="relative lg:min-h-screen h-fit py-8 pt-14 lg:py-0 lg:pt-0 flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-16">
        {/* Main Content Container */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap  items-center justify-center lg:justify-between lg:flex-nowrap lg:gap-12 h-fit">
            
            {/* Logo Section */}
            <div className={`w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0  lg:justify-center transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative group">
                <img 
                  src="https://res.cloudinary.com/dlomtxi0t/image/upload/v1757325474/borjAssel_kuinzt.png" 
                  alt="Borj Assel Logo" 
                  className="w-22 h-22  sm:w-26 sm:h-26 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain filter drop-shadow-2xl group-hover:scale-105 transition-all duration-700 animate-breathe"
                />
                {/* Glowing Ring Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-[#efcaad]/30 animate-ping opacity-20"></div>
                <div className="absolute inset-2 rounded-full border border-[#d4a574]/20 animate-pulse"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className={`w-full lg:w-1/2 flex flex-col  items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 transition-all duration-2000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              
              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight tracking-wider">
                <span className="bg-gradient-to-r from-[#efcaad] via-[#d4a574] to-[#c4956b] bg-clip-text text-transparent animate-shimmer">
                  BORJ ASSEL
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-[#efcaad]/90 font-light tracking-wide">
                Haute Gastronomie
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-[#efcaad]/70 leading-relaxed font-light max-w-lg lg:max-w-xl px-4 lg:px-0">
                Une symphonie culinaire où l'art raffiné de la cuisine asiatique rencontre l'âme chaleureuse du Maroc. 
                Chaque plat est une œuvre d'art créée par nos chefs primés.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md lg:max-w-none px-4 lg:px-0">
                <button
                  onClick={() => scrollToSection('reservation')}
                  className="group flex items-center justify-center w-full sm:w-auto flex-1 lg:flex-none px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-full border-2 border-[#efcaad]/60 text-[#efcaad] hover:bg-[#efcaad]/10 transition-all duration-500 backdrop-blur-lg"
                >
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform" />
                  Réserver 
                </button>

                <button
                  onClick={() => scrollToSection('menu')}
                  className="group flex items-center justify-center w-full sm:w-auto flex-1 lg:flex-none px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-full border-2 border-[#efcaad]/60 text-[#efcaad] hover:bg-[#efcaad]/10 transition-all duration-500 backdrop-blur-lg"
                >
                  <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform" />
                  Découvrir le Menu
                </button>
              </div>

             
            
            </div>
          </div>
        </div>
      </section>

      {/* Simple CSS Animations */}
      <style jsx>{`
        @keyframes breathe {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            filter: drop-shadow(0 0 10px rgba(239, 202, 173, 0.3));
          }
          50% { 
            transform: scale(1.02) rotate(0.3deg); 
            filter: drop-shadow(0 0 20px rgba(239, 202, 173, 0.4));
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default HeroSection;