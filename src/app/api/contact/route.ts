import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const payload = {
      sender: { name: "SIS Website", email: "noreply@stutterheimschool.co.za" },
      to: [{ email: "sis@stutterheimschool.co.za", name: "Stutterheim International School" }],
      replyTo: { email, name },
      subject: `New Enquiry — ${subject} — ${name}`,
      htmlContent: `
        <h2 style="color:#1A3A8F;font-family:Arial,sans-serif;">New Website Enquiry</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr><td style="padding:8px;font-weight:bold;color:#555;width:140px;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Phone</td><td style="padding:8px;">${phone || "Not provided"}</td></tr>
          <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:bold;color:#555;">Subject</td><td style="padding:8px;">${subject}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;vertical-align:top;">Message</td><td style="padding:8px;white-space:pre-wrap;">${message}</td></tr>
        </table>
        <p style="font-size:12px;color:#999;margin-top:24px;">Sent from stutterheimschool.co.za contact form</p>
      `,
    };

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Brevo error:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
