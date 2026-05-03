import Link from "next/link";
import { DEFAULT_PRODUCTS } from "@/data/product";

const featuredProducts = DEFAULT_PRODUCTS.slice(0, 4);

export default function FeaturedItemsSection() {
  return (
    <section className="section-shell pt-2">
      <div className="page-container section-stack">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">Featured</p>
            <h2 className="title-lg mt-2">Popular Picks This Week</h2>
          </div>

          <Link href="/items" className="bw-btn-ghost bw-link-focus px-4 py-2 text-sm">
            View All Products
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.id} className="surface-card hover-lift overflow-hidden">
              <div className="ui-soft-bg flex h-48 items-center justify-center text-7xl">{product.image}</div>

              <div className="grid gap-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="bw-badge">{product.category}</span>
                  <span className="ui-muted text-xs font-medium">{product.rating}/5</span>
                </div>

                <h3 className="ui-strong text-lg font-semibold">{product.title}</h3>

                <p className="ui-muted text-sm leading-6">{product.description}</p>

                <div className="mt-1 flex items-center justify-between gap-3">
                  <p className="ui-strong text-lg font-bold">${product.price}</p>

                  <Link href={`/items/${product.id}`} className="bw-btn bw-link-focus px-4 py-2 text-xs">
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

