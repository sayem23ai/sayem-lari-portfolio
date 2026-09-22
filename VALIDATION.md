# Validation record

## Deployment preparation recheck - 22 September 2026

- `npm install`, `npm run build` (including TypeScript), and `npm run lint` passed.
- Local production preview returned HTTP 200 for `/`, `/about`, `/skills`, `/projects`, `/experience`, `/achievements`, `/resume`, and `/contact`.
- Every generated static file was fetched from the production preview and compared byte for byte with `dist`.
- Both PDFs parse as Mohd. Sayem Lari's documents, are served as `application/pdf`, and match their public source files exactly. View links use new tabs and Download links specify the correct filenames.
- The bundled WAV is served as `audio/wav`; fonts, SVG favicon, route chunks, and CSS are present. No local Windows asset paths or hardcoded credential patterns were found in the application source.
- Existing Vercel configuration selects Vite, `npm run build`, `dist`, and an SPA rewrite covering all named routes.
- GitHub profile, all three source repositories, JalDrishti, and Coastal Social returned HTTP 200. LinkedIn returned its automated-access blocking status 999. `shamstalentmanagementsevices.com` failed DNS resolution.
- No environment variables are required. Formspree delivery and canonical site metadata are optional configuration; contact currently opens a mail draft.
- Browser control was unavailable in this deployment session. The earlier interactive checks below are historical records, not new live-site verification.
- Dependency audit could not complete because the npm advisory endpoint failed; no clean audit result is claimed.
- Vercel login and the GitHub repository choice are pending. No public deployment URL has been verified yet.

## Earlier project validation (preserved)

Validated locally on 22 September 2026.

- Production TypeScript check and Vite build: passed.
- ESLint: passed.
- All eight routes rendered at 320, 375, 768, 1024 and 1440 CSS-pixel widths. No document horizontal overflow was observed.
- The catch-all 404 page rendered at 320px.
- Home, project archive and contact layouts were visually inspected.
- Mobile menu opened, navigated to Contact and closed after selection.
- CoastalSocial's detail disclosure revealed the six-step incident workflow.
- Contact name, email, subject and message fields enforce required validation.
- Music started after interaction; mute, unmute and off controls changed their accessible state correctly.
- No browser errors were recorded in the final fresh verification tab.
- The supplied resume and CV replace the original placeholder documents without changing their PDF contents.
- Resume/CV integration: both View buttons opened the correct PDFs in new tabs, and both Download buttons triggered browser download events with their specified filenames. Both local PDF URLs returned HTTP 200 with `application/pdf`; production copies match the supplied files. The production build passed after integration. Nothing was deployed.
- The webpage uses the normal browser cursor. It contains no mouse-following glow or pointer overlay. The underscore beside the name is a separate text decoration.

Not claimed: measured Lighthouse scores, formal WCAG certification, testing on physical devices, testing every browser engine, live Formspree delivery, or a published Vercel deployment. External project availability remains controlled by their respective hosts.
