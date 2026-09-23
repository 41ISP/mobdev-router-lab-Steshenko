import MovieCard from '../components/MovieCard.jsx';
import GenreFilter from '../components/GenreFilter.jsx';
import { movies, genres } from '../data/movies.js';

export default function MoviesPage() {
  const selectedGenre = '';
  const visibleMovies = movies;

  return (
    <section className="page-shell">
      <span className="eyebrow">CATALOG</span>
      <h1 className="page-title">Все фильмы</h1>
      <p className="page-description">
        Выберите жанр. Выбранный фильтр должен храниться в адресной строке.
      </p>

      <GenreFilter genres={genres} />

      <div className="movie-grid">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
