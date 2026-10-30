// =====================================================================
//  "Let's Work Together" ব্যান্ড — ইমেইল, ফোন, লোকেশন ও Get In Touch বাটন
//  ইমেইল/ফোন/ম্যাপে ক্লিক করলে সংশ্লিষ্ট অ্যাপ খুলবে
// =====================================================================
import { profile } from "../data/portfolio";
import { Icon } from "./Icons";

export default function Contact() {
  // টেলিফোন লিংকের জন্য স্পেস/ড্যাশ বাদ
  const tel = profile.phone.replace(/[^\d+]/g, "");
  const items = [
    { icon: "mail", text: profile.email, href: `mailto:${profile.email}` },
    { icon: "phone", text: profile.phone, href: `tel:${tel}` },
    {
      icon: "pin",
      text: profile.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`,
    },
  ];

  return (
    <section id="contact" className="border-t border-line bg-soft py-6">
      <div className="container-x flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[360px]">
          <h2 className="text-[18px] font-semibold text-navy">Let&apos;s Work Together</h2>
          <p className="mt-1 text-[11.5px] leading-snug text-ink">
            I&apos;m always open to new opportunities, collaborations and interesting projects. Feel free to
            reach out!
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {items.map((i) => (
            <a
              key={i.icon}
              href={i.href}
              target={i.icon === "pin" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[11.5px] text-ink transition hover:text-brand"
            >
              <span className="text-brand">
                <Icon name={i.icon} size={19} />
              </span>
              {i.text}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-[12.5px] font-semibold text-white transition hover:bg-brand-dark"
        >
          Get In Touch <Icon name="arrowRight" size={14} />
        </a>
      </div>
    </section>
  );
}
