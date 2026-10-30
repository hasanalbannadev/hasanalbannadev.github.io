// =====================================================================
//  ফুটার — লোগো, মেনু লিংক, কপিরাইট ও সোশ্যাল আইকন
// =====================================================================
import { profile, navLinks } from "../data/portfolio";
import { Icon, Logo } from "./Icons";

const socials = [
  { name: "github", href: profile.social.github, label: "GitHub" },
  { name: "linkedin", href: profile.social.linkedin, label: "LinkedIn" },
  { name: "x", href: profile.social.x, label: "X" },
  { name: "mail", href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="container-x flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <Logo height={32} />
          <div className="leading-tight">
            <div className="text-[12px] font-bold text-navy">
              {profile.firstName} {profile.lastName}
            </div>
            <div className="text-[10px] text-ink">{profile.role}</div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-[10.5px] text-navy transition hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <span className="text-[10px] text-ink">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All rights reserved.
          </span>
          <div className="flex items-center gap-3 text-navy">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition hover:text-brand"
              >
                <Icon name={s.name} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
