import Link from "next/link";

export default function Hero() {
  return (
    <section className="page-shell">
      <div className="page-container">
        <div className="surface-soft fade-in mx-auto max-w-4xl px-6 py-14 text-center sm:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            ShopNest Collection
          </p>
          <h1 className="title-xl">Discover Essential Products</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Explore a focused catalog with clear details, smooth navigation, and
            a consistent shopping interface on every device.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/items"
              className="bw-btn bw-link-focus px-6 py-3 text-sm"
            >
              Browse Products
            </Link>
            <Link
              href="/about"
              className="bw-btn-ghost bw-link-focus px-6 py-3 text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
