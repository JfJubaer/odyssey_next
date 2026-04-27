import Link from "next/link";
import { notFound } from "next/navigation";

const items = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 99,
    rating: 4.8,
    image: "🎧",
    description:
      "High-quality wireless headphones with active noise cancellation, long battery life, and comfortable ear cushions for everyday use.",
    specs: [
      "Noise Cancellation",
      "30 Hours Battery",
      "Bluetooth 5.3",
      "Fast Charging",
    ],
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Electronics",
    price: 149,
    rating: 4.6,
    image: "⌚",
    description:
      "A stylish smart watch that helps you track fitness, monitor heart rate, receive notifications, and stay connected all day.",
    specs: [
      "Heart Rate Monitor",
      "Water Resistant",
      "Fitness Tracking",
      "AMOLED Display",
    ],
  },
  {
    id: 3,
    title: "Running Shoes",
    category: "Fashion",
    price: 79,
    rating: 4.5,
    image: "👟",
    description:
      "Lightweight and breathable running shoes designed for comfort, durability, and better performance during workouts.",
    specs: [
      "Breathable Mesh",
      "Lightweight Design",
      "Soft Cushion",
      "Anti-slip Sole",
    ],
  },
  {
    id: 4,
    title: "Backpack",
    category: "Fashion",
    price: 49,
    rating: 4.3,
    image: "🎒",
    description:
      "A durable and modern backpack with multiple compartments, perfect for school, office, travel, and daily use.",
    specs: [
      "Laptop Compartment",
      "Water Resistant",
      "Large Capacity",
      "Comfort Straps",
    ],
  },
  {
    id: 5,
    title: "Coffee Maker",
    category: "Home",
    price: 120,
    rating: 4.7,
    image: "☕",
    description:
      "Brew rich and fresh coffee at home with an easy one-touch coffee maker designed for quick and consistent brewing.",
    specs: [
      "One-touch Brew",
      "Reusable Filter",
      "Compact Design",
      "Easy Cleaning",
    ],
  },
  {
    id: 6,
    title: "Desk Lamp",
    category: "Home",
    price: 35,
    rating: 4.2,
    image: "💡",
    description:
      "A modern LED desk lamp with adjustable brightness levels, ideal for studying, working, and reading at night.",
    specs: [
      "LED Light",
      "Adjustable Brightness",
      "Flexible Neck",
      "Energy Saving",
    ],
  },
];

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  const item = items.find((product) => product.id === Number(id));

  if (!item) {
    notFound();
  }

  const relatedItems = items.filter(
    (product) => product.category === item.category && product.id !== item.id,
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <Link
          href="/items"
          className="inline-flex mb-8 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Items
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center justify-center bg-blue-50 rounded-2xl min-h-[320px]">
            <span className="text-9xl">{item.image}</span>
          </div>

          <div>
            <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              {item.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {item.title}
            </h1>

            <p className="text-gray-600 leading-7 mb-6">{item.description}</p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-xl font-bold text-blue-600">${item.price}</p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Rating</p>
                <p className="text-xl font-bold text-yellow-600">
                  ⭐ {item.rating}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Status</p>
                <p className="text-xl font-bold text-green-600">Available</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Specifications
            </h2>

            <ul className="grid sm:grid-cols-2 gap-3">
              {item.specs.map((spec) => (
                <li
                  key={spec}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-gray-700"
                >
                  ✓ {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {relatedItems.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Items
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((related) => (
                <div
                  key={related.id}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition"
                >
                  <div className="text-5xl mb-4">{related.image}</div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {related.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {related.description.slice(0, 80)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">
                      ${related.price}
                    </span>

                    <Link
                      href={`/items/${related.id}`}
                      className="rounded-xl bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
