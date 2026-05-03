import { TESTIMONIALS } from "@/components/home/data";

export default function TestimonialsSection() {
  return (
    <section className="section-shell pt-2">
      <div className="page-container section-stack">
        <header className="text-center">
          <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">Testimonials</p>
          <h2 className="title-lg mt-2">Trusted by Shoppers and Contributors</h2>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article key={testimonial.name} className="surface-card p-6">
              <p className="ui-muted text-sm leading-7">&ldquo;{testimonial.feedback}&rdquo;</p>
              <p className="ui-strong mt-4 text-sm font-semibold">{testimonial.name}</p>
              <p className="ui-subtle text-xs">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

