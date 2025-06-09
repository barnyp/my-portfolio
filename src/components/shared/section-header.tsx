"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
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
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.h2>
    </motion.div>
  );
} 