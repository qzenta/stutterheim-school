import { NextRequest, NextResponse } from "next/server";

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5MB

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const position = form.get("position");
    const coverNote = form.get("coverNote");
    const cv = form.get("cv");

    if (
      typeof name !== "string" || !name ||
      typeof email !== "string" || !email ||
      typeof phone !== "string" || !phone ||
      typeof position !== "string" || !position ||
      !(cv instanceof File)
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (cv.type !== "application/pdf") {
      return NextResponse.json({ error: "CV must be a PDF file" }, { status: 400 });
    }
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json({ error: "CV file must be under 5MB" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "sis@stutterheimschool.co.za";
    if (!apiKey) {
      console.error("BREVO_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const cvBase64 = Buffer.from(await cv.arrayBuffer()).toString("base64");
    const note = typeof coverNote === "string" ? coverNote : "";

    const applicationEmail = {
      sender: { name: "SIS Careers", email: "sis@stutterheimschool.co.za" },
      to: [{ email: recipientEmail, name: "SIS Admissions" }],
      replyTo: { email, name },
      subject: `New Careers Application — ${position} — ${name}`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;background:#f0f1fa;padding:20px;">
          <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e0e2f0;">
            <div style="background:#0C0E6B;padding:20px 28px;">
              <h2 style="color:#fff;margin:0;font-size:18px;">New Careers Application</h2>
              <p style="color:#b3b8e8;margin:4px 0 0;font-size:12px;">Stutterheim International School · stutterheimschool.co.za/careers</p>
            </div>
            <div style="padding:20px 28px;">
              <table style="border-collapse:collapse;width:100%;font-size:13px;">
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;width:160px;background:#E8EAEE;">Position</td><td style="padding:7px 10px;background:#E8EAEE;font-weight:bold;color:#0C0E6B;">${position}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#fff;">Full Name</td><td style="padding:7px 10px;background:#fff;">${name}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#E8EAEE;">Email</td><td style="padding:7px 10px;background:#E8EAEE;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#fff;">Phone</td><td style="padding:7px 10px;background:#fff;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#E8EAEE;vertical-align:top;">Cover Note</td><td style="padding:7px 10px;background:#E8EAEE;white-space:pre-wrap;">${note || "None provided"}</td></tr>
              </table>
              <p style="font-size:12px;color:#999;margin-top:20px;">CV attached as ${cv.name}.</p>
            </div>
          </div>
        </div>
      `,
      attachment: [{ content: cvBase64, name: cv.name }],
    };

    const autoReply = {
      sender: { name: "Stutterheim International School", email: "sis@stutterheimschool.co.za" },
      to: [{ email, name }],
      subject: `We've received your application — Stutterheim International School`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
          <div style="background:#0C0E6B;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">Stutterheim International School</h2>
            <p style="color:#b3b8e8;margin:4px 0 0;font-size:13px;">Careers Application Confirmation</p>
          </div>
          <div style="background:#fff;padding:28px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#1f1f1f;font-size:15px;">Dear ${name},</p>
            <p style="color:#444;font-size:14px;line-height:1.6;">
              Thank you for your interest in joining Stutterheim International School. We have received
              your application for <strong>${position}</strong> and our team will review it and be in
              touch if there&apos;s a match.
            </p>
            <p style="color:#444;font-size:14px;line-height:1.6;">
              If you have any urgent questions in the meantime, please don&apos;t hesitate to contact us:
            </p>
            <p style="font-size:14px;">
              📞 <a href="tel:+27673977613" style="color:#0C0E6B;">(067) 397-7613</a><br/>
              ✉️ <a href="mailto:sis@stutterheimschool.co.za" style="color:#0C0E6B;">sis@stutterheimschool.co.za</a>
            </p>
            <p style="color:#444;font-size:14px;margin-top:20px;">Warm regards,<br/><strong>Stutterheim International School</strong></p>
          </div>
          <p style="color:#aaa;font-size:11px;text-align:center;margin-top:12px;">49 Louisa Street, Stutterheim, Eastern Cape, 4930</p>
        </div>
      `,
    };

    const sendEmail = async (payload: object) => {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": apiKey, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
    };

    await sendEmail(applicationEmail);
    await sendEmail(autoReply);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Careers apply API error:", err);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
