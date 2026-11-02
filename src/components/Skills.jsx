"use client";
// =====================================================================
//  Skills সেকশন — টেকনোলজির টাইল গ্রিড
//  "View All Skills" চাপলে extra: true দেওয়া স্কিলগুলোও দেখাবে
// =====================================================================
import { useState } from "react";
import { skills } from "../data/portfolio";
import { BrandIcon } from "./Icons";
import { SectionHeading, ArrowLink } from "./Ui";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const hasExtra = skills.some((s) => s.extra);
  const list = showAll ? skills : skills.filter((s) => !s.extra);

  return (
    <section id="skills" className="border-t border-line py-12">
      <div className="container-x">
        <SectionHeading
          label="My Skills"
          title="Technologies & Tools"
          right={
            hasExtra && (
              <ArrowLink onClick={() => setShowAll((v) => !v)}>
                {showAll ? "Show Less" : "View All Skills"}
              </ArrowLink>
            )
          }
        />

        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-12">
          {list.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center rounded-xl border border-line bg-white px-1 py-4 text-center transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_8px_20px_rgba(20,60,140,0.08)]"
            >
              <div className="grid h-[38px] place-items-center">
                {s.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.image} alt={s.name} className="h-[34px] w-[34px] object-contain" />
                ) : (
                  <BrandIcon name={s.icon} size={34} />
                )}
              </div>
              <div className="mt-3 text-[11px] font-medium text-navy">{s.name}</div>
              <div className="mt-0.5 text-[9px] text-ink/80">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
