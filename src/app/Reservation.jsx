'use client'
import React, { useState } from 'react';
import { Calendar, Users, Clock, MapPin, Phone, Utensils } from 'lucide-react';

function Reservation() {
  const [formData, setFormData] = useState({
    nom: '', 
    telephone: '', 
    date: '', 
    heure: '', 
    invites: '',
    demandes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Only allow numbers for phone input
    if (name === 'telephone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données de réservation:', formData);
    alert('Réservation envoyée avec succès!');
  };

  return (
    <section id="reservation" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-[#efcaad]/10 rounded-full border border-[#efcaad]/30 mb-6 sm:mb-8 backdrop-blur-sm">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#efcaad] mr-2 sm:mr-3" />
            <span className="text-[#efcaad] font-semibold text-sm sm:text-base lg:text-lg">Réservation</span>
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8 bg-gradient-to-r from-[#efcaad] via-[#d4a574] to-[#c4956b] bg-clip-text text-transparent">
            Réservez Votre Table
          </h3>
          
          <div className="w-24 sm:w-32 h-1 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-[#efcaad] to-[#d4a574]"></div>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#efcaad]/70 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Réservez votre place pour une expérience culinaire d'exception
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#efcaad]/20">
              <h4 className="text-2xl sm:text-3xl font-bold text-[#efcaad] mb-8 text-center">Formulaire de Réservation</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="group relative">
                  <label className="block text-[#efcaad] font-semibold mb-2 text-sm sm:text-base">Nom & Prénom</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Users className="w-5 h-5 text-[#efcaad]/70" />
                    </div>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Votre nom complet"
                      required
                      className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-black/20 border border-[#efcaad]/30 text-[#efcaad] placeholder-[#efcaad]/50 focus:border-[#efcaad] focus:bg-black/30 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="group relative">
                  <label className="block text-[#efcaad] font-semibold mb-2 text-sm sm:text-base">Téléphone</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Phone className="w-5 h-5 text-[#efcaad]/70" />
                    </div>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="0612345678"
                      required
                      maxLength="10"
                      className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-black/20 border border-[#efcaad]/30 text-[#efcaad] placeholder-[#efcaad]/50 focus:border-[#efcaad] focus:bg-black/30 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Date and Time Row */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  
                  {/* Date Input */}
                  <div className="group relative">
                    <label className="block text-[#efcaad] font-semibold mb-2 text-sm sm:text-base">Date</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Calendar className="w-5 h-5 text-[#efcaad]/70" />
                      </div>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-black/20 border border-[#efcaad]/30 text-[#efcaad] focus:border-[#efcaad] focus:bg-black/30 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  {/* Time Input */}
                  <div className="group relative">
                    <label className="block text-[#efcaad] font-semibold mb-2 text-sm sm:text-base">Heure</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <Clock className="w-5 h-5 text-[#efcaad]/70" />
                      </div>
                      <input
                        type="time"
                        name="heure"
                        value={formData.heure}
                        onChange={handleInputChange}
                        required
                        min="12:00"
                        max="23:00"
                        className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-black/20 border border-[#efcaad]/30 text-[#efcaad] focus:border-[#efcaad] focus:bg-black/30 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests Input */}
                <div className="group relative">
                  <label className="block text-[#efcaad] font-semibold mb-2 text-sm sm:text-base">Nombre d'invités</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Users className="w-5 h-5 text-[#efcaad]/70" />
                    </div>
                    <select
                      name="invites"
                      value={formData.invites}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-black/20 border border-[#efcaad]/30 text-[#efcaad] focus:border-[#efcaad] focus:bg-black/30 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm appearance-none"
                    >
                      <option value="">Sélectionnez</option>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num} className="bg-black text-[#efcaad]">
                          {num} {num === 1 ? 'personne' : 'personnes'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Special Requests */}
                <div className="group relative">
                  <label className="block text-[#efcaad] font-semibold mb-2 text-sm sm:text-base">Demandes spéciales (optionnel)</label>
                  <textarea
                    name="demandes"
                    value={formData.demandes}
                    onChange={handleInputChange}
                    placeholder="Allergies, occasions spéciales, préférences..."
                    rows="3"
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-black/20 border border-[#efcaad]/30 text-[#efcaad] placeholder-[#efcaad]/50 focus:border-[#efcaad] focus:bg-black/30 transition-all duration-300 text-sm sm:text-base backdrop-blur-sm resize-none"
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-[#efcaad] to-[#d4a574] text-black shadow-lg hover:shadow-xl"
                >
                  Confirmer la Réservation
                </button>
              </form>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="lg:col-span-1">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#efcaad]/20">
              <h4 className="text-xl sm:text-2xl font-bold text-[#efcaad] mb-6 flex items-center">
                <Utensils className="mr-3 w-6 h-6" />
                Informations
              </h4>
              
              <div className="space-y-4 text-[#efcaad]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#efcaad] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#efcaad]">Adresse</p>
                    <p className="text-sm">123 Avenue Mohammed V, Casablanca 20000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#efcaad] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#efcaad]">Téléphone</p>
                    <p className="text-sm">+212 522-XX-XX-XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#efcaad] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#efcaad]">Horaires</p>
                    <p className="text-sm">Mardi - Dimanche</p>
                    <p className="text-sm">12h00 - 15h00 & 19h00 - 23h30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;