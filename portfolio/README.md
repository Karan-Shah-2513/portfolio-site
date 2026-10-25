# Portfolio

Personal portfolio website built with [React 19](https://react.dev/), [Vite](https://vite.dev/), [Tailwind CSS v4](https://tailwindcss.com/), and shadcn/ui-style components.

## UI

The project uses Tailwind CSS v4 for layout and styling, with reusable shadcn/ui-style primitives in `src/components/ui` (`Button`, `Card`, `Badge`, and `Input`). Component aliases and generator settings are in `components.json`; shared class merging lives in `src/lib/utils.ts`.

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Scripts

- `pnpm dev` - Start the Vite development server with HMR.
- `pnpm build` - Type-check with TypeScript and build for production.
- `pnpm preview` - Locally preview the production build.
- `pnpm lint` - Run ESLint.
