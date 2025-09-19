import React from 'react';
import { Palette, Monitor, Image, Lightbulb, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/mock';

const iconMap = {
  palette: Palette,
  monitor: Monitor,
  image: Image,
  lightbulb: Lightbulb
};

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nossos Serviços
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções completas de design que elevam sua marca a um novo patamar. 
              Cada serviço é cuidadosamente planejado para gerar impacto e resultados.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div 
                  key={service.id} 
                  className="group relative overflow-hidden bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Service Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>

                    {/* Service Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.id === 1 && (
                        <>
                          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Logotipo</span>
                          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Manual da Marca</span>
                          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Papelaria</span>
                        </>
                      )}
                      {service.id === 2 && (
                        <>
                          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Web Design</span>
                          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">App Design</span>
                        </>
                      )}
                      {service.id === 3 && (
                        <>
                          <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Banners</span>
                          <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Folders</span>
                          <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Social Media</span>
                        </>
                      )}
                      {service.id === 4 && (
                        <>
                          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Estratégia</span>
                          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Branding</span>
                          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Direção Criativa</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para Transformar Sua Marca?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Cada projeto é único e merece uma abordagem personalizada. 
                Vamos conversar sobre como podemos elevar sua marca ao próximo nível.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30">
                Solicitar Consulta Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-500 opacity-10 blur-3xl rounded-full"></div>
    </section>
  );
};