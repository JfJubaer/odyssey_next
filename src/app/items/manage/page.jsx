/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ManageItemsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(savedItems);
  }, []);

  const handleDelete = (id) => {
    const remainingItems = items.filter((item) => item.id !== id);
    setItems(remainingItems);
    localStorage.setItem("items", JSON.stringify(remainingItems));
  };

  if (loading) {
    return (
      <section className="page-shell flex items-center justify-center">
        <p className="text-sm text-neutral-600">Checking authentication...</p>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section className="page-shell">
      <div className="page-container section-stack">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Protected Page
            </p>
            <h1 className="title-lg mt-2">Manage Items</h1>
            <p className="mt-2 text-sm text-neutral-600">
              View and delete products added by users.
            </p>
          </div>

          <Link
            href="/items/add"
            className="bw-btn bw-link-focus px-5 py-3 text-sm"
          >
            Add New Item
          </Link>
        </header>

        {items.length === 0 ? (
          <div className="surface-card p-10 text-center">
            <h2 className="text-xl font-semibold text-neutral-900">No items found</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Add your first product to manage it here.
            </p>

            <Link
              href="/items/add"
              className="bw-btn bw-link-focus mt-6 px-5 py-3 text-sm"
            >
              Add Item
            </Link>
          </div>
        ) : (
          <div className="surface-card overflow-hidden">
            <div className="hidden grid-cols-6 gap-4 border-b border-neutral-200 bg-neutral-100 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-neutral-700 md:grid">
              <span>Title</span>
              <span>Category</span>
              <span>Price</span>
              <span>Date</span>
              <span>Added By</span>
              <span className="text-right">Actions</span>
            </div>

            <div className="divide-y divide-neutral-200">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-4 px-5 py-5 md:grid-cols-6 md:items-center md:px-6"
                >
                  <div>
                    <p className="font-semibold text-neutral-900">{item.title}</p>
                    <p className="text-sm text-neutral-600 md:hidden">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="text-sm text-neutral-700">
                    <span className="font-medium md:hidden">Category: </span>
                    {item.category}
                  </div>

                  <div className="text-sm font-semibold text-neutral-900">
                    <span className="font-medium md:hidden">Price: </span>${item.price}
                  </div>

                  <div className="text-sm text-neutral-700">
                    <span className="font-medium md:hidden">Date: </span>
                    {item.date}
                  </div>

                  <div className="truncate text-sm text-neutral-700">
                    <span className="font-medium md:hidden">Added By: </span>
                    {item.userEmail}
                  </div>

                  <div className="flex gap-2 md:justify-end">
                    <Link
                      href={`/items/${item.id}`}
                      className="bw-btn-ghost bw-link-focus px-3 py-2 text-xs"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bw-btn bw-link-focus px-3 py-2 text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
