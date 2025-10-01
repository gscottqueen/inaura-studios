# Project Overview

## Tech stack in use

### Backend
- Node.js
- Next.js API routes (for serverless functions)
- Prisma (ORM)
- PostgreSQL (database)
- Redis (for rate limiting)
- Zod (for schema validation)

### Frontend
- Next.js (app router)
- React (for UI components)
- TypeScript (for type safety)
- Tailwind CSS (for styling)
- shadcn/ui (for UI components)

### Testing
- vitest (for unit testing)
- testing-library (for testing React components)

### Code Guidelines

- Always use type hints in any language which supports them
- Unit tests are required, and are required to pass before PR
  - Unit tests should focus on core functionality
- End-to-end tests are required
  - End-to-end tests should focus on core functionality
  - End-to-end tests should validate accessibility
- Always follow good security practices
- Follow RESTful API design principles
- Use scripts to perform actions when available
