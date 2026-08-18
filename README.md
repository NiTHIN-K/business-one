# Business One

Business One is a responsive marketing landing page for a business-participation program that places cellular hotspots at suitable commercial locations. The page explains the value proposition, answers operational questions, illustrates the installation process, and collects interest through a hosted form.

## What it includes

- A focused value proposition for business owners.
- A three-step explanation of location setup, coverage benefits, and revenue sharing.
- A mobile-friendly frequently asked questions experience.
- An interest form connected to a hosted form endpoint.
- Lightweight visitor analytics.

## Technology

- React 18
- Create React App
- `react-faq-component`
- Vercel Analytics

## Run locally

Requires Node.js 18 or newer.

```bash
npm ci
npm start
```

The development server opens at `http://localhost:3000`.

## Verify

```bash
npm test -- --watchAll=false
npm run build
```

## Notes

The contact form submits to an external hosted endpoint. Update that endpoint and the business claims before using this page for a new campaign.

## License

Released under the [MIT License](LICENSE).
