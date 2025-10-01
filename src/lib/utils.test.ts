import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('px-2 py-1', 'px-3')
    expect(result).toBe('py-1 px-3')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const result = cn('base-class', isActive && 'active-class')
    expect(result).toBe('base-class active-class')
  })

  it('handles falsy values', () => {
    const result = cn('base-class', false, null, undefined, '')
    expect(result).toBe('base-class')
  })

  it('handles arrays of classes', () => {
    const result = cn(['class1', 'class2'], 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('handles objects with conditional classes', () => {
    const result = cn({
      'base-class': true,
      'conditional-class': false,
      'another-class': true
    })
    expect(result).toBe('base-class another-class')
  })
})
