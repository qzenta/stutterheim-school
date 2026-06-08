import { NextRequest, NextResponse } from "next/server";

function generateRef(): string {
  const ts = Date.now().toString();
  return `SIS-2027-${ts.slice(-6)}`;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      learnerName, dob, gender, gradeApplying, currentSchool, currentGrade,
      parentName, relationship, cell, email, town,
      medicalConditions, medicalDetails, hearAboutUs, notes,
    } = data;

    if (!learnerName || !gradeApplying || !parentName || !cell || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const ref = generateRef();

    const enquiryEmail = {
      sender: { name: "SIS Admissions", email: "sis@stutterheimschool.co.za" },
      to: [{ email: "sis@stutterheimschool.co.za", name: "SIS Admissions" }],
      replyTo: { email, name: parentName },
      subject: `[${ref}] New 2027 Application Enquiry — ${learnerName} (Grade ${gradeApplying})`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;background:#f0f1fa;padding:20px;">
          <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e0e2f0;">
            <div style="background:#0C0E6B;padding:20px 28px;">
              <h2 style="color:#fff;margin:0;font-size:18px;">New Application Enquiry — 2027</h2>
              <p style="color:#b3b8e8;margin:4px 0 0;font-size:12px;">Stutterheim International School · stutterheimschool.co.za</p>
            </div>
            <div style="padding:20px 28px;background:#fff3cd;border-bottom:2px solid #0C0E6B;">
              <p style="margin:0;font-size:15px;font-weight:bold;color:#0C0E6B;">Reference Number: <span style="font-size:18px;letter-spacing:1px;">${ref}</span></p>
              <p style="margin:4px 0 0;font-size:12px;color:#555;">File this reference to match with the paper application form when received.</p>
            </div>
            <div style="padding:20px 28px;">
              <h3 style="color:#0C0E6B;font-size:13px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.05em;">Learner Details</h3>
              <table style="border-collapse:collapse;width:100%;font-size:13px;margin-bottom:16px;">
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;width:180px;background:#f5f6f8;">Full Name</td><td style="padding:7px 10px;">${learnerName}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#fff;">Date of Birth</td><td style="padding:7px 10px;background:#fff;">${dob || "Not provided"}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#f5f6f8;">Gender</td><td style="padding:7px 10px;background:#f5f6f8;">${gender || "Not provided"}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#fff;">Grade Applying For</td><td style="padding:7px 10px;background:#fff;font-weight:bold;color:#0C0E6B;">Grade ${gradeApplying} — 2027</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#f5f6f8;">Current School</td><td style="padding:7px 10px;background:#f5f6f8;">${currentSchool || "Not provided"}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#fff;">Current Grade</td><td style="padding:7px 10px;background:#fff;">${currentGrade || "Not provided"}</td></tr>
              </table>
              <h3 style="color:#0C0E6B;font-size:13px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.05em;">Parent / Guardian Details</h3>
              <table style="border-collapse:collapse;width:100%;font-size:13px;margin-bottom:16px;">
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;width:180px;background:#f5f6f8;">Full Name</td><td style="padding:7px 10px;">${parentName}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#fff;">Relationship</td><td style="padding:7px 10px;background:#fff;">${relationship || "Not provided"}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#f5f6f8;">Cell Number</td><td style="padding:7px 10px;background:#f5f6f8;"><a href="tel:${cell}">${cell}</a></td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#fff;">Email</td><td style="padding:7px 10px;background:#fff;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#f5f6f8;">Town / Area</td><td style="padding:7px 10px;background:#f5f6f8;">${town || "Not provided"}</td></tr>
              </table>
              <h3 style="color:#0C0E6B;font-size:13px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.05em;">Additional Information</h3>
              <table style="border-collapse:collapse;width:100%;font-size:13px;">
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;width:180px;background:#f5f6f8;">Medical Conditions</td><td style="padding:7px 10px;">${medicalConditions === "yes" ? `Yes — ${medicalDetails || "details not provided"}` : "None declared"}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#fff;">Heard About SIS Via</td><td style="padding:7px 10px;background:#fff;">${hearAboutUs || "Not provided"}</td></tr>
                <tr><td style="padding:7px 10px;font-weight:bold;color:#555;background:#f5f6f8;vertical-align:top;">Notes / Questions</td><td style="padding:7px 10px;background:#f5f6f8;white-space:pre-wrap;">${notes || "None"}</td></tr>
              </table>
            </div>
            <p style="font-size:11px;color:#999;text-align:center;padding:12px 28px;">Submitted from stutterheimschool.co.za/apply</p>
          </div>
        </div>
      `,
    };

    const autoReply = {
      sender: { name: "Stutterheim International School", email: "sis@stutterheimschool.co.za" },
      to: [{ email, name: parentName }],
      subject: `Your Application Enquiry — Reference ${ref} — Stutterheim International School`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
          <div style="background:#0C0E6B;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">Stutterheim International School</h2>
            <p style="color:#b3b8e8;margin:4px 0 0;font-size:13px;">2027 Admissions Enquiry Confirmation</p>
          </div>
          <div style="background:#fff3cd;padding:16px 32px;border-left:4px solid #0C0E6B;">
            <p style="margin:0;font-size:13px;color:#555;">Your application reference number:</p>
            <p style="margin:4px 0 0;font-size:22px;font-weight:bold;color:#0C0E6B;letter-spacing:2px;">${ref}</p>
            <p style="margin:6px 0 0;font-size:12px;color:#666;">Please write this number clearly on your paper application form before submitting it to the school.</p>
          </div>
          <div style="background:#fff;padding:28px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#1f1f1f;font-size:15px;">Dear ${parentName},</p>
            <p style="color:#444;font-size:14px;line-height:1.6;">
              Thank you for your interest in Stutterheim International School. We have received your
              enquiry for <strong>${learnerName}</strong> (Grade ${gradeApplying}) and will contact you
              within 5 business days with the full application pack, including:
            </p>
            <ul style="color:#444;font-size:14px;line-height:2;">
              <li>The official application form</li>
              <li>Required documents checklist</li>
              <li>2027 fee structure and payment options</li>
              <li>Next steps and interview arrangements</li>
            </ul>
            <p style="color:#444;font-size:14px;line-height:1.6;">
              In the meantime, if you have any urgent questions, please don&apos;t hesitate to contact us:
            </p>
            <p style="font-size:14px;">
              📞 <a href="tel:+27673977613" style="color:#0C0E6B;">(067) 397-7613</a><br/>
              ✉️ <a href="mailto:sis@stutterheimschool.co.za" style="color:#0C0E6B;">sis@stutterheimschool.co.za</a>
            </p>
            <p style="color:#444;font-size:14px;margin-top:20px;">Warm regards,<br/><strong>Admissions Team</strong><br/>Stutterheim International School</p>
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

    await sendEmail(enquiryEmail);
    await sendEmail(autoReply);

    return NextResponse.json({ success: true, ref });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}
