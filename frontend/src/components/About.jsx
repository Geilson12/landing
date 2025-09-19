import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';
import { teamData } from '../data/mock';

export const About = () => {
  const stats = [
    { icon: Award, value: '150+', label: 'Projetos Entregues', color: 'text-purple-400' },
    { icon: Users, value: '50+', label: 'Clientes Satisfeitos', color: 'text-pink-400' },
    { icon: Target, value: '98%', label: 'Taxa de Sucesso', color: 'text-blue-400' },
    { icon: Zap, value: '5+', label: 'Anos de Experiência', color: 'text-green-400' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sobre Nós
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos uma equipe apaixonada por transformar ideias em realidade visual. 
              Com anos de experiência e um olhar inovador, criamos designs que não apenas impressionam, 
              mas geram resultados reais para nossos clientes.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Nossa Equipe</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamData.map((member) => (
                <div key={member.id} className="group text-center">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Nossa Missão</h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Acreditamos que cada marca tem uma história única para contar. Nossa missão é dar vida a essa história 
                através de designs excepcionais que capturam a essência do seu negócio e criam conexões emocionais 
                duradouras com seu público. Transformamos visões em realidade visual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};