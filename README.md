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

This site is designed for SiteGround's Node.js Projects hosting (GrowBig, GoGeek, or Cloud plans):

1. Push the repo to GitHub
2. In SiteGround Client Area, go to **Websites > Node.js Projects > New Project**
3. Import the GitHub repository
4. SiteGround will handle build and deployment automatically
5. Automatic redeployment on push is supported

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
