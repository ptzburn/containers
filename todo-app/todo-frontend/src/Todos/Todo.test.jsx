import React from 'react'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'All tests passed',
    done: false
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('All tests passed')
  expect(element).toBeDefined()
})