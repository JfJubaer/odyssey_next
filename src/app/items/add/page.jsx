"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AddItemPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    category: "",
    price: "",
    date: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <section className="page-shell flex items-center justify-center">
        <p className="text-sm text-neutral-600">Checking authentication...</p>
      </section>
    );
  }

  if (!user) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const priceError =
    formData.price.length > 0 && Number(formData.price) <= 0
      ? "Price must be greater than 0."
      : "";

  const imageUrlError =
    formData.imageUrl.length > 0 && !/^https?:\/\//.test(formData.imageUrl)
      ? "Image URL should start with http:// or https://"
      : "";

  const hasInlineErrors = Boolean(priceError || imageUrlError);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasInlineErrors) {
      return;
    }

    setSubmitting(true);

    const newItem = {
      id: Date.now(),
      ...formData,
      userEmail: user.email,
    };

    const existingItems = JSON.parse(localStorage.getItem("items")) || [];
    localStorage.setItem("items", JSON.stringify([...existingItems, newItem]));

    setSuccess("Item added successfully.");

    setFormData({
      title: "",
      shortDescription: "",
      fullDescription: "",
      category: "",
      price: "",
      date: "",
      imageUrl: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 3000);

    setSubmitting(false);
  };

  return (
    <section className="page-shell">
      <div className="page-container">
        <div className="surface-card fade-in mx-auto max-w-3xl p-6 sm:p-8">
          <header className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Protected Page
            </p>
            <h1 className="title-lg mt-2">Add New Item</h1>
            <p className="mt-2 text-sm text-neutral-600">
              Only logged-in users can add new products.
            </p>
          </header>

          {success && (
            <p className="mb-5 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-700">
              {success}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter product title"
                className="bw-input"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">Short Description</label>
              <input
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                required
                placeholder="Short product summary"
                className="bw-input"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">Full Description</label>
              <textarea
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write full product description"
                className="bw-textarea"
              ></textarea>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="bw-select"
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home">Home</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  placeholder="99"
                  className="bw-input"
                />
                {priceError && <p className="mt-1 text-xs text-neutral-600">{priceError}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="bw-input"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium">Image URL (optional)</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/product.jpg"
                className="bw-input"
              />
              {imageUrlError && (
                <p className="mt-1 text-xs text-neutral-600">{imageUrlError}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting || hasInlineErrors}
              className="bw-btn bw-link-focus w-full px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Saving..." : "Submit Item"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
