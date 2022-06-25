import {BrowserRouter, MemoryRouter} from 'react-router-dom';

import { fireEvent, render, screen } from "@testing-library/react";
import { shallow } from 'enzyme';
import { Button } from 'primereact/button';

import App from '../App';
import MainPage from '../pages/MainPage';

test('Renders react component', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test("Button learn More should be rendered", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <MainPage />
    </MemoryRouter>
  );
  const buttonEl = screen.getByTestId("btn-more");
  expect(buttonEl).toBeInTheDocument();
});

test("Button register should be rendered", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <MainPage />
    </MemoryRouter>
  );
  const buttonEl = screen.getByTestId("btn-register");
  expect(buttonEl).toBeInTheDocument();
});

  test("Detail button", () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button onClick={mockCallBack}>Daftar Sekarang</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

