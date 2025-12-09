import React from 'react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import Button from '../components/Button';

// Com HashRouter, o caminho relativo simples funciona pois o navegador continua na raiz
const renataProfile = "renata.jpg";

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
           <div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
               Cuidando de Você<br/>
               com Ciência e Empatia
             </h1>
             <p className="text-gray-400 text-lg mb-8 leading-relaxed">
               Conheça a trajetória e a filosofia de trabalho de Renata Costa, uma profissional dedicada à sua saúde e bem-estar.
             </p>
           </div>
           <div className="relative h-[400px] lg:h-[500px] w-full bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={renataProfile}
                onError={(e) => {
                  console.warn("Imagem não encontrada:", renataProfile);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.style.backgroundColor = '#1e1e1e';
                  e.currentTarget.parentElement.innerHTML = '<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#eecf76; text-align:center; padding:20px; border: 2px dashed #eecf76; border-radius: 1.5rem;"><strong>Foto não carregou</strong><br/><span style="font-size:0.8em; color: #9ca3af; margin-top:10px;">Confirme se renata.jpg está na mesma pasta do index.html</span></div>';
                }}
                alt="Enfermeira Renata Costa" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
           <h2 className="text-2xl font-bold text-white mb-6">Minha Jornada</h2>
           <p className="text-gray-400 mb-6 leading-relaxed">
             Uma breve biografia pessoal apresentando Renata, sua paixão pela enfermagem e um toque pessoal sobre sua jornada. Desde cedo, encontrei na área da saúde uma forma de fazer a diferença na vida das pessoas.
           </p>
           <p className="text-gray-400 leading-relaxed">
             Essa vocação me guiou através de uma jornada de aprendizado contínuo e dedicação, sempre com o objetivo de oferecer um cuidado que vai além do técnico, alcançando o bem-estar integral de cada paciente.
           </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Qualificações e Filosofia</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Minha abordagem é pautada na ciência, na ética e em um atendimento humanizado, buscando sempre os melhores resultados para cada paciente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-dark-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors">
                <GraduationCap className="text-gold-500 mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold text-white mb-3">Formação Acadêmica</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Lista de credenciais acadêmicas, especializações e certificações relevantes na área de estética e saúde.
                </p>
             </div>
             <div className="bg-dark-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors">
                <Briefcase className="text-gold-500 mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold text-white mb-3">Experiência Profissional</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Resumo da experiência, destacando locais de trabalho e principais responsabilidades ao longo da carreira.
                </p>
             </div>
             <div className="bg-dark-800 p-8 rounded-xl border border-white/5 hover:border-gold-500/50 transition-colors">
                <Heart className="text-gold-500 mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold text-white mb-3">Filosofia de Trabalho</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Explicação da abordagem ao cuidado do paciente, valores e diferenciais profissionais.
                </p>
             </div>
          </div>
        </div>

        <div className="text-center bg-dark-800 rounded-3xl p-12 border border-white/5">
           <h2 className="text-3xl font-bold text-white mb-6">Pronta para iniciar sua jornada de cuidado e bem-estar?</h2>
           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
             Estou aqui para ajudar você a alcançar seus objetivos de saúde e beleza com um atendimento personalizado e de alta qualidade. Vamos conversar?
           </p>
           <Button className="mx-auto">Conheça meus Serviços</Button>
        </div>
      </div>
    </div>
  );
};

export default About;