import { useState } from 'react';

export default function Header() {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </a>

        <nav className="nav">
          <a href="/" className="nav-item">Главная</a>
          <a href="/movies" className="nav-item">Фильмы</a>
          <a href="/about" className="nav-item">О проекте</a>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}
