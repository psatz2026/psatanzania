import { NextRequest, NextResponse } from "next/server";
import { transporter, TO } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, location, role, motivation } = await req.json();

  if (!name || !email || !role || !motivation) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"PSA Tanzania Website" <${process.env.GMAIL_USER}>`,
      to: TO,
      replyTo: email,
      subject: `[Volunteer] New application from ${name}`,
      html: `
        <h2 style="color:#1B3888">New Volunteer Application</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold;color:#575757;width:140px">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#575757">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px;font-weight:bold;color:#575757">Phone</td><td style="padding:8px">${phone}</td></tr>` : ""}
          ${location ? `<tr><td style="padding:8px;font-weight:bold;color:#575757">Location</td><td style="padding:8px">${location}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;color:#575757">Role</td><td style="padding:8px">${role}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#575757;vertical-align:top">Motivation</td><td style="padding:8px;white-space:pre-wrap">${motivation}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Volunteer email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
