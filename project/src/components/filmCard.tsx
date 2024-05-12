type FilmCardProps = {
  name: string;
  width: string;
  height: string;
};

function makeSrc(movieName: string): string {
  return movieName.replaceAll(':', '').split(' ').join('-');
}

function FilmCard({ name, width, height }: FilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={`img/${makeSrc(name)}.jpg`}
          alt={name}
          width={width}
          height={height}
        />
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
