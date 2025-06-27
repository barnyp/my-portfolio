"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { getTestAttributes } from "@/lib/feature-flags";
import { ExternalLink, Github, Eye } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";

/**
 * Portfolio item category type for type safety
 */
type PortfolioCategory = 'Analytics' | 'Engineering' | 'Machine Learning' | 'Automation' | string;

/**
 * Interface for portfolio item data
 */
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: PortfolioCategory;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

/**
 * Type for button links in portfolio items
 */
interface PortfolioButtonProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

/**
 * Portfolio section component that displays a grid of projects with animations
 * @returns JSX.Element
 */
export default function Portfolio(): JSX.Element {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Data Analytics Dashboard",
      description: "Interactive business intelligence dashboard built with Power BI",
      image: "/img/about.jpg",
      category: "Analytics",
      tech: ["Power BI", "SQL", "DAX"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "ETL Pipeline",
      description: "Automated data extraction and transformation pipeline",
      image: "/img/profile.jpg",
      category: "Engineering",
      tech: ["Python", "Apache Airflow", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Sales Forecasting Model",
      description: "Machine learning model for sales prediction and analysis",
      image: "/img/about.jpg",
      category: "Machine Learning",
      tech: ["Python", "Scikit-learn", "Pandas"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Customer Segmentation",
      description: "Advanced customer analytics and segmentation system",
      image: "/img/profile.jpg",
      category: "Analytics",
      tech: ["R", "Tableau", "SQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Real-time Monitoring",
      description: "Real-time data monitoring and alerting system",
      image: "/img/about.jpg",
      category: "Engineering",
      tech: ["Grafana", "InfluxDB", "Python"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Financial Report Automation",
      description: "Automated financial reporting and analysis platform",
      image: "/img/profile.jpg",
      category: "Automation",
      tech: ["Excel VBA", "Power Query", "SQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
    <section className="container py-20" {...getTestAttributes('portfolio-section')}>
      <SectionHeader 
        title="Portfolio" 
        subtitle="My Recent Work" 
        {...getTestAttributes('portfolio-header')} 
      />
      <div className="text-center mb-12">
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my expertise in data analytics, 
          business intelligence, and data engineering.
        </p>
      </div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group bg-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            data-testid={`portfolio-item-${item.id}`}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Button
                  size="sm"
                  variant="secondary"
                  className="backdrop-blur-sm"
                  asChild
                >
                  <motion.a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </motion.a>
                </Button>
                
                <Button
                  size="sm"
                  variant="secondary"
                  className="backdrop-blur-sm"
                  asChild
                >
                  <motion.a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                </Button>
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 group/btn"
                  asChild
                >
                  <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
