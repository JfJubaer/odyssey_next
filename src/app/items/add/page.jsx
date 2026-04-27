"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AddItemPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [success, setSuccess] = useState("");
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
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Checking authentication...</p>
      </main>
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      ...formData,
      userEmail: user.email,
    };

    const existingItems = JSON.parse(localStorage.getItem("items")) || [];
    localStorage.setItem("items", JSON.stringify([...existingItems, newItem]));

    setSuccess("Item added successfully!");

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
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="mb-8">
          <p className="text-blue-600 font-semibold mb-2">Protected Page</p>
          <h1 className="text-3xl font-bold text-gray-900">Add New Item</h1>
          <p className="text-gray-600 mt-2">
            Only logged-in users can add new products.
          </p>
        </div>

        {success && (
          <div className="mb-6 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-green-700">
            {success}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter product title"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Short Description
            </label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              required
              placeholder="Short product summary"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Description
            </label>
            <textarea
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write full product description"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 resize-none"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              >
                <option value="">Select category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="99"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Image URL <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/product.jpg"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
          >
            Submit Item
          </button>
        </form>
      </section>
    </main>
  );
}
