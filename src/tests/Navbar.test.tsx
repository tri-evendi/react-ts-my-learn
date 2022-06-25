import {BrowserRouter, MemoryRouter} from 'react-router-dom';

import { fireEvent, render, screen } from "@testing-library/react";
import { shallow } from 'enzyme';
import { Button } from 'primereact/button';

import App from '../App';
import Navbar from '../components/Navbar';

test('Renders react component', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

  // Add unit tests
  test("Navbar logo should be rendered", () => {
    render(
      <Navbar/>
    );
    const fullnameInputEl = screen.getByAltText(/logo/i);
    expect(fullnameInputEl).toBeInTheDocument();
  });

  test("Navbar search input should be rendered", () => {
    render(
      <Navbar/>
    );
    const fullnameInputEl = screen.getByPlaceholderText(/Search/i);
    expect(fullnameInputEl).toBeInTheDocument();
  });

  test("Navbar Search input should change", () => {
    render(
      <Navbar/>
    );
    const searchInputEl = screen.getByPlaceholderText(/Search/i) as HTMLInputElement;
    const testValue = "test";

    fireEvent.change(searchInputEl, { target: { value: testValue } });
    expect(searchInputEl.value).toBe(testValue);
  });
