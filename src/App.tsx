import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import NewsRecommendationPage from './pages/NewsRecommendationPage';
import TranslationPage from './pages/TranslationPage';
import DocumentScannerPage from './pages/DocumentScannerPage';
import SentimentDashboardPage from './pages/SentimentDashboardPage';
import ImageRecognitionPage from './pages/ImageRecognitionPage';
import SearchEnginePage from './pages/SearchEnginePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/news" element={<NewsRecommendationPage />} />
      <Route path="/translation" element={<TranslationPage />} />
      <Route path="/scanner" element={<DocumentScannerPage />} />
      <Route path="/sentiment-dashboard" element={<SentimentDashboardPage />} />
      <Route path="/image-recognition" element={<ImageRecognitionPage />} />
      <Route path="/search-engine" element={<SearchEnginePage />} />
    </Routes>
  );
};

export default App;
