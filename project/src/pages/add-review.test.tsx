import { render, screen } from '@testing-library/react';
import { AddReview } from './add-review';
import {
  createMockComponent,
  createMockComponentWithStore,
} from '../utils/mock-creators';
import { createMockStore } from '../utils/mock-store';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory, MemoryHistory } from 'history';

describe('Компонент: add-review', () => {
  let component: JSX.Element;
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    component = createMockComponent(<AddReview />, mockHistory);
    const { mockComponentWithStore } = createMockComponentWithStore(
      component,
      createMockStore()
    );

    component = mockComponentWithStore;
    mockHistory = createMemoryHistory();
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
});
