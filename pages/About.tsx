import React from 'react';
import { GraduationCap, Briefcase, Heart, Sparkles, Award, Target } from 'lucide-react';
import Button from '../components/Button';

// Caminho para a imagem na pasta public
const renataProfile = "/renata.jpg";

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in bg-dark-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-sm text-gold-400 font-medium">Sobre Mim</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cuidando de Você<br />
              com <span className="gold-gradient-text">Ciência</span> e <span className="gold-gradient-text">Empatia</span>
            </h1>

            <div className="gold-divider w-24 mb-6"></div>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Conheça a trajetória e a filosofia de trabalho de <span className="text-gold-400 font-semibold">Renata Costa</span>,
              uma profissional dedicada à sua saúde e bem-estar.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, number: '15+', label: 'Anos' },
                { icon: Heart, number: '500+', label: 'Clientes' },
                { icon: Target, number: '98%', label: 'Satisfação' }
              ].map((stat, idx) => (
                <div key={idx} className="glass-gold p-4 rounded-xl text-center hover-lift">
                  <stat.icon className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold gold-gradient-text">{stat.number}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem com Moldura Dourada */}
          <div className="relative h-[400px] lg:h-[500px] w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 gold-border-animated rounded-3xl overflow-hidden gold-glow">
              <img
                src={renataProfile}
                onError={(e) => {
                  console.error("Erro ao carregar imagem:", renataProfile);
                  const img = e.currentTarget as HTMLImageElement;
                  if (img.src !== window.location.origin + '/renata.jpg') {
                    img.src = window.location.origin + '/renata.jpg';
                  } else {
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      parent.style.backgroundColor = '#1e1e1e';
                      parent.innerHTML = '<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#d4af37; text-align:center; padding:20px;"><div style="width:80px; height:80px; border-radius:50%; background:linear-gradient(135deg, #d4af37, #eecf76); display:flex; align-items:center; justify-content:center; margin-bottom:20px;"><svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><strong>Renata Costa</strong><br/><span style="font-size:0.8em; color: #9ca3af; margin-top:10px;">Enfermeira Esteta</span></div>';
                    }
                  }
                }}
                onLoad={() => console.log("Imagem About carregada!")}
                alt="Enfermeira Renata Costa"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Efeito Shimmer */}
            <div className="absolute inset-0 animate-shimmer pointer-events-none rounded-3xl"></div>
          </div>
        </div>

        {/* Jornada */}
        <div className="max-w-3xl mx-auto mb-24 animate-fade-in-up">
          <div className="glass-gold p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                <Heart className="w-6 h-6 text-dark-900" />
              </div>
              Minha Jornada
            </h2>
            <div className="gold-divider w-24 mb-6"></div>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Uma breve biografia pessoal apresentando Renata, sua paixão pela enfermagem e um toque pessoal sobre sua jornada.
              Desde cedo, encontrei na área da saúde uma forma de fazer a diferença na vida das pessoas.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Essa vocação me guiou através de uma jornada de aprendizado contínuo e dedicação, sempre com o objetivo de oferecer
              um cuidado que vai além do técnico, alcançando o bem-estar integral de cada paciente.
            </p>
          </div>
        </div>

        {/* Qualificações */}
        <div className="mb-24">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-4">
              <Award className="w-4 h-4 text-gold-500" />
              <span className="text-sm text-gold-400 font-medium">Excelência</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Qualificações e <span className="gold-gradient-text">Filosofia</span>
            </h2>
            <div className="gold-divider w-24 mx-auto mb-6"></div>
            <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg">
              Minha abordagem é pautada na ciência, na ética e em um atendimento humanizado,
              buscando sempre os melhores resultados para cada paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Formação Acadêmica',
                desc: 'Lista de credenciais acadêmicas, especializações e certificações relevantes na área de estética e saúde.',
                color: 'from-gold-500 to-gold-600'
              },
              {
                icon: Briefcase,
                title: 'Experiência Profissional',
                desc: 'Resumo da experiência, destacando locais de trabalho e principais responsabilidades ao longo da carreira.',
                color: 'from-gold-400 to-gold-500'
              },
              {
                icon: Heart,
                title: 'Filosofia de Trabalho',
                desc: 'Explicação da abordagem ao cuidado do paciente, valores e diferenciais profissionais.',
                color: 'from-gold-600 to-gold-400'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="gold-border-animated rounded-2xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <div className="bg-dark-800 p-8">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-dark-900 h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="gold-divider w-12 mb-4"></div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center gold-border-animated rounded-3xl p-12 gold-glow animate-fade-in-up">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-sm text-gold-400 font-medium">Comece Agora</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronta para iniciar sua jornada de <span className="gold-gradient-text">cuidado</span> e <span className="gold-gradient-text">bem-estar?</span>
            </h2>

            <div className="gold-divider w-24 mx-auto mb-6"></div>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Estou aqui para ajudar você a alcançar seus objetivos de saúde e beleza com um atendimento
              personalizado e de alta qualidade. Vamos conversar?
            </p>

            <Button className="mx-auto gold-glow-hover">Conheça meus Serviços</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;