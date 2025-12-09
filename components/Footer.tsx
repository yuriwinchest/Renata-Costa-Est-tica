import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Sparkles, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-gold-500/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-dark-900" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-white">Renata Costa</h3>
                <p className="text-sm text-gold-400">Estética Avançada</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transformando vidas através de tratamentos estéticos avançados com ciência,
              ética e um atendimento humanizado e personalizado.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-gold flex items-center justify-center text-gold-400 hover:text-gold-500 hover-lift transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 gold-gradient rounded-full"></div>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Início', path: '/' },
                { name: 'Serviços', path: '/servicos' },
                { name: 'Sobre Mim', path: '/sobre' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contato', path: '/contato' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-500 group-hover:w-4 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 gold-gradient rounded-full"></div>
              Contato
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: 'contato@renatacosta.com', href: 'mailto:contato@renatacosta.com' },
                { icon: Phone, text: '(11) 98765-4321', href: 'tel:+5511987654321' },
                { icon: MapPin, text: 'Av. Paulista, 1234\nSão Paulo, SP', href: '#' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-gold-400 transition-colors text-sm group"
                  >
                    <item.icon size={16} className="mt-1 text-gold-500 group-hover:scale-110 transition-transform" />
                    <span className="whitespace-pre-line">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Renata Costa Estética. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Feito com</span>
              <Heart size={14} className="text-gold-500 fill-gold-500 animate-pulse" />
              <span>e dedicação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gold Line */}
      <div className="h-1 gold-gradient"></div>
    </footer>
  );
};

export default Footer;