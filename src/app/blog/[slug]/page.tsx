import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "author",
    "content",
  ]);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="pt-20">
      <div className="container py-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <a href="/blog" className="text-primary hover:underline">Blog</a>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-muted-foreground">{post.title}</span>
        </nav>
        <article className="prose lg:prose-xl mx-auto">
          <h1>{post.title}</h1>
          <p className="text-muted-foreground">{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
} 