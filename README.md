# Success Plus Consulting Website

A modern website for Success Plus Consulting, a leadership consulting firm founded in 1993 by CEO Isaac Russell. Built with Next.js, TypeScript, and Tailwind CSS.

## Pages

- **Home** — Brand line hero, promise, what we help solve, the Success Plus difference, 7-step method, proof, Meet Isaac
- **How We Work** — Listen → Assess → Analyze → Customize → Partner → Measure → Evolve
- **Solutions** — Overview plus three area pages (`/solutions/[area]`): Leadership Development, Organizational Performance, Strategic Consulting
- **Service detail pages** — Leadership Coaching, Improve Retention, Diversity Coaching, One to One Mentoring, Strategic Planning, Talent Development, Life Coach for Teens, Leadership Trainee Program
- **Results** — Featured 30%+ turnover result and client testimonials (`/testimonials` redirects here)
- **About**, **Invite Isaac to Speak**, **Free Seminar**, **Contact**

Brand messaging, solution areas, the method, and testimonials all live in `src/lib/site.ts`.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (design tokens and utilities in `src/app/globals.css`)
- **Fonts:** Source Serif 4 (display) + Geist (body) via `next/font`
- **Icons:** Lucide React
- **Email:** Nodemailer (contact, speaking, and seminar forms)

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:4173](http://localhost:4173).

## Deployment to SiteGround

This site is built for SiteGround Node.js Projects (GrowBig, GoGeek, or Cloud).

SiteGround starts `index.js` by default and assigns a `PORT`. This repo includes `index.js` / `server.js` so Next.js binds to that port on `0.0.0.0`.

In Site Tools for the Node.js project, confirm:

| Setting | Value |
| --- | --- |
| Framework | Next.js (or Node.js) |
| Node version | 20 or newer |
| Package manager | npm |
| Build command | `npm run build` (uses webpack; SiteGround blocks Turbopack) |
| Start command | `npm start` or `node index.js` |
| Output directory | leave blank / `.next` |

Images are served as static files from `/images/...`. Next.js image optimization (`/_next/image`) is turned off because SiteGround’s firewall blocks that endpoint.

Then trigger a new deploy from the connected GitHub branch (`main`). Check the deploy logs if the default Hello World page is still showing.

### If the build fails with "no space left on device"

SiteGround keeps each failed deploy under `public_html/.nodeapp/`. Those leftover folders fill the account quota, so `npm install` dies with `ENOSPC` and the site stays on the default Hello World page.

1. In Site Tools → File Manager, open `public_html/.nodeapp/`.
2. Delete every old numbered folder (for example `1791857856-7saoz4`). Keep only the currently running app if one exists.
3. Empty the File Manager Recycle Bin / Trash.
4. In Site Tools → Statistics or Disk Usage, confirm free space is back.
5. Redeploy `main`.

This repo is also slimmed so `npm install` no longer pulls the `shadcn` CLI or ESLint.

## Environment variables

Set these in SiteGround (Node.js project → Environment variables) so the forms deliver email. Without `SMTP_HOST` and `CONTACT_TO`, submissions are only written to the server log.

| Variable | Example | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.successplusconsulting.com` (default) | Used for canonical URLs, sitemap, and Open Graph. Only set it to override. |
| `SMTP_HOST` | `mail.yourdomain.com` | SiteGround: Site Tools → Email → Accounts → Mail Configuration |
| `SMTP_PORT` | `465` | 465 uses TLS; anything else uses STARTTLS |
| `SMTP_USER` | `website@yourdomain.com` | |
| `SMTP_PASS` | | |
| `CONTACT_TO` | `info@yourdomain.com` | Where form submissions go |
| `CONTACT_FROM` | `website@yourdomain.com` | Optional; defaults to `SMTP_USER` |

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/              # About page
│   ├── api/contact/        # Contact form API route
│   ├── contact/            # Contact page
│   ├── diversity-coaching/ # Service page
│   ├── free-seminar/       # Free seminar page
│   ├── improve-retention/  # Service page
│   ├── invite-isaac-to-speak/ # Speaker booking page
│   ├── leadership-coaching/   # Service page
│   ├── leadership-trainee-program/ # Service page
│   ├── life-coach-for-teens/  # Service page
│   ├── one-to-one-mentoring/  # Service page
│   ├── strategic-planning/    # Service page
│   ├── talent-development/    # Service page
│   ├── sitemap.ts / robots.ts # SEO routes
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── sections.tsx        # Shared page sections (hero, cards, CTA, testimonial)
│   ├── contact-form.tsx    # Reusable contact form
│   ├── footer.tsx          # Site footer
│   ├── header.tsx          # Navigation header
│   └── service-page.tsx    # Reusable service page template
└── lib/
    ├── site.ts             # Business info, services, clients (single source of truth)
    ├── seo.ts              # Per-page metadata helper
    └── utils.ts            # Utility functions
```
