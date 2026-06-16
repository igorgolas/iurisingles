export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-slate/10 bg-slate/[0.03]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
