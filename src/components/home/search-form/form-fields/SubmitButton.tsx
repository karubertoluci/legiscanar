
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

interface SubmitButtonProps {
  isLoading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading }) => {
  return (
    <div className="pt-4">
      <Button 
        type="submit" 
        className="bg-orange-500 hover:bg-orange-600 transition-colors w-full py-6"
        disabled={isLoading}
        size="lg"
      >
        {isLoading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processando...
          </span>
        ) : (
          <span className="flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Gerar meu relatório personalizado
          </span>
        )}
      </Button>
      <p className="text-xs text-center text-gray-500 mt-2">
        Ao clicar em "Gerar meu relatório personalizado", você concorda com nossa política de privacidade 
        e permite que entremos em contato para apresentar soluções.
      </p>
    </div>
  );
};

export default SubmitButton;
