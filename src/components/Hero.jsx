// =====================================================================
//  হিরো সেকশন — নাম, পরিচিতি, বাটন, সোশ্যাল আইকন, ছবি ও ডানের তিনটা হাইলাইট
//  ছবি বদলাতে: data/portfolio.js এ profile.photo এর path বদলান
// =====================================================================
import { profile, heroHighlights } from "../data/portfolio";
import { Icon, BrandIcon } from "./Icons";

// সোশ্যাল আইকনের তালিকা (গোল বর্ডার বাটন)
const socials = [
  { name: "github", href: profile.social.github, label: "GitHub" },
  { name: "linkedin", href: profile.social.linkedin, label: "LinkedIn" },
  { name: "x", href: profile.social.x, label: "X" },
  { name: "mail", href: `mailto:${profile.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-[#f2f7ff] to-[#f8fbff]">
      <div className="container-x grid gap-8 pt-12 lg:grid-cols-[1.2fr_1fr_0.62fr] lg:gap-6 lg:pt-0">
        {/* ---------- বাম: টেক্সট ---------- */}
        <div className="self-center pb-4 lg:py-14">
          <div className="flex items-center gap-2 text-[14px] text-navy">
            <span className="h-px w-5 bg-brand" />
            Hello, I&apos;m
          </div>
          <h1 className="mt-2 text-[44px] font-extrabold leading-[1.1] tracking-tight sm:text-[54px]">
            <span className="text-[#0b2a73]">{profile.firstName}</span>{" "}
            <span className="text-brand">{profile.lastName}</span>
          </h1>
          <p className="mt-2 text-[22px] font-semibold text-navy">{profile.role}</p>
          <p className="mt-4 max-w-[480px] text-[14px] leading-[1.75] text-ink">{profile.intro}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(22,104,227,0.28)] transition hover:bg-brand-dark"
            >
              View My Projects <Icon name="arrowRight" size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-brand bg-white px-6 py-3 text-[13px] font-semibold text-brand transition hover:bg-soft"
            >
              <Icon name="mail" size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-7 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy transition hover:border-brand hover:text-brand"
              >
                <Icon name={s.name} size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* ---------- মাঝে: প্রোফাইল ছবি (নীল ব্যাকগ্রাউন্ড ব্লবের ভেতরে) ---------- */}
        <div className="flex items-end justify-center">
          <div className="h-[340px] w-full max-w-[420px] overflow-hidden rounded-t-[56px] bg-gradient-to-br from-[#d9e8ff] to-[#eef5ff] lg:h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photo}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* ---------- ডান: ট্যাগলাইন + তিনটা হাইলাইট ---------- */}
        <div className="self-center pb-10 lg:py-14 lg:pl-4">
          <p className="border-l-2 border-brand pl-3 text-[15px] font-semibold leading-snug text-navy">
            Turning
            <br />
            ideas into
            <br />
            real solutions
          </p>
          <ul className="mt-8 space-y-5">
            {heroHighlights.map((h) => (
              <li key={h.label} className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand ring-1 ring-line">
                  {h.icon === "flutter" ? (
                    <BrandIcon name="flutter" size={24} />
                  ) : (
                    <Icon name={h.icon} size={21} />
                  )}
                </span>
                <span className="text-[14px] text-ink">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
