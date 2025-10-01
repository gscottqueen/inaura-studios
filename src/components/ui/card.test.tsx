import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Card } from './card'
import { Heart } from 'lucide-react'

describe('Card', () => {
  it('renders with title and description', () => {
    render(
      <Card
        title="Test Card"
        description="This is a test description"
      />
    )

    expect(screen.getByText('Test Card')).toBeInTheDocument()
    expect(screen.getByText('This is a test description')).toBeInTheDocument()
  })

  it('renders with icon when provided', () => {
    render(
      <Card
        title="Card with Icon"
        description="Description"
        icon={Heart}
      />
    )

    // The icon should be rendered (we can check for the SVG element)
    const iconElement = document.querySelector('svg')
    expect(iconElement).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Card
        title="Custom Card"
        description="Description"
        className="custom-class"
      />
    )

    const cardElement = container.firstChild as HTMLElement
    expect(cardElement).toHaveClass('custom-class')
  })

  it('renders children content', () => {
    render(
      <Card
        title="Card with Children"
        description="Description"
      >
        <button>Click me</button>
      </Card>
    )

    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })
})
