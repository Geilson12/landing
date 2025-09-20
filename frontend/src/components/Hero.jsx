import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { heroData } from '../data/mock';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {heroData.tagline}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=%2B5585992600937&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 flex items-center gap-3"
            >
              {heroData.ctaText}
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
            
            <button className="group flex items-center gap-3 text-white border-2 border-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300">
              <Play className="group-hover:scale-110 transition-transform duration-300" size={20} />
              {heroData.ctaSecondary}
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-gray-300">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfação do Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-pink-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-500 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
};