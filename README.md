# CFIW: Centre for Integrative Wellness

Production-ready Next.js App Router website for CFIW. Business details and editable content live in `lib/site.ts`.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Before publishing, replace the placeholder contact, instructor, canonical URL and social values in `lib/site.ts`, then replace sample testimonials and image placeholders with approved assets.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Docker

```bash
docker build -t cfiw-web .
docker run --rm -p 3000:3000 cfiw-web
```

Forms validate in the browser and hand the completed message to WhatsApp. The shared adapter in `components/forms.tsx` is the integration point for a later API, CRM, email service or Supabase workflow.

## Hosted client-review copy

`npm run build:review` builds the same 14-page website as an isolated static export,
then packages a Sites-compatible Cloudflare Worker and assets in `dist/`. It does
not interrupt `npm run dev` or change the normal Next.js/Docker build.

Run `npm run test:review` to check routing, review headers, and private-file guards.
The review copy discourages search indexing, preserves browser-side WhatsApp
forms, and does not include local environment files, source maps, or PDF exports.
The Sites project ID is in `.openai/hosting.json`; credentials must never be saved
there or committed. Once published, the hosted copy does not depend on this Mac.
