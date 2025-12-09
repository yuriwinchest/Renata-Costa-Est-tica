import React from 'react';
import { Triangle, Instagram, Facebook, Linkedin, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
           <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Triangle className="h-5 w-5 text-gold-500 fill-gold-500 rotate-180" />
            <span className="font-bold text-lg text-white">Renata Costa</span>
          </div>
          
          <nav className="flex gap-8 mb-4 md:mb-0">
            <Link to="/" className="text-sm text-gray-400 hover:text-gold-500">Home</Link>
            <Link to="/produtos" className="text-sm text-gray-400 hover:text-gold-500">Produtos</Link>
            <Link to="/servicos" className="text-sm text-gray-400 hover:text-gold-500">Serviços</Link>
            <Link to="/blog" className="text-sm text-gray-400 hover:text-gold-500">Blog</Link>
            <Link to="/contato" className="text-sm text-gray-400 hover:text-gold-500">Contato</Link>
          </nav>

          <div className="flex gap-4 text-gray-400">
             <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
             <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
             <a href="#" className="hover:text-gold-500 transition-colors"><PenTool size={20} /></a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Renata Costa. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-gray-300">Política de Privacidade</a>
             <a href="#" className="hover:text-gray-300">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;