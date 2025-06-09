"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

interface Post {
  title: string;
  date: string;
  slug: string;
  author?: string;
  coverImage?: string;
  excerpt?: string;
}

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
    <section className="container py-20">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Blog</h2>
        <h3 className="text-xl font-semibold text-primary">Latest From My Blog</h3>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="text-muted-foreground">No Image</span>
                </div>
              )}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  #{index + 1}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  2 min read
                </span>
              </div>
              
              <h4 className="font-bold text-xl mb-2 line-clamp-2 hover:text-primary transition-colors">
                {post.title}
              </h4>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt || "No excerpt available"}
              </p>
              
              <Link href={`/blog/${post.slug}`}>
                <Button 
                  className="w-full group"
                  variant="outline"
                >
                  Read More
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {posts.length === 0 && (
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground">No blog posts available yet.</p>
        </motion.div>
      )}
    </section>
  );
} 