export const site = {
  name: "Success Plus Consulting",
  shortName: "Success Plus",
  tagline: "Boutique Leadership & Organizational Performance Consulting",
  brandLine: "Strengthen Organizational Performance Through People.",
  promise: ["Every organization is unique.", "Every leader is unique.", "Every solution is unique."],
  description:
    "Success Plus Consulting is a boutique leadership and organizational performance consulting firm that helps organizations develop stronger leaders, improve workforce performance, and create measurable, sustainable results.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.successplusconsulting.com").replace(/\/$/, ""),
  founded: 1993,
  phone: "256-453-5577",
  phoneHref: "tel:+12564535577",
  addresses: {
    mailing: {
      label: "Mailing address",
      street: "P.O. Box 195",
      city: "Dearmanville",
      region: "AL",
      postal: "36257",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/company/success-plus-consulting",
    facebook: "https://www.facebook.com/successpluscoaching",
    x: "https://x.com/successplusllc",
  },
} as const;

export type Service = {
  name: string;
  href: string;
  image: string;
  summary: string;
  cta: string;
};

export const services: Service[] = [
  {
    name: "Leadership Coaching",
    href: "/leadership-coaching",
    image: "/images/services/leadership.jpg",
    summary: "Build a leadership plan that answers the hard questions before they cost you.",
    cta: "Become a great leader",
  },
  {
    name: "Improve Retention",
    href: "/improve-retention",
    image: "/images/services/retention.jpg",
    summary: "A thorough plan to prevent turnover and keep your best people.",
    cta: "Develop a retention plan",
  },
  {
    name: "Diversity Coaching",
    href: "/diversity-coaching",
    image: "/images/services/diversity.jpg",
    summary: "Lead, respect, and motivate a diverse workforce for stronger results.",
    cta: "Explore diversity coaching",
  },
  {
    name: "One to One Mentoring",
    href: "/one-to-one-mentoring",
    image: "/images/services/mentoring.png",
    summary: "Personal, hands-on mentoring for every level of leadership.",
    cta: "Get personal guidance",
  },
  {
    name: "Strategic Planning",
    href: "/strategic-planning",
    image: "/images/services/planning.png",
    summary: "Create, define, and execute your short- and long-term goals.",
    cta: "Create your strategy",
  },
  {
    name: "Talent Development",
    href: "/talent-development",
    image: "/images/services/talent.jpg",
    summary: "Real leadership skills that can't be taught in a classroom.",
    cta: "Reach your full potential",
  },
  {
    name: "Life Coach for Teens",
    href: "/life-coach-for-teens",
    image: "/images/services/teens.jpg",
    summary: "Our Teen Mentoring Program helps teens build a better future.",
    cta: "Help your teen succeed",
  },
  {
    name: "Leadership Trainee Program",
    href: "/leadership-trainee-program",
    image: "/images/services/trainee.jpg",
    summary: "Why an official training process matters, and how to build yours.",
    cta: "Learn about the program",
  },
];

export const clients = [
  { name: "Coca-Cola", src: "/images/clients/coca-cola.png", w: 270, h: 103 },
  { name: "Tyson Foods", src: "/images/clients/tyson.png", w: 490, h: 302 },
  { name: "Johnsonville", src: "/images/clients/johnsonville.png", w: 500, h: 205 },
  { name: "Bonnie Plants", src: "/images/clients/bonnie-plants.png", w: 600, h: 302 },
  { name: "American Seafoods", src: "/images/clients/american-seafoods.png", w: 480, h: 165 },
];

export type Testimonial = { quote: string; name: string; title: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "The ‘Success Model’ of Success Plus is very unique. It is not a classroom instrumental environment. It is relationship oriented through on-the-job interaction and mentoring. Think of it as coaching rather than training.",
    name: "John Sherman",
    title: "CEO – East Region, Coca-Cola Bottling Company United, Inc.",
  },
  {
    quote:
      "I don’t make a habit of hiring consultants, because so few actually bring value to the table. Success Plus is the exception to the rule. They almost quietly bring about an environmental change to people’s attitudes and work style without them really knowing it’s happening.",
    name: "David Bleth",
    title: "President & CEO, Harrisons Poultry",
  },
  {
    quote:
      "We have gained the respect of our employees through the training that was received for the managers/supervisors at our facility. This training gave us the insight that was needed for our managers/supervisors to understand the Leadership Competencies.",
    name: "Bob Massaro",
    title: "Former Human Resource Manager, Tyson’s Foods",
  },
  {
    quote:
      "Isaac was an amazing leadership coach that helped me take the development of my teams to a new level. After working with Isaac I was able to develop systems and processes to drive improvement in myself and those who report to me. This lead to improvement in all major metrics with my work teams, some of which improved over 70%. The amazing part isn't the improvement, it's the sustainment in the improvements. With his help, I didn't just drive short-term change, I drove cultural change. The skills Isaac shared with me have changed how I manage people and will impact me for the rest of my career. I can't say enough about training and develop he shared with me!",
    name: "Paul Novak",
    title: "Asset Leader, Rockline Industries",
  },
  {
    quote:
      "Experience tells me that Success Plus can establish a positive working attitude between top management and workers regarding productivity.",
    name: "George Howard",
    title: "Pioneer and Former Director, Alabama Industrial Development Training",
  },
  {
    quote:
      "Our company benefited from the services received and feels that it has improved communication and relationships with our employees.",
    name: "Allen Fletcher",
    title: "Retired Administrator, Northeast Alabama Regional Medical Center",
  },
];

/** Featured testimonial used on the home, about, and service pages. */
export const testimonial = testimonials[0];

export const eventTypes = [
  "Company Events",
  "Retreats",
  "Non-Profit Events",
  "Conferences",
  "Seminars",
  "Quarterly Meetings",
  "Chamber Events",
  "SHRM Events",
];

export const yearsInBusiness = () => new Date().getFullYear() - site.founded;

/* ------------------------------------------------------------------ */
/* Brand implementation: solution areas, method, and differentiators   */
/* ------------------------------------------------------------------ */

export type SolutionArea = {
  slug: string;
  name: string;
  href: string;
  summary: string;
  intro: string;
  image: string;
  capabilities: string[];
  outcomes: string[];
  /** Existing detail pages that sit under this area. */
  services: string[];
};

export const solutionAreas: SolutionArea[] = [
  {
    slug: "leadership-development",
    name: "Leadership Development",
    href: "/solutions/leadership-development",
    summary: "Develop the people responsible for moving your organization forward, from frontline supervisors to the executive team.",
    intro:
      "Most leaders are promoted for being good at the work, not for leading people who do it. We work alongside your leaders at every level so they set clear expectations, hold people accountable, and build teams that perform.",
    image: "/images/services/leadership.jpg",
    capabilities: [
      "Executive Coaching",
      "Supervisor Development",
      "Leadership Coaching",
      "Management Development",
      "Emerging Leaders",
    ],
    outcomes: [
      "Supervisors who deliver on expectations and the KPIs that drive the business",
      "Leaders with a plan for goals, policies, and motivation",
      "Stronger relationships between leaders and their employees",
    ],
    services: ["/leadership-coaching", "/one-to-one-mentoring", "/leadership-trainee-program"],
  },
  {
    slug: "organizational-performance",
    name: "Organizational Performance",
    href: "/solutions/organizational-performance",
    summary: "Improve workforce performance, engagement, and retention by fixing what is really getting in people's way.",
    intro:
      "People genuinely want to do great work. When performance falls short, we look past the symptoms: are expectations clear, do people have the skills and support to succeed, and are processes helping or hurting?",
    image: "/images/services/retention.jpg",
    capabilities: [
      "Workforce Development",
      "Employee Engagement",
      "Retention Strategy",
      "Performance Improvement",
      "Accountability Systems",
      "Culture Development",
      "Process Analysis",
    ],
    outcomes: [
      "Lower turnover and absenteeism",
      "Higher engagement, accountability, and productivity",
      "Improved efficiencies that last after the engagement",
    ],
    services: ["/improve-retention", "/talent-development", "/diversity-coaching"],
  },
  {
    slug: "strategic-consulting",
    name: "Strategic Consulting",
    href: "/solutions/strategic-consulting",
    summary: "Give your leadership team a clear direction and the structure to execute it through change.",
    intro:
      "Without direction, there is no success. We help leadership teams define where the organization is headed, plan for the people it will take to get there, and lead their workforce through change.",
    image: "/images/services/planning.png",
    capabilities: [
      "Strategic Planning",
      "Succession Planning",
      "Organizational Assessments",
      "Leadership Team Facilitation",
      "Change Management",
      "Project Management Strategy",
      "Team Building Strategy",
    ],
    outcomes: [
      "Short- and long-term goals the whole leadership team owns",
      "A bench of leaders ready for what's next",
      "Change that sticks with the people who have to live it",
    ],
    services: ["/strategic-planning"],
  },
];

export const method = [
  { step: "Listen", text: "Understand the organization before recommending solutions." },
  { step: "Assess", text: "Examine leadership, culture, people, processes, and performance." },
  { step: "Analyze", text: "Identify the underlying issues, not just the visible symptoms." },
  { step: "Customize", text: "Build the engagement around the organization. No generic templates." },
  { step: "Partner", text: "Work alongside the leadership team as an extension of the organization." },
  { step: "Measure", text: "Evaluate success through behavior change and business outcomes." },
  { step: "Evolve", text: "Adapt the partnership as the organization and its people change." },
];

export const differences = [
  { title: "Personalized solutions", text: "No templates. No generic workshops. Every engagement is developed specifically for your organization." },
  { title: "Analytical problem solving", text: "We look beyond symptoms to the leadership, people, process, and organizational issues affecting performance." },
  { title: "Concierge-level partnership", text: "We work alongside you as an extension of your leadership team, with hands-on guidance, coaching, and support." },
  { title: "Leadership at every level", text: "From frontline supervisors to executive leadership, we develop the people who move organizations forward." },
  { title: "Real-world experience", text: "Grounded in firsthand understanding of manufacturing, operations, and workforce challenges." },
  { title: "Sustainable results", text: "The goal isn't simply learning. It's behavioral and organizational change that lasts." },
];

export const proofPoint = {
  value: "30%+",
  label: "Reduction in annual turnover",
  text: "Success Plus helped a client develop and deploy a leader standard work model that reduced workforce turnover by more than 30 percent annually.",
};
