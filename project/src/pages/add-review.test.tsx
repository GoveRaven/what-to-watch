import { render, screen } from '@testing-library/react';
import { AddReview } from './add-review';
import {
  createMockComponent,
  createMockComponentwithStore,
} from '../utils/mock-creaters';
import { createMockStore } from '../utils/mock-store';
import userEvent from '@testing-library/user-event';
import { AnyAction } from '@reduxjs/toolkit';
import { MockStore } from '@jedmao/redux-mock-store';

describe('Компонент: add-review', () => {
  const myMockStore = createMockStore();
  let component: JSX.Element;
  let store: MockStore<unknown, AnyAction>;
  beforeEach(() => {
    const { mockComponentWithStore, mockStore } = createMockComponentwithStore(
      <AddReview />,
      myMockStore
    );
    store = mockStore;
    component = createMockComponent(mockComponentWithStore);
  });

  it('Компонент должен правильно отрендериться', () => {
    render(component);

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByTestId('review-textarea')).toBeInTheDocument();
    expect(screen.getByTestId('review-rating')).toBeInTheDocument();
    expect(screen.getByTestId('review-post-button')).toBeInTheDocument();
  });

  describe('Кнопка Post должна быть не кликабельна в некоторых ситуациях', () => {
    it('Кнопка по умолчанию не доступна', () => {
      render(component);
      const postButton = screen.getByTestId('review-post-button');

      expect(postButton).toBeDisabled();
    });

    it('Введён текст с недостаточным количеством символов', async () => {
      render(component);
      const postButton = screen.getByTestId('review-post-button');
      const textArea = screen.getByTestId('review-textarea');
      const rating = screen.getAllByTestId('review-rate');
      const shortText = 'a'.repeat(49);

      await userEvent.click(rating[1]);
      await userEvent.type(textArea, shortText);
      expect(postButton).toBeDisabled();
    });

    it('Введенно достаочное количество символов, но не поставлена оценка', async () => {
      render(component);
      const postButton = screen.getByTestId('review-post-button');
      const textArea = screen.getByTestId('review-textarea');
      const normalText = 'a'.repeat(100);

      await userEvent.type(textArea, normalText);
      expect(postButton).toBeDisabled();
    });

    it('Введено сликшом много символов', async () => {
      render(component);
      const postButton = screen.getByTestId('review-post-button');
      const textArea = screen.getByTestId('review-textarea');
      const rating = screen.getAllByTestId('review-rate');
      const tooLongText = 'a'.repeat(401);

      await userEvent.click(rating[1]);
      await userEvent.type(textArea, tooLongText);
      expect(postButton).toBeDisabled();
    });

    it('Текст приемлемой длины и поставлена оценка', async () => {
      render(component);
      const postButton = screen.getByTestId('review-post-button');
      const textArea = screen.getByTestId('review-textarea');
      const rating = screen.getAllByTestId('review-rate');
      const normalText = 'a'.repeat(100);

      await userEvent.click(rating[1]);
      await userEvent.type(textArea, normalText);
      expect(postButton).not.toBeDisabled();
    });
  });

  it('После размещения ревью должен отправиться post запрос', async () => {
    render(component);

    const postButton = screen.getByTestId('review-post-button');
    const textArea = screen.getByTestId('review-textarea');
    const rating = screen.getAllByTestId('review-rate');
    const normalText = 'a'.repeat(100);

    await userEvent.click(rating[0]);
    await userEvent.type(textArea, normalText);
    await userEvent.click(postButton);

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      'data/fetchChosenFilm/pending',
      'data/fetchChosenFilm/rejected',
      'data/postComment/pending',
      'data/postComment/rejected',
    ]);
  });
});
