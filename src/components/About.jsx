// =====================================================================
//  About Me সেকশন — বামে পরিচিতি + ইনফো রো, ডানে Quick Info কার্ড
// =====================================================================
import { profile, quickInfo } from "../data/portfolio";
import { Icon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-14">
      <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* ---------- বাম ---------- */}
        <div className="lg:border-r lg:border-line lg:pr-12">
          <div className="flex items-center gap-2 text-[12px] font-medium text-brand">
            <span className="h-px w-5 bg-brand" />
            About Me
          </div>
          <h2 className="mt-2 text-[28px] font-bold leading-tight text-navy">
            I&apos;m a Flutter &amp; Web Developer
          </h2>
          <p className="mt-3 max-w-[560px] text-[13.5px] leading-[1.8] text-ink">{profile.about}</p>

          {/* লোকেশন | ইমেইল | অভিজ্ঞতা */}
          <div className="mt-6 flex flex-wrap items-center gap-y-4 text-[12px] text-ink">
            <div className="flex items-center gap-3 pr-6">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-soft text-brand">
                <Icon name="pin" size={15} />
              </span>
              {profile.location}
            </div>
            <div className="flex items-center gap-3 border-l border-line px-6">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-soft text-brand">
                <Icon name="mail" size={15} />
              </span>
              {profile.email}
            </div>
            <div className="flex items-center gap-3 border-l border-line pl-6">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-soft text-brand">
                <Icon name="calendar" size={15} />
              </span>
              <span className="leading-tight">
                {profile.years} Years
                <br />
                of Experience
              </span>
            </div>
          </div>

          {/* More About Me → Experience সেকশনে স্ক্রল */}
          <a
            href="#experience"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-brand px-5 py-2.5 text-[12px] font-medium text-brand transition hover:bg-brand hover:text-white"
          >
            More About Me <Icon name="arrowRight" size={13} />
          </a>
        </div>

        {/* ---------- ডান: Quick Info ---------- */}
        <div className="rounded-2xl bg-soft p-7">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-navy">
            <Icon name="target" size={15} className="text-brand" />
            Quick Info
          </div>
          <ul className="mt-5 space-y-5">
            {quickInfo.map((q) => (
              <li key={q.label} className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand ring-1 ring-line">
                  <Icon name={q.icon} size={20} />
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-navy">{q.label}</div>
                  <div className="text-[12px] text-ink">{q.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
