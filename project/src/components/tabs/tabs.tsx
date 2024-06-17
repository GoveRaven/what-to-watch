import { TFilm } from '../../types/films';
import { TReviews } from '../../types/reviews';
import { useState } from 'react';
import { Overview } from './overview';
import { Details } from './details';
import { Reviews } from './reviews';

type TabsProps = {
  film: TFilm;
  reviews: TReviews;
};

export enum TabsName {
  overview = 'Overview',
  details = 'Details',
  reviews = 'Reviews',
}

export function Tabs({ film, reviews }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(TabsName.overview);
  const {
    genre,
    released,
    rating,
    scoresCount,
    director,
    starring,
    description,
    runTime,
  } = film;
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === TabsName.overview && 'film-nav__item--active'}`}>
            <button
              className="film-nav__link"
              onClick={() => setActiveTab(TabsName.overview)}
            >
              Overview
            </button>
          </li>
          <li className={`film-nav__item ${activeTab === TabsName.details && 'film-nav__item--active'}`}>
            <button
              className="film-nav__link"
              onClick={() => setActiveTab(TabsName.details)}
            >
              Details
            </button>
          </li>
          <li className={`film-nav__item ${activeTab === TabsName.reviews && 'film-nav__item--active'}`}>
            <button
              className="film-nav__link"
              onClick={() => setActiveTab(TabsName.reviews)}
            >
              Reviews
            </button>
          </li>
        </ul>
      </nav>
      {activeTab === TabsName.overview && (
        <Overview
          rating={rating}
          scoresCount={scoresCount}
          description={description}
          director={director}
          starring={starring}
        />
      )}
      {activeTab === TabsName.details && (
        <Details
          director={director}
          starring={starring}
          runTime={runTime}
          genre={genre}
          released={released}
        />
      )}
      {activeTab === TabsName.reviews && <Reviews reviews={reviews} />}
    </div>
  );
}
