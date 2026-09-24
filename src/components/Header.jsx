import { useState } from 'react';
import {Link, NavLink, useNavigate,} from 'react-router-dom';

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const q = query.trim();
    if (!q) {
      navigate('/');
      return;
    }
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setQuery('');
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
            Главная
          </NavLink>
          <NavLink to="/movies"
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
            Фильмы
          </NavLink>
          <NavLink to="/about"
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
            О проекте
          </NavLink>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}
