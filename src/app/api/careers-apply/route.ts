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

    const webhookUrl = process.env.CAREERS_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const cvBuffer = Buffer.from(await cv.arrayBuffer());

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        position,
        coverNote: typeof coverNote === "string" ? coverNote : "",
        cv: {
          filename: cv.name,
          contentType: cv.type,
          base64: cvBuffer.toString("base64"),
        },
        submittedAt: new Date().toISOString(),
        source: "stutterheimschool.co.za/careers",
      }),
    });

    if (!res.ok) throw new Error(await res.text());

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Careers apply API error:", err);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
