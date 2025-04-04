
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Store, Briefcase, Building, BarChart4, HeartPulse, GraduationCap, Banknote, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFormDialogContext } from './FormDialogContext';
import { businessSegments } from '@/data/segments';

interface SectorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onLearnMore: () => void;
}

const SectorCard: React.FC<SectorCardProps> = ({ icon, title, description, onLearnMore }) => (
  <Card className="border border-orange-100 shadow-sm hover:shadow-md transition-shadow h-full bg-gradient-to-br from-orange-50/50 to-white min-w-[300px] mx-2">
    <CardContent className="p-6 flex flex-col items-center h-full">
      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-center mb-4">
        {description}
      </p>
      <div className="mt-auto pt-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onLearnMore}
          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 border-orange-200"
        >
          Saiba mais →
        </Button>
      </div>
    </CardContent>
  </Card>
);

const SectorsImpact = () => {
  const { openFormDialog } = useFormDialogContext();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  
  const sectors = [
    {
      icon: <Store className="h-8 w-8 text-orange-500" />,
      title: "Comércio e Varejo",
      description: "Impacto nas alíquotas e fim da cumulatividade dos tributos, com potencial redução da carga tributária em produtos essenciais.",
      segmentId: "comercio_varejo"
    },
    {
      icon: <Building className="h-8 w-8 text-orange-500" />,
      title: "Indústria",
      description: "Simplificação do sistema e recuperação de créditos em toda cadeia produtiva, eliminando a tributação em cascata.",
      segmentId: "industria"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-orange-500" />,
      title: "Prestação de Serviços",
      description: "Mudanças significativas com a substituição do ISS pelo IBS, com regras de transição especiais para o setor.",
      segmentId: "servicos"
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-orange-500" />,
      title: "Tecnologia",
      description: "Maior segurança jurídica e possibilidade de aproveitamento de créditos de bens e serviços utilizados na operação.",
      segmentId: "tecnologia"
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-orange-500" />,
      title: "Saúde",
      description: "Tratamento diferenciado para medicamentos e serviços essenciais, com possível redução de custos ao consumidor final.",
      segmentId: "saude"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
      title: "Educação",
      description: "Regime específico com alíquotas diferenciadas e regras especiais para instituições de ensino.",
      segmentId: "educacao"
    },
    {
      icon: <Banknote className="h-8 w-8 text-orange-500" />,
      title: "Serviços Financeiros",
      description: "Nova metodologia de tributação para operações financeiras, com impacto direto nos custos de transação bancária.",
      segmentId: "financeiro"
    }
  ];

  const handleLearnMore = () => {
    openFormDialog();
  };

  // Implement automatic horizontal scrolling
  const scrollStep = () => {
    if (scrollContainerRef.current && !isPausedRef.current) {
      // Add small increments to create smooth scrolling effect
      scrollContainerRef.current.scrollLeft += 0.5;
      
      // Reset scroll position when reaching the end to create infinite loop effect
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      // When we reach halfway through the duplicated content, reset to the beginning
      if (container.scrollLeft >= (scrollWidth - clientWidth) / 2) {
        container.scrollLeft = 0;
      }
    }
    
    animationRef.current = requestAnimationFrame(scrollStep);
  };

  // Start scrolling animation when component mounts
  useEffect(() => {
    animationRef.current = requestAnimationFrame(scrollStep);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Pause scrolling on mouse enter, resume on mouse leave
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Setores impactos pela reforma</h2>
        
        <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          A Reforma Tributária traz mudanças específicas para diferentes setores da 
          economia. Conheça os principais impactos no seu segmento de atuação.
        </p>
        
        {/* Horizontal scrolling container */}
        <div 
          className="w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={scrollContainerRef}
            className="flex py-4 gap-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {/* Duplicate the sectors array to create a seamless loop effect */}
            {[...sectors, ...sectors].map((sector, index) => (
              <div key={index} className="flex-shrink-0">
                <SectorCard 
                  icon={sector.icon}
                  title={sector.title}
                  description={sector.description}
                  onLearnMore={handleLearnMore}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsImpact;
