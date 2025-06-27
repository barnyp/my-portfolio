"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/shared/theme-toggle";

/**
 * Navigation item interface
 */
interface NavItem {
  href: string;
  label: string;
}

/**
 * Navbar component for site navigation
 * @returns JSX.Element
 */
const Navbar = (): JSX.Element => {
  /**
   * Navigation items list
   */
  const navItems: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm py-3 px-4 lg:px-5" data-testid="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/#home" legacyBehavior>
           {/* Using legacyBehavior and <a> as per shadcn docs for NavMenu links, trying for logo too */}
          <a className="text-2xl font-bold" data-testid="logo"><span className="text-primary">Paul</span>Barnabas</a>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item: NavItem, index: number) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={navigationMenuTriggerStyle()}
                    data-testid={`nav-item-${index}`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="outline"
            data-testid="hire-button"
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
