'use client'
import React, { useState, useEffect } from 'react'

function BackgroundComponent({ intensity = 'normal'  }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);
  const [moroccanIcons, setMoroccanIcons] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Adjust particle count based on intensity
    const particleCount = intensity === 'light' ? 8 : intensity === 'heavy' ? 20 : 15;
    
    // Initialize elegant particles
    const particleArray = [...Array(particleCount)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 4 + Math.random() * 6,
      size: 0.2 + Math.random() * 0.8
    }));
    setParticles(particleArray);

    // Adjust icon count based on intensity
    const iconCount = intensity === 'light' ? 3 : intensity === 'heavy' ? 10 : 6;
    
    // Initialize Moroccan/Asian floating icons
    const iconArray = [...Array(iconCount)].map((_, i) => {
      const allIcons = ['🏺', '🕌', '🌙', '⭐', '🧘', '🏮', '🌸', '🎋', '⚜️', '🔮'];
      return {
        id: i,
        icon: allIcons[i % allIcons.length],
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 8,
        animationDuration: 8 + Math.random() * 12,
        size: 1 + Math.random() * 1.5
      };
    });
    setMoroccanIcons(iconArray);
  }, [intensity]);

  return (
    <>
      {/* Universal Background Container */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        
        {/* Elegant Gold Particles */}
        {isLoaded && particles.length > 0 && (
          <div className="absolute inset-0 z-10">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute bg-gradient-to-r from-[#efcaad] to-[#d4a574] rounded-full opacity-30"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: `${particle.size}rem`,
                  height: `${particle.size}rem`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                  animation: 'elegantFloat ease-in-out infinite'
                }}
              />
            ))}
          </div>
        )}

       

        {/* Luxury Pattern Overlay */}
        <div className="absolute inset-0 opacity-15 z-5">
          <div className="w-full h-full bg-gradient-to-br from-[#efcaad]/20 to-[#d4a574]/20"
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 20% 50%, rgba(239, 202, 173, 0.15) 0%, transparent 60%),
                   radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.15) 0%, transparent 60%),
                   radial-gradient(circle at 40% 80%, rgba(239, 202, 173, 0.15) 0%, transparent 60%)
                 `
               }}>
          </div>
        </div>

        {/* Giant Logo Overlay */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/dlomtxi0t/image/upload/v1757325474/borjAssel_kuinzt.png" 
            alt="Borj Assel Logo Background" 
            className="w-[80vw] max-w-6xl opacity-3 object-contain filter blur-[3px] animate-pulse-slow"
          />
        </div>

        {/* Additional Moroccan Geometric Pattern */}
        <div className="absolute inset-0 z-5" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(239, 202, 173, 0.03) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(212, 165, 116, 0.03) 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
      </div>

      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes elegantFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-10px) rotate(2deg) scale(1.05); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-8px) rotate(-1deg) scale(1.02); 
            opacity: 0.3;
          }
          75% { 
            transform: translateY(-6px) rotate(1deg) scale(1.03); 
            opacity: 0.5;
          }
        }
        
        @keyframes culturalFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.05;
          }
          33% { 
            transform: translateY(-15px) rotate(3deg) scale(1.1); 
            opacity: 0.2;
          }
          66% { 
            transform: translateY(-10px) rotate(-2deg) scale(1.05); 
            opacity: 0.1;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.03; 
          }
          50% { 
            opacity: 0.08; 
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        /* Performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow,
          [style*="animation"] {
            animation: none !important;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .opacity-5 { opacity: 0.03; }
          .lg\\:opacity-10 { opacity: 0.05; }
        }
      `}</style>
    </>
  )
}

export default BackgroundComponent