export default function Block({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      {title ? (
        <h2 className="mb-4 text-xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
