import { FAQS } from "@/components/home/data";

export default function FaqSection() {
  return (
    <section className="section-shell pt-2">
      <div className="page-container section-stack">
        <header>
          <p className="ui-subtle text-xs font-semibold uppercase tracking-[0.18em]">FAQ</p>
          <h2 className="title-lg mt-2">Questions We Hear Most</h2>
        </header>

        <div className="grid gap-3">
          {FAQS.map((item) => (
            <details key={item.question} className="surface-card p-5">
              <summary className="ui-strong cursor-pointer text-sm font-semibold">{item.question}</summary>
              <p className="ui-muted mt-3 text-sm leading-7">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

