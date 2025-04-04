
import { useState, useEffect } from 'react';
import { Article } from '@/data/articles';

export interface FavorabilityRelevanceData {
  name: string;
  bookId: string;
  relevanceLevel: string;
  favorable: number;
  neutral: number;
  unfavorable: number;
  total: number;
}

export interface RelevanceTotalData {
  relevanceLevel: string;
  favorable: number;
  neutral: number;
  unfavorable: number;
  total: number;
  favorablePercent: number;
  neutralPercent: number;
  unfavorablePercent: number;
}

export const useFavorabilityRelevanceData = (
  articles: Article[], 
  segmentId: string,
  relevanceFilter: string | null
) => {
  const [bookData, setBookData] = useState<FavorabilityRelevanceData[]>([]);
  const [relevanceTotals, setRelevanceTotals] = useState<RelevanceTotalData[]>([]);
  
  useEffect(() => {
    // Define book metadata
    const books = ['I', 'II', 'III', 'IV'];
    const relevanceLevels = ['Irrelevante', 'Pouco relevante', 'Moderadamente relevante', 'Muito relevante'];
    
    // Initialize data structure
    const initialData: FavorabilityRelevanceData[] = [];
    const relevanceTotalsMap: { [key: string]: RelevanceTotalData } = {};
    
    // Inicializar todos os níveis de relevância, mesmo que não tenham dados
    relevanceLevels.forEach(level => {
      relevanceTotalsMap[level] = {
        relevanceLevel: level,
        favorable: 0,
        neutral: 0,
        unfavorable: 0,
        total: 0,
        favorablePercent: 0,
        neutralPercent: 0,
        unfavorablePercent: 0
      };
    });
    
    books.forEach(bookId => {
      relevanceLevels.forEach(level => {
        initialData.push({
          name: `Livro ${bookId} - ${level}`,
          bookId,
          relevanceLevel: level,
          favorable: 0,
          neutral: 0,
          unfavorable: 0,
          total: 0
        });
      });
    });
    
    // Process articles
    articles.forEach(article => {
      // Get the book ID based on article number or metadata
      let bookId: string;
      
      if (article.metadata?.bookId) {
        bookId = article.metadata.bookId;
      } else {
        const articleNum = parseInt(article.number.replace(/\D/g, '')) || 
                         parseInt(article.id.replace(/\D/g, ''));
        
        if (articleNum <= 180) bookId = 'I';
        else if (articleNum <= 300) bookId = 'II';
        else if (articleNum <= 450) bookId = 'III';
        else bookId = 'IV';
      }
      
      // Calculate relevance for this article
      const segmentImpacts = article.impacts.filter(impact => 
        impact.segments.includes(segmentId)
      );
      
      if (segmentImpacts.length === 0) return;
      
      // Calculate the relevance score for the article
      let relevanceScore = 0;
      relevanceScore += segmentImpacts.length * 10;
      
      let positiveCount = 0;
      let negativeCount = 0;
      let neutralCount = 0;
      
      segmentImpacts.forEach(impact => {
        if (impact.type === 'positive') {
          relevanceScore += 15;
          positiveCount += 1;
        } else if (impact.type === 'negative') {
          relevanceScore += 20;
          negativeCount += 1;
        } else {
          neutralCount += 1;
        }
      });
      
      relevanceScore = Math.min(relevanceScore, 100);
      
      // Determine relevance level
      let relevanceLevel: string;
      if (relevanceScore >= 75) relevanceLevel = 'Muito relevante';
      else if (relevanceScore >= 50) relevanceLevel = 'Moderadamente relevante';
      else if (relevanceScore >= 25) relevanceLevel = 'Pouco relevante';
      else relevanceLevel = 'Irrelevante';
      
      // Apply relevance filter if present
      if (relevanceFilter && relevanceLevel !== relevanceFilter) return;
      
      // Find the data object for this book and relevance level
      const dataObject = initialData.find(
        item => item.bookId === bookId && item.relevanceLevel === relevanceLevel
      );
      
      // Also update the relevance totals map
      const relevanceTotal = relevanceTotalsMap[relevanceLevel];
      
      if (!dataObject || !relevanceTotal) return;
      
      // Update the data
      dataObject.favorable += positiveCount;
      dataObject.neutral += neutralCount;
      dataObject.unfavorable += negativeCount;
      dataObject.total += positiveCount + neutralCount + negativeCount;
      
      // Update relevance totals
      relevanceTotal.favorable += positiveCount;
      relevanceTotal.neutral += neutralCount;
      relevanceTotal.unfavorable += negativeCount;
      relevanceTotal.total += positiveCount + neutralCount + negativeCount;
    });
    
    // Calculate percentages for book data
    const finalData = initialData
      .filter(item => item.total > 0 || true) // Mantém todos os itens, mesmo com total zero
      .map(item => {
        const total = item.favorable + item.neutral + item.unfavorable;
        return {
          ...item,
          favorable: Math.round((item.favorable / (total || 1)) * 100),
          neutral: Math.round((item.neutral / (total || 1)) * 100),
          unfavorable: Math.round((item.unfavorable / (total || 1)) * 100)
        };
      });
    
    // Calculate percentages for relevance totals and convert to array
    // Garantir que todos os níveis de relevância estejam no resultado, mesmo com contagem zero
    const finalRelevanceTotals = relevanceLevels.map(level => {
      const item = relevanceTotalsMap[level];
      const total = item.favorable + item.neutral + item.unfavorable;
      
      return {
        ...item,
        favorablePercent: Math.round((item.favorable / (total || 1)) * 100),
        neutralPercent: Math.round((item.neutral / (total || 1)) * 100),
        unfavorablePercent: Math.round((item.unfavorable / (total || 1)) * 100)
      };
    });
    
    setBookData(finalData);
    setRelevanceTotals(finalRelevanceTotals);
  }, [articles, segmentId, relevanceFilter]);
  
  return { bookData, relevanceTotals };
};
