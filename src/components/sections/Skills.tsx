"use client";

import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Database, BarChart3, Code, Brain, Users, Wrench } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Data Analytics",
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 95, color: "bg-yellow-500" },
        { name: "Tableau", level: 90, color: "bg-blue-500" },
        { name: "Excel", level: 95, color: "bg-green-500" },
        { name: "SAP Analytics Cloud", level: 85, color: "bg-orange-500" }
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      skills: [
        { name: "SQL", level: 95, color: "bg-purple-500" },
        { name: "Python", level: 90, color: "bg-blue-600" },
        { name: "Dagster", level: 80, color: "bg-red-500" },
        { name: "Data Warehouse", level: 88, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Generative AI",
      icon: Brain,
      skills: [
        { name: "Langchain", level: 85, color: "bg-orange-600" },
        { name: "OpenAI", level: 90, color: "bg-teal-500" },
        { name: "Anthropic", level: 88, color: "bg-pink-500" },
        { name: "Gemini", level: 82, color: "bg-emerald-500" }
      ]
    },
    {
      title: "Leadership",
      icon: Users,
      skills: [
        { name: "Team Management", level: 92, color: "bg-violet-500" },
        { name: "Project Management", level: 88, color: "bg-cyan-500" },
        { name: "Strategic Planning", level: 85, color: "bg-rose-500" },
        { name: "Stakeholder Communication", level: 90, color: "bg-amber-500" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Skills" subtitle="My Skills" />
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's an overview of my technical skills and expertise levels across different areas of data science and analytics.
          </p>
        </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportEnter={() => setIsVisible(true)}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={categoryVariants}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">{category.title}</h4>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <h6 className="font-semibold text-sm">{skill.name}</h6>
                    <motion.span 
                      className="text-sm font-bold text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isVisible ? 1 : 0 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <div className="relative">
                    <Progress 
                      value={isVisible ? skill.level : 0}
                      className="h-3"
                    />
                    <motion.div
                      className={`absolute top-0 left-0 h-3 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills Summary */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Code, label: "Programming Languages", count: "5+" },
            { icon: Database, label: "Database Systems", count: "8+" },
            { icon: BarChart3, label: "Analytics Tools", count: "9+" },
            { icon: Wrench, label: "Years Experience", count: "10+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">{stat.count}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
}
