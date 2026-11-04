export const site = {
  name: "Success Plus Consulting",
  shortName: "Success Plus",
  tagline: "Corporate Leadership Consultants",
  description:
    "Success Plus is a leadership consulting firm providing hands-on management training, coaching, and mentoring. Founded in 1993 by CEO Isaac Russell.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.successplusconsulting.com").replace(/\/$/, ""),
  founded: 1993,
  phone: "844-467-7587",
  phoneHref: "tel:+18444677587",
  addresses: {
    office: {
      label: "Office",
      street: "400 South 4th Street",
      suite: "Suite 401M – 231",
      city: "Minneapolis",
      region: "MN",
      postal: "55415",
    },
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
