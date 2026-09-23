import { useSearchParams } from 'react-router-dom';

export default function GenreFilter({ genres }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedGenre = searchParams.get('genre') || '';

  function handleSelect(genreId) {
    const nextParams = new URLSearchParams(searchParams);

    if (genreId) {
      nextParams.set('genre', genreId);
    } else {
      nextParams.delete('genre');
    }

    setSearchParams(nextParams);
  }

  return (
    <div className="genres">
      {genres.map((genre) => (
        <button
          key={genre.id || 'all'}
          type="button"
          onClick={() => handleSelect(genre.id)}
          className={
            'genre-btn' +
            (genre.id === selectedGenre ? ' active' : '')
          }
          aria-pressed={genre.id === selectedGenre}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
}