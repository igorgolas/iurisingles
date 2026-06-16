export default function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl space-y-5">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-slate">
          {p}
        </p>
      ))}
    </div>
  );
}
