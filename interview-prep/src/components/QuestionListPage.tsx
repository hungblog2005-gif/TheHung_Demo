import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { QuestionCard } from './QuestionCard';
import { CategoryFilter } from './CategoryFilter';
import { interviewQuestions } from '../data/questions';

export const QuestionListPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const filteredQuestions = activeCategory === 'all'
    ? interviewQuestions
    : interviewQuestions.filter(q => q.category === activeCategory);

  return (
    <div className="min-h-screen bg-corporate-50">
      {/* Header */}
      <header className="bg-white border-b border-corporate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-corporate-800">
            <Briefcase className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">
              {t('app.title')}
            </span>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-corporate-900 mb-4 tracking-tight">
            {t('app.title')}
          </h1>
          <p className="text-lg text-corporate-600 max-w-2xl mx-auto">
            {t('app.subtitle')}
          </p>
        </div>

        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="space-y-4">
          {filteredQuestions.length > 0 ? (
            <>
              {filteredQuestions.map((q) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  currentLang={i18n.language}
                />
              ))}
              <div className="flex justify-center pt-8">
                <button
                  className="px-8 py-3 bg-corporate-600 text-white rounded-xl font-bold hover:bg-corporate-700 transition-all shadow-md transform hover:-translate-y-1"
                  onClick={() => navigate('/roadmap')}
                >
                  {t('app.continue')}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-corporate-500 italic">
              No questions found in this category.
            </div>
          )}
        </div>
      </main>

      <footer className="py-12 border-t border-corporate-200 text-center text-corporate-400 text-sm">
        © {new Date().getFullYear()} Business Interview Prep. Professional Excellence.
      </footer>
    </div>
  );
};
