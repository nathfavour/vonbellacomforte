# AGENTS.md - Development Guidelines

## Build/Test/Lint Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint
- `npm run start` - Start production server
- No test framework configured - check with user before adding tests

## TypeScript Configuration
- Strict mode enabled with `strict: true`
- Path aliases: `@/*` maps to `./src/*`
- JSX preserve mode for Next.js

## Code Style Guidelines
- ESLint extends `next/core-web-vitals` and `next/typescript`
- Use TypeScript for all new files (.ts/.tsx)
- Import styles: ES6 imports preferred
- Component naming: PascalCase for React components
- File naming: kebab-case or camelCase for utilities, PascalCase for components

## Framework Conventions
- Next.js 15.4.2 with App Router
- React 19.1.0
- Components in `src/app/` directory structure
- Use `src/` prefix for internal imports via `@/` alias

## Error Handling
- Follow Next.js error boundaries and page error handling patterns
- Use TypeScript strict mode for type safety