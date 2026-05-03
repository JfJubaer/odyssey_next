import { BLOG_POSTS } from "@/components/home/data";

export default function BlogPage() {
  return (
    <section className="page-shell">
      <div className="page-container section-stack">
        <header className="text-center">
          <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">Blog</p>
          <h1 className="title-xl mt-2">Commerce and UX Insights</h1>
          <p className="ui-muted mx-auto mt-3 max-w-3xl text-sm leading-7 sm:text-base">
            Notes on product discovery, accessibility, and conversion-focused interface patterns.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="surface-card p-6">
              <p className="ui-subtle text-xs">
                {post.date} • {post.readTime}
              </p>
              <h2 className="ui-strong mt-2 text-lg font-semibold">{post.title}</h2>
              <p className="ui-muted mt-2 text-sm leading-6">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

