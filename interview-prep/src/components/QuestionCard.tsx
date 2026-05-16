import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { Question } from '../data/questions';
import { analyzeAnswer } from '../ai-service/aiService';
import { AIAnalysisResponse } from '../ai-service/types';

interface QuestionCardProps {
  question: Question;
  currentLang: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [analysis, setAnalysis] = useState<AIAnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const lang = (currentLang?.startsWith('en') ? 'en' :
                  currentLang?.startsWith('vi') ? 'vi' :
                  currentLang?.startsWith('ko') ? 'ko' : 'en') as 'en' | 'vi' | 'ko';
  const qText = (question.translations[lang] || question.translations.en).question;

  const handleSend = async () => {
    if (!userAnswer.trim()) return;

    setIsLoading(true);
    try {
      const result = await analyzeAnswer({
        question: qText,
        userAnswer,
        language: lang
      });
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-corporate-200 overflow-hidden transition-all hover:border-corporate-400">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex items-start gap-4 hover:bg-corporate-50 transition-colors"
      >
        <div className="mt-1 p-2 bg-corporate-100 rounded-full">
          <HelpCircle className="w-5 h-5 text-corporate-600" />
        </div>
        <span className="text-lg font-medium text-corporate-800 leading-tight">
          {qText}
        </span>
        <div className="ml-auto">
          {isOpen ? <ChevronUp className="w-5 h-5 text-corporate-400" /> : <ChevronDown className="w-5 h-5 text-corporate-400" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-5 pt-0 bg-corporate-50/50 border-t border-corporate-100">
          <div className="pl-12 py-4 space-y-6">
            <div className="pt-4 border-t border-corporate-200">
              <label className="block text-sm font-medium text-corporate-600 mb-2">
                {t('app.yourAnswer')}
              </label>
              <textarea
                className="w-full p-3 rounded-lg border border-corporate-300 focus:ring-2 focus:ring-corporate-500 focus:border-transparent outline-none transition-all text-corporate-800 placeholder-corporate-300"
                rows={3}
                placeholder={t('app.yourAnswer')}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <div className="flex justify-end mt-3">
                <button
                  className="px-4 py-2 bg-corporate-600 text-white rounded-lg font-medium hover:bg-corporate-700 transition-colors shadow-sm disabled:opacity-50"
                  onClick={handleSend}
                  disabled={isLoading}
                >
                  {isLoading ? '...' : t('app.send')}
                </button>
              </div>
            </div>

            {analysis && (
              <div className="mt-6 p-6 bg-white rounded-xl border border-corporate-200 shadow-inner space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                {/* Score */}
                <div className="flex items-center justify-between border-b border-corporate-100 pb-4">
                  <span className="text-sm font-bold text-corporate-500 uppercase tracking-wider">AI Evaluation Score</span>
                  <span className="text-3xl font-black text-corporate-600">{analysis.score}/100</span>
                </div>

                {/* Strengths & Improvements - Multi-lang */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Strengths</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 bg-green-50/50 rounded-lg border border-green-100">
                        <p className="text-[10px] font-bold text-green-500 uppercase mb-1">Vietnamese</p>
                        <ul className="text-xs text-corporate-600 space-y-1 list-disc pl-3">
                          {analysis.strengths.vi.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                      <div className="p-3 bg-green-50/50 rounded-lg border border-green-100">
                        <p className="text-[10px] font-bold text-green-500 uppercase mb-1">English</p>
                        <ul className="text-xs text-corporate-600 space-y-1 list-disc pl-3">
                          {analysis.strengths.en.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                      <div className="p-3 bg-green-50/50 rounded-lg border border-green-100">
                        <p className="text-[10px] font-bold text-green-500 uppercase mb-1">Korean</p>
                        <ul className="text-xs text-corporate-600 space-y-1 list-disc pl-3">
                          {analysis.strengths.ko.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Improvements</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-100">
                        <p className="text-[10px] font-bold text-amber-500 uppercase mb-1">Vietnamese</p>
                        <ul className="text-xs text-corporate-600 space-y-1 list-disc pl-3">
                          {analysis.improvements.vi.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                      <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-100">
                        <p className="text-[10px] font-bold text-amber-500 uppercase mb-1">English</p>
                        <ul className="text-xs text-corporate-600 space-y-1 list-disc pl-3">
                          {analysis.improvements.en.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                      <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-100">
                        <p className="text-[10px] font-bold text-amber-500 uppercase mb-1">Korean</p>
                        <ul className="text-xs text-corporate-600 space-y-1 list-disc pl-3">
                          {analysis.improvements.ko.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural Analysis */}
                <div className="p-4 bg-corporate-50 rounded-lg border-l-4 border-corporate-400">
                  <div className="flex items-center gap-2 text-corporate-700 font-bold text-sm mb-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Cultural Analysis</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 bg-white/50 rounded border border-corporate-100">
                      <p className="text-[10px] font-bold text-corporate-400 uppercase mb-1">Vietnamese</p>
                      <p className="text-sm text-corporate-600 leading-relaxed italic">
                        "{analysis.culturalAnalysis.vi}"
                      </p>
                    </div>
                    <div className="p-2 bg-white/50 rounded border border-corporate-100">
                      <p className="text-[10px] font-bold text-corporate-400 uppercase mb-1">English</p>
                      <p className="text-sm text-corporate-600 leading-relaxed italic">
                        "{analysis.culturalAnalysis.en}"
                      </p>
                    </div>
                    <div className="p-2 bg-white/50 rounded border border-corporate-100">
                      <p className="text-[10px] font-bold text-corporate-400 uppercase mb-1">Korean</p>
                      <p className="text-sm text-corporate-600 leading-relaxed italic">
                        "{analysis.culturalAnalysis.ko}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Suggested Answer */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    <Lightbulb className="w-4 h-4" />
                    <span>Suggested Professional Answer</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-xs font-bold text-blue-500 mb-1">VIETNAMESE</p>
                      <p className="text-sm text-corporate-800">{analysis.suggestedAnswer.vi}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-xs font-bold text-blue-500 mb-1">ENGLISH</p>
                      <p className="text-sm text-corporate-800">{analysis.suggestedAnswer.en}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-xs font-bold text-blue-500 mb-1">KOREAN</p>
                      <p className="text-sm text-corporate-800">{analysis.suggestedAnswer.ko}</p>
                    </div>
                  </div>
                </div>

                {/* Tips */}
                <div className="pt-4 border-t border-corporate-100">
                  <p className="text-xs font-bold text-corporate-400 uppercase mb-2">Pro Workplace Tips</p>
                  <div className="flex flex-wrap gap-2">
                    {analysis.workplaceTips.map((tip, i) => (
                      <span key={i} className="px-2 py-1 bg-corporate-100 text-corporate-600 text-xs rounded-md border border-corporate-200">
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
