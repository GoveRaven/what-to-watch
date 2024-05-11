type FilmCardProps = {
  name: string;
  src: string;
  width: string;
  height: string;
  key: string
};

function FilmCard({ name, src, width, height, key}: FilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img/${src}.jpg`} alt={name} width={width} height={height} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {name}
        </a>
      </h3>
    </article>
  );
}

export { FilmCard };
