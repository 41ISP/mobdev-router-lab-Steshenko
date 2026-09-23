import MovieCard from '../components/MovieCard.jsx';
import { movies } from '../data/movies.js';

export default function HomePage() {
  return (
    <section className="page-shell">
      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">MOVIEBOX / 2026</span>
          <h1>Фильмы, которые<br />стоит посмотреть</h1>
          <p>
            Небольшая коллекция фильмов с поиском, жанрами
            и отдельными страницами для каждого фильма.
          </p>
          <a href="/movies" className="primary-btn">Открыть каталог</a>
        </div>

        <div className="hero-poster">
          <span>FILM<br />NIGHT</span>
          <small>EST. 2026</small>
        </div>
      </div>

      <div className="section-head">
        <div>
          <span className="eyebrow">EDITOR'S PICK</span>
          <h2>Популярное сейчас</h2>
        </div>
        <a href="/movies" className="text-link">Все фильмы →</a>
      </div>

      <div className="movie-grid">
        {movies.slice(0, 4).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
