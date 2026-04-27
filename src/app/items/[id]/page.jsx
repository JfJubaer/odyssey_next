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
    <section className="page-shell">
      <div className="page-container section-stack">
        <Link
          href="/items"
          className="bw-link bw-link-focus inline-flex text-sm font-medium"
        >
          Back to Items
        </Link>

        <article className="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-blue-50 rounded-2xl min-h-[320px]">
            <span className="text-9xl">{item.image}</span>
          </div>

          <div>
            <span className="bw-badge">{item.category}</span>

            <h1 className="title-lg mt-4">{item.title}</h1>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              {item.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="surface-soft p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Price
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  ${item.price}
                </p>
              </div>

              <div className="surface-soft p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Rating
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  {item.rating}/5
                </p>
              </div>

              <div className="surface-soft p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Status
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  Available
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-xl font-semibold text-neutral-900">
              Specifications
            </h2>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {item.specs.map((spec) => (
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
                  <div className="text-5xl mb-4">{related.image}</div>

                  <h3 className="text-lg font-semibold text-neutral-900">
                    {related.title}
                  </h3>

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
