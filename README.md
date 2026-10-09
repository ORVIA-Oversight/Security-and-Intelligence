# ORVIA Security & Intelligence

Production-oriented Next.js App Router website built from the supplied ORVIA Security & Intelligence brief.

## Run locally

```bash
npm install
npm run dev
```

## Routes
- /
- /intelligence
- /investigations
- /digital-evidence-osint
- /monitoring-risk
- /iris-intelligence
- /reports
- /about-governance
- /contact
- /privacy

## Notes
- Uses the supplied ORVIA navy/warm white/teal/gold/purple/orange system.
- Conceptual IRIS UI is explicitly labelled “Illustrative interface”.
- Contact page uses direct email/telephone (hello@orvia.org.uk, 0330 043 3703). No online form until a governed intake route exists.
- /privacy is based on the existing ORVIA Oversight privacy wording and needs founder/data-protection review.
- Media is served from /public/media/security. Film 02 is withdrawn for regeneration (see media-review/README.md).
- Security headers (CSP etc.) are set in next.config.mjs.
