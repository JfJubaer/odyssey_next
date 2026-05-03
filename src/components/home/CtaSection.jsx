import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="section-shell pt-2">
      <div className="page-container">
        <div className="surface-soft p-8 text-center sm:p-12">
          <h2 className="title-lg">Ready to Build Your Product Collection?</h2>
          <p className="ui-muted mx-auto mt-3 max-w-2xl text-sm leading-7 sm:text-base">
            Start exploring the catalog now or sign in to contribute your own products and manage inventory.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/items" className="bw-btn bw-link-focus px-6 py-3 text-sm">
              Explore Catalog
            </Link>
            <Link href="/login" className="bw-btn-ghost bw-link-focus px-6 py-3 text-sm">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

