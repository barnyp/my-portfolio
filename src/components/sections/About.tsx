"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/section-header';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const personalInfo = [
    { label: "Name", value: "Paul Barnabas" },
    { label: "Birthday", value: "January 19" },
    { label: "Degree", value: "Bachelor's Degree" },
    { label: "Experience", value: "10+ Years" },
    { label: "Phone", value: "+234 803 775 4613" },
    { label: "Email", value: "paul.barnabas@outlook.com" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="About" subtitle="About Me" />
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}        >
          {/* Image Section */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/about.jpg"
                  alt="About Paul Barnabas"
                  width={500}
                  height={600}
                  className="object-cover w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Data Professional & BI Architect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Experienced Data Professional and BI Architect with a strong background in data management, 
                analytics, and business intelligence solutions. Specializes in designing scalable data architectures, 
                implementing advanced analytics strategies, and empowering businesses with actionable insights.
              </p>
            </motion.div>

            {/* Personal Information Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {personalInfo.map(({ label, value }, index) => (
                <motion.div 
                  key={label}
                  className="flex flex-col space-y-1 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-semibold text-primary">{label}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                className="group"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  Hire Me
                </motion.span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group"
                asChild
              >
                <motion.a
                  href="https://www.linkedin.com/in/askpaulbarnabas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
