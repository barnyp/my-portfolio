"use client";

import { motion, Variants } from "framer-motion";

/**
 * Props for the SectionHeader component
 */
interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

/**
 * Reusable section header component with animated title and subtitle
 * @param props - Component properties
 * @returns JSX.Element
 */
export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps): JSX.Element {
  /**
   * Animation variants for background text
   */
  const backgroundVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  /**
   * Animation variants for foreground text
   */
  const foregroundVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.4 }
    }
  };

  return (
    <motion.div 
      className={`relative flex items-center justify-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Text */}
      <motion.h1 
        className="absolute text-6xl md:text-8xl lg:text-9xl font-bold text-muted-foreground/10 uppercase select-none"
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        data-testid="section-header-background"
        style={{
          WebkitTextStroke: "1px hsl(var(--muted-foreground) / 0.1)",
          WebkitTextFillColor: "transparent"
        }}
      >
        {title}
      </motion.h1>
      
      {/* Foreground Text */}
      <motion.h2 
        className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-primary uppercase text-center px-4"
        variants={foregroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        data-testid="section-header-foreground"
      >
        {subtitle}
      </motion.h2>
    </motion.div>
  );
} 