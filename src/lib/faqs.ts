/**
 * Frequently asked questions per service page (keyed by the page's href).
 * Rendered on the page and published as FAQPage structured data, so answers
 * should open with a direct, quotable sentence.
 */
import { site } from "@/lib/site";

export type Faq = { q: string; a: string };

const firstStep: Faq = {
  q: "How do we get started?",
  a: `Call ${site.phone} or send a message through the contact page. The first conversation is a free needs assessment: we listen to what you're facing, then recommend an approach built around your organization.`,
};

export const serviceFaqs: Record<string, Faq[]> = {
  "/leadership-coaching": [
    {
      q: "What is leadership coaching?",
      a: "Leadership coaching is one-to-one development that helps a leader set clear expectations, hold people accountable, and motivate a team. Success Plus coaches leaders alongside their real work rather than in a classroom, so new habits are practiced where they matter.",
    },
    {
      q: "Who is leadership coaching for?",
      a: "It's for leaders at every level, from first-line supervisors who were promoted for being good at the work to managers and executives responsible for larger teams and results.",
    },
    {
      q: "How is coaching different from leadership training?",
      a: "Training usually delivers content once, in a classroom. Coaching is ongoing and personal: we listen to the leader, their manager, and the people they lead, then work with the leader on real situations as they happen.",
    },
    {
      q: "How do you measure the results of leadership coaching?",
      a: "By what leaders do differently and what that does for the business: stronger relationships with employees, fewer repeat problems, and teams that hit the numbers that matter.",
    },
    {
      q: "How long does a coaching engagement last?",
      a: "It depends on the leader and the goals. Every engagement is built around your organization, and support continues as situations change rather than ending after a one-time workshop.",
    },
    firstStep,
  ],
  "/improve-retention": [
    {
      q: "Why do employees really quit?",
      a: "Pay and schedules matter, but they're rarely the whole story. People most often leave a supervisor, a culture, or a set of expectations that was never made clear.",
    },
    {
      q: "How does Success Plus help reduce employee turnover?",
      a: "We assess where and why turnover and absenteeism are happening, identify the leadership, culture, and process issues behind them, build a retention plan around your workforce, and equip supervisors to carry it out. Then we measure the results and adjust.",
    },
    {
      q: "What results have clients seen?",
      a: "At a Tyson Foods plant in Alabama, this approach helped leadership reduce turnover by more than 30 percent and absenteeism by 10 percent. Every organization is different, so your plan will be too.",
    },
    {
      q: "Do you work with manufacturing plants?",
      a: "Yes. Success Plus has deep experience in manufacturing and operations, with clients including Coca-Cola bottlers, Tyson Foods, Johnsonville, Bonnie Plants, and American Seafoods.",
    },
    {
      q: "Why focus on supervisors to fix retention?",
      a: "Supervisors shape the day-to-day experience of work. When they set clear expectations and treat people well, employees are far more likely to stay, so the retention plan is built into their standard work and habits.",
    },
    firstStep,
  ],
  "/diversity-coaching": [
    {
      q: "What is diversity coaching?",
      a: "Diversity coaching helps leaders lead, respect, and motivate every person on a team made up of different backgrounds, generations, cultures, and beliefs. The focus is on how leaders communicate, set expectations, and treat people every day.",
    },
    {
      q: "How is this different from diversity training?",
      a: "A one-time presentation or a statement in the handbook rarely changes behavior. We coach leaders to adapt their style to the people they lead and build respect and accountability into daily leadership.",
    },
    {
      q: "Why does diversity matter for business results?",
      a: "Misunderstandings and insensitivity, even unintentional ones, chip away at trust, engagement, and productivity. Connecting diversity goals to business objectives turns a varied workforce into a strength.",
    },
    {
      q: "Who do you coach?",
      a: "Leaders at every level. Our coaching is grounded in real-world experience, from the C-suite to third shift.",
    },
    firstStep,
  ],
  "/one-to-one-mentoring": [
    {
      q: "What is One-to-One Mentoring?",
      a: "One-to-One Mentoring pairs a leader with Isaac Russell or a Success Plus advisor for ongoing, confidential conversations about the work in front of them: a difficult employee, a new role, a team that isn't gelling, or a hard decision.",
    },
    {
      q: "Who is mentoring for?",
      a: "Frontline supervisors stepping into leadership for the first time, managers taking on larger teams, executives who want a candid sounding board, and high-potential leaders being prepared for what's next.",
    },
    {
      q: "Are mentoring conversations confidential?",
      a: "Yes. The value of an outside advisor is honest insight and a fresh perspective, which depends on leaders being able to speak openly.",
    },
    {
      q: "What's the difference between a mentor and an executive coach?",
      a: "A coach helps a leader build specific skills and habits; a mentor shares experience and acts as a trusted advisor on real situations. Our mentoring blends both, built around the leader and the organization's goals.",
    },
    firstStep,
  ],
  "/strategic-planning": [
    {
      q: "What does strategic planning with Success Plus involve?",
      a: "We facilitate planning with your leadership team to agree on where you're going, what it will take to get there, and who is responsible for each part, including the leadership and workforce the plan will require.",
    },
    {
      q: "What does the process cover?",
      a: "An honest assessment of where the organization stands today, short- and long-term goals the leadership team owns, priorities and measures for each goal, the people and succession needs behind the plan, and regular check-ins so the plan adapts.",
    },
    {
      q: "Why do most strategic plans fail?",
      a: "Most fail in execution, not on paper. Organizations chase too many ideas at once, effort gets spread thin, and people stop knowing what matters most. A focused plan with clear ownership fixes that.",
    },
    {
      q: "What do we have at the end?",
      a: "A plan that lives in how your leaders make decisions, not in a binder on the shelf, with clear accountability and measures for each priority.",
    },
    firstStep,
  ],
  "/talent-development": [
    {
      q: "What is talent development?",
      a: "Talent development is the deliberate work of growing people into the leaders your organization will need next. Success Plus develops people in their actual roles, so growth shows up in their results.",
    },
    {
      q: "How is talent development different from talent management?",
      a: "Talent management is about hiring, reviewing, and retaining people to fill roles. Talent development grows the people you already have, building a stronger bench of future leaders from within.",
    },
    {
      q: "What skills do you develop?",
      a: "The people skills to motivate, coach, and lead others; ownership of productivity, efficiency, and cost; sound decision-making under real-world pressure; and communication that builds trust up and down the organization.",
    },
    {
      q: "Why not just send people to a class?",
      a: "Education matters, but many leadership skills only develop on the job with the right guidance at the right time. We work alongside your people in their real roles.",
    },
    firstStep,
  ],
  "/life-coach-for-teens": [
    {
      q: "What does a life coach for teens do?",
      a: "A life coach for teens helps young people build a personal life plan, set goals and follow through, stand up to peer pressure, build self-confidence, and make smart decisions.",
    },
    {
      q: "How do I know if my teen would benefit?",
      a: "Many teens have the potential to succeed but no clear plan for how to get there. If your teen is struggling with direction, confidence, or pressure from school, social media, or friends, mentoring can help.",
    },
    {
      q: "How does the mentoring work?",
      a: "Every teen is different, so we start by listening to them and their family, then build the mentoring around their goals using the same principles we teach leaders: clear goals, personal accountability, and someone in their corner.",
    },
    {
      q: "How do we get started?",
      a: `Call ${site.phone} or send a message through the contact page to talk about your teen and what you're hoping for.`,
    },
  ],
  "/leadership-trainee-program": [
    {
      q: "What is a leadership trainee program?",
      a: "A leadership trainee program is a defined process for preparing new supervisors before and as they step into the role, with clear expectations from day one, the right people to learn from, and a path to competence.",
    },
    {
      q: "Why do new supervisors need a structured program?",
      a: "Without one, new supervisors learn by trial and error. The cost shows up in turnover, mistakes, and leaders who burn out before they find their footing.",
    },
    {
      q: "What does the session cover?",
      a: "Why a structured trainee process matters for productivity and retention, what your current process looks like and where it falls short, the core pieces of a strong program adapted to your organization, and next steps to build or improve your own.",
    },
    firstStep,
  ],
};
