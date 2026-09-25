import { NextRequest, NextResponse } from "next/server";

// This endpoint receives leads from the homepage enquiry form.
// Wire it up to an email service (e.g. Resend, SendGrid, Nodemailer + SMTP)
// or a CRM webhook before going live. For now it validates and logs the
// submission so the form works end-to-end in development.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: send an email/notification to the sales team, e.g.:
    // await resend.emails.send({
    //   from: "website@acconscientific.com",
    //   to: "sales@acconscientific.com",
    //   subject: `New enquiry from ${name}`,
    //   text: JSON.stringify(body, null, 2),
    // });

    console.log("New enquiry:", body);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
