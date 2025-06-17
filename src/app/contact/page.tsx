"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <div className="pt-20">
        <Contact />
      </div>
    </GoogleReCaptchaProvider>
  );
}