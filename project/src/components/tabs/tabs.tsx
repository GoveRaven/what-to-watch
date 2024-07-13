import { useState } from 'react';
import { Overview } from './overview';
import { Details } from './details';
import { Reviews } from './reviews';
import { useAppSelector } from '../../hooks';

export enum TabsName {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}

export function Tabs(): JSX.Element | null {
  const [activeTab, setActiveTab] = useState(TabsName.OVERVIEW);
  const film = useAppSelector((state) => state.chosenFilm);

  if (!film) {
    return null;
  }

  const {
    director,
    starring,
    runTime,
    genre,
    released,
    rating,
    scoresCount,
    description,
  } = film;
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(TabsName).map((tabName) => (
            <li
              key={tabName}
              className={`film-nav__item${
                activeTab === tabName ? ' film-nav__item--active' : ''
              }`}
            >
              <button
                className="film-nav__link"
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </button>
            </li>
          ))}
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
      {activeTab === TabsName.REVIEWS && <Reviews />}
    </div>
  );
}
