import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="page-shell">
      <div className="page-container section-stack">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="title-xl">About ShopNest</h1>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            ShopNest is a modern e-commerce demo built with Next.js and Firebase
            authentication. The experience focuses on clean structure,
            responsive behavior, and consistent interaction patterns.
          </p>
        </header>

        <div className="surface-card grid items-center gap-8 p-6 sm:p-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
              alt="Ecommerce shopping"
              width={600}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="title-lg">Our Mission</h2>
            <p className="text-sm leading-7 text-neutral-600">
              We aim to deliver a smooth shopping flow where users can browse,
              filter, and inspect products without visual clutter.
            </p>
            <p className="text-sm leading-7 text-neutral-600">
              The stack combines Next.js App Router for structure, Tailwind CSS
              for maintainable styling, and Firebase Authentication for secure
              user sessions.
            </p>
            <p className="text-sm leading-7 text-neutral-600">
              This project emphasizes accessibility, reliable responsive layouts,
              and a simple black-and-white interface system.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="surface-card hover-lift p-6">
            <h3 className="text-lg font-semibold">Consistent UI</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Shared tokens and reusable classes keep spacing, typography, and
              controls uniform.
            </p>
          </article>

          <article className="surface-card hover-lift p-6">
            <h3 className="text-lg font-semibold">Dynamic Routing</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Product details use dynamic routes with server rendering for clear
              and scalable page structure.
            </p>
          </article>

          <article className="surface-card hover-lift p-6">
            <h3 className="text-lg font-semibold">Authentication</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Protected workflows for adding and managing products are handled
              through Firebase Auth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
