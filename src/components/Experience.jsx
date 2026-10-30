// =====================================================================
//  Experience + Education + Download CV + Let's Connect (একই সারিতে ৩ কলাম)
//  Download CV বাটনে ক্লিক করলে CV ফাইল ডাউনলোড হবে
// =====================================================================
import { profile, experience, education } from "../data/portfolio";
import { Icon } from "./Icons";

// কলামের ছোট হেডার (গোল আইকন + টাইটেল)
function ColumnTitle({ icon, children }) {
  return (
    <div className="mb-5 flex items-center gap-2 text-[13px] font-semibold text-navy">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e3eeff] text-brand">
        <Icon name={icon} size={12} />
      </span>
      {children}
    </div>
  );
}

// Let's Connect এর আইকন রো
const connect = [
  { icon: "mail", href: `mailto:${profile.email}`, color: "text-[#ea4335]", label: "Email" },
  { icon: "linkedin", href: profile.social.linkedin, color: "text-[#0a66c2]", label: "LinkedIn" },
  { icon: "github", href: profile.social.github, color: "text-[#111]", label: "GitHub" },
  { icon: "whatsapp", href: profile.social.whatsapp, color: "text-[#25d366]", label: "WhatsApp" },
];

export default function Experience() {
  return (
    <section className="border-t border-line py-12">
      <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_1fr_0.9fr]">
        {/* ---------- Work Experience (টাইমলাইন) ---------- */}
        <div id="experience">
          <ColumnTitle icon="briefcase">Work Experience</ColumnTitle>
          <div className="relative ml-1.5 border-l border-[#cfe0ff] pl-6">
            {experience.map((e) => (
              <div key={e.title} className="relative pb-6 last:pb-0">
                {/* নীল ডট */}
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-brand ring-4 ring-white" />
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-[13px] font-semibold leading-snug text-navy">{e.title}</h4>
                  <span className="shrink-0 text-[10.5px] text-ink/80">{e.period}</span>
                </div>
                <div className="text-[11px] text-ink">{e.company}</div>
                <ul className="mt-1.5 space-y-0.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-1.5 text-[10.5px] leading-relaxed text-ink">
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-brand" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Education ---------- */}
        <div id="education">
          <ColumnTitle icon="cap">Education</ColumnTitle>
          <div className="space-y-6">
            {education.map((ed) => (
              <div key={ed.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-soft text-brand">
                  <Icon name={ed.icon} size={20} />
                </span>
                <div>
                  <h4 className="text-[13px] font-semibold leading-snug text-navy">{ed.title}</h4>
                  <div className="mt-0.5 text-[11px] text-ink">{ed.place}</div>
                  <div className="text-[10.5px] text-ink/80">{ed.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- ডান: Download CV + Let's Connect ---------- */}
        <div className="space-y-5">
          <div className="flex items-center gap-4 rounded-xl border border-line bg-soft p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-brand ring-1 ring-line">
              <Icon name="file" size={21} />
            </span>
            <div>
              <div className="text-[13px] font-semibold text-navy">Download My CV</div>
              <p className="mt-0.5 text-[10.5px] leading-snug text-ink">
                Get a detailed overview of my skills, experience and education.
              </p>
              <a
                href={profile.cv}
                download={profile.cvFileName}
                className="mt-3 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2 text-[12px] font-medium text-white transition hover:bg-brand-dark"
              >
                Download CV <Icon name="download" size={13} />
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-soft p-5">
            <div className="text-[14px] font-semibold text-navy">Let&apos;s Connect</div>
            <p className="mt-1 text-[10.5px] leading-snug text-ink">
              Feel free to contact me for collaborations, job opportunities or just to say hello.
            </p>
            <div className="mt-3 flex items-center gap-4">
              {connect.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.icon === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={c.label}
                  className={`${c.color} transition hover:scale-110`}
                >
                  <Icon name={c.icon} size={21} />
                </a>
              ))}
              <a href="#contact" aria-label="Contact" className="ml-1 text-navy transition hover:text-brand">
                <Icon name="arrowRight" size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
