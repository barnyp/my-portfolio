import { getAllPosts } from "@/lib/posts";
import BlogClient from "@/components/sections/blog-client";

export default function Blog() {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]);

  // Transform the posts to match the expected interface
  const transformedPosts = allPosts.map(post => ({
    title: post.title || '',
    date: post.date || '',
    slug: post.slug || '',
    author: post.author,
    coverImage: post.coverImage,
    excerpt: post.excerpt
  }));

  return <BlogClient posts={transformedPosts} />;
}
