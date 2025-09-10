'use client'
import React from 'react'
import { Menu, X ,House ,SquareMenu,Phone, Home } from 'lucide-react';
import { useState } from 'react';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-[#efcaad]/30">
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#efcaad]/20 to-[#d4a574]/20 flex items-center justify-center border border-[#efcaad]/30 group-hover:border-[#efcaad]/50 transition-all duration-500 ">
                  <img 
                    src='https://res.cloudinary.com/dlomtxi0t/image/upload/v1757325474/borjAssel_kuinzt.png' 
                    className='w-10 h-10 object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500'
                    alt="Borj Assel Logo"
                  />
                </div>
                {/* Glowing ring effect on hover */}
                <div className="absolute inset-0 rounded-full border border-[#efcaad]/20 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              </div>
              
              {/* Brand name - hidden on small screens */}
              <div className="hidden sm:block">
                <span className="text-xl font-light bg-gradient-to-r from-[#efcaad] to-[#d4a574] bg-clip-text text-transparent">
                  BORJ ASSEL
                </span>
                <div className="text-xs text-[#efcaad]/70 font-light tracking-wider">
                  Haute Gastronomie
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 text-[#efcaad]/80 text-lg font-light">
              {[
                { name: "Accueil", action: () => scrollToSection('accueil') },
                { name: "Menu", action: () => scrollToSection('menu') },
                { name: "Contact", action: () => scrollToSection('contact') }
              ].map((item, index) => (
                <button 
                  key={index}
                  onClick={item.action}
                  className="relative py-3 px-4 transition-all duration-500 hover:text-[#efcaad] group overflow-hidden rounded-lg"
                >
                  <span className="relative z-10 flex items-center">
                    {item.name === "Accueil" && <span className="mr-2"><House /></span>}
                    {item.name === "Menu" && <span className="mr-2"><SquareMenu /></span>}
                    
                    {item.name === "Contact" && <span className="mr-2"><Phone /></span>}
                    {item.name}
                  </span>
                  
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#efcaad] to-[#d4a574] transition-all duration-500 group-hover:w-full"></span>
                  
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#efcaad]/10 to-[#d4a574]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </button>
              ))}
            </div>

         

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#efcaad] p-3 rounded-xl border border-[#efcaad]/30 hover:bg-[#efcaad]/10 hover:border-[#efcaad]/50 transition-all duration-300 backdrop-blur-sm"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-[#efcaad]/20 mt-4 backdrop-blur-sm">
              <div className="flex flex-col space-y-2 pt-6">
                {[
                  { name: "Accueil", action: () => scrollToSection('accueil'), icon: <House/> },
                  { name: "Menu", action: () => scrollToSection('menu'), icon: <SquareMenu/> },
                  { name: "Contact", action: () => scrollToSection('contact'), icon: <Phone/> }
                ].map((item, index) => (
                  <button 
                    key={index}
                    onClick={item.action}
                    className="group flex items-center text-left py-3 px-4 text-[#efcaad]/80 hover:text-[#efcaad] hover:bg-[#efcaad]/10 rounded-xl transition-all duration-300 border border-transparent hover:border-[#efcaad]/20"
                  >
                    <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.name}</span>
                    
                    {/* Arrow indicator */}
                    <span className="ml-auto text-[#efcaad]/50 group-hover:text-[#efcaad] group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </button>
                ))}
                
           
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced CSS for navbar effects */}
      <style jsx>{`
        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }
        
        /* Backdrop blur fallback */
        @supports not (backdrop-filter: blur(20px)) {
          nav {
            background: rgba(0, 0, 0, 0.9);
          }
        }
        
        /* Custom scrollbar for mobile menu */
        .lg\\:hidden .flex-col {
          scrollbar-width: thin;
          scrollbar-color: rgba(239, 202, 173, 0.3) transparent;
        }
        
        /* Animation delays for mobile menu items */
        .lg\\:hidden .flex-col button:nth-child(1) { animation-delay: 0.1s; }
        .lg\\:hidden .flex-col button:nth-child(2) { animation-delay: 0.2s; }
        .lg\\:hidden .flex-col button:nth-child(3) { animation-delay: 0.3s; }
        .lg\\:hidden .flex-col button:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .lg\\:hidden .flex-col button {
          animation: slideInFromTop 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default NavBar