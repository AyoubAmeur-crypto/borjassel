'use client'
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Star, ChefHat, Users, Award, Heart, Menu, X, Play, ArrowRight, Utensils, Wine, Calendar } from 'lucide-react';
import Image from 'next/image';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import Reservation from './Reservation';
import Footer from './Footer';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);
  const [activeMenuCategory, setActiveMenuCategory] = useState('entrees');
  const [formData, setFormData] = useState({
    nom: '', email: '', date: '', heure: '', invites: ''
  });
  
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const reservationRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const particleArray = [...Array(30)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4,
      size: 0.5 + Math.random() * 1.5
    }));
    setParticles(particleArray);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
        }
      });
    }, observerOptions);

    const refs = [aboutRef, menuRef, reservationRef, footerRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    setIsMobileMenuOpen(false);
  };

  

  return (
    <div className="min-h-screen bg-black font-sans overflow-x-hidden">
      {/* Navigation */}
     

      {/* Hero Section */}
      

   <HeroSection/>

   <MenuSection/>
   <Reservation/>
   <Footer/>

    

      {/* Premium Reservation Section */}
    

      {/* Premium Footer */}
      

      {/* Premium Custom Animations & Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-10px) rotate(1deg); 
          }
          75% { 
            transform: translateY(-5px) rotate(-1deg); 
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); 
          }
          50% { 
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(249, 115, 22, 0.4); 
          }
        }
        
        @keyframes shimmer {
          0% { 
            background-position: -200% 0; 
          }
          100% { 
            background-position: 200% 0; 
          }
        }
        
        .animate-in-view.about-animate .about-animate,
        .animate-in-view.menu-animate .menu-animate,
        .animate-in-view.reservation-animate .reservation-animate,
        .animate-in-view.footer-animate .footer-animate {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }
        
        .delay-0 { transition-delay: 0ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-600 { transition-delay: 600ms; }
        .delay-800 { transition-delay: 800ms; }
        
        /* Premium Button Effects */
        .group:hover .bg-gradient-to-r {
          animation: shimmer 2s infinite;
          background: linear-gradient(90deg, 
            rgba(251, 191, 36, 0) 0%, 
            rgba(251, 191, 36, 0.8) 50%, 
            rgba(251, 191, 36, 0) 100%);
          background-size: 200% 100%;
        }
        
        /* Premium Input Focus Effects */
        input:focus, textarea:focus {
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
        }
        
        input:focus::placeholder,
        textarea:focus::placeholder {
          opacity: 0.3;
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        /* Premium Scroll Effects */
        .overflow-x-hidden {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 191, 36, 0.5) transparent;
        }
        
        .overflow-x-hidden::-webkit-scrollbar {
          width: 8px;
        }
        
        .overflow-x-hidden::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-x-hidden::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ea580c);
          border-radius: 4px;
        }
        
        .overflow-x-hidden::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #fbbf24, #f97316);
        }
        
        /* Premium Loading Animation */
        .animate-pulse-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Premium Text Gradient Animation */
        .bg-clip-text {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        /* Premium Card Hover Effects */
        .group:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 50px rgba(251, 191, 36, 0.2);
        }
        
        /* Premium Responsive Utilities */
        @media (max-width: 768px) {
          .text-7xl { font-size: 3.5rem; }
          .text-9xl { font-size: 4.5rem; }
          .max-w-8xl { max-width: 100%; }
        }
        
        /* Premium Backdrop Effects */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px) saturate(180%);
        }
        
        /* Premium Border Animations */
        .border-amber-500\/20 {
          border-image: linear-gradient(45deg, transparent, rgba(251, 191, 36, 0.2), transparent) 1;
        }
        
        /* Premium Particle Effects */
        .particle-gold {
          background: radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, transparent 70%);
          filter: blur(1px);
        }
      `}</style>
    </div>
  );
};

export default Home;