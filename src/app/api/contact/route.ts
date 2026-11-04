import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const LIMITS = {
  subject: 100,
  name: 120,
  email: 200,
  phone: 40,
  company: 160,
  eventDate: 20,
  eventLocation: 160,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;

const LABELS: Record<Field, string> = {
  subject: "Subject",
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  eventDate: "Event date",
  eventLocation: "Event location",
  message: "Message",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function bad(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return bad("Invalid request.");
  }

  // Honeypot: pretend success so bots move on.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  const data = {} as Record<Field, string>;
  for (const key of Object.keys(LIMITS) as Field[]) {
    const raw = body[key];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value.length > LIMITS[key]) return bad(`${LABELS[key]} is too long.`);
    data[key] = value;
  }

  if (!data.name) return bad("Please enter your name.");
  if (!EMAIL_RE.test(data.email)) return bad("Please enter a valid email address.");
  if (!data.message) return bad("Please enter a message.");

  const subject = `[Website] ${data.subject || "General inquiry"} from ${data.name}`;
  const text = (Object.keys(LABELS) as Field[])
    .filter((k) => k !== "subject" && data[k])
    .map((k) => (k === "message" ? `\n${data[k]}` : `${LABELS[k]}: ${data[k]}`))
    .join("\n");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;

  if (!SMTP_HOST || !CONTACT_TO) {
    // Not configured yet: keep the submission in the server log so nothing is lost.
    console.warn("Contact form: SMTP not configured, submission logged only.\n" + subject + "\n" + text);
    return NextResponse.json({ success: true });
  }

  try {
    const port = Number(SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });
    await transporter.sendMail({
      from: CONTACT_FROM || SMTP_USER || CONTACT_TO,
      to: CONTACT_TO,
      replyTo: { name: data.name, address: data.email },
      subject,
      text,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err, "\n" + subject + "\n" + text);
    return bad("We couldn’t send your message right now.", 502);
  }
}
