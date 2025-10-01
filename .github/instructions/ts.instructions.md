---
applyTo: '**/*.{ts,tsx}'
---

# TypeScript Development Guidelines
Comprehensive TypeScript standards and best practices for the Inaura Studios Next.js application

# Goal
Ensure consistent, type-safe TypeScript code across the application with proper typing, strict mode compliance, and Next.js 15/React 19 compatibility. Maintain high code quality through proper type definitions, interface design, and adherence to modern TypeScript patterns.

## Essentials
- **Strict Mode Enabled**: All TypeScript must compile under strict mode (`strict: true`)
- **Type Safety**: Avoid `any` types; use `unknown` with type guards when necessary
- **Path Aliases**: Use `@/*` path mapping (e.g., `@/components`, `@/lib`) for all internal imports
- **React 19 Types**: Use modern React types from `@types/react@19` and `@types/react-dom@19`
- **Next.js Types**: Leverage Next.js 15 type definitions for metadata, layouts, and pages
- **File Extensions**: Use `.tsx` for React components, `.ts` for utilities and non-React modules

## Tech Stack
- [TypeScript 5](https://www.typescriptlang.org/) - Language and type system
- [Next.js 15](https://nextjs.org/) - Framework with built-in TypeScript support
- [React 19](https://react.dev/) - UI library with TypeScript definitions
- [@types/node](https://www.npmjs.com/package/@types/node) - Node.js type definitions
- [@types/react](https://www.npmjs.com/package/@types/react) - React type definitions
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - ReactDOM type definitions
- [Vitest](https://vitest.dev/) - Test framework with TypeScript support

## Project Structure
```
src/
├── app/                      # Next.js App Router (TSX files)
│   ├── layout.tsx            # Root layout with Metadata export
│   ├── page.tsx              # Homepage component
│   ├── page.test.tsx         # Homepage tests
│   └── [section]/            # Section pages
│       └── page.tsx
├── components/
│   └── ui/                   # Reusable UI components (TSX)
│       ├── card.tsx          # Example: Card with typed props
│       └── card.test.tsx
├── lib/                      # Utilities and helpers (TS)
│   ├── utils.ts              # Utility functions
│   └── utils.test.ts
├── test/                     # Test configuration
│   └── setup.ts              # Vitest setup with Next.js mocks
└── types.d.ts                # Global type declarations
```

## Key Files
- `tsconfig.json` - TypeScript configuration with strict mode and path aliases
- `src/types.d.ts` - Global type declarations and ambient modules
- `src/lib/utils.ts` - Type-safe utility functions (e.g., `cn()` helper)
- `src/components/ui/*.tsx` - Component examples with proper typing
- `src/test/setup.ts` - Test environment types and mocks

## Development Guidelines

### Component Typing
Always type React components explicitly. Use functional components with typed props:

```tsx
// ✅ Good: Explicit interface for props
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick
}: ButtonProps) {
  return (
    <button onClick={onClick} className={cn(/* ... */)}>
      {children}
    </button>
  )
}

// ❌ Bad: Untyped props
export default function Button(props) {
  return <button>{props.children}</button>
}
```

### Next.js Metadata Typing
Use Next.js built-in types for metadata and page props:

```tsx
import type { Metadata } from 'next'

// ✅ Good: Typed metadata export
export const metadata: Metadata = {
  title: 'Inaura Studios',
  description: 'Advanced visualizations for a more engaged world',
}

// For dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dynamic Title',
  }
}
```

### Utility Function Typing
Always provide explicit return types for functions:

```tsx
// ✅ Good: Explicit types for parameters and return
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

// ❌ Bad: No return type annotation
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

### Testing with TypeScript
Type your test utilities and component renders:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import type { RenderResult } from '@testing-library/react'

describe('Component', () => {
  it('renders correctly', () => {
    const result: RenderResult = render(<Component prop="value" />)

    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()
  })
})
```

### Avoid Type Assertions
Prefer type guards over `as` assertions:

```tsx
// ✅ Good: Type guard
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

if (isString(data)) {
  console.log(data.toUpperCase()) // TypeScript knows data is string
}

// ❌ Bad: Type assertion
const data = response as MyType // Risky, bypasses type checking
```

### Event Handler Typing
Use React's built-in event types:

```tsx
import type { ChangeEvent, FormEvent } from 'react'

// ✅ Good: Typed event handlers
function handleChange(event: ChangeEvent<HTMLInputElement>): void {
  console.log(event.target.value)
}

function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  event.preventDefault()
  // ...
}
```

### Async/Await Typing
Always type async functions with Promise return types:

```tsx
// ✅ Good: Explicit Promise return type
async function fetchData(id: string): Promise<DataType> {
  const response = await fetch(`/api/data/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch')
  }
  return response.json()
}

// ❌ Bad: No return type
async function fetchData(id) {
  return await fetch(`/api/data/${id}`).then(r => r.json())
}
```

### Union and Intersection Types
Use union types for variants, intersection for combining types:

```tsx
// Union for exclusive options
type Status = 'idle' | 'loading' | 'success' | 'error'

// Intersection for combining types
type ComponentProps = BaseProps & {
  variant: 'primary' | 'secondary'
}

// Discriminated unions for complex states
type Result =
  | { status: 'success'; data: DataType }
  | { status: 'error'; error: Error }
```

### Generic Components
Use generics for reusable, type-safe components:

```tsx
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

// Usage
<List<User> items={users} renderItem={(user) => user.name} />
```

### Common TypeScript Errors to Avoid
1. **Implicit any**: Always provide types, never rely on implicit `any`
2. **Non-null assertions**: Use optional chaining (`?.`) instead of `!` operator
3. **Type assertions**: Use type guards or proper typing instead of `as`
4. **Missing return types**: Always annotate function return types explicitly
5. **Untyped imports**: Ensure all imports have type definitions or ambient declarations

### Working with Third-Party Libraries
When a library lacks types, create ambient declarations:

```tsx
// src/types.d.ts
declare module 'untyped-library' {
  export function someFunction(param: string): void
}
```

### Testing Type Safety
Use Vitest with TypeScript to catch type errors in tests:

```tsx
// Test should not compile if types are wrong
import { expectTypeOf } from 'vitest'

it('has correct return type', () => {
  expectTypeOf(myFunction('input')).toBeString()
})
```

## Reference Resources
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Next.js TypeScript Guide](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Vitest TypeScript Guide](https://vitest.dev/guide/testing-types.html)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
