import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/mock';

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ['Todos', 'Identidade Visual', 'Design Digital', 'Material Gráfico', 'Consultoria Criativa'];

  const filteredProjects = activeFilter === 'Todos' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Nosso Portfólio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Conheça alguns dos projetos que desenvolvemos com paixão e dedicação. 
              Cada trabalho reflete nossa busca pela excelência em design.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredCard === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button className="bg-white/20 backdrop-blur-lg p-4 rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink size={24} />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 font-semibold">
                      Ver Projeto
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Floating Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 flex items-center gap-3 mx-auto">
              Ver Todos os Projetos
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 opacity-5 blur-3xl rounded-full"></div>
    </section>
  );
};