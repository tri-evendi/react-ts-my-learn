// app.test.js
import React from 'react'
import {Router} from 'react-router-dom'

import {render, screen} from '@testing-library/react'
import { createMemoryHistory } from 'history'

import '@testing-library/jest-dom'
import App from '../App'

test('full app rendering/navigating', async () => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>,
  )

  expect(screen.getByText(/Create the screens/i)).toBeInTheDocument()
})

test('Landing on a bad page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>,
  )

  expect(screen.getByText(/Not Found Page/i)).toBeInTheDocument()
})
