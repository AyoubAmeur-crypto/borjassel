import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center mb-10 lg:items-start  space-x-3 mb-6">
              <div className="w-26 h-16 sm:w-26 sm:h-26 rounded-2xl  flex items-center justify-center">
                <img 
                  src='https://res.cloudinary.com/dlomtxi0t/image/upload/v1757325474/borjAssel_kuinzt.png' 
                  className='w-26 h-28 sm:w-26 sm:h-26 object-contain'
                  alt="Borj Assel Logo"
                />
              </div>
             
            </div>
            
            <p className="text-[#efcaad]/70 mb-6 text-base sm:text-lg lg:text-xl">
              Haute Gastronomie • Fusion Asiatique-Marocaine
            </p>
            <p className="text-[#efcaad]/60 leading-relaxed mb-8 text-sm sm:text-base">
              L'excellence culinaire au service d'une expérience gastronomique inoubliable. 
              Une passion infinie pour les saveurs authentiques.
            </p>
             <div className="mt-8">
              <h6 className="text-[#efcaad] font-semibold mb-4 text-sm sm:text-base">Suivez-nous</h6>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { icon: Facebook, url: "https://facebook.com/borjassel", label: "Facebook" },
                  { icon: Instagram, url: "https://instagram.com/borjassel", label: "Instagram" },
                  { icon: Twitter, url: "https://twitter.com/borjassel", label: "Twitter" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#efcaad]/10 border border-[#efcaad]/20 flex items-center justify-center text-[#efcaad] hover:bg-gradient-to-r hover:from-[#efcaad] hover:to-[#d4a574] hover:text-black transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h5 className="text-xl sm:text-2xl font-bold text-[#efcaad] mb-6 sm:mb-8 flex items-center">
              <Phone className="mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Contactez-nous
            </h5>
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Phone, text: "+212 522-40-36-20", label: "Réservations" },
                { icon: Mail, text: "contact@borjassel.ma", label: "Email" },
                { icon: MapPin, text: "123 Avenue Mohammed V\nCasablanca 20000", label: "Adresse" },
                { icon: Clock, text: "Mar-Dim : 12h00-15h00\n19h00-23h30", label: "Horaires" }
              ].map((contact, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 rounded-xl hover:bg-[#efcaad]/5 transition-all duration-300">
                  <contact.icon size={18} className="text-[#efcaad] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#efcaad] font-semibold text-xs sm:text-sm">{contact.label}</p>
                    <p className="text-[#efcaad]/80 text-sm sm:text-base whitespace-pre-line">{contact.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
           
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <h5 className="text-xl sm:text-2xl font-bold text-[#efcaad] mb-6 sm:mb-8 flex items-center">
              <MapPin className="mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Localisation
            </h5>
            <div className="w-full h-48 sm:h-56 lg:h-64 bg-black/20 rounded-2xl overflow-hidden shadow-2xl border border-[#efcaad]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7!2d-7.5898!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNScyMy4zIlc!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-90 contrast-110 hover:filter-none transition-all duration-500"
                title="Localisation Borj Assel"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#efcaad]/20 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[#efcaad]/60 text-sm sm:text-base text-center sm:text-left">
              <p>© 2025 Borj Assel. Tous droits réservés.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[#efcaad]/60 text-xs sm:text-sm">
              <a href="#" className="hover:text-[#efcaad] transition-colors duration-300">Mentions Légales</a>
              <a href="#" className="hover:text-[#efcaad] transition-colors duration-300">Politique de Confidentialité</a>
              <a href="#" className="hover:text-[#efcaad] transition-colors duration-300">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer