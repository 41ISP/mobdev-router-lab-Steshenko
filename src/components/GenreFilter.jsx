import { Link, useSearchParams } from 'react-router-dom';

export default function GenreFilter({ genres }) {

  const [searchParams] = useSearchParams();
  const activeGenre = searchParams.get('genre') || '';

  return (

    <div className="genres">
      {genres.map((genre) => (
        <Link
        
          key={genre.id || 'all'}
          to={genre.id ? `/movies?genre=${genre.id}` : '/movies'}
          className={`genre-btn${genre.id === activeGenre ? ' active' : ''}`}>
          {genre.label}

        </Link>
      ))}
    </div>
  );
}