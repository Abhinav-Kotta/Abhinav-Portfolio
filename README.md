# Abhinav’s Digital Sketchbook

A complete hand-drawn redesign of Abhinav Kotta’s personal portfolio, built with Vite and vanilla JavaScript. Warm dotted paper, self-hosted Kalam and Patrick Hand fonts, reusable ink illustrations, irregular borders, and hard offset shadows carry the visual system throughout.

## Run

Use Node.js 20.18+ (or a supported newer LTS release).

```sh
npm ci
npm run dev
```

The development server is local-only by default. Use the address printed by Vite.

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. It is a static site with no server-side runtime, account system, or secret environment variables.

## Deploy on Vercel

The root `vercel.json` explicitly sets the framework to Vite, installs with `npm ci`, builds with `npm run build`, and serves `dist/`. These values override an older Next.js framework/build configuration in the Vercel project.

In Vercel's project settings, keep **Root Directory** at the repository root (leave the field empty), where `package.json` and `vercel.json` live. If you place this project in a subfolder, select that subfolder instead.

Commit and push `vercel.json` to trigger a new deployment. A Git force push updates repository contents but does not reset the Vercel project's saved settings. A “No Next.js version detected” error for this Vite site indicates that the deployment is still using the Next.js preset; do not add Next.js as a workaround.

## Edit

- `src/content.js`: personal details, six projects, experience, and skill groups.
- `styles/main.css`: the centralized palette, typography, wobbly radius tokens, spacing, shadows, components, and responsive breakpoints.
- `components/`: reusable navigation, hero, project cards, and original SVG illustrations.
- `main.js`: page composition, navigation, project filters, project-note dialogs, and email copying.
- `public/`: portrait, résumé, and favicon.

The Lucide vanilla package provides the same 2.5px-stroke icon language as Lucide React without adding a React runtime to the existing vanilla JavaScript project.

## Content provenance

The active checkout originally contained a solar-system demo with generic section labels. The personal content was recovered from the user’s neighboring portfolio projects:

- `dev-portfolio/src/app/components/`: projects, role, work experience, education, publication, contact links, and technology list.
- `dev-portfolio/public/professional_headshot.jpeg`: portrait.
- `creative-portfolio/data/site-content.ts`: interests and New York City location.
- `/Users/akotta/Downloads/Abhinav_Kotta_Resume.pdf`: updated résumé and professional experience, supplied in September 2026. The website serves an unchanged copy at `/Abhinav_Kotta_Resume.pdf`.
- `https://github.com/Abhinav-Kotta/Tabla-Tuner`: Dayan Tabla Tuner descriptions and technical details.

Per the requested update, Dayan Tabla Tuner replaces Knights Khayal. DRIFT, Hurricane Outage Predictor, Behavior Tree Generator, CLARITY, and the portfolio itself are retained. The portfolio’s stack description reflects this implementation. The experience timeline follows the supplied résumé: L3Harris Technologies (July 2026–present), TheMindOverMarket, Los Alamos National Laboratory, and the L3Harris internship. The infrastructure toolbox includes ELK stack instead of Git, and the intelligence toolbox omits computer vision. The placeholder DOI from the previous portfolio was omitted; the existing IEEE document link is retained.

## Interaction and accessibility

- Native anchors for in-page navigation and email; verified source contact URLs.
- Project filtering with pressed state and live result announcements.
- Native modal dialogs with Escape dismissal, focus trapping, and focus restoration.
- Keyboard focus indicators, a skip link, semantic headings, and labeled controls.
- A mobile navigation menu and layouts at 760px and 390px breakpoints.
- Reduced-motion support and an opt-in animated hero illustration.
- Email copying reports success only after the Clipboard API succeeds; a failure offers a manual alternative.
- Contact opens the visitor’s mail app. No message-delivery backend is implied.

## Starting a fresh repository

Use the supplied `abhinav-sketchbook-source.zip` or copy the source while excluding `.git/`, `node_modules/`, `dist/`, and `artifacts/`. The old repository tracked dependencies, so its existing index still contains historical `node_modules` entries; the new `.gitignore` prevents that in a fresh repository. Install dependencies with `npm ci`, and commit the source plus `package-lock.json`.

## Verification

The production build and static content/integrity checks were run. Browser preview access was denied by the permission system in this session, so visual, responsive, and browser interaction checks remain to be performed. The design includes those behaviors, but they are not claimed as browser-verified.
