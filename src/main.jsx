import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NewsAndArticles } from './pages/news-and-articles/NewsAndArticles';
import { News } from './pages/news/News';
import { Articles } from './pages/articles/Articles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<NewsAndArticles />} />
          <Route path='news' element={<News />} />
          <Route path='articles' element={<Articles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
