import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormEmail } from "@/components/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // This needs to be a domain you have verified with Resend
      to: "paul.barnabas@outlook.com",
      subject: subject,
      react: ContactFormEmail({ name, email, message }),
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    return NextResponse.json({ error });
  }
} 