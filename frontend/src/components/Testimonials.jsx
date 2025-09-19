import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/mock';

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Depoimentos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A satisfação dos nossos clientes é a nossa maior conquista. 
              Veja o que eles têm a dizer sobre nosso trabalho.
            </p>
          </div>

          {/* Main Testimonial Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-700/50 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote size={60} className="text-purple-400" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-center mb-8">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic max-w-4xl mx-auto">
                    "{current.content}"
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={current.avatar} 
                    alt={current.name}
                    className="w-16 h-16 rounded-full border-2 border-purple-400"
                  />
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-white">{current.name}</h4>
                    <p className="text-purple-400">{current.company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-lg p-3 rounded-full text-white hover:bg-purple-500/80 transition-all duration-300 border border-gray-700/50"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-lg p-3 rounded-full text-white hover:bg-purple-500/80 transition-all duration-300 border border-gray-700/50"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid - Hidden on Mobile */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'border-purple-500/50 bg-purple-500/10' 
                    : 'hover:border-gray-600/50'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h5 className="text-white font-semibold text-sm">{testimonial.name}</h5>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div className="flex gap-1 mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-green-500 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
    </section>
  );
};