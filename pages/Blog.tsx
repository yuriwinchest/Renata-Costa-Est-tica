import React from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, PenTool } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "5 Dicas Essenciais para Cuidados com a Pele no Inverno",
      excerpt: "Prepare sua pele para o frio com estas dicas simples e eficazes para manter a hidratação e o brilho.",
      image: "https://picsum.photos/id/10/800/500",
      color: "bg-orange-200"
    },
    {
      id: 2,
      title: "Os Benefícios da Drenagem Linfática para a sua Saúde",
      excerpt: "Entenda como esta técnica pode desintoxicar seu corpo, reduzir o inchaço e melhorar a circulação.",
      image: "https://picsum.photos/id/20/800/500",
      color: "bg-teal-700"
    },
    {
      id: 3,
      title: "Guia Completo de Nutrição para uma Pele Radiante",
      excerpt: "Descubra os alimentos que nutrem sua pele de dentro para fora, promovendo um brilho natural.",
      image: "https://picsum.photos/id/30/800/500",
      color: "bg-red-400"
    },
    {
      id: 4,
      title: "Como a Meditação Pode Melhorar sua Pele e Bem-Estar",
      excerpt: "Aprenda técnicas de mindfulness que reduzem o estresse e promovem uma pele mais saudável.",
      image: "https://picsum.photos/id/40/800/500",
      color: "bg-slate-500"
    },
    {
      id: 5,
      title: "Escolhendo o Sérum Certo para o seu Tipo de Pele",
      excerpt: "Um guia para decifrar ingredientes e encontrar o produto perfeito para as necessidades da sua pele.",
      image: "https://picsum.photos/id/50/800/500",
      color: "bg-yellow-600"
    },
    {
      id: 6,
      title: "Os Segredos de uma Massagem Relaxante Eficaz",
      excerpt: "Dicas profissionais para transformar sua rotina de massagem em uma experiência de spa em casa.",
      image: "https://picsum.photos/id/60/800/500",
      color: "bg-green-800"
    }
  ];

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-dark-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog de Saúde e Beleza</h1>
        <p className="text-gray-400 text-lg">Artigos e dicas para o seu bem-estar</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                 {/* Overlay to simulate the color grading in the design reference */}
                 <div className={`absolute inset-0 opacity-40 mix-blend-color ${post.color}`}></div>
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
           <button className="text-gray-500 hover:text-white disabled:opacity-50">
             <ChevronLeft size={20} />
           </button>
           <button className="w-10 h-10 rounded-full bg-gold-500 text-black font-bold flex items-center justify-center">1</button>
           <button className="w-10 h-10 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-colors">2</button>
           <button className="w-10 h-10 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-colors">3</button>
           <span className="text-gray-500">...</span>
           <button className="w-10 h-10 rounded-full hover:bg-white/10 text-white flex items-center justify-center transition-colors">5</button>
           <button className="text-gray-500 hover:text-white">
             <ChevronRight size={20} />
           </button>
        </div>
      </div>
      
      {/* Simple Footer Links for Socials matching Blog design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-white/5 pt-12 flex justify-center gap-8">
          <Instagram className="text-gray-400 hover:text-gold-500 cursor-pointer" size={24} />
          <Facebook className="text-gray-400 hover:text-gold-500 cursor-pointer" size={24} />
          <PenTool className="text-gray-400 hover:text-gold-500 cursor-pointer" size={24} />
      </div>
    </div>
  );
};

export default Blog;