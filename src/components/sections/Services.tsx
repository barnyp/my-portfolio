"use client";

import { BarChart2, LineChart, Sparkles, Database, Users, LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { getTestAttributes, getTestAttributesForItem } from "@/lib/feature-flags";
import SectionHeader from "@/components/shared/section-header";

/**
 * Interface for service item data
 */
interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Services component displaying the services offered
 * @returns React.ReactElement
 */
export default function Services(): React.ReactElement {
  const serviceItems: ServiceItem[] = [
    {
      icon: BarChart2,
      title: "Business Intelligence",
      description: "Transform your raw data into actionable insights with interactive dashboards and real-time reporting tailored to your business needs."
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description: "Unlock trends and patterns in your data to drive strategic decisions and optimize business performance through advanced analytics."
    },
    {
      icon: Sparkles,
      title: "Generative AI",
      description: "Leverage the power of AI to automate processes, generate insights, and create intelligent solutions for your organization."
    },
    {
      icon: Database,
      title: "Data Warehousing",
      description: "Build scalable and secure data warehouses to centralize, store, and manage your business data efficiently."
    },
    {
      icon: Users,
      title: "Data Consulting",
      description: "Get expert advice on data strategy, architecture, and best practices to maximize the value of your data assets."
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
    <section 
      className="container py-20" 
      {...getTestAttributes('services-section')}>
      <SectionHeader title="Services" subtitle="What I Offer" />
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        data-testid="services-grid"
      >
        {serviceItems.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={service.title}
              className="text-center p-6 border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 service-card service-item"
              variants={itemVariants}
              {...getTestAttributesForItem('service-item', index)}
            >
              <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h4 className="font-bold mb-2">{service.title}</h4>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
