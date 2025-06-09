"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
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
                <Link 
                  href="https://github.com/paulbarnabas" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/askpaulbarnabas" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link 
                  href="mailto:paul.barnabas@outlook.com"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
              <div className="border-l border-border pl-4">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#blog", label: "Blog" },
                { href: "#contact", label: "Contact" }
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link 
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Business Intelligence</li>
              <li>Data Analytics</li>
              <li>ETL Development</li>
              <li>Dashboard Design</li>
              <li>Data Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Paul Barnabas. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
