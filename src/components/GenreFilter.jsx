export default function GenreFilter({ genres }) {

  return (
    <div className="genres">
      {genres.map((genre) => (
        <a
          key={genre.id || 'all'}
          href={genre.id ? `/movies?genre=${genre.id}` : '/movies'}
          className="genre-btn"
        >
          {genre.label}
        </a>
      ))}
    </div>
  );
}
