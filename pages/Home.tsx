import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/Button';

// Com HashRouter, o caminho relativo simples funciona pois o navegador continua na raiz
const renataProfile = "renata.jpg";

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforme sua <span className="text-white">Beleza</span>,<br />
                Realce sua <span className="text-white">Confiança</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                Com a expertise da enfermeira esteta Renata Costa, descubra tratamentos avançados para o bem-estar e estética, projetados para você.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => window.location.hash = '#servicos'}>Nossos Serviços</Button>
                <Button variant="outline" onClick={() => window.location.hash = '#contato'}>Fale Conosco</Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-800 rounded-3xl overflow-hidden shadow-2xl shadow-gold-900/20">
              <img 
                src={renataProfile}
                onError={(e) => {
                  console.warn("Imagem não encontrada:", renataProfile);
                  // Fallback visual informativo
                  e.currentTarget.style.display = 'none'; 
                  e.currentTarget.parentElement.style.backgroundColor = '#1e1e1e';
                  e.currentTarget.parentElement.innerHTML = '<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#eecf76; text-align:center; padding:20px; border: 2px dashed #eecf76; border-radius: 1.5rem;"><strong>Foto não carregou</strong><br/><span style="font-size:0.8em; color: #9ca3af; margin-top:10px;">Confirme se renata.jpg está na mesma pasta do index.html</span></div>';
                }}
                alt="Enfermeira Renata Costa" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="servicos" className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Serviços Exclusivos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Oferecemos uma gama de tratamentos de ponta para atender às suas necessidades específicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Emagrecimento com Mounjaro',
                desc: 'Programas de emagrecimento com supervisão médica, utilizando Mounjaro para ajudá-la a atingir seus objetivos com segurança.',
                img: 'https://picsum.photos/id/400/600/400'
              },
              {
                title: 'Botox & Preenchedores',
                desc: 'Rejuvenescimento facial não cirúrgico e redução de rugas para um visual renovado e natural.',
                img: 'https://picsum.photos/id/64/600/400'
              },
              {
                title: 'Transplantes Capilares',
                desc: 'Técnicas modernas de restauração capilar para resultados de aparência natural e confiança renovada.',
                img: 'https://picsum.photos/id/196/600/400'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-dark-900 rounded-xl overflow-hidden border border-white/5 hover:border-gold-500/50 transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">O que Nossos Pacientes Dizem</h2>
            <p className="text-gray-400">Histórias reais de nossos valiosos clientes que experimentaram o cuidado e a experiência de Renata Costa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jessica S.",
                initials: "JS",
                treatment: "Programa de Emagrecimento",
                text: "A Renata é incrivelmente experiente e solidária. O programa de emagrecimento foi adaptado às minhas necessidades e vi resultados incríveis. Sinto-me mais saudável e confiante do que nunca!"
              },
              {
                name: "Michael A.",
                initials: "MA",
                treatment: "Tratamento com Botox",
                text: "Eu estava nervoso em fazer Botox pela primeira vez, mas o profissionalismo e a abordagem gentil da Renata me deixaram à vontade. Os resultados são sutis, naturais e exatamente o que eu queria."
              },
              {
                name: "Emily F.",
                initials: "EF",
                treatment: "Restauração Capilar",
                text: "Todo o processo foi perfeito e os resultados mudaram minha vida. Renata e sua equipe são verdadeiros especialistas. Recomendo muito os serviços de transplante capilar deles."
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-dark-800 p-8 rounded-xl border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-transparent border border-gold-500 text-gold-500 flex items-center justify-center font-bold text-lg">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.treatment}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-900 rounded-3xl p-8 lg:p-12 border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Tem alguma dúvida?</h2>
                <p className="text-gray-400 mb-8">
                  Preencha o formulário e nossa equipe entrará em contato com você em breve. 
                  Estamos aqui para ajudar a responder a todas as suas perguntas.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300">
                    <Mail className="text-gold-500" size={20} />
                    <span>contato@renatacosta.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Phone className="text-gold-500" size={20} />
                    <span>(11) 98765-4321</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <MapPin className="text-gold-500" size={20} />
                    <span>Av. Paulista, 1234 - São Paulo, SP</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Nome" className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="E-mail" className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <input type="tel" placeholder="Telefone" className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <textarea placeholder="Sua mensagem..." rows={4} className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"></textarea>
                </div>
                <Button className="w-full">Enviar Mensagem</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;