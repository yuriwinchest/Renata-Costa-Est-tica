import React, { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/Button';

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const detailedServices = [
    {
      title: "Emagrecimento com Mounjaro",
      category: "TRATAMENTO DE PONTA",
      desc: "Oferecemos programas de emagrecimento personalizados e com supervisão profissional, utilizando Mounjaro, uma medicação inovadora para o controle de peso. Nosso objetivo é ajudá-lo a alcançar suas metas de forma segura, eficaz e sustentável.",
      image: "https://picsum.photos/id/400/800/600",
      benefits: [
        "Perda de Peso Eficaz: Alcance resultados significativos com um tratamento clinicamente comprovado.",
        "Acompanhamento Médico: Todo o processo é monitorado de perto para garantir sua segurança e bem-estar.",
        "Melhora da Saúde Metabólica: Além do emagrecimento, o tratamento auxilia no controle glicêmico."
      ],
      cta: "Saiba Mais e Agende"
    },
    {
      title: "Botox e Preenchedores",
      category: "REJUVENESCIMENTO FACIAL",
      desc: "Redescubra uma aparência mais jovem e revitalizada com nossos tratamentos de Botox e preenchedores. Especializados em técnicas não cirúrgicas, focamos em resultados naturais que suavizam rugas e linhas de expressão.",
      image: "https://picsum.photos/id/64/800/600",
      benefits: [
        "Redução de Rugas: Suavize linhas na testa, ao redor dos olhos e outras áreas para um visual descansado.",
        "Resultados Naturais: Nossa filosofia é realçar sua beleza, não alterá-la, mantendo a expressividade.",
        "Procedimento Rápido e Seguro: Tratamentos minimamente invasivos com pouco ou nenhum tempo de recuperação."
      ],
      cta: "Agende sua Avaliação"
    },
    {
      title: "Transplantes Capilares",
      category: "RESTAURAÇÃO CAPILAR",
      desc: "Recupere a densidade capilar e a sua autoestima com nossas avançadas técnicas de transplante capilar. Utilizamos os métodos mais modernos para garantir resultados de aparência natural.",
      image: "https://picsum.photos/id/196/800/600",
      benefits: [
        "Aparência Natural: As técnicas FUE e FUT garantem que o cabelo transplantado cresça como o seu natural.",
        "Solução Permanente: O transplante capilar oferece uma solução duradoura para a queda de cabelo.",
        "Confiança Renovada: Um cabelo mais cheio pode ter um impacto profundo e positivo na sua autoimagem."
      ],
      cta: "Consultar um Especialista"
    }
  ];

  const faqs = [
    { q: "Quais são os cuidados necessários após o tratamento com Botox?", a: "Após a aplicação, evite deitar-se por 4 horas, não massageie a região e evite exercícios físicos intensos no dia do procedimento." },
    { q: "O tratamento de emagrecimento com Mounjaro é seguro?", a: "Sim, quando acompanhado por profissionais. Realizamos uma avaliação completa antes de iniciar qualquer protocolo medicamentoso." },
    { q: "Quanto tempo dura a recuperação de um transplante capilar?", a: "A recuperação inicial leva cerca de 7 a 10 dias. O resultado final começa a ser visível após 6 meses." },
    { q: "Os resultados dos preenchedores faciais são imediatos?", a: "Sim, o volume é reposto imediatamente, embora o resultado final possa ser melhor observado após a diminuição de qualquer inchaço leve, em cerca de 2 semanas." }
  ];

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos Serviços</h1>
          <p className="text-gray-400">
            Explore nossa gama completa de tratamentos estéticos e de bem-estar. Cada serviço é realizado com a máxima precisão, cuidado e com o objetivo de realçar sua beleza natural e confiança.
          </p>
        </div>
      </div>

      <div className="space-y-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {detailedServices.map((service, index) => (
          <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            <div className="w-full lg:w-1/2">
               <div className="relative">
                 <div className="absolute inset-0 bg-gold-500 blur-3xl opacity-10 rounded-full"></div>
                 <img src={service.image} alt={service.title} className="relative z-10 rounded-2xl shadow-2xl w-full border border-white/5" />
               </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-gold-500 font-bold tracking-wider text-xs uppercase">{service.category}</span>
              <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => {
                  const [title, desc] = benefit.split(': ');
                  return (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle className="text-gold-500 shrink-0 mt-1" size={20} />
                      <p className="text-sm text-gray-300">
                        <strong className="text-white block mb-1">{title}:</strong>
                        {desc}
                      </p>
                    </li>
                  );
                })}
              </ul>
              
              <div className="pt-4">
                <Button>{service.cta}</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mt-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-bold tracking-wider text-xs uppercase">TIRE SUAS DÚVIDAS</span>
          <h2 className="text-3xl font-bold text-white mt-2">Perguntas Frequentes</h2>
          <p className="text-gray-400 mt-2">Encontre respostas para as perguntas mais comuns sobre nossos procedimentos e políticas.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-dark-800 rounded-lg border border-white/5 overflow-hidden">
              <button 
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                onClick={() => toggleFaq(idx)}
              >
                <span className="font-bold text-white">{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="text-gold-500" /> : <ChevronDown className="text-gold-500" />}
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 pt-2 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="mt-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-800 rounded-2xl p-12 border border-white/10 text-center relative overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Pronta para transformar?</h3>
                <p className="text-gray-400 text-sm max-w-md">Agende sua consulta hoje e dê o primeiro passo em direção à sua melhor versão. Estamos aqui para responder a todas as suas perguntas.</p>
                <div className="mt-6 text-sm text-gray-400 space-y-2">
                    <div className="flex items-center gap-2"><Mail size={16} className="text-gold-500"/> contato@renatacosta.com</div>
                    <div className="flex items-center gap-2"><Phone size={16} className="text-gold-500"/> (11) 98765-4321</div>
                    <div className="flex items-center gap-2"><MapPin size={16} className="text-gold-500"/> Av. Paulista, 1234</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 min-w-[200px]">
                 <p className="text-sm text-gray-400 mb-2">Entre em contato para uma avaliação personalizada.</p>
                 <Button>Agendar Consulta</Button>
                 <Button variant="outline">Fale Conosco</Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;