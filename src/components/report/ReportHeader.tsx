
import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';
import { BusinessSegment } from '@/data/segments';
import { Button } from '@/components/ui/button';
import ReportActions from './ReportActions';

interface ReportHeaderProps {
  segment: BusinessSegment;
  companyName?: string;
  onBackToSegments?: () => void;
  showBackButton?: boolean;
}

const ReportHeader: React.FC<ReportHeaderProps> = ({
  segment,
  companyName,
  onBackToSegments,
  showBackButton = true
}) => {
  const displayName = companyName || "sua empresa";
  
  return (
    <div className="flex flex-col space-y-4 mb-8 print:mb-6 border-b pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/lovable-uploads/3a0e3d3c-ea95-4482-8c76-047d5459213e.png" alt="Qive Reforma Tributária" className="h-12" />
          
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Relatório para {displayName}
            </h2>
            <p className="text-muted-foreground">
              Análise de impactos da reforma tributária no segmento <span className="font-medium">{segment.name}</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </Button>
          
          <Button className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Baixar PDF</span>
          </Button>
        </div>
      </div>
      
      {showBackButton && onBackToSegments && (
        <Button 
          variant="ghost" 
          className="self-start hover:bg-secondary flex items-center gap-1"
          onClick={onBackToSegments}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar para segmentos
        </Button>
      )}
    </div>
  );
};

export default ReportHeader;
