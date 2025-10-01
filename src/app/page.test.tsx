import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Welcome to Inaura Studios')
  })

  it('renders the subtitle', () => {
    render(<Home />)

    const subtitle = screen.getByText('Advanced visualizations for a more engaged world.')
    expect(subtitle).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Home />)

    // Check that all navigation links are present
    expect(screen.getByRole('link', { name: 'Studio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Lab' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Future Good' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Publications' })).toBeInTheDocument()
  })

  it('has correct href attributes for navigation links', () => {
    render(<Home />)

    expect(screen.getByRole('link', { name: 'Studio' })).toHaveAttribute('href', '/studio')
    expect(screen.getByRole('link', { name: 'Lab' })).toHaveAttribute('href', '/lab')
    expect(screen.getByRole('link', { name: 'Future Good' })).toHaveAttribute('href', '/future-good')
    expect(screen.getByRole('link', { name: 'Publications' })).toHaveAttribute('href', '/publications')
  })

  it('applies correct CSS classes to navigation links', () => {
    render(<Home />)

    const studioLink = screen.getByRole('link', { name: 'Studio' })
    expect(studioLink).toHaveClass('text-blue-600', 'hover:text-blue-800', 'underline')
  })
})
