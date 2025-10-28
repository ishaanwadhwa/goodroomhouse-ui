Restaurant website template inspired by Sacred House Hotel using Next.js App Router, Tailwind CSS, and NextUI.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

You can start editing the homepage in `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

### Tech
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS + NextUI v2
- Framer Motion, Heroicons

### Structure
- `src/app` — routes and layouts
- `src/components` — `Navbar`, `Hero`, `Footer`
- Pages: `menu`, `reservations`, `events`, `gallery`, `about`, `contact`

### Customize
- Update brand colors in `tailwind.config.ts`
- Replace hero image in `src/components/Hero.tsx`
- Edit copy and sections on `src/app/page.tsx`
