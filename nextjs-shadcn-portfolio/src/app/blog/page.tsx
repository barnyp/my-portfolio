import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-10 grid gap-10">
        {allPostsData.map(({ id, date, title, summary }) => (
          <div className="border rounded-lg p-6" key={id}>
            <h2 className="text-2xl font-bold">
              <Link href={`/blog/${id}`}>{title}</Link>
            </h2>
            <small className="text-muted-foreground">{date}</small>
            <p className="text-muted-foreground mt-2">{summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 