import { NextRequest, NextResponse } from "next/server";
import { transporter, TO } from "@/lib/mailer";

const MAX_CV_BYTES = 4 * 1024 * 1024;
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const name = data.get("name") as string | null;
  const email = data.get("email") as string | null;
  const phone = data.get("phone") as string | null;
  const location = data.get("location") as string | null;
  const role = data.get("role") as string | null;
  const motivation = data.get("motivation") as string | null;
  const cv = data.get("cv");

  if (!name || !email || !role || !motivation) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ error: "CV is required" }, { status: 400 });
  }
  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json({ error: "CV must be 4MB or smaller" }, { status: 400 });
  }
  const lower = cv.name.toLowerCase();
  if (!ALLOWED_CV_EXTENSIONS.some((ext) => lower.endsWith(ext))) {
    return NextResponse.json(
      { error: "CV must be a PDF or Word document" },
      { status: 400 }
    );
  }
  const attachments = [
    { filename: cv.name, content: Buffer.from(await cv.arrayBuffer()) },
  ];

  try {
    await transporter.sendMail({
      from: `"PSA Tanzania Website" <${process.env.GMAIL_USER}>`,
      to: TO,
      replyTo: email,
      subject: `[Volunteer] New application from ${name}`,
      attachments,
      html: `
        <h2 style="color:#1B3888">New Volunteer Application</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold;color:#575757;width:140px">Name</td><td style="padding:8px">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#575757">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px;font-weight:bold;color:#575757">Phone</td><td style="padding:8px">${phone}</td></tr>` : ""}
          ${location ? `<tr><td style="padding:8px;font-weight:bold;color:#575757">Location</td><td style="padding:8px">${location}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;color:#575757">Role</td><td style="padding:8px">${role}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#575757;vertical-align:top">Motivation</td><td style="padding:8px;white-space:pre-wrap">${motivation}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#575757">CV</td><td style="padding:8px">Attached: ${attachments[0].filename}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Volunteer email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
