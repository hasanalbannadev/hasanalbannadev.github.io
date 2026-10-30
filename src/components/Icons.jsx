// =====================================================================
//  সব আইকন এক ফাইলে (কোনো এক্সটার্নাল প্যাকেজ লাগে না)
//  - Icon      : সাধারণ লাইন আইকন (রঙ = text color)
//  - BrandIcon : স্কিল/টেকনোলজির রঙিন আইকন (আসল লোগো দিলে Skills এ image দিন)
//  - Logo      : HB লোগো
// =====================================================================

// ---------- লাইন আইকন ----------
const paths = {
  arrowRight: (<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>),
  download: (<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>),
  mail: (<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>),
  github: (<><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></>),
  linkedin: (<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>),
  x: (<><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></>),
  pin: (<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>),
  calendar: (<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>),
  phone: (<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />),
  target: (<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>),
  clock: (<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>),
  globe: (<><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>),
  code: (<><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></>),
  cloud: (<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />),
  smartphone: (<><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></>),
  check: (<path d="M20 6 9 17l-5-5" />),
  cap: (<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>),
  landmark: (<><path d="M3 22h18" /><path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7" /><path d="M12 2 20 7H4z" /></>),
  briefcase: (<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>),
  file: (<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path d="M14 2v6h6" /></>),
  whatsapp: (<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />),
  external: (<><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>),
  menu: (<><path d="M4 6h16M4 12h16M4 18h16" /></>),
  close: (<><path d="M18 6 6 18M6 6l12 12" /></>),
};

export function Icon({ name, size = 18, strokeWidth = 2, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

// ---------- রঙিন ব্র্যান্ড আইকন (৪৮x৪৮ ক্যানভাস) ----------
// এগুলো সরল আনুমানিক আইকন — আসল লোগো ছবি দিলে Skills এ `image` ফিল্ড ব্যবহার করুন।
// লেখাওয়ালা ব্যাজ আইকন (সার্টিফিকেশন / টুলের জন্য)
const badge = (text, color, size = 13) => (
  <>
    <rect x="3" y="9" width="42" height="30" rx="7" fill={color} />
    <text x="24" y="28.5" textAnchor="middle" fontSize={size} fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
      {text}
    </text>
  </>
);

const brands = {
  flutter: (
    <g transform="translate(4 3) scale(1.75)">
      <path d="M14.314 0 2.3 12 6 15.7 21.684.013h-7.357z" fill="#42a5f5" />
      <path d="M14.328 11.072 7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" fill="#0d47a1" />
    </g>
  ),
  dart: (
    <>
      <polygon points="24,4 44,24 24,44 4,24" fill="#0175c2" />
      <polygon points="24,4 44,24 24,24" fill="#40c4ff" />
      <polygon points="4,24 24,24 24,44" fill="#01579b" />
    </>
  ),
  html5: (
    <>
      <path d="M8 4h32l-3 33-13 5-13-5z" fill="#e44d26" />
      <path d="M24 7.5v31.4l10.2-3.4 2.4-27.9z" fill="#f16529" />
      <text x="24" y="31" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">5</text>
    </>
  ),
  css3: (
    <>
      <path d="M8 4h32l-3 33-13 5-13-5z" fill="#1572b6" />
      <path d="M24 7.5v31.4l10.2-3.4 2.4-27.9z" fill="#33a9dc" />
      <text x="24" y="31" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">3</text>
    </>
  ),
  js: (
    <>
      <rect x="6" y="6" width="36" height="36" fill="#f7df1e" />
      <text x="39" y="38" textAnchor="end" fontSize="18" fontWeight="800" fill="#111" fontFamily="Arial, sans-serif">JS</text>
    </>
  ),
  php: (
    <>
      <ellipse cx="24" cy="24" rx="21" ry="13" fill="#777bb3" />
      <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="800" fontStyle="italic" fill="#fff" fontFamily="Arial, sans-serif">php</text>
    </>
  ),
  mysql: (
    <>
      <path d="M10 12v24c0 3.3 6.3 6 14 6s14-2.7 14-6V12z" fill="#00758f" />
      <ellipse cx="24" cy="12" rx="14" ry="6" fill="#f29111" />
      <path d="M10 22c0 3.3 6.3 6 14 6s14-2.7 14-6" fill="none" stroke="#fff" strokeWidth="1.5" />
    </>
  ),
  nginx: (
    <>
      <polygon points="24,3 42,13.5 42,34.5 24,45 6,34.5 6,13.5" fill="#009639" />
      <text x="24" y="31" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">N</text>
    </>
  ),
  docker: (
    <>
      <g fill="#1d63ed">
        <rect x="10" y="19" width="5" height="5" />
        <rect x="16" y="19" width="5" height="5" />
        <rect x="22" y="19" width="5" height="5" />
        <rect x="28" y="19" width="5" height="5" />
        <rect x="16" y="13" width="5" height="5" />
        <rect x="22" y="13" width="5" height="5" />
        <rect x="22" y="7" width="5" height="5" />
        <path d="M4 26h36c2-1 3-3 3-5 2 1 3 2 3 4-1 10-9 16-20 16C14 41 7 35 4 26z" />
      </g>
    </>
  ),
  linux: (
    <>
      <ellipse cx="24" cy="28" rx="12" ry="15" fill="#111" />
      <ellipse cx="24" cy="31" rx="7.5" ry="10.5" fill="#fff" />
      <circle cx="24" cy="12" r="8" fill="#111" />
      <circle cx="21" cy="11" r="1.5" fill="#fff" />
      <circle cx="27" cy="11" r="1.5" fill="#fff" />
      <polygon points="20,14 28,14 24,19" fill="#f5b800" />
      <ellipse cx="16" cy="43" rx="6" ry="2.5" fill="#f5a300" />
      <ellipse cx="32" cy="43" rx="6" ry="2.5" fill="#f5a300" />
    </>
  ),
  github: (
    <g transform="translate(5 5) scale(1.55)" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths.github}
    </g>
  ),
  cloudflare: (
    <>
      <path d="M10 36h28a6 6 0 0 0 .6-12 10 10 0 0 0-18.6-3A8 8 0 0 0 10 36z" fill="#f6821f" />
      <path d="M30 36h12a4.5 4.5 0 0 0 0-9 6 6 0 0 0-1 .1A8 8 0 0 0 30 36z" fill="#fbad41" />
    </>
  ),
  firebase: (
    <>
      <path d="M10 38 15 8l7 13z" fill="#ffca28" />
      <path d="M10 38 33 20l5 18-14 7z" fill="#f57c00" />
      <path d="M22 21l4-9 7 8z" fill="#ffa000" />
    </>
  ),
  api: (
    <>
      <rect x="6" y="10" width="36" height="28" rx="6" fill="none" stroke="#1668e3" strokeWidth="3" />
      <text x="24" y="30" textAnchor="middle" fontSize="16" fontWeight="800" fill="#1668e3" fontFamily="Arial, sans-serif">{"{ }"}</text>
    </>
  ),
  aws: (
    <>
      <text x="24" y="26" textAnchor="middle" fontSize="18" fontWeight="800" fill="#232f3e" fontFamily="Arial, sans-serif">aws</text>
      <path d="M8 34q16 9 32 0" fill="none" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  apache: (
    <path d="M12 40C20 22 30 11 41 6c-2 13-10 25-25 34z" fill="#d22128" />
  ),
  riverpod: (
    <g fill="none" stroke="#02a8f4" strokeWidth="4" strokeLinecap="round">
      <path d="M5 16q9.5-10 19 0t19 0" />
      <path d="M5 26q9.5-10 19 0t19 0" />
      <path d="M5 36q9.5-10 19 0t19 0" />
    </g>
  ),
  bloc: badge("BLoC", "#1389fd", 13),
  provider: (
    <>
      <path d="M24 14 10 32M24 14l14 18M16 36h16" fill="none" stroke="#13b9fd" strokeWidth="3" />
      <circle cx="24" cy="11" r="7" fill="#13b9fd" />
      <circle cx="10" cy="36" r="7" fill="#0175c2" />
      <circle cx="38" cy="36" r="7" fill="#0175c2" />
    </>
  ),
  gmaps: (
    <>
      <path d="M24 3C15.7 3 9 9.7 9 18c0 11 15 27 15 27s15-16 15-27C39 9.7 32.3 3 24 3z" fill="#ea4335" />
      <circle cx="24" cy="18" r="6" fill="#fff" />
    </>
  ),
  postgres: badge("PG", "#336791", 18),
  nextjs: (
    <>
      <circle cx="24" cy="24" r="20" fill="#000" />
      <text x="24" y="32" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">N</text>
    </>
  ),
  fastapi: (
    <>
      <circle cx="24" cy="24" r="20" fill="#009688" />
      <path d="M27 8 14 27h9l-2 13 13-20h-9z" fill="#fff" />
    </>
  ),
  supabase: <path d="M26 3 8 27h14l-2 18 20-25H26z" fill="#3ecf8e" />,
  hive: badge("Hive", "#f59e0b", 14),
  sqflite: badge("SQLite", "#0f80cc", 10.5),
  cicd: badge("CI/CD", "#6d28d9", 12),
  pm2: badge("PM2", "#2b037a", 15),
  n8n: badge("n8n", "#ea4b71", 16),
  domain: (
    <g fill="none" stroke="#1668e3" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M6 24h36M24 6c-9 9-9 27 0 36M24 6c9 9 9 27 0 36" />
    </g>
  ),
  hosting: (
    <>
      <rect x="6" y="6" width="36" height="16" rx="4" fill="#1668e3" />
      <rect x="6" y="26" width="36" height="16" rx="4" fill="#0f52b8" />
      <circle cx="14" cy="14" r="2.5" fill="#fff" />
      <circle cx="14" cy="34" r="2.5" fill="#fff" />
    </>
  ),
  oracle: <rect x="4" y="15" width="40" height="18" rx="9" fill="none" stroke="#f80000" strokeWidth="5" />,
  ccna: badge("CCNA", "#049fd9", 13),
  ccnp: badge("CCNP", "#0b6fa4", 13),
  comptia: badge("CompTIA+", "#c8202f", 8.5),
  mtcna: badge("MTCNA", "#2c3e50", 11),
  mtcre: badge("MTCRE", "#2c3e50", 11),
  claude: (
    <>
      {[0, 45, 90, 135].map((r) => (
        <rect key={r} x="22" y="4" width="4" height="40" rx="2" fill="#d97757" transform={`rotate(${r} 24 24)`} />
      ))}
    </>
  ),
};

export function BrandIcon({ name, size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      {brands[name] ?? brands.api}
    </svg>
  );
}

// ---------- HB লোগো ----------
export function Logo({ height = 34 }) {
  return (
    <svg height={height} viewBox="0 0 56 44" fill="#1668e3" aria-label="HB logo" role="img">
      {/* H */}
      <path d="M3 5h8v13h7V5h8v34h-8V25h-7v14H3z" />
      {/* B (ভেতরের ফাঁকা অংশ evenodd দিয়ে কাটা) */}
      <path
        fillRule="evenodd"
        d="M29 5h12c6.5 0 10 3.2 10 8.2 0 3.2-1.6 5.5-4.4 6.6 3.4 1 5.6 3.7 5.6 7.4 0 5.6-4.4 11.8-12 11.8H29zM36 11.5v6h4.2c2 0 3.2-1.2 3.2-3s-1.2-3-3.2-3zM36 24v8.2h5.2c2.2 0 4-1.6 4-4.1s-1.8-4.1-4-4.1z"
      />
    </svg>
  );
}
