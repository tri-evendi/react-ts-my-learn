import {BrowserRouter, MemoryRouter} from 'react-router-dom';

import { fireEvent, render, screen } from "@testing-library/react";
import { shallow } from 'enzyme';
import { Button } from 'primereact/button';

import App from '../App';
import DetailCourse from '../pages/DetailCourse';

test('Renders react component', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

  // Add unit tests
  test("Fullname input should be rendered", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const fullnameInputEl = screen.getByPlaceholderText(/Fullname/i);
    expect(fullnameInputEl).toBeInTheDocument();
  });

  test("Email input should be rendered", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const emailInputEl = screen.getByPlaceholderText(/Email/i);
    expect(emailInputEl).toBeInTheDocument();
  });

  test("Button should be rendered", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  test("Fullname input should be empty", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const fullnameInputEl = screen.getByPlaceholderText(/Fullname/i) as HTMLInputElement;
    expect(fullnameInputEl.value).toBe("");
  });

  test("Email input should be empty", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const emailInputEl = screen.getByPlaceholderText(/Email/i) as HTMLInputElement;
    expect(emailInputEl.value).toBe("");
  });

  test("Button should be disabled", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeDisabled();
  });

  test("Fullname input should change", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const fullnameInputEl = screen.getByPlaceholderText(/Fullname/i) as HTMLInputElement;
    const testValue = "test";

    fireEvent.change(fullnameInputEl, { target: { value: testValue } });
    expect(fullnameInputEl.value).toBe(testValue);
  });

  test("Email input should change", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const emailInputEl = screen.getByPlaceholderText(/Email/i) as HTMLInputElement;
    const testValue = "test@test";

    fireEvent.change(emailInputEl, { target: { value: testValue } });
    expect(emailInputEl.value).toBe(testValue);
  });

  test("Submit button form", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/learning-class', search: '?id=1' }]}>
        <DetailCourse />
      </MemoryRouter>
    );
    const mockCallBack = jest.fn();

    const button = shallow((<Button onClick={mockCallBack}>Register</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

