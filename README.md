# Mohd. Sayem Lari — Developer Portfolio

A multi-page developer portfolio with an original retro RPG interface. Built for internships, software roles, project discovery and freelance enquiries. There are no official game characters, logos, sprites or music.

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, React Router, Framer Motion and Lucide React. Inter and Press Start 2P fonts are self-hosted through Fontsource. No custom backend is required.

## Run locally

Use Node.js 22.12+ or 24 LTS and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To check the project:

```sh
npm run lint
npm run build
npm run preview
```

The production files are generated in `dist/`. Commit `package-lock.json` with your source; `npm ci` gives a reproducible install. This project uses the official WebAssembly distribution of esbuild through an npm alias/override for compatibility with restricted Windows environments. It has the same build API and does not ship to visitors.

## Routes

`/`, `/about`, `/skills`, `/projects`, `/experience`, `/achievements`, `/resume`, `/contact`, plus a themed catch-all 404 screen. Secondary routes are lazy loaded. Vercel rewrites allow direct visits and refreshes on nested routes.

## Project structure

```text
public/
  audio/                 Original soundtrack and its usage license
  Mohd_Sayem_Lari_Resume.pdf  Supplied resume
  Mohd_Sayem_Lari_CV.pdf      Supplied CV
  favicon.svg
  manifest.webmanifest
src/
  components/
    audio/               Persistent music controls
    layout/              Footer and social links
    navigation/          Responsive navigation and sliding active indicator
    projects/            Reusable project card and workflow
    transitions/         Reduced-motion-aware route transitions
    ui/                  Panels, buttons, badges and reusable content cards
    ContactForm.tsx
  data/                  Projects, skills, experience, education, achievements
  hooks/                 Route metadata
  pages/                 Eight pages and NotFound
  styles/                Shared theme and responsive styles
  App.tsx
  main.tsx
```

## Content editing

- Edit `src/data/projects.ts` for project descriptions, contribution, status, links and technologies. Some project stacks were not supplied, so those records intentionally show known scope/integration tags rather than invented framework claims.
- Edit `src/data/skills.ts` for the three familiarity groups.
- Edit `src/data/experience.ts`, `education.ts` and `achievements.ts` for the corresponding records.
- Home and About introduction copy lives in their page files.
- Contact information is in `Contact.tsx`, `ContactForm.tsx`, and `components/layout/Footer.tsx`.
- Shared colors, spacing, breakpoints and component styles live in `src/styles/index.css`. Tailwind utilities are also available.

Do not turn ongoing ResNet work into a completed-project claim until it is complete. JalDrishti's x402 work is explicitly a separate competition integration. Academic semester scores are displayed separately; no university cumulative CGPA is inferred.

## Resume and CV

The supplied documents are stored at `public/Mohd_Sayem_Lari_Resume.pdf` and `public/Mohd_Sayem_Lari_CV.pdf`. Each View button opens its document in a new tab; each Download button downloads it using the same filename.

To update either document later, replace its PDF using the same filename and rebuild. No readiness flag or page changes are needed.

## Music

An original, procedurally composed 32-second chiptune loop is included at `public/audio/background-theme.wav`. No third-party samples or game melodies were used. Usage rights are described in `public/audio/LICENSE.txt`.

Playback is attempted on load at 18% volume. If a browser blocks it, the first pointer or keyboard interaction attempts playback again. Music continues across routes. The visible controls support on/off, mute and volume; on/off preference is saved locally when browser storage is available. Browsers ultimately decide whether autoplay is allowed.

To use your own royalty-free music, place it at `public/audio/background-theme.mp3`, retain the license, and set `VITE_MUSIC_URL=/audio/background-theme.mp3`. Other browser-supported audio URLs also work. No empty MP3 is shipped because it would cause a broken request.

The audio component is isolated in `src/components/audio/`, so optional sound effects can be added without changing page components. Respect the same mute and user preference controls.

## Contact form

Copy `.env.example` to `.env.local`. All `VITE_` values are public browser configuration, **never secrets**.

Without an endpoint, the validated form opens a prefilled `mailto:` draft. The visitor must send it in their email application; the UI never reports this as a successful delivery. Direct email, GitHub and LinkedIn links are also provided.

For Formspree:

1. Create a form in your own Formspree account and verify the destination email.
2. Set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID`.
3. Set the same environment variable in Vercel and rebuild.
4. Configure allowed domains and spam protection in Formspree.
5. Submit a real test message and verify receipt before launch.

The integration sends name, email, subject and message as form data. It includes native validation, a honeypot, busy state, a 15-second timeout, explicit failure feedback and an accessible success status. A successful HTTP response means the service accepted the request; inbox delivery should be verified in your provider. No live provider was configured or tested as part of this build.

## Vercel deployment

1. Push this folder to your GitHub repository.
2. Import it into Vercel. Use this directory as the project root.
3. Select Vite, build command `npm run build`, output directory `dist`.
4. Add the environment variables you need from `.env.example`.
5. Set `VITE_SITE_URL` to your final HTTPS origin, for example `https://your-domain.example`, to enable canonical links.
6. Deploy and verify direct route refreshes, PDFs, audio and the contact service.

`vercel.json` includes SPA rewrites and basic security headers. This deliverable is configured for Vercel but has not been published to a Vercel account.

## Accessibility and performance

Semantic landmarks, skip link, keyboard-visible focus, mobile navigation, form labels, live status feedback, native disclosures and reduced-motion support are included. Animations last 350ms and are disabled by the operating-system reduced-motion preference. Content grids stack on narrow screens. The design intentionally uses typography and interface icons instead of a profile photo or avatar.

Page titles update on navigation. Root SEO and Open Graph text, favicon, manifest and theme color are included. Canonical metadata is enabled only with a configured origin. No social-preview image is fabricated. This is a client-rendered SPA; crawlers that do not run JavaScript see the site-wide metadata.

Run Lighthouse against the production deployment to measure real performance, accessibility and SEO. No Lighthouse scores or formal WCAG conformance are claimed.

## Before public launch

- Review the included resume and CV before public launch.
- Add the final site origin and optionally connect the contact service.
- Confirm external project URLs and source repositories are still available.
- Review the exact institution labels and achievement statuses before any future edits.
- Test on your target browsers and review audio volume preferences.

Third-party packages and fonts retain their respective licenses. The portfolio source and included original track are provided for your use and customization.
