import Link from "next/link";
import { BLOG_POSTS } from "@/components/home/data";

export default function BlogPreviewSection() {
  return (
    <section className="section-shell pt-2">
      <div className="page-container section-stack">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">Insights</p>
            <h2 className="title-lg mt-2">Latest from the Zero Shop Blog</h2>
          </div>

          <Link href="/blog" className="bw-btn-ghost bw-link-focus px-4 py-2 text-sm">
            Visit Blog
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="surface-card p-6">
              <p className="ui-subtle text-xs">
                {post.date} • {post.readTime}
              </p>
              <h3 className="ui-strong mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="ui-muted mt-2 text-sm leading-6">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

