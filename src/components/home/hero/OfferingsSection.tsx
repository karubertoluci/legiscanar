
import React from 'react';
import { FileBarChart, List, PieChart } from 'lucide-react';

const OfferingsSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-4">O que oferecemos</h2>
      <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Nossa ferramenta de análise personalizada destaca exatamente o que você precisa 
        saber sobre a Reforma Tributária com base no seu setor de atuação.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Análise de Relevância */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-red-500 mb-4">
            <PieChart className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Análise de relevância</h3>
          <p className="text-gray-700">
            Identifica quais artigos da reforma tributária têm maior impacto para o seu segmento, 
            com classificação para priorizar sua leitura.
          </p>
        </div>
        
        {/* Análise de Impacto */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-red-500 mb-4">
            <List className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Análise de impacto</h3>
          <p className="text-gray-700">
            Avalia se o artigo é favorável, neutro ou desfavorável para seu negócio, 
            considerando carga tributária, burocracia e segurança jurídica.
          </p>
        </div>
        
        {/* Relatório Personalizado */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-red-500 mb-4">
            <FileBarChart className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Relatório personalizado</h3>
          <p className="text-gray-700">
            Gera um documento completo e personalizado com análise detalhada dos impactos 
            da reforma para o seu CNAE específico e setor de atuação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
