import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image: "https://images.unsplash.com/photo-1518441902110-72f44b2c1b2f",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$59",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$79",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

                <p className="text-gray-500 mb-4">{product.price}</p>

                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
