import {render, screen, fireEvent} from '@testing-library/react'

import React from 'react'
import '@testing-library/jest-dom'
import App from '../App'

test('full app rendering/navigating', () => {
  render(<App />)
  expect(screen.getByText(/View Current Employees/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  fireEvent.click(screen.getByText(/View Current Employees/i))
  expect(screen.getByText(/Go to form/i)).toBeInTheDocument()
})