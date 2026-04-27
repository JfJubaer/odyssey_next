"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getLocalProducts, getMergedProducts } from "@/lib/products";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [localProducts] = useState(() => getLocalProducts());

  const allItems = useMemo(() => getMergedProducts(localProducts), [localProducts]);

  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || item.category === category;

    const matchesPrice =
      price === "All" ||
      (price === "low" && item.price < 60) ||
      (price === "medium" && item.price >= 60 && item.price <= 100) ||
      (price === "high" && item.price > 100);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <section className="page-shell">
      <div className="page-container section-stack">
        <header className="text-center">
          <h1 className="title-xl">Browse Items</h1>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Search and filter products by category and price range.
          </p>
        </header>

        <div className="surface-card grid gap-3 p-4 md:grid-cols-3 md:p-5">
          <input
            type="text"
            placeholder="Search items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bw-input"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bw-select"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
            <option value="Accessories">Accessories</option>
          </select>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bw-select"
          >
            <option value="All">All Prices</option>
            <option value="low">Below $60</option>
            <option value="medium">$60 - $100</option>
            <option value="high">Above $100</option>
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="surface-card hover-lift flex flex-col justify-between p-6"
            >
              <div>
                <div className="text-5xl mb-5">{item.image}</div>

                <div className="mb-3 flex items-center justify-between">
                  <span className="bw-badge">{item.category}</span>
                  <span className="text-xs font-medium text-neutral-600">
                    {item.rating}/5
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-lg font-bold text-neutral-900">${item.price}</p>

                <Link
                  href={`/items/${item.id}`}
                  className="bw-btn bw-link-focus px-4 py-2 text-sm"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="surface-soft p-8 text-center text-sm text-neutral-600">
            No items found.
          </div>
        )}
      </div>
    </section>
  );
}
