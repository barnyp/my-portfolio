import { getAllPosts } from "@/lib/posts";
import { Blog8 } from "@/components/blocks/blog8";

export default function BlogNew() {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt", "summary"]);

  // Transform our blog posts to match the Blog8 component interface
  const transformedPosts = allPosts.map((post, index) => ({
    id: post.slug || `post-${index + 1}`,
    title: post.title || '',
    summary: post.excerpt || post.summary || 'No summary available',
    label: index < 2 ? "Data Analytics" : index < 4 ? "Generative AI" : "Development", // Categorize posts
    author: post.author || "Paul Barnabas",
    published: formatDate(post.date || new Date().toISOString()),
    url: `/blog/${post.slug}`,
    image: post.coverImage || '/img/blog-1.jpg',
    tags: getTagsForPost(index)
  }));

  return (
    <div id="blog">
      <Blog8 
        heading="Latest Blog Posts"
        description="Explore insights on data analytics, business intelligence, generative AI, and modern development practices. Learn from real-world experiences and industry best practices."
        posts={transformedPosts}
      />
    </div>
  );
}

// Helper function to format date
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return 'Recent';
  }
}

// Helper function to get relevant tags for each post
function getTagsForPost(index: number): string[] {
  const tagMap = [
    ["Data Analytics", "BI Development"],     // First post
    ["Business Intelligence", "Advanced Analytics"], // Second post
    ["ETL", "Data Engineering"],              // Third post
    ["Generative AI", "Business Intelligence"], // Fourth post
    ["MCP", "AI Integration"],                // Fifth post
    ["Development", "AI Tools"]               // Sixth post
  ];
  
  return tagMap[index] || ["Data Analytics"];
} 