import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft, Sparkles } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

const ComingSoon: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-corporate-50 flex flex-col">
      <header className="bg-white border-b border-corporate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-corporate-800">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-corporate-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <span className="text-xl font-bold tracking-tight ml-2">
              {t('app.comingSoon.title')}
            </span>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-corporate-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative p-6 bg-white rounded-3xl shadow-xl border border-corporate-100">
              <Construction className="w-20 h-20 text-corporate-600 mx-auto" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-black text-corporate-900 tracking-tight">
              {t('app.comingSoon.title')}
            </h1>
            <p className="text-2xl font-bold text-corporate-700">
              {t('app.comingSoon.subtitle')}
            </p>
            <p className="text-lg text-corporate-600 max-w-lg mx-auto leading-relaxed">
              {t('app.comingSoon.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-corporate-600 text-white rounded-xl font-bold hover:bg-corporate-700 transition-all shadow-md transform hover:-translate-y-1 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('app.comingSoon.backHome')}
            </button>
            <div className="flex items-center gap-2 px-6 py-3 text-corporate-500 font-medium">
              <Sparkles className="w-4 h-4 text-amber-500" />
              {t('app.comingSoon.stayTuned')}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-corporate-200 text-center text-corporate-400 text-sm">
        © {new Date().getFullYear()} Business Interview Prep. Professional Excellence.
      </footer>
    </div>
  );
};

export default ComingSoon;
