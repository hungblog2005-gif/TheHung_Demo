export interface AIAnalysisResponse {
  score: number;
  strengths: {
    en: string[];
    vi: string[];
    ko: string[];
  };
  improvements: {
    en: string[];
    vi: string[];
    ko: string[];
  };
  culturalAnalysis: {
    en: string;
    vi: string;
    ko: string;
  };
  suggestedAnswer: {
    en: string;
    vi: string;
    ko: string;
  };
  toneSuggestions: string;
  workplaceTips: string[];
}

export interface AIRequest {
  question: string;
  userAnswer: string;
  language: 'en' | 'vi' | 'ko';
  context?: string;
}
