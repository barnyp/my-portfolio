"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { Download, Play, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export default function Hero(): JSX.Element {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect((): (() => void) | undefined => {
    setMounted(true);
    
    if (typedRef.current && typeof window !== 'undefined') {
      const typed = new Typed(typedRef.current, {
        strings: [
          "BI Developer",
          "Analytic Engineer", 
          "Data Analyst",
          "Data Practitioner",
          "Team Leadership"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });

      return () => typed.destroy();
    }
    return undefined;
  }, [mounted]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Left Column for Desktop, Top for Mobile */}
          <motion.div 
            className="order-1 lg:order-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20 w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/img/profile.jpg"
                  alt="Paul Barnabas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Right Column for Desktop, Bottom for Mobile */}
          <motion.div 
            className="order-2 lg:order-2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-lg lg:text-xl text-primary font-medium mb-3">
                I'm
              </h3>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                  Paul Barnabas
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="text-xl lg:text-2xl text-muted-foreground font-light min-h-[2.5rem] flex items-center justify-center lg:justify-start">
                {mounted ? (
                  <span ref={typedRef} className="text-primary font-medium"></span>
                ) : (
                  <span className="text-primary font-medium">BI Developer</span>
                )}
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Passionate about transforming data into actionable insights. I help businesses make informed decisions through advanced analytics and business intelligence solutions.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button 
                size="lg"
                className="group text-lg px-8 py-6"
                asChild
              >
                <motion.a
                  href="https://www.linkedin.com/in/askpaulbarnabas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </motion.a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group text-lg px-8 py-6"
                onClick={() => {
                  // Video modal functionality can be added here
                  console.log("Play video clicked");
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Play Video
                </motion.div>
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/paulbarnabas", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/askpaulbarnabas", label: "LinkedIn" },
                { icon: Mail, href: "mailto:paul.barnabas@outlook.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
