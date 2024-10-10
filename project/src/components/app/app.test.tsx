import { createMemoryHistory, MemoryHistory } from 'history';
import {
  createMockComponent,
  createMockComponentWithStore,
} from '../../utils/mock-creators';
import App from './app';
import { createMockStore } from '../../utils/mock-store';
import { AppRoute } from '../../consts/routes';
import { render, screen } from '@testing-library/react';

describe('Маршрутизация приложений', () => {
  let mockHistory: MemoryHistory;
  let component: JSX.Element;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
    const componentWithHistory = createMockComponent(<App />, mockHistory);
    const { mockComponentWithStore } = createMockComponentWithStore(
      componentWithHistory,
      createMockStore()
    );
    component = mockComponentWithStore;
  });

  it('Главная страница', () => {
    mockHistory.push(AppRoute.Main);

    render(component);

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it('Страница авторизации', () => {
    mockHistory.push(AppRoute.SignIn);

    render(component);

    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('Страница с любимыми фильмами', () => {
    mockHistory.push(AppRoute.MyList);

    render(component);

    expect(screen.getByText(/My List/i)).toBeInTheDocument();
  });

  it('Страница с фильмом', () => {
    mockHistory.push(AppRoute.Film);

    render(component);

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it('Страница с ревью', () => {
    mockHistory.push(AppRoute.AddReview);

    render(component);

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it('Страница с плеером', () => {
    mockHistory.push(AppRoute.Player);

    render(component);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });
});
