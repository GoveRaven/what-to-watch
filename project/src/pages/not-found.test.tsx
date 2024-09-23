import { render, screen } from '@testing-library/react';
import { createMockComponent } from '../utils/mock-creaters';
import { NotFound } from './not-found';

describe('Компонент: not-found', () => {
  it('Компонент должен правильно отрендериться', () => {
    const expectedHeaderText = '404 not found';
    const expectedLinkText = 'Вернуться на главную страницу';

    render(createMockComponent(<NotFound />));

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
