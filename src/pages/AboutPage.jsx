import { movies, genres } from '../data/movies.js';

export default function AboutPage() {
  return (

    <section className="page-shell narrow">

      <span className="eyebrow">ABOUT</span>
      <h1 className="page-title">MovieBox</h1>
      <p className="page-description">Приложение-каталог фильмов</p>
      <div className="info-card">

        <div><span>Фильмов</span><strong>{movies.length}</strong></div>
        <div><span>Жанров</span><strong>{genres.length - 1}</strong></div>
        <div><span>Страниц</span><strong>7</strong></div>

      </div>
    </section>
  );
}
