import { TFilm } from '../../types/films';
import { TReview } from '../../types/reviews';
import { useState } from 'react';
import { Overview } from './overview';
import { Details } from './details';
import { Reviews } from './reviews';

type TabsProps = {
  film: TFilm;
  reviews: TReview[];
};

export enum TabsName {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}

export function Tabs({ film, reviews }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(TabsName.OVERVIEW);
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
          <li
            className={`film-nav__item ${
              activeTab === TabsName.OVERVIEW && 'film-nav__item--active'
            }`}
          >
            <button
              className="film-nav__link"
              onClick={() => setActiveTab(TabsName.OVERVIEW)}
            >
              Overview
            </button>
          </li>
          <li
            className={`film-nav__item ${
              activeTab === TabsName.DETAILS && 'film-nav__item--active'
            }`}
          >
            <button
              className="film-nav__link"
              onClick={() => setActiveTab(TabsName.DETAILS)}
            >
              Details
            </button>
          </li>
          <li
            className={`film-nav__item ${
              activeTab === TabsName.REVIEWS && 'film-nav__item--active'
            }`}
          >
            <button
              className="film-nav__link"
              onClick={() => setActiveTab(TabsName.REVIEWS)}
            >
              Reviews
            </button>
          </li>
        </ul>
      </nav>
      {activeTab === TabsName.OVERVIEW && (
        <Overview
          rating={rating}
          scoresCount={scoresCount}
          description={description}
          director={director}
          starring={starring}
        />
      )}
      {activeTab === TabsName.DETAILS && (
        <Details
          director={director}
          starring={starring}
          runTime={runTime}
          genre={genre}
          released={released}
        />
      )}
      {activeTab === TabsName.REVIEWS && <Reviews reviews={reviews} />}
    </div>
  );
}
