import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MoviePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    
  );
}