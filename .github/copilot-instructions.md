# Copilot Instructions for Inaura Studios

## Project Overview

**Inaura Studios** is a Next.js application showcasing "Advanced visualizations for a more engaged world." This is a modern web application built with Next.js 15 and React 19, featuring a portfolio-style website with multiple sections: Studio, Lab, Future Good, and Publications.

## Tech Stack

### Core Framework
- **Next.js 15.5.4** with App Router (src/app directory structure)
- **React 19.1.0** with TypeScript
- **Turbopack** for faster builds and development

### Styling & UI
- **Tailwind CSS v4** with PostCSS
- **Shadcn/ui** component library (New York style, configured but components not yet added)
- **Lucide React** for icons
- **Custom CSS variables** for theming in globals.css
- **tw-animate-css** for animations

### Development & Testing
- **Vitest** for unit testing with jsdom environment
- **React Testing Library** for component testing
- **ESLint** with Next.js config for code quality
- **TypeScript** with strict mode enabled

### Build Tools
- **Turbopack** (via Next.js) for fast builds
- **PostCSS** with Tailwind CSS plugin
- Path aliasing: `@/*` maps to `./src/*`

### Other tools to consider when adding new development tools or libraries:
- **Prisma** (for database ORM, if backend is added)
- **PostgreSQL** (for database, if backend is added)
- **Redis** (for caching/rate limiting, if backend is added)
- **Zod** (for schema validation, if backend is added)
- **GitHub Actions** (for CI/CD, if added)
- **MCP servers** (for managing tasks and backlog)
- **GitHub** (for repository and issue tracking)
- **npm** (for package management)
- **Node.js** (runtime environment)
- **ESLint** (for linting and code quality)
- **Prettier** (for code formatting, if added)

## Project Structure

```
src/
├── app/                   # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage with navigation links
│   ├── page.test.tsx      # Homepage tests
│   ├── globals.css        # Global styles with Tailwind and CSS variables
│   ├── studio/page.tsx    # Studio section
│   ├── lab/page.tsx       # Lab section
│   ├── future-good/page.tsx # Future Good section
│   └── publications/page.tsx # Publications section
├── components/
│   └── ui/                # Shadcn/ui components (empty, ready for use)
├── lib/
│   ├── utils.ts           # Utility functions (cn for className merging)
│   └── utils.test.ts      # Utility function tests
└── test/
    └── setup.ts           # Vitest test configuration with Next.js mocks
```

## Development Guidelines

### Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle with Turbopack
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report (80% threshold required)
- `npm run lint` - Run ESLint

### Coding Standards
- Always use **TypeScript** for all new files
- Always follow **Next.js App Router** patterns
- Always use **functional components** with hooks
- Implement **comprehensive tests** for new components and utilities
- Always maintain **80% test coverage** threshold
- Always use type hints in any language which supports them
- Always follow good security practices
- Always follow RESTful API design principles
- Always ensure `npm run lint` and `npm run test` pass before committing

### Component Development
- Place reusable UI components in `src/components/ui/` following Shadcn/ui patterns
- Use the `cn()` utility from `@/lib/utils` for conditional className merging
- Follow the established theming system using CSS variables
- Import Lucide React icons when needed
- Use scripts to perform actions when available

### Testing
- Write tests alongside components (`.test.tsx` files)
- Use React Testing Library for component testing
- Mock Next.js features using the established patterns in `src/test/setup.ts`
- Ensure all utilities and components have corresponding tests
- Run tests frequently during development to catch issues early by using `npm run test:watch`
- Run tests frequently during development to catch issues early
- Unit tests are required, and are required to pass before PR
  - Unit tests should focus on core functionality
- End-to-end tests are required
  - End-to-end tests should focus on core functionality
  - End-to-end tests should validate accessibility

### Styling
- Use **Tailwind CSS** classes for styling
- Leverage the CSS variables defined in `globals.css` for theming
- Follow the Shadcn/ui design system when adding new components
- Use the `@` path alias for imports: `@/components`, `@/lib`, etc.

## Configuration Details

### Shadcn/ui Setup
- Style: "new-york"
- RSC: enabled
- Icon library: Lucide React
- Component aliases configured in `components.json`
- CSS variables enabled for theming

### TypeScript Configuration
- Strict mode enabled
- Path mapping: `@/*` → `./src/*`
- Next.js plugin configured
- Target: ES2017

### Testing Configuration
- Global setup in `src/test/setup.ts`
- Next.js router and image mocking configured
- Coverage thresholds: 80% for lines, functions, branches, statements
- Test files: `src/**/*.{test,spec}.{js,ts,jsx,tsx}`

## Common Patterns

### Page Structure
```tsx
export default function PageName() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold">Page Title</h1>
      {/* Content */}
    </div>
  );
}
```

### Component Testing
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Component from './Component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
```

### Utility Function Pattern
```tsx
import { cn } from '@/lib/utils'

// For conditional styling
className={cn('base-class', condition && 'conditional-class')}
```

## Build Considerations

- All builds use **Turbopack** for faster compilation
- Development server runs on port 3000 by default
- ESLint checks are enforced during build
- Test coverage must meet 80% threshold before deployment
- TypeScript strict mode requires proper typing for all code

## Notes for AI Agents

- This project uses the latest React 19 and Next.js 15 features
- Turbopack is enabled for faster development and builds
- The Shadcn/ui setup is configured but no components have been added yet
- All section pages (studio, lab, future-good, publications) currently have placeholder content
- The testing setup includes proper Next.js mocking for router and images
- CSS theming uses modern CSS variables with OKLCH color space

## Test Coverage Requirements

- Maintain 80% test coverage across lines, functions, branches, and statements
- Page components in `src/app/*/page.tsx` need corresponding `.test.tsx` files to meet coverage requirements
- Components in `src/components/ui/` should have comprehensive test suites
- Use React Testing Library patterns established in existing tests
