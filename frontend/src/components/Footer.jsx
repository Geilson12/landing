import React from 'react';
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    empresa: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Nossa Equipe', href: '#about' },
      { name: 'Carreira', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    servicos: [
      { name: 'Identidade Visual', href: '#services' },
      { name: 'Design Digital', href: '#services' },
      { name: 'Material Gráfico', href: '#services' },
      { name: 'Consultoria Criativa', href: '#services' }
    ],
    recursos: [
      { name: 'Portfólio', href: '#portfolio' },
      { name: 'Depoimentos', href: '#testimonials' },
      { name: 'FAQ', href: '#' },
      { name: 'Orçamento', href: '#contact' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'LGPD', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-white mb-4">
                <span className="text-purple-400">Design</span>Elite
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transformamos ideias em experiências visuais extraordinárias. 
                Criamos identidades únicas que conectam marcas com pessoas.
              </p>
              
              {/* Contact Quick Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={16} className="text-purple-400" />
                  <span>contato@designelite.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={16} className="text-purple-400" />
                  <span>+55 (85) 99260-0937</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800/50 p-3 rounded-full text-gray-300 hover:text-white hover:bg-purple-500/80 transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4">Empresa</h4>
                <ul className="space-y-3">
                  {footerLinks.empresa.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Serviços</h4>
                <ul className="space-y-3">
                  {footerLinks.servicos.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Recursos</h4>
                <ul className="space-y-3">
                  {footerLinks.recursos.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-bold text-white mb-2">
                Receba Insights de Design
              </h4>
              <p className="text-gray-300">
                Dicas exclusivas, tendências e novidades do mundo do design.
              </p>
            </div>
            
            <div className="flex gap-3 w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 DesignElite. Todos os direitos reservados. 
              Desenvolvido com 💜 para criar experiências extraordinárias.
            </p>
            
            <button
              onClick={scrollToTop}
              className="bg-gray-800/50 p-3 rounded-full text-gray-300 hover:text-white hover:bg-purple-500/80 transition-all duration-300 transform hover:scale-110"
              title="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};