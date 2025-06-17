import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import { ContactFormEmail } from "@/components/emails/contact-form-email"; // Not used directly in server context

export async function POST(request: Request) {
  const { name, email, subject, message, recaptchaToken } = await request.json();

  // 1. Validate reCAPTCHA token
  if (!recaptchaToken) {
    return NextResponse.json({ error: "Missing reCAPTCHA token." }, { status: 400 });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "reCAPTCHA secret key not configured." }, { status: 500 });
  }

  // Verify token with Google
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secretKey}&response=${recaptchaToken}`,
  });
  const verifyData = await verifyRes.json();

  if (!verifyData.success || (verifyData.score !== undefined && verifyData.score < 0.5)) {
    return NextResponse.json({ error: "Failed reCAPTCHA verification." }, { status: 400 });
  }

  // 2. Setup nodemailer transporter for SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., "smtp.zoho.com"
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your SMTP user
      pass: process.env.SMTP_PASS, // your SMTP password
    },
  });

  // 3. Compose the email
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: subject || `New message from portfolio contact form`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // html: ContactFormEmail({ name, email, message }), // If you want to render HTML, you need to render the React component to HTML string
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : error });
  }
} 