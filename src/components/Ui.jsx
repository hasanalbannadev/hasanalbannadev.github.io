// ছোট ছোট শেয়ার্ড UI অংশ — সেকশনের হেডিং ও "View All →" লিংক

import { Icon } from "./Icons";

// সেকশনের উপরের অংশ: "— My Skills" + বড় টাইটেল + (ঐচ্ছিক) সাব-টেক্সট + ডানে লিংক
export function SectionHeading({ label, title, sub, right }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-[12px] font-medium text-brand">
          <span className="h-px w-5 bg-brand" />
          {label}
        </div>
        <h2 className="mt-2 text-[26px] font-bold leading-tight text-navy">{title}</h2>
        {sub && <p className="mt-2 text-[13px] text-ink">{sub}</p>}
      </div>
      {right}
    </div>
  );
}

// ডান পাশের নীল লিংক (View All ... →)। onClick দিলে বাটন, href দিলে লিংক
export function ArrowLink({ children, onClick, href }) {
  const cls =
    "inline-flex shrink-0 items-center gap-1.5 text-[12px] font-medium text-brand transition hover:text-brand-dark";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children} <Icon name="arrowRight" size={13} />
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children} <Icon name="arrowRight" size={13} />
    </button>
  );
}
