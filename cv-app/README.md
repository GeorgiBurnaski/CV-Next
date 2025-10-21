This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. The site is automatically built and deployed when changes are pushed to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Build and deployment":
   - Set **Source** to "GitHub Actions"
4. The workflow will automatically deploy your site to `https://georgiburnaski.github.io/CV-Next/`

### Manual Build

To build the project locally:

```bash
cd cv-app
npm ci
npm run build
```

The static files will be generated in the `out` directory at the repository root.

### Configuration

- The site uses a base path `/CV-Next` when deployed to GitHub Pages (configured via `basePath` in `next.config.ts`)
- Static export is enabled (`output: 'export'`)
- Images are unoptimized for static hosting
- `.nojekyll` file prevents Jekyll processing

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
