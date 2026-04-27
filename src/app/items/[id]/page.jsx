"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { getLocalProducts, getMergedProducts } from "@/lib/products";

export default function ItemDetailsPage() {
  const params = useParams();
  const [localProducts] = useState(() => getLocalProducts());

  const allItems = useMemo(() => getMergedProducts(localProducts), [localProducts]);
  const id = Number(params?.id);

  const item = allItems.find((product) => Number(product.id) === id);

  if (!item) {
    return (
      <section className="page-shell">
        <div className="page-container">
          <div className="surface-soft p-10 text-center">
            <h1 className="title-lg">Item not found</h1>
            <p className="mt-3 text-sm text-neutral-600">
              The item you are looking for does not exist.
            </p>
            <Link
              href="/items"
              className="bw-btn bw-link-focus mt-6 px-5 py-3 text-sm"
            >
              Back to Items
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const relatedItems = allItems.filter(
    (product) =>
      product.category === item.category && Number(product.id) !== Number(item.id),
  );

  const specs =
    Array.isArray(item.specs) && item.specs.length > 0
      ? item.specs
      : ["User submitted item", "Details added by seller"];

  return (
    <section className="page-shell">
      <div className="page-container section-stack">
        <Link
          href="/items"
          className="bw-link bw-link-focus inline-flex text-sm font-medium"
        >
          Back to Items
        </Link>

        <article className="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
          <div className="surface-soft flex min-h-[280px] items-center justify-center px-4 text-center text-lg font-semibold uppercase tracking-[0.14em] text-neutral-600 sm:min-h-[360px]">
            {item.image || "Product"}
          </div>

          <div>
            <span className="bw-badge">{item.category}</span>

            <h1 className="title-lg mt-4">{item.title}</h1>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{item.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="surface-soft p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">Price</p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">${item.price}</p>
              </div>

              <div className="surface-soft p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">Rating</p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  {item.rating ?? "N/A"}/5
                </p>
              </div>

              <div className="surface-soft p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">Status</p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">Available</p>
              </div>
            </div>

            <h2 className="mt-8 text-xl font-semibold text-neutral-900">Specifications</h2>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {specs.map((spec) => (
                <li
                  key={spec}
                  className="rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {relatedItems.length > 0 && (
          <section>
            <h2 className="title-lg mb-4">Related Items</h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((related) => (
                <article
                  key={related.id}
                  className="surface-card hover-lift p-5"
                >
                  <div className="text-5xl mb-4">{related.image || "Product"}</div>

                  <h3 className="text-lg font-semibold text-neutral-900">{related.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {related.description.slice(0, 80)}...
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-base font-semibold text-neutral-900">
                      ${related.price}
                    </span>

                    <Link
                      href={`/items/${related.id}`}
                      className="bw-btn bw-link-focus px-4 py-2 text-xs"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
