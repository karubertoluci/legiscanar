
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FilterType } from './types';

interface FilterBarProps {
  positiveCount: number;
  negativeCount: number;
  neutralCount: number;  // Added neutralCount prop
  totalCount: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: FilterType;
  setFilterType: (type: FilterType) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  positiveCount,
  negativeCount,
  neutralCount,  // Added neutralCount prop
  totalCount,
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar artigos..."
          className="pl-8 w-full md:w-[200px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex gap-1.5">
        <Button
          size="sm"
          variant={filterType === 'all' ? "default" : "outline"}
          onClick={() => setFilterType('all')}
          className="text-xs whitespace-nowrap"
        >
          Todos ({totalCount})
        </Button>
        <Button
          size="sm"
          variant={filterType === 'positive' ? "default" : "outline"}
          onClick={() => setFilterType('positive')}
          className="text-xs whitespace-nowrap"
        >
          Positivos ({positiveCount})
        </Button>
        <Button
          size="sm"
          variant={filterType === 'negative' ? "default" : "outline"}
          onClick={() => setFilterType('negative')}
          className="text-xs whitespace-nowrap"
        >
          Negativos ({negativeCount})
        </Button>
        {neutralCount > 0 && (
          <Button
            size="sm"
            variant={filterType === 'neutral' ? "default" : "outline"}
            onClick={() => setFilterType('neutral')}
            className="text-xs whitespace-nowrap"
          >
            Neutros ({neutralCount})
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
