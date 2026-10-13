# Success Plus Consulting Website

A modern website for Success Plus Consulting, a leadership consulting firm founded in 1993 by CEO Isaac Russell. Built with Next.js, TypeScript, and Tailwind CSS.

## Pages

- **Home** — Hero section, services grid, testimonials, and CTA
- **About** — Company history, the Success Model, and client testimonials
- **Leadership Coaching** — Leadership plan development services
- **Improve Retention** — Employee retention strategy services
- **Diversity Coaching** — Workforce diversity training
- **One to One Mentoring** — Personal leadership mentoring
- **Strategic Planning** — Business strategy development
- **Talent Development** — On-the-job skill building
- **Life Coach for Teens** — Teen Mentoring Program
- **Leadership Trainee Program** — Official training process development
- **Invite Isaac to Speak** — Speaking engagement booking
- **Free Seminar** — Request a free seminar
- **Contact** — Contact form and business info

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Icons:** Lucide React

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

This repo is also slimmed so `npm install` no longer pulls the `shadcn` CLI, ESLint, or TypeScript packages.

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
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── contact-form.tsx    # Reusable contact form
│   ├── footer.tsx          # Site footer
│   ├── header.tsx          # Navigation header
│   └── service-page.tsx    # Reusable service page template
└── lib/
    └── utils.ts            # Utility functions
```
