import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n/config';
import { QuestionListPage } from './components/QuestionListPage';
import Roadmap from './components/Roadmap';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuestionListPage />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
