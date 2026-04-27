import Link from "next/link";
import { DEFAULT_PRODUCTS } from "@/data/product";

const featuredProducts = DEFAULT_PRODUCTS.slice(0, 4);

export default function FeaturedProducts() {
  return (
    <section className="section-shell pt-0 sm:pt-0">
      <div className="page-container section-stack">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Featured Collection
          </p>
          <h2 className="title-lg mt-2">Popular Products</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="surface-card hover-lift fade-in overflow-hidden"
            >
              <div className="h-48 flex items-center justify-center bg-neutral-100 text-7xl">
                {product.image}
              </div>

              <div className="grid gap-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="bw-badge">{product.category}</span>
                  <span className="text-xs font-medium text-neutral-600">
                    {product.rating}/5
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-neutral-900">
                  {product.title}
                </h3>

                <p className="text-sm leading-6 text-neutral-600">
                  {product.description}
                </p>

                <div className="mt-1 flex items-center justify-between gap-3">
                  <p className="text-lg font-bold text-neutral-900">
                    ${product.price}
                  </p>

                  <Link
                    href={`/items/${product.id}`}
                    className="bw-btn bw-link-focus px-4 py-2 text-xs"
                  >
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
