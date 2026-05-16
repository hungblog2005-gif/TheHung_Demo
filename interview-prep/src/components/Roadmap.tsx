import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Map, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

const Roadmap: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const steps = [
    {
      id: 'selfIntro',
      status: 'completed',
    },
    {
      id: 'techExp',
      status: 'current',
    },
    {
      id: 'culturalFit',
      status: 'pending',
    },
    {
      id: 'salaryNeg',
      status: 'pending',
    },
  ];

  return (
    <div className="min-h-screen bg-corporate-50">
      <header className="bg-white border-b border-corporate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-corporate-800">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-corporate-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2 ml-2">
              <Map className="w-6 h-6 text-corporate-600" />
              <span className="text-xl font-bold tracking-tight">
                {t('app.roadmap.title')}
              </span>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-corporate-900 mb-4 tracking-tight">
            {t('app.roadmap.mainTitle')}
          </h1>
          <p className="text-lg text-corporate-600 max-w-2xl mx-auto">
            {t('app.roadmap.mainSubtitle')}
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-corporate-200"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative pl-16 group">
              {/* Icon/Status Indicator */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-white border-4 border-corporate-50 rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                {step.status === 'completed' && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                {step.status === 'current' && <div className="w-6 h-6 rounded-full bg-corporate-600 animate-pulse"></div>}
                {step.status === 'pending' && <Circle className="w-6 h-6 text-corporate-300" />}
              </div>

              {/* Content Card */}
              <div className={`p-6 rounded-xl border transition-all ${
                step.status === 'current'
                ? 'bg-white border-corporate-400 shadow-md ring-1 ring-corporate-400'
                : 'bg-white border-corporate-200 shadow-sm opacity-80'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-corporate-900">
                    {t(`app.roadmap.steps.${step.id}.title`)}
                  </h3>
                  {step.status === 'current' && (
                    <span className="px-2 py-1 bg-corporate-100 text-corporate-600 text-xs font-bold rounded uppercase">
                      {t('app.roadmap.status.inProgress')}
                    </span>
                  )}
                </div>
                <p className="text-corporate-600 mb-4">
                  {t(`app.roadmap.steps.${step.id}.description`)}
                </p>
                <button
                  disabled={step.status === 'pending'}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    step.status === 'current'
                    ? 'bg-corporate-600 text-white hover:bg-corporate-700'
                    : 'bg-corporate-100 text-corporate-400 cursor-not-allowed'
                  }`}
                  onClick={() => {
                    if (step.status !== 'pending') {
                      navigate('/coming-soon');
                    }
                  }}
                >
                  {t('app.roadmap.action')} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 border-t border-corporate-200 text-center text-corporate-400 text-sm">
        © {new Date().getFullYear()} Business Interview Prep. Professional Excellence.
      </footer>
    </div>
  );
};

export default Roadmap;
