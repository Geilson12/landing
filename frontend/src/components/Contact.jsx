import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@designelite.com',
      action: 'Enviar Email',
      href: 'https://w.app/geilsondesigner'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 9999-9999',
      action: 'Ligar Agora',
      href: 'https://w.app/geilsondesigner'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São Paulo, SP - Brasil',
      action: 'Ver no Mapa',
      href: 'https://w.app/geilsondesigner'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg-Sex: 9h às 18h',
      action: 'Agendar Reunião',
      href: 'https://w.app/geilsondesigner'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Entre em Contato
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pronto para dar vida à sua visão? Vamos conversar sobre seu projeto 
              e descobrir como podemos transformar suas ideias em realidade visual.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Vamos Conversar</h3>
                <p className="text-gray-300 mb-8">
                  Preencha o formulário e nossa equipe entrará em contato em até 24 horas 
                  para discutir seu projeto em detalhes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Empresa</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Serviço de Interesse</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="identidade-visual">Identidade Visual</option>
                      <option value="design-digital">Design Digital</option>
                      <option value="material-grafico">Material Gráfico</option>
                      <option value="consultoria-criativa">Consultoria Criativa</option>
                      <option value="projeto-completo">Projeto Completo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Mensagem *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800/50 backdrop-blur-lg border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
                  />
                </div>

                <a 
                  href="https://w.app/geilsondesigner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 flex items-center justify-center gap-3"
                >
                  Enviar Mensagem WhatsApp
                  <Send size={20} />
                </a>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Informações de Contato</h3>
                <p className="text-gray-300 mb-8">
                  Estamos sempre disponíveis para atender você. 
                  Entre em contato através de qualquer um dos canais abaixo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        <p className="text-gray-300 text-sm">{info.content}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 font-semibold text-sm group-hover:translate-x-1">
                      {info.action}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-3">
                  💜 Compromisso de Resposta Rápida
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Garantimos resposta em até 24 horas para todos os contatos. 
                  Para projetos urgentes, oferecemos atendimento prioritário via WhatsApp.
                </p>
              </div>

              {/* FAQ Quick Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Perguntas Frequentes</h4>
                <div className="space-y-3">
                  {[
                    'Qual é o prazo médio dos projetos?',
                    'Como funciona o processo de criação?',
                    'Quais são as formas de pagamento?'
                  ].map((question, index) => (
                    <button key={index} className="w-full text-left bg-gray-800/30 p-4 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/30 transition-all duration-300">
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500 opacity-5 blur-3xl rounded-full"></div>
    </section>
  );
};