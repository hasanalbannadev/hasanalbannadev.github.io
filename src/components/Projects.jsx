"use client";
// =====================================================================
//  Projects Showcase — ৩টা গ্রুপ: Flutter / Web & E-commerce / Cloud & Server
//  কার্ডগুলো data/portfolio.js এর `projects` থেকে আসে (নতুন কার্ড সেখানে যোগ করুন)
//  প্রতিটা গ্রুপে শুরুতে `limit` টা কার্ড দেখায়, "View All" চাপলে সব দেখায়
// =====================================================================
import { useState } from "react";
import { projects, projectGroups, profile } from "../data/portfolio";
import { Icon } from "./Icons";
import { SectionHeading, ArrowLink } from "./Ui";

// ছবির সাইজ (গ্রুপ অনুযায়ী)
const imgSize = {
  flutter: "h-[150px] w-[170px]",
  web: "h-[150px] w-[230px]",
  cloud: "h-[150px] w-[210px]",
};

// লিংক বাটন — link "#" বা খালি হলে ক্লিকে কিছু হবে না
function LinkButton({ href, filled, icon, children }) {
  const live = href && href !== "#";
  const cls = filled
    ? "bg-brand text-white hover:bg-brand-dark"
    : "border border-line bg-white text-navy hover:border-brand hover:text-brand";
  return (
    <a
      href={live ? href : "#"}
      target={live ? "_blank" : undefined}
      rel="noopener noreferrer"
      onClick={live ? undefined : (e) => e.preventDefault()}
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-[12px] font-medium transition ${cls}`}
    >
      <Icon name={icon} size={13} />
      {children}
    </a>
  );
}

// টেক চিপ (Flutter, Dart ...)
function Chips({ items }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-md bg-[#eef4ff] px-3 py-1 text-[11px] text-brand">
          {t}
        </span>
      ))}
    </div>
  );
}

// কার্ডের ডান পাশের টেক্সট অংশ (টাইটেল, বর্ণনা, চিপ, বাটন)
function CardBody({ p }) {
  return (
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="text-[16px] font-bold text-navy">{p.title}</h4>
        <span className="rounded-md bg-[#eaf2ff] px-2 py-0.5 text-[10px] font-medium text-brand">
          {p.badge}
        </span>
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-ink">{p.description}</p>
      <Chips items={p.tech} />
      <div className="mt-4 flex flex-wrap gap-3">
        <LinkButton href={p.demo} filled icon="external">Live Demo</LinkButton>
        <LinkButton href={p.github} icon="github">GitHub</LinkButton>
      </div>
    </div>
  );
}

// সাধারণ প্রজেক্ট কার্ড (Flutter ও Web)
function ProjectCard({ p }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl border border-line bg-white p-5 shadow-[0_2px_14px_rgba(20,60,140,0.04)] sm:flex-row">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.image}
        alt={p.title}
        className={`${imgSize[p.category]} max-w-full shrink-0 rounded-lg bg-soft object-contain`}
      />
      <CardBody p={p} />
    </div>
  );
}

// ক্লাউড কার্ড: বামে প্রজেক্ট, ডানে Key Features প্যানেল
function CloudCard({ p }) {
  return (
    <div className="grid gap-5 rounded-xl border border-line bg-white p-5 shadow-[0_2px_14px_rgba(20,60,140,0.04)] lg:grid-cols-[1.7fr_1fr]">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.title}
          className={`${imgSize.cloud} max-w-full shrink-0 rounded-lg object-cover`}
        />
        <CardBody p={p} />
      </div>

      {p.features && (
        <div className="rounded-lg bg-soft p-5">
          <div className="text-[13px] font-semibold text-navy">Key Features</div>
          <ul className="mt-3 space-y-2">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[11.5px] text-ink">
                <Icon name="check" size={13} className="shrink-0 text-brand" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// একটা গ্রুপ (হেডার + কার্ডের সারি + View All)
function Group({ group }) {
  const [expanded, setExpanded] = useState(false);
  const all = projects.filter((p) => p.category === group.key);
  if (all.length === 0) return null;

  const hasMore = all.length > group.limit;
  const list = expanded ? all : all.slice(0, group.limit);

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e3eeff] text-brand">
            <Icon name={group.icon} size={18} />
          </span>
          <h3 className="text-[16px] font-semibold text-brand">{group.title}</h3>
        </div>
        {hasMore ? (
          <ArrowLink onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Show Less" : group.viewAll}
          </ArrowLink>
        ) : (
          // আরও কার্ড না থাকলে GitHub এর রিপোজিটরি পেজে নিয়ে যাবে
          <ArrowLink href={`${profile.social.github}?tab=repositories`}>{group.viewAll}</ArrowLink>
        )}
      </div>

      <div className={group.columns === 2 ? "grid gap-5 lg:grid-cols-2" : "grid gap-5"}>
        {list.map((p) =>
          group.key === "cloud" ? (
            <CloudCard key={p.title} p={p} />
          ) : (
            <ProjectCard key={p.title} p={p} />
          )
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-12">
      <div className="container-x">
        <SectionHeading
          label="My Projects"
          title="Projects Showcase"
          sub="Here are some of my recent projects. Each project reflects my skills and problem-solving approach."
        />
        {projectGroups.map((g) => (
          <Group key={g.key} group={g} />
        ))}
      </div>
    </section>
  );
}
