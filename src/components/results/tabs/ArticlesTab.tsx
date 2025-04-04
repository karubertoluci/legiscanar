
import React, { useState } from 'react';
import { Article } from '@/data/articles';
import { BusinessSegment } from '@/data/segments';
import { getArticlesByTopic } from '../ArticlesByTopic';
import ArticlesFilters from './articles/ArticlesFilters';
import ArticlesContent from './articles/ArticlesContent';
import ChartSection from './articles/ChartSection';
import { Topic, FilterType, ViewMode } from '../types';

interface ArticlesTabProps {
  segment: BusinessSegment;
  filteredArticles: Article[];
  relevantArticles: Article[];
  positiveCount: number;
  negativeCount: number;
  topics: Topic[];
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: FilterType;
  setFilterType: (type: FilterType) => void;
  expandedArticleId: string | null;
  setExpandedArticleId: (id: string | null) => void;
  articlesByTopic: Record<string, Article[]>;
  highlights: any[];
  onAddHighlight: (articleId: string, text: string) => void;
  onRemoveHighlight: (id: string) => void;
}

const ArticlesTab: React.FC<ArticlesTabProps> = ({
  segment,
  filteredArticles,
  relevantArticles,
  positiveCount,
  negativeCount,
  topics,
  viewMode,
  setViewMode,
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  expandedArticleId,
  setExpandedArticleId,
  articlesByTopic,
  highlights,
  onAddHighlight,
  onRemoveHighlight
}) => {
  const [chartsCollapsed, setChartsCollapsed] = useState(false);
  const neutralCount = 0; // Define neutralCount
  
  // Define displayedArticles for ArticlesContent
  const displayedArticles = filteredArticles;
  const [selectedBookFilter, setSelectedBookFilter] = useState<string | null>(null);
  const [selectedTitleFilter, setSelectedTitleFilter] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Chart Section */}
      <ChartSection 
        filteredArticles={filteredArticles}
        segmentId={segment.id}
        segment={segment}
        relevantArticles={relevantArticles}
        setExpandedArticleId={setExpandedArticleId}
        expanded={!chartsCollapsed}
        toggleExpanded={() => setChartsCollapsed(!chartsCollapsed)}
      />
      
      {/* Search and Filters */}
      <ArticlesFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
        setFilterType={setFilterType}
        viewMode={viewMode}
        setViewMode={setViewMode}
        positiveCount={positiveCount}
        negativeCount={negativeCount}
        neutralCount={neutralCount}
        totalCount={relevantArticles.length}
      />
      
      {/* Article Content (List or Table) */}
      <ArticlesContent 
        filteredArticles={filteredArticles}
        displayedArticles={displayedArticles}
        selectedBookFilter={selectedBookFilter}
        selectedTitleFilter={selectedTitleFilter}
        setSelectedBookFilter={setSelectedBookFilter}
        setSelectedTitleFilter={setSelectedTitleFilter}
        segment={segment}
        topics={topics}
        viewMode={viewMode}
        expandedArticleId={expandedArticleId}
        setExpandedArticleId={setExpandedArticleId}
        articlesByTopic={articlesByTopic}
        highlights={highlights}
        onAddHighlight={onAddHighlight}
        onRemoveHighlight={onRemoveHighlight}
      />
    </div>
  );
};

export default ArticlesTab;
