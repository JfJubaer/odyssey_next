export default function NewsletterSection() {
  return (
    <section className="section-shell pt-2">
      <div className="page-container">
        <div className="surface-card p-6 sm:p-8">
          <div className="grid gap-5 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">Newsletter</p>
              <h2 className="title-lg mt-2">Get Product Updates and Launch Notes</h2>
              <p className="ui-muted mt-2 text-sm leading-6">
                Receive occasional updates about catalog additions, UX improvements, and new features.
              </p>
            </div>

            <form action="mailto:hello@zeroshop.example" method="post" className="grid gap-3">
              <label htmlFor="newsletter-email" className="ui-strong text-sm font-medium">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="bw-input"
              />
              <button type="submit" className="bw-btn bw-link-focus px-5 py-3 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

