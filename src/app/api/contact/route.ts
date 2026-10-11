import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // In production, wire this to an email service or CRM
  console.log("Contact form submission:", body);

  return NextResponse.json({ success: true });
}
