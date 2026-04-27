import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <section className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About ShopNest
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ShopNest is a modern e-commerce demo application built with Next.js
            and Firebase authentication. It demonstrates a clean UI, responsive
            layout, dynamic routing, and protected pages.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
              alt="Ecommerce shopping"
              width={500}
              height={350}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Our Mission
            </h2>

            <p className="text-gray-600 mb-4">
              Our goal is to create a smooth and user-friendly online shopping
              experience. ShopNest allows users to browse products, search and
              filter items, and view detailed product information through a
              modern and responsive interface.
            </p>

            <p className="text-gray-600 mb-4">
              The application is built using modern technologies including
              Next.js App Router, Tailwind CSS for styling, and Firebase
              authentication for secure user login.
            </p>

            <p className="text-gray-600">
              This project demonstrates how a scalable front-end structure can
              be built while maintaining clean design, accessibility, and
              performance.
            </p>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-14 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold mb-2">Modern UI</h3>
            <p className="text-gray-600 text-sm">
              Clean and responsive interface built with Tailwind CSS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold mb-2">Dynamic Routing</h3>
            <p className="text-gray-600 text-sm">
              Product pages use Next.js dynamic routes for better scalability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold mb-2">Authentication</h3>
            <p className="text-gray-600 text-sm">
              Secure login system powered by Firebase Authentication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
