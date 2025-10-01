import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StudioPage from './page'

describe('Studio Page', () => {
  it('renders the studio heading', () => {
    render(<StudioPage />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hello World from Studio!')
  })

  it('has the correct layout classes', () => {
    const { container } = render(<StudioPage />)

    const pageContainer = container.firstChild as HTMLElement
    expect(pageContainer).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center')
  })
})
