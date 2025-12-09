import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Sparkles, Star, Award } from 'lucide-react';
import Button from '../components/Button';

// Caminho para a imagem na pasta public
const renataProfile = "/renata.jpg";

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section com Gradiente Dourado */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Efeito de Brilho de Fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl opacity-10 animate-pulse-gold"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl opacity-10 animate-pulse-gold" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              {/* Badge Elegante */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-sm text-gold-400 font-medium">Estética Premium</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transforme sua <span className="gold-gradient-text">Beleza</span>,<br />
                Realce sua <span className="gold-gradient-text">Confiança</span>
              </h1>

              <div className="gold-divider w-24"></div>

              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                Com a expertise da enfermeira esteta <span className="text-gold-400 font-semibold">Renata Costa</span>,
                descubra tratamentos avançados para o bem-estar e estética, projetados exclusivamente para você.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button onClick={() => window.location.hash = '#servicos'} className="gold-glow-hover">
                  Nossos Serviços
                </Button>
                <Button variant="outline" onClick={() => window.location.hash = '#contato'}>
                  Fale Conosco
                </Button>
              </div>

              {/* Stats Elegantes */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '500+', label: 'Clientes Satisfeitos' },
                  { number: '15+', label: 'Anos de Experiência' },
                  { number: '98%', label: 'Taxa de Satisfação' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold gold-gradient-text">{stat.number}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagem com Borda Dourada Elegante */}
            <div className="relative h-[400px] lg:h-[600px] w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 gold-border-animated rounded-3xl overflow-hidden gold-glow">
                <img
                  src={renataProfile}
                  onError={(e) => {
                    console.error("Erro ao carregar imagem:", renataProfile);
                    console.error("Tentando caminho alternativo...");
                    // Tenta caminho alternativo
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src !== window.location.origin + '/renata.jpg') {
                      img.src = window.location.origin + '/renata.jpg';
                    } else {
                      // Se ainda falhar, mostra placeholder
                      img.style.display = 'none';
                      const parent = img.parentElement;
                      if (parent) {
                        parent.style.backgroundColor = '#1e1e1e';
                        parent.innerHTML = '<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#d4af37; text-align:center; padding:20px;"><div style="width:80px; height:80px; border-radius:50%; background:linear-gradient(135deg, #d4af37, #eecf76); display:flex; align-items:center; justify-content:center; margin-bottom:20px;"><svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><strong>Renata Costa</strong><br/><span style="font-size:0.8em; color: #9ca3af; margin-top:10px;">Enfermeira Esteta</span></div>';
                      }
                    }
                  }}
                  onLoad={() => {
                    console.log("Imagem carregada com sucesso!");
                  }}
                  alt="Enfermeira Renata Costa"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
              {/* Efeito de Shimmer */}
              <div className="absolute inset-0 animate-shimmer pointer-events-none rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview com Cards Elegantes */}
      <section id="servicos" className="py-24 bg-dark-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-4">
              <Star className="w-4 h-4 text-gold-500" />
              <span className="text-sm text-gold-400 font-medium">Serviços Exclusivos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tratamentos <span className="gold-gradient-text">Premium</span>
            </h2>
            <div className="gold-divider w-24 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Oferecemos uma gama de tratamentos de ponta para atender às suas necessidades específicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Emagrecimento com Mounjaro',
                desc: 'Programas de emagrecimento com supervisão médica, utilizando Mounjaro para ajudá-la a atingir seus objetivos com segurança.',
                img: 'https://picsum.photos/id/400/600/400',
                icon: '💊'
              },
              {
                title: 'Botox & Preenchedores',
                desc: 'Rejuvenescimento facial não cirúrgico e redução de rugas para um visual renovado e natural.',
                img: 'https://picsum.photos/id/64/600/400',
                icon: '✨'
              },
              {
                title: 'Transplantes Capilares',
                desc: 'Técnicas modernas de restauração capilar para resultados de aparência natural e confiança renovada.',
                img: 'https://picsum.photos/id/196/600/400',
                icon: '💇'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="gold-border-animated rounded-2xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
                </div>
                <div className="p-6 bg-dark-900">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <div className="gold-divider w-12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials com Design Premium */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        {/* Efeito de Brilho */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500 rounded-full filter blur-3xl opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-4">
              <Award className="w-4 h-4 text-gold-500" />
              <span className="text-sm text-gold-400 font-medium">Depoimentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O que Nossos <span className="gold-gradient-text">Pacientes</span> Dizem
            </h2>
            <div className="gold-divider w-24 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              Histórias reais de transformação e confiança renovada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jessica S.",
                initials: "JS",
                treatment: "Programa de Emagrecimento",
                text: "A Renata é incrivelmente experiente e solidária. O programa de emagrecimento foi adaptado às minhas necessidades e vi resultados incríveis. Sinto-me mais saudável e confiante do que nunca!",
                rating: 5
              },
              {
                name: "Michael A.",
                initials: "MA",
                treatment: "Tratamento com Botox",
                text: "Eu estava nervoso em fazer Botox pela primeira vez, mas o profissionalismo e a abordagem gentil da Renata me deixaram à vontade. Os resultados são sutis, naturais e exatamente o que eu queria.",
                rating: 5
              },
              {
                name: "Emily F.",
                initials: "EF",
                treatment: "Restauração Capilar",
                text: "Todo o processo foi perfeito e os resultados mudaram minha vida. Renata e sua equipe são verdadeiros especialistas. Recomendo muito os serviços de transplante capilar deles.",
                rating: 5
              }
            ].map((review, idx) => (
              <div
                key={idx}
                className="glass-gold p-8 rounded-2xl hover-lift"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Estrelas */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-gray-300 italic text-sm leading-relaxed mb-6">
                  "{review.text}"
                </p>

                <div className="gold-divider w-full mb-6"></div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center font-bold text-dark-900 text-lg">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-xs text-gold-400">{review.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Premium */}
      <section id="contato" className="py-24 bg-dark-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gold-border-animated rounded-3xl p-8 lg:p-12 gold-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
                  <Mail className="w-4 h-4 text-gold-500" />
                  <span className="text-sm text-gold-400 font-medium">Contato</span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-6">
                  Tem alguma <span className="gold-gradient-text">dúvida?</span>
                </h2>

                <div className="gold-divider w-24 mb-6"></div>

                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Preencha o formulário e nossa equipe entrará em contato com você em breve.
                  Estamos aqui para ajudar a responder a todas as suas perguntas.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Mail, text: 'contato@renatacosta.com' },
                    { icon: Phone, text: '(11) 98765-4321' },
                    { icon: MapPin, text: 'Av. Paulista, 1234 - São Paulo, SP' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-gray-300 group hover-lift p-3 rounded-lg glass-gold">
                      <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                        <item.icon className="text-dark-900" size={20} />
                      </div>
                      <span className="group-hover:text-gold-400 transition-colors">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div>
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full glass-gold rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full glass-gold rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full glass-gold rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Sua mensagem..."
                    rows={4}
                    className="w-full glass-gold rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all resize-none"
                  ></textarea>
                </div>
                <Button className="w-full gold-glow-hover">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;