"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { getTestAttributes, getTestAttributesForItem } from '@/lib/feature-flags';
import SectionHeader from '@/components/shared/section-header';
import { Quote } from 'lucide-react';

/**
 * Interface for testimonial data
 */
interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

/**
 * Testimonials component displaying client testimonials
 * @returns JSX.Element
 */
export default function Testimonials(): JSX.Element {
  /**
   * Animation variants for container elements
   */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  /**
   * Animation variants for individual testimonial items
   */
  const itemVariants: Variants = {
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

  /**
   * Testimonial data
   */
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Director of Analytics",
      company: "TechCorp International",
      text: "Paul's expertise in data analytics transformed our business intelligence capabilities. His dashboards provided insights that directly led to a 15% increase in operational efficiency.",
      image: "/img/testimonials/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Michael Chang",
      position: "CTO",
      company: "Innovative Solutions",
      text: "Working with Paul was an excellent experience. His technical knowledge and problem-solving abilities helped us implement a data strategy that scaled with our growing business needs.",
      image: "/img/testimonials/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "VP of Operations",
      company: "Global Systems Inc.",
      text: "The BI solutions Paul implemented for us revolutionized our decision-making process. His attention to detail and understanding of our business requirements was exceptional.",
      image: "/img/testimonials/testimonial-3.jpg"
    }
  ];

  return (
    <section 
      className="py-20 bg-muted/30"
      {...getTestAttributes('testimonials-section')}>
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Testimonials" 
          subtitle="What Clients Say" 
          {...getTestAttributes('testimonials-header')}
        />
        
        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          {...getTestAttributes('testimonials-container')}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                {...getTestAttributesForItem('testimonial-card', testimonial.id)}
              >
                <Quote className="text-primary h-10 w-10 mb-4 opacity-40" />
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="flex-shrink-0 mr-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
