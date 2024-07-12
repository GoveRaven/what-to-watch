import { useState } from 'react';
import { Overview } from './overview';
import { Details } from './details';
import { Reviews } from './reviews';

export enum TabsName {
  OVERVIEW = 'Overview',
  DETAILS = 'Details',
  REVIEWS = 'Reviews',
}

export function Tabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState(TabsName.OVERVIEW);
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
      {activeTab === TabsName.OVERVIEW && <Overview />}
      {activeTab === TabsName.DETAILS && <Details />}
      {activeTab === TabsName.REVIEWS && <Reviews />}
    </div>
  );
}
