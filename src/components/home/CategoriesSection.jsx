import { DEFAULT_PRODUCTS } from "@/data/product";

export default function CategoriesSection() {
  const categoryCounts = DEFAULT_PRODUCTS.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count,
    summary:
      name === "Electronics"
        ? "Smart devices and everyday tech"
        : name === "Fashion"
          ? "Wearables and personal style products"
          : "Essentials for home and workspace",
  }));

  return (
    <section className="section-shell pt-2">
      <div className="page-container section-stack">
        <header>
          <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">Categories</p>
          <h2 className="title-lg mt-2">Shop by Purpose</h2>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.name} className="surface-card p-6">
              <p className="ui-subtle text-xs font-semibold uppercase tracking-wide">{category.count} items</p>
              <h3 className="ui-strong mt-2 text-xl font-semibold">{category.name}</h3>
              <p className="ui-muted mt-2 text-sm leading-6">{category.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

