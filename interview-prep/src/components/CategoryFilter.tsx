import React from 'react';
import { useTranslation } from 'react-i18next';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'general' },
  { id: 'leadership', label: 'leadership' },
  { id: 'strategy', label: 'strategy' },
  { id: 'ops', label: 'ops' },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === cat.id
              ? 'bg-corporate-800 text-white shadow-md'
              : 'bg-white text-corporate-600 hover:bg-corporate-100 border border-corporate-200'
          }`}
        >
          {cat.id === 'all' ? t('app.categories.all', { defaultValue: 'All' }) : t(`app.categories.${cat.id}`)}
        </button>
      ))}
    </div>
  );
};
