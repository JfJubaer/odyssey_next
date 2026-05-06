"use client";

import { useMemo, useState, useEffect } from "react";
import { getLocalProducts, getMergedProducts } from "@/lib/products";

function StatCard({ label, value, detail }) {
  return (
    <article className="surface-card p-5 text-center">
      <p className="title-lg">{value}</p>
      <p className="ui-strong mt-1 text-sm font-semibold">{label}</p>
      <p className="ui-muted mt-1 text-xs">{detail}</p>
    </article>
  );
}

export default function StatsSection() {
  const [localProducts, setLocalProducts] = useState([]);
  const items = useMemo(
    () => getMergedProducts(localProducts),
    [localProducts],
  );

  useEffect(() => {
    setLocalProducts(getLocalProducts());
  }, []);

  const stats = useMemo(() => {
    const categories = new Set(items.map((item) => item.category));
    const avgRating =
      items.length > 0
        ? (
            items.reduce((sum, item) => sum + Number(item.rating || 0), 0) /
            items.length
          ).toFixed(1)
        : "0.0";

    return [
      {
        label: "Products Indexed",
        value: items.length,
        detail: "Combined default and user-submitted inventory",
      },
      {
        label: "Active Categories",
        value: categories.size,
        detail: "Catalog segmentation for faster browsing",
      },
      {
        label: "Average Product Rating",
        value: `${avgRating}/5`,
        detail: "Computed from available listing reviews",
      },
      {
        label: "Local Seller Contributions",
        value: localProducts.length,
        detail: "Items added from authenticated user accounts",
      },
    ];
  }, [items, localProducts.length]);

  return (
    <section className="section-shell pt-2">
      <div className="page-container section-stack">
        <header className="text-center">
          <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">
            Live Stats
          </p>
          <h2 className="title-lg mt-2">Catalog Signals in Real Time</h2>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              {...stat}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
