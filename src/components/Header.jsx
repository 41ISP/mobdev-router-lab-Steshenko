import { useState } from 'react';
import {Link, NavLink, useNavigate,useSearchParams} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  function handleChange(event) {
  const nextParams = new URLSearchParams(searchParams);
  const value = event.target.value;

  if (value) {
  nextParams.set('q',value);
  } else {
  nextParams.delete('q');
  }
  setSearchParams(nextParams, {replace: true});
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const value = query.trim();
    navigate(
    value
    ? '/search?q=' + encodeURIComponent(value)
    : '/search'
    );
  }

  function navClassName ({ isActive }) {
    return 'nav-item' + ( isActive ? ' active' : '');
    }

  return (
    <header className="header">
      <div className="header-inner">

        <Link to ="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>

        <nav className="nav" arie-label="Основная навигация"> 

          <NavLink to ="/" end className={navClassName}>Главная </NavLink>

          <NavLink to ="/movies" className={navClassName}>Фильмы </NavLink>

          <NavLink to ="/about" className={navClassName}>О проекте </NavLink>
          
          <NavLink to="/contacts" className={navClassName}>Контакты</NavLink>
        </nav>

        <form
          className="search"
          role="search"
          onSubmit={handleSubmit}
        >
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>

          <input
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Поиск фильмов"
            aria-label="Поиск фильмов"
          />

          <button
            className="search-submit"
            type="submit"
            aria-label="Найти"
          >
            →
          </button>
        </form>
      </div>
    </header>
  );
}
