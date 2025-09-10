'use client'
import { ChefHat, Award, Star, ShoppingCart, Utensils, Wine, Sparkles } from 'lucide-react';
import { useState } from 'react';
import React from 'react'
import menu from './db/db.json'

function MenuSection() {
  const [activeMenuCategory, setActiveMenuCategory] = useState('entrees');

  const {menuCategories}=menu
  
  

  return (
    <section id="menu" className="relative py-10  px-4 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-[#efcaad]/10 rounded-full border border-[#efcaad]/30 mb-6 sm:mb-8 backdrop-blur-sm">
            <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-[#efcaad] mr-2 sm:mr-3" />
            <span className="text-[#efcaad] font-semibold text-sm sm:text-base lg:text-lg">Menu Gastronomique</span>
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 bg-gradient-to-r from-[#efcaad] via-[#d4a574] to-[#c4956b] bg-clip-text text-transparent">
            Créations d'Exception
          </h3>
          
          <div className="w-24 sm:w-32 h-1 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-[#efcaad] to-[#d4a574]"></div>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#efcaad]/70 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Des œuvres culinaires d'exception, créées par nos chefs étoilés avec des ingrédients de premier choix
          </p>
        </div>

        {/* Menu Categories Navigation */}
        <div className="flex justify-center mb-12 sm:mb-16 overflow-x-auto">
          <div className="inline-flex lg:gap-2 bg-black/30 rounded-xl sm:rounded-2xl p-1 sm:p-2 backdrop-blur-sm border border-[#efcaad]/20 min-w-max">
            {menuCategories.map((category) => {
              // Map icon strings to actual components
              const getIcon = (iconName) => {
                const icons = {
                  'Utensils': Utensils,
                  'ChefHat': ChefHat,
                  'Sparkles': Sparkles
                };
                return icons[iconName] || Utensils;
              };
              
              const IconComponent = getIcon(category.icon);
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveMenuCategory(category.name)}
                  className={`px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-500 flex flex-col items-center justify-center  text-sm sm:text-base ${
                    activeMenuCategory === category.name
                      ? 'bg-gradient-to-r from-[#efcaad] to-[#d4a574] text-black shadow-lg'
                      : 'text-[#efcaad]/70 hover:text-[#efcaad] hover:bg-[#efcaad]/10'
                  }`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {menuCategories
    .find(category => category.name === activeMenuCategory)
    ?.plats?.map((plat, index) => (
      <div key={plat.id || index} className="group relative max-w-sm mx-auto w-full">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-[#efcaad]/20 hover:border-[#efcaad]/40 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
          
          {/* Image Section */}
          <div className="h-40 sm:h-48 lg:h-52 xl:h-48 relative overflow-hidden flex-shrink-0">
            <img 
              src={plat.image} 
              alt={plat.nom}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Content Section - Flexible height */}
          <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
            <div className="flex flex-row justify-between items-center mb-3 sm:mb-4">
              <h5 className="text-lg sm:text-xl font-bold text-[#efcaad] group-hover:text-white transition-colors duration-300 leading-tight">{plat.nom}</h5>
              <div className="text-right ml-2">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#efcaad] to-[#d4a574] bg-clip-text text-transparent whitespace-nowrap">{plat.prix}</span>
              </div>
            </div>
            
            <p className="text-[#efcaad]/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3 overflow-hidden flex-grow">
              {plat.description}
            </p>            
            
            {/* Footer - Always at bottom */}
            <div className="flex flex-row w-full justify-between items-center mt-auto">
              <div className="flex items-center text-[#efcaad]">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-3 h-3 sm:w-4 sm:h-4" 
                    fill={i < Math.floor(plat.note) ? "currentColor" : "none"} 
                  />
                ))}
                <span className="ml-2 text-xs text-[#efcaad]/70">{plat.note}</span>
              </div>
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#efcaad]/20 rounded-lg border border-[#efcaad]/30 text-[#efcaad] hover:bg-gradient-to-r hover:from-[#efcaad] hover:to-[#d4a574] hover:text-black transition-all duration-300 text-xs sm:text-sm font-medium flex items-center">
                <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden xs:inline">Commander</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
        </div>

        
      </div>
    </section>
  )
}

export default MenuSection