import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import type { Block as ContentBlock } from "@/lib/content/services";

export default function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.t === "prose") {
          return (
            <Block key={i} title={b.title}>
              <Prose paragraphs={b.paras} />
            </Block>
          );
        }
        if (b.t === "bullets") {
          return (
            <Block key={i} title={b.title}>
              {b.intro ? <div className="mb-4"><Prose paragraphs={[b.intro]} /></div> : null}
              <Bullets items={b.items} />
            </Block>
          );
        }
        return (
          <Block key={i} title={b.title}>
            {b.intro ? <div className="mb-4"><Prose paragraphs={[b.intro]} /></div> : null}
            <div className="space-y-4">
              {b.items.map((it, j) => (
                <div key={j}>
                  <h3 className="text-base font-semibold text-ink">{it.h}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate">{it.p}</p>
                </div>
              ))}
            </div>
          </Block>
        );
      })}
    </>
  );
}
