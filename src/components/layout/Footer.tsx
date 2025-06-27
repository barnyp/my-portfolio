"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, LucideIcon } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';

/**
 * Interface for footer link item
 */
interface FooterLink {
  href: string;
  label: string;
}

/**
 * Interface for social media link
 */
interface SocialLink {
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
}

/**
 * Footer component containing site links, social media, and copyright information
 * @returns React.ReactElement
 */
export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  /**
   * Quick links for main navigation
   */
  const quickLinks: FooterLink[] = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  /**
   * Social media links
   */
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/paulbarnabas",
      icon: Github,
      ariaLabel: "GitHub"
    },
    {
      href: "https://linkedin.com/in/askpaulbarnabas",
      icon: Linkedin,
      ariaLabel: "LinkedIn"
    },
    {
      href: "mailto:paul.barnabas@outlook.com",
      icon: Mail,
      ariaLabel: "Email"
    }
  ];

  /**
   * Services offered
   */
  const services: string[] = [
    "Business Intelligence",
    "Data Analytics",
    "ETL Development",
    "Dashboard Design",
    "Data Consulting"
  ];

  return (
    <footer className="bg-muted/30 border-t" data-testid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Paul</span>
              <span className="text-foreground">Barnabas</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Passionate about transforming data into actionable insights. I help businesses make informed decisions through advanced analytics and business intelligence solutions.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                {socialLinks.map((link: SocialLink, index: number) => {
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.ariaLabel}
                      href={link.href} 
                      target={link.href.startsWith('mailto') ? undefined : "_blank"}
                      rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={link.ariaLabel}
                      data-testid={`social-link-${index}`}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  );
                })}
              </div>
              <div className="border-l border-border pl-4">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2" data-testid="quick-links">
              {quickLinks.map((link: FooterLink, index: number) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`quick-link-${index}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground" data-testid="services-list">
              {services.map((service: string, index: number) => (
                <li key={service} data-testid={`service-item-${index}`}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Paul Barnabas. All rights reserved.
          </p>
          {/* <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & shadcn/ui
          </p> */}
        </div>
      </div>
    </footer>
  );
}
