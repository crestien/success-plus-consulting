# Product

<!-- impeccable:product-schema 1 -->

## Platform

web, SiteGround, Node.JS

## Users

- **Economic buyers:** CEOs, presidents, and senior operations leaders of mid-size to large organizations, mostly manufacturing, food processing, and other workforce-heavy operations.
- **Day-to-day buyers and champions:** plant and operations managers and HR directors who live with turnover, absenteeism, low engagement, and supervisors promoted for technical skill rather than people leadership.
- **Geography:** clients concentrated in the Southeast US (Alabama base) and the Minneapolis area; engagements are nationwide.
- **Secondary audiences:** event planners booking a speaker (company events, conferences, SHRM and chamber events), and readers of Isaac Russell's book.

Their job on the site: decide whether Success Plus understands their people problem and is credible enough to call.

## Product Purpose

Success Plus Consulting (founded 1993, Founder & CEO Isaac Russell) is a boutique leadership and organizational performance consulting firm. It develops leaders at every level, improves workforce performance and retention, and helps leadership teams plan and carry out change, measured in behavior change and business outcomes.

Site goals, in priority order:
1. Consult requests (free needs assessment via contact form or phone).
2. Speaking bookings for Isaac.
3. Sales of the book *Improving Profits Through People*.

## Positioning

The "Success Model": relationship-oriented coaching delivered on the job, alongside the client's leaders, rather than classroom training or a standardized program. Every engagement is built around the specific organization after listening and assessment. Credibility rests on Isaac's path from hourly factory worker to advisor for nationally recognized brands, which gives first-hand understanding of plant-floor and operations realities.

## Operating Context

- Engagements follow a seven-step method: Listen, Assess, Analyze, Customize, Partner, Measure, Evolve.
- Offer is organized into three solution areas: Leadership Development, Organizational Performance, Strategic Consulting. Detail pages: Leadership Coaching, Improve Retention, Diversity Coaching, One-to-One Mentoring, Strategic Planning, Talent Development.
- Entry point for buyers is a free needs assessment (first conversation).
- Site also carries a blog (posts, service guides, podcast appearances) and a speaking page.

## Capabilities and Constraints

- Next.js 16 (App Router) + Tailwind v4, built with webpack, deployed on SiteGround Node hosting. Staging: chrisw494.sg-host.com. As of 2026-11-22 the production domain still serves the old WordPress site.
- Content source of truth: `src/lib/site.ts` (services, testimonials, clients, method, proof point), `src/lib/faqs.ts`, `src/lib/blog.ts`.
- Contact form posts to `src/app/api/contact/route.ts` (nodemailer).
- Legacy pages, kept but not promoted: Life Coach for Teens, Leadership Trainee Program.
- **Rebrand in progress.** Positioning and copy may change with upcoming marketer feedback; treat current copy as provisional.

## Brand Commitments

- Keep the Success Plus logo.
- Keep navy and gold as the brand colors.
- Brand line: "Strengthen Organizational Performance Through People." (provisional pending rebrand).

## Evidence on Hand

- Client logos: Coca-Cola, Tyson Foods, Johnsonville, Bonnie Plants, American Seafoods (`public/images/clients/`).
- Six attributed testimonials (Coca-Cola Bottling United, Harrisons Poultry, Tyson Foods, Rockline Industries, Alabama Industrial Development Training, Northeast Alabama Regional Medical Center) in `src/lib/site.ts`.
- Case result: Tyson Foods plant, Ashland AL, turnover reduced 30%+ and absenteeism 10% (blog post linked from `proofPoint`).
- Book: *Improving Profits Through People* by Isaac Russell (`public/images/book-cover.webp`).
- Portrait of Isaac (`public/images/isaac-portrait.webp`). No confirmed on-site photography of Isaac working with client teams yet.
- Do not invent additional metrics, client names, testimonials, pricing, or engagement lengths.

## Product Principles

1. Lead with the buyer's people problem and a measurable outcome, then prove it.
2. Proof over promises: real clients, attributed quotes, and specific results carry the argument.
3. Practical, plain language a plant manager and a CEO both respect; no consulting jargon.
4. Boutique and personal: Isaac and the relationship are the product, so the site should feel like a person, not a template.
5. Every page offers a clear, low-risk next step (free needs assessment or call).

## Accessibility & Inclusion

Target WCAG 2.2 AA. Audience skews toward senior executives, so favor readable type sizes and strong contrast.
