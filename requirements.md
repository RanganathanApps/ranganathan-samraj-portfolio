# Portfolio Page Requirements

This repository is now a **Next.js + TypeScript + Tailwind CSS** portfolio app.

## Current App Structure

The default route `/` is served by:

- `app/page.tsx`

That page renders:

- `src/myportfolio/page.tsx`

Shared layout and styling live in:

- `app/layout.tsx`
- `app/globals.css`
- `components/ui/button.tsx`

## Runtime Dependencies

These packages are required in `package.json`:

```bash
npm install next react react-dom framer-motion lucide-react
```

## Dev Dependencies

These packages support the current Next.js TypeScript and Tailwind setup:

```bash
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer
```

## Required Configuration Files

The current setup expects these files:

- `tsconfig.json`
- `next-env.d.ts`
- `postcss.config.js`
- `tailwind.config.ts`

## Required Local Files

The portfolio page imports or depends on:

- `components/ui/button.tsx`
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `src/myportfolio/page.tsx`

## Required Public Assets

These files are referenced by `src/myportfolio/page.tsx` and should exist in `public/`:

- `public/profile.jpg`
- `public/ranganathan-android-resume-2026.pdf`

## Important Next.js Assumptions

The portfolio page currently uses:

- `next/image`
- `next/link`
- `"use client"`
- the `@/*` path alias
- Tailwind utility classes

Because of that, this page should stay inside a Next.js app unless it is rewritten for another framework.

## Run Commands

Use these commands with the current repo:

```bash
npm install
npm run dev
npm run build
npm run start
```

## Current Notes

- The old Vite entry files have been removed.
- The homepage now renders `src/myportfolio/page.tsx` through `app/page.tsx`.
- The `public/` assets listed above still need to be added if you want the image and resume download links to work.
