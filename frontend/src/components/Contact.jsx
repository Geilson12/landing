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

          <div className="max-w-4xl mx-auto">
            {/* Main CTA */}
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/20 mb-12">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Vamos Conversar Agora!
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Entre em contato pelo WhatsApp e receba uma resposta rápida sobre seu projeto.
                  Estamos prontos para transformar suas ideias em realidade visual.
                </p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=%2B5585992600937&text&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30"
                >
                  💬 Falar no WhatsApp
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 text-center">Outras Formas de Contato</h3>
                <p className="text-gray-300 mb-8 text-center">
                  Estamos sempre disponíveis para atender você através de qualquer um dos canais abaixo.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Informações de Contato</h3>
                <p className="text-gray-300 mb-8">
                  Estamos sempre disponíveis para atender você. 
                  Entre em contato através de qualquer um dos canais abaixo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-center mb-4">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl mx-auto w-fit mb-3">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{info.content}</p>
                    </div>
                    <a 
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 font-semibold text-sm group-hover:translate-x-1"
                    >
                      {info.action}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 mt-12 text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  ⚡ Resposta Garantida em Minutos
                </h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Atendimento personalizado via WhatsApp com resposta rápida. 
                  Clique em qualquer botão acima e fale diretamente conosco!
                </p>
              </div>

              {/* FAQ Quick Links */}
              <div className="space-y-4 mt-12">
                <h4 className="text-2xl font-bold text-white text-center mb-8">Perguntas Frequentes</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    'Qual é o prazo médio dos projetos?',
                    'Como funciona o processo de criação?',
                    'Quais são as formas de pagamento?'
                  ].map((question, index) => (
                    <a 
                      key={index} 
                      href="https://w.app/geilsondesigner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800/30 p-6 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/30 transition-all duration-300 text-center hover:scale-105"
                    >
                      {question}
                    </a>
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