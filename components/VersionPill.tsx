import { VERSION } from "@/lib/version";

export default function VersionPill() {
  return (
    <div
      aria-hidden
      className="fixed bottom-3 right-3 z-50 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur"
    >
      {VERSION}
    </div>
  );
}
