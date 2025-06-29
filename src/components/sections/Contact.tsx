"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, LucideIcon } from "lucide-react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import featureFlags, { getTestAttributes } from '@/lib/feature-flags';

// Define explicit interfaces for form data and API responses
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  href: string;
}

type StatusType = "" | "Sending..." | "success" | "error" | "CAPTCHA not ready";

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export default function Contact(): React.ReactElement {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<StatusType>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  /**
   * Handle input changes for form fields
   * @param e - Change event from input or textarea elements
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle form submission with reCAPTCHA validation
   * @param e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    // Handle recaptcha based on feature flags
    let recaptchaToken = "";
    
    if (featureFlags.bypassRecaptcha) {
      // In test mode, use a mock token
      console.log("Using mock reCAPTCHA token in test environment");
      recaptchaToken = "test-token-for-e2e-tests";
    } else {
      // In production, use the real reCAPTCHA
      if (!executeRecaptcha) {
        setStatus("CAPTCHA not ready");
        setIsLoading(false);
        return;
      }
      
      // Get the token for the 'contact_form' action
      recaptchaToken = await executeRecaptcha('contact_form');
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data: ApiResponse = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      content: "notify@paulbarnabas.com",
      href: "mailto:notify@paulbarnabas.com"
    },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   content: "+234 813 555 5555",
    //   href: "tel:+2348135555555"
    // },
    {
      icon: MapPin,
      title: "Location",
      content: "Lagos, Nigeria",
      href: "#"
    }
  ];

  /**
   * Animation variants for container elements
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  /**
   * Animation variants for individual items
   */
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="container py-20 pt-20">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        <h3 className="text-xl font-semibold text-primary mt-2">Get In Touch</h3>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Ready to transform your data into actionable insights? Let's discuss how I can help your business make data-driven decisions.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto" {...getTestAttributes('contact-section')}>
        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h4 className="text-2xl font-bold mb-6">Let's talk about your project</h4>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about helping businesses unlock the power of their data. Whether you need business intelligence dashboards, 
              data analytics, or strategic insights, I'm here to help you make informed decisions that drive growth.
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold">{info.title}</h5>
                  <a 
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.content}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border"
          >
            <h5 className="font-semibold mb-2">Quick Response Time</h5>
            <p className="text-sm text-muted-foreground">
              I typically respond to all inquiries within 24 hours. For urgent matters, 
              feel free to call me directly.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6" {...getTestAttributes('contact-form')}>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                    {...getTestAttributes('contact-name')}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="h-12"
                    {...getTestAttributes('contact-email')}
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="h-12"
                  {...getTestAttributes('contact-subject')}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="min-h-[150px] resize-none"
                  {...getTestAttributes('contact-message')}
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg group"
                  disabled={isLoading}
                  {...getTestAttributes('contact-submit')}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
            
            {/* Status Messages */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                {status === "success" && (
                  <div 
                    className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg"
                    {...getTestAttributes('contact-success-message')}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                {status === "error" && (
                  <div 
                    className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg"
                    {...getTestAttributes('contact-error-message')}
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again or email me directly.</span>
                  </div>
                )}
                {status === "Sending..." && (
                  <div className="text-center text-muted-foreground">
                    <span>Sending your message...</span>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
