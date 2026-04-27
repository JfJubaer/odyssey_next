"use client";

import Link from "next/link";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 99,
    rating: 4.8,
    image: "🎧",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Electronics",
    price: 149,
    rating: 4.6,
    image: "⌚",
    description: "Track your fitness, calls, and notifications easily.",
  },
  {
    id: 3,
    title: "Running Shoes",
    category: "Fashion",
    price: 79,
    rating: 4.5,
    image: "👟",
    description: "Comfortable running shoes for daily workouts.",
  },
  {
    id: 4,
    title: "Backpack",
    category: "Fashion",
    price: 49,
    rating: 4.3,
    image: "🎒",
    description: "Stylish and durable backpack for travel or study.",
  },
  {
    id: 5,
    title: "Coffee Maker",
    category: "Home",
    price: 120,
    rating: 4.7,
    image: "☕",
    description: "Brew fresh coffee at home with one-touch control.",
  },
  {
    id: 6,
    title: "Desk Lamp",
    category: "Home",
    price: 35,
    rating: 4.2,
    image: "💡",
    description: "Modern LED desk lamp with adjustable brightness.",
  },
];

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  const filteredItems = items.filter((item) => {
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
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <section className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Browse Items
          </h1>
          <p className="mt-3 text-gray-600">
            Search and filter products by category and price range.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-10 grid gap-4 md:grid-cols-3 bg-white p-5 rounded-2xl shadow-sm">
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
          </select>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="All">All Prices</option>
            <option value="low">Below $60</option>
            <option value="medium">$60 - $100</option>
            <option value="high">Above $100</option>
          </select>
        </div>

        {/* Items Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-5">{item.image}</div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-sm text-yellow-600">
                  ⭐ {item.rating}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-blue-600">${item.price}</p>

                <Link
                  href={`/items/${item?.id}`}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-12 text-center text-gray-500">No items found.</div>
        )}
      </section>
    </main>
  );
}
