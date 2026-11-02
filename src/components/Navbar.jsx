"use client";
// =====================================================================
//  নেভবার — স্টিকি, স্ক্রল করলে active মেনু বদলায়, মোবাইলে হ্যামবার্গার মেনু
//  "Download CV" চাপলে সরাসরি CV ফাইল ডাউনলোড হবে
// =====================================================================
import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { Icon, Logo } from "./Icons";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false); // মোবাইল মেনু
  const [scrolled, setScrolled] = useState(false);
  const clickedRef = useRef(null); // সর্বশেষ যে মেনুতে ক্লিক করা হয়েছে

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      // কোন সেকশন এখন স্ক্রিনের উপরের দিকে আছে সেটা বের করা
      let best = navLinks[0].id;
      let bestTop = -Infinity;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) {
          if (top > bestTop + 4) {
            best = id;
            bestTop = top;
          } else if (Math.abs(top - bestTop) <= 4 && id === clickedRef.current) {
            // Experience ও Education পাশাপাশি — যেটায় ক্লিক করা হয়েছে সেটাই active
            best = id;
          }
        }
      }

      // একদম নিচে পৌঁছালে শেষ মেনু (Contact) active
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) best = navLinks[navLinks.length - 1].id;

      setActive(best);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (e, id) => {
    e.preventDefault();
    clickedRef.current = id;
    setActive(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "border-line shadow-[0_4px_20px_rgba(20,60,140,0.06)]" : "border-transparent"
      }`}
    >
      <div className="container-x flex h-[70px] items-center justify-between gap-6">
        {/* লোগো + নাম */}
        <a href="#home" onClick={(e) => goTo(e, "home")} className="flex items-center gap-3">
          <Logo height={34} />
          <span className="leading-tight">
            <span className="block text-[14px] font-bold text-navy">
              {profile.firstName} {profile.lastName}
            </span>
            <span className="block text-[10px] text-ink">{profile.role}</span>
          </span>
        </a>

        {/* ডেস্কটপ মেনু */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => goTo(e, l.id)}
              className={`relative py-6 text-[13px] font-medium transition-colors ${
                active === l.id ? "text-brand" : "text-navy hover:text-brand"
              }`}
            >
              {l.label}
              {/* active মেনুর নিচে নীল দাগ */}
              {active === l.id && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded bg-brand" />
              )}
            </a>
          ))}
        </nav>

        {/* Download CV বাটন */}
        <div className="flex items-center gap-3">
          <a
            href={profile.cv}
            download={profile.cvFileName}
            className="hidden items-center gap-2 rounded-lg border border-brand px-4 py-2.5 text-[13px] font-medium text-brand transition hover:bg-brand hover:text-white sm:inline-flex"
          >
            <Icon name="download" size={16} />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-navy lg:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => goTo(e, l.id)}
                className={`py-2.5 text-[14px] font-medium ${
                  active === l.id ? "text-brand" : "text-navy"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download={profile.cvFileName}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-brand px-4 py-2.5 text-[13px] font-medium text-brand"
            >
              <Icon name="download" size={16} /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
