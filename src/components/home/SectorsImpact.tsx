
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Store, Briefcase, Building, BarChart4, HeartPulse, GraduationCap, Banknote, Truck } from 'lucide-react';

interface SectorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SectorCard: React.FC<SectorCardProps> = ({ icon, title, description }) => (
  <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
    <CardContent className="p-6 flex flex-col items-center h-full">
      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-center">
        {description}
      </p>
    </CardContent>
  </Card>
);

const SectorsImpact = () => {
  const sectors = [
    {
      icon: <Store className="h-8 w-8 text-blue-600" />,
      title: "Comércio e Varejo",
      description: "Impacto nas alíquotas e fim da cumulatividade dos tributos, com potencial redução da carga tributária em produtos essenciais."
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Indústria",
      description: "Simplificação do sistema e recuperação de créditos em toda cadeia produtiva, eliminando a tributação em cascata."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Prestação de Serviços",
      description: "Mudanças significativas com a substituição do ISS pelo IBS, com regras de transição especiais para o setor."
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-blue-600" />,
      title: "Tecnologia",
      description: "Maior segurança jurídica e possibilidade de aproveitamento de créditos de bens e serviços utilizados na operação."
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-blue-600" />,
      title: "Saúde",
      description: "Tratamento diferenciado para medicamentos e serviços essenciais, com possível redução de custos ao consumidor final."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Educação",
      description: "Regime específico com alíquotas diferenciadas e regras especiais para instituições de ensino."
    },
    {
      icon: <Banknote className="h-8 w-8 text-blue-600" />,
      title: "Serviços Financeiros",
      description: "Nova metodologia de tributação para operações financeiras, com impacto direto nos custos de transação bancária."
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Transporte e Logística",
      description: "Mudanças na tributação interestadual e maior clareza para operações de transporte com o princípio do destino."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-4">Setores Impactados pela Reforma</h2>
        
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-orange-500 rounded"></div>
        </div>
        
        <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          A Reforma Tributária traz mudanças específicas para diferentes setores da economia. 
          Conheça os principais impactos no seu segmento de atuação.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <SectorCard 
              key={index}
              icon={sector.icon}
              title={sector.title}
              description={sector.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsImpact;
