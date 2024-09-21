import { render, screen } from '@testing-library/react';
import {
  createMockComponent,
  createMockComponentwithStore,
} from '../utils/mockcreaters';
import { SignIn } from './sign-in';
import userEvent from '@testing-library/user-event';

describe('Компонент: sign-in', () => {
  let component: JSX.Element;
  beforeEach(() => {
    const { mockComponentWithStore } = createMockComponentwithStore(
      <SignIn />,
      {}
    );
    component = createMockComponent(mockComponentWithStore);
  });

  it('Компонент должен правильно отрендериться', () => {
    const expectedHeaderText = 'signInHeader';
    const expectedLoginText = 'Email address';
    const expectedPasswordText = 'Password';

    render(component);

    expect(screen.getByTestId(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLoginText)).toBeInTheDocument();
    expect(screen.getByText(expectedPasswordText)).toBeInTheDocument();
  });

  it('Компонент должен правильно отрендериться при введённых данных в поля', async () => {
    const emailElementTestId = 'emailAddress';
    const passwordElementTestId = 'password';
    const expectedEmailValue = 'test@mail.ru';
    const expectedPasswordValue = '123456';

    render(component);

    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
