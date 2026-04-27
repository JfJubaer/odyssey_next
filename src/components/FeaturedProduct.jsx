import Link from "next/link";

const products = [
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
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">
            Featured Collection
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Products
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="h-48 flex items-center justify-center bg-blue-50 text-7xl">
                {product.image}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-sm text-yellow-600">
                    ⭐ {product.rating}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-blue-600">
                    ${product.price}
                  </p>

                  <Link
                    href={`/items/${product.id}`}
                    className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
