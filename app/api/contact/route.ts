import { NextRequest, NextResponse } from "next/server";
import { transporter, TO } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"PSA Tanzania Website" <${process.env.GMAIL_USER}>`,
      to: TO,
      replyTo: email,
      subject: subject ? `[Contact] ${subject}` : `[Contact] Message from ${name}`,
      html: `
        <h2 style="color:#1B3888">New Contact Message</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold;color:#575757;width:120px">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#575757">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          ${subject ? `<tr><td style="padding:8px;font-weight:bold;color:#575757">Subject</td><td style="padding:8px">${subject}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;color:#575757;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
