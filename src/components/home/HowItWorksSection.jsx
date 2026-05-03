const STEPS = [
  {
    title: "Explore",
    detail: "Search and filter products using category and price controls.",
  },
  {
    title: "Inspect",
    detail: "Open product pages for full descriptions, specs, ratings, and related items.",
  },
  {
    title: "Contribute",
    detail: "Authenticated users can add and manage products from the dashboard.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-shell pt-2">
      <div className="page-container section-stack">
        <header>
          <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">How It Works</p>
          <h2 className="title-lg mt-2">A Simple Flow from Discovery to Action</h2>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <article key={step.title} className="surface-soft p-6">
              <p className="ui-subtle text-xs font-semibold uppercase tracking-wide">Step {index + 1}</p>
              <h3 className="ui-strong mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="ui-muted mt-2 text-sm leading-6">{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

