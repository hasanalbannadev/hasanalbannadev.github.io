// =====================================================================
//  পুরো পোর্টফোলিওর সব কনটেন্ট এই এক ফাইলে।
//  নতুন প্রজেক্ট / স্কিল / অভিজ্ঞতা যোগ করতে শুধু এই ফাইল এডিট করুন।
//  ছবি বদলাতে: public/images/ এ আসল ছবি রাখুন, তারপর নিচে path ঠিক করুন।
// =====================================================================

// ---------- ব্যক্তিগত তথ্য ----------
export const profile = {
  firstName: "Hasan",
  lastName: "Al Banna",
  role: "Flutter & Web Developer",
  intro:
    "I build modern, fast and user-friendly web and mobile applications with Flutter and web technologies. I'm passionate about clean code, performance and creating real-world solutions.",
  about:
    "I specialize in building modern, fast and responsive web and mobile applications with Flutter and web technologies. I have experience in domain & hosting, server configuration, cloud computing and email/FTP server management. I love solving real-world problems and continuously learning new technologies.",
  email: "albannamdhasan48@gmail.com",
  phone: "+880 1336-913528",
  location: "Uttara, Dhaka, Bangladesh",
  years: "4+", // অভিজ্ঞতার বছর

  // হিরো সেকশনের ছবি (আসল ছবি দিলে এই path বদলান, যেমন "/images/hasan.png")
  photo: "/images/Banna.jpg",

  // CV ডাউনলোড — public/cv/ ফোল্ডারের প্রফেশনাল CV (নতুন CV দিলে একই নামে রিপ্লেস করুন)
  cv: "/cv/Hasan_Al_Banna_CV.pdf",
  cvFileName: "Hasan_Al_Banna_CV.pdf",

  // এই পোর্টফোলিওর নিজের GitHub রিপোজিটরি
  portfolioRepo: "https://github.com/hasanalbannadev/hasanalbannadev.github.io",

  // সোশ্যাল লিংক — যেটায় লিংক বসাবেন সেটাই সাইটে দেখাবে। ফাঁকা ("") থাকলে আইকন লুকানো থাকবে।
  // সমর্থিত: github, linkedin, x, facebook, instagram, youtube, telegram, whatsapp
  social: {
    github: "https://github.com/hasanalbannadev",
    linkedin: "https://www.linkedin.com/in/md-hasan-al-banna-632302233/",
    x: "https://x.com/md_al_Banna",
    facebook: "https://www.facebook.com/share/1C8b5e8VSN/",
    instagram: "https://www.instagram.com/mdbanna4",
    telegram: "https://t.me/+8801336913528",
    whatsapp: "https://wa.me/8801580361198", // যেমন: "https://wa.me/8801XXXXXXXXX"
  },
};

// সোশ্যাল আইকনের ক্রম ও নাম (লিংক ফাঁকা হলে বাদ পড়ে; ইমেইল সবসময় থাকে)
const socialOrder = [
  ["github", "GitHub"],
  ["linkedin", "LinkedIn"],
  ["x", "X"],
  ["facebook", "Facebook"],
  ["instagram", "Instagram"],
  ["telegram", "Telegram"],
  ["whatsapp", "WhatsApp"],
];

// Hero, Footer ও Let's Connect — তিন জায়গায় এই তালিকাই ব্যবহার হয়
export const socialLinks = [
  ...socialOrder
    .filter(([name]) => profile.social[name])
    .map(([name, label]) => ({ name, label, href: profile.social[name] })),
  { name: "mail", label: "Email", href: `mailto:${profile.email}` },
];

// ---------- নেভিগেশন (id গুলো সেকশনের id এর সাথে মিলতে হবে) ----------
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// ---------- হিরোর ডান পাশের তিনটা আইটেম ----------
export const heroHighlights = [
  { icon: "flutter", label: "Flutter" },
  { icon: "code", label: "Web Development" },
  { icon: "cloud", label: "Cloud & Server" },
];

// ---------- Quick Info কার্ড ----------
export const quickInfo = [
  { icon: "target", label: "Focus", value: "Flutter & Web Development" },
  { icon: "clock", label: "Availability", value: "Open for new opportunities" },
  { icon: "pin", label: "Location", value: "Savar, Dhaka, Bangladesh" },
];

// ---------- স্কিল ----------
// icon = Icons.jsx এর BrandIcon নাম। image দিলে (যেমন "/images/skills/flutter.png") সেটাই দেখাবে।
// extra: true মানে "View All Skills" চাপলে তবেই দেখা যাবে (প্রথম ১২টা সবসময় দেখায়)।
export const skills = [
  { name: "Flutter", sub: "Mobile App", icon: "flutter" },
  { name: "Firebase", sub: "Backend & Auth", icon: "firebase" },
  { name: "Riverpod", sub: "State Management", icon: "riverpod" },
  { name: "BLoC", sub: "State Management", icon: "bloc" },
  { name: "Provider", sub: "State Management", icon: "provider" },
  { name: "Google Maps", sub: "Maps & Location", icon: "gmaps" },
  { name: "PostgreSQL", sub: "Database", icon: "postgres" },
  { name: "Next.js", sub: "Web Framework", icon: "nextjs" },
  { name: "Docker", sub: "Container", icon: "docker" },
  { name: "Git & GitHub", sub: "Version Control", icon: "github" },
  { name: "Cloudflare", sub: "CDN & Security", icon: "cloudflare" },
  { name: "REST API", sub: "Integration", icon: "api" },
  // ↓ "View All Skills" চাপলে এগুলো দেখাবে
  { name: "FastAPI", sub: "Python Backend", icon: "fastapi", extra: true },
  { name: "Supabase", sub: "Backend as a Service", icon: "supabase", extra: true },
  { name: "Hive", sub: "Local Storage", icon: "hive", extra: true },
  { name: "sqflite", sub: "Local Database", icon: "sqflite", extra: true },
  { name: "CI/CD", sub: "Automation", icon: "cicd", extra: true },
  { name: "PM2", sub: "Process Manager", icon: "pm2", extra: true },
  { name: "n8n", sub: "Workflow Automation", icon: "n8n", extra: true },
  { name: "Domain", sub: "DNS & Setup", icon: "domain", extra: true },
  { name: "Hosting", sub: "Web Hosting", icon: "hosting", extra: true },
  { name: "Oracle Cloud", sub: "Cloud Computing", icon: "oracle", extra: true },
  { name: "CCNA", sub: "Networking", icon: "ccna", extra: true },
  { name: "CCNP", sub: "Networking", icon: "ccnp", extra: true },
  { name: "CompTIA+", sub: "IT Fundamentals", icon: "comptia", extra: true },
  { name: "MTCNA", sub: "MikroTik", icon: "mtcna", extra: true },
  { name: "MTCRE", sub: "MikroTik", icon: "mtcre", extra: true },
  { name: "Claude AI", sub: "AI-based Coding", icon: "claude", extra: true },
];

// ---------- প্রজেক্ট গ্রুপ (সেকশনের হেডার ও কয়টা কার্ড আগে দেখাবে) ----------
export const projectGroups = [
  {
    key: "flutter",
    title: "Flutter Projects",
    icon: "smartphone",
    limit: 2, // শুরুতে ২টা দেখাবে, বাকিগুলো "View All" এ
    columns: 2,
    viewAll: "View All Flutter Projects",
  },
  {
    key: "web",
    title: "Web & E-commerce Projects",
    icon: "globe",
    limit: 1,
    columns: 1,
    viewAll: "View All Web Projects",
  },
  {
    key: "cloud",
    title: "Cloud & Server Projects",
    icon: "cloud",
    limit: 1,
    columns: 1,
    viewAll: "View All Cloud Projects",
  },
];

// ---------- প্রজেক্ট কার্ড ----------
// নতুন কার্ড বাড়াতে নিচের যেকোনো একটা ব্লক কপি করে পেস্ট করুন।
// category: "flutter" | "web" | "cloud"
// github: রিপোজিটরির লিংক — "GitHub" বাটনে ক্লিক করলে নতুন ট্যাবে খুলবে (না দিলে বাটন দেখাবে না)
// tech: কার্ডের নিচের টেকনোলজি চিপ
export const projects = [
  // ---------------- Flutter ----------------
  {
    category: "flutter",
    title: "TaskMaster",
    badge: "Flutter App",
    description:
      "A task manager with JWT login and sign-up, OTP password recovery, a dashboard with status counts, and full task CRUD (create, filter, update status, delete) on a REST API.",
    tech: ["Flutter", "Dart", "REST API", "JWT", "SharedPreferences", "Google Fonts"],
    image: "/images/task-manager.png",
    github: "https://github.com/HASANALBANNA2024/task_manager_app",
  },
  {
    category: "flutter",
    title: "Chakri Info",
    badge: "Flutter App",
    description:
      "A Bangla job circular app with category-wise listings (BCS, Govt, Bank, Defense, NGO...), job search and a preparation cell for previous questions.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore"],
    image: "/images/chakri-info.jpg",
    github: "https://github.com/HASANALBANNA2024/chakri_Info",
  },
  {
    category: "flutter",
    title: "Holy Quran & Islamic Suite",
    badge: "Flutter App",
    description:
      "An offline-first Quran app with 10-language translations, a digital tasbih with audio and haptic feedback, location-based prayer times, bookmarks and reciter selection.",
    tech: ["Flutter", "Dart", "Provider", "just_audio", "Adhan", "SharedPreferences"],
    image: "/images/holy-quran.jpg",
    github: "https://github.com/HASANALBANNA2024/holy_quran",
  },
  {
    category: "flutter",
    title: "Smart Mirror",
    badge: "Flutter App",
    description:
      "A real-time smart mirror app with HD live camera, freeze frame, 1x to 5x zoom, studio lighting modes, 3s and 5s timers, and an in-app gallery with save and share.",
    tech: ["Flutter", "Dart", "Camera", "Gal", "SharePlus", "SharedPreferences"],
    image: "/images/mirror.png",
    github: "https://github.com/HASANALBANNA2024/mirror",
  },

  // ---------------- Web & E-commerce ----------------
  {
    category: "web",
    title: "Akhi Lifestyle Admin Panel",
    badge: "E-commerce Admin Panel",
    description:
      "Full admin panel for the Akhi Lifestyle shop: products, inventory, orders, payments, customers, coupons, banners, reviews, reports and staff roles, powered by a FastAPI backend.",
    tech: ["Next.js", "React", "FastAPI", "REST API", "JavaScript"],
    image: "/images/akhi-admin.jpg",
    github: "https://github.com/HASANALBANNA2024/akhi_admin_panel",
  },
  {
    category: "web",
    title: "Hadir Visitors",
    badge: "Business Website",
    description:
      "A bilingual (English/Arabic) chauffeur and car rental website for Kuwait with a WhatsApp booking form, service pages, SEO and automated CI/CD deployment.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "GitHub Actions", "Cloudflare"],
    image: "/images/hadir-visitors.png",
    github: "https://github.com/HASANALBANNA2024/visitors_hadir",
  },

  // ---------------- Cloud & Server ----------------
  {
    category: "cloud",
    title: "Cloud & Server Management",
    badge: "Cloud / Server",
    description:
      "Domain, hosting, email server, FTP server and server configuration with secure setup.",
    tech: ["Linux", "Nginx", "Docker", "Cloudflare"],
    image: "/images/cloud-server.svg",
    // ক্লাউড কার্ডের ডান পাশের "Key Features" লিস্ট
    features: [
      "Domain & Hosting Setup",
      "Email Server Configuration",
      "FTP Server Configuration",
      "Cloud Computing (Oracle Cloud)",
      "Server Configuration (Nginx, Apache, etc.)",
      "Security & Backup Setup",
    ],
  },
];

// ---------- কাজের অভিজ্ঞতা (নতুন থেকে পুরোনো) ----------
export const experience = [
  {
    title: "Lab Instructor (Computer Lab)",
    company: "Uttara University, Office of IT",
    period: "Dec 2025 - Present",
    points: [
      "Lab classes as instructor and demonstrator; guide students on their projects",
      "Solve students' programming issues, plus software and network problems",
      "Manage daily lab operations, systems, LAN/Wi-Fi and IT assets",
    ],
  },
  {
    title: "Officer",
    company: "Star Line Specialised Hospital (120 Bedded)",
    period: "Jul 2024 – Nov 2025",
    points: [
      "Led ICT setup: LAN, WAN, CCTV and IP telephony with Cisco devices",
      "Installed and maintained Hospital Management System, backup and access control",
    ],
  },
  {
    title: "Network Engineer",
    company: "Rajar Online Communication",
    period: "Nov 2023 – Jun 2024",
    points: [
      "24/7 network monitoring; MikroTik and Cisco POP router configuration",
      "IP addressing, OSPF/BGP routing, VLAN, bandwidth management",
    ],
  },
  {
    title: "Assistant Network Engineer (POP In-charge)",
    company: "Amber IT Ltd",
    period: "Apr 2022 – Oct 2023",
    points: [
      "Managed POP infrastructure and fiber link troubleshooting",
      "LAN and WAN configuration for home and corporate clients",
    ],
  },
];

// ---------- শিক্ষা ----------
export const education = [
  {
    icon: "cap",
    title: "Diploma in Engineering (Computer Science & Engineering)",
    place: "Feni Computer Institute",
    period: "2022 | CGPA 3.66 / 4.00",
  },
  {
    icon: "landmark",
    title: "Dakhil (Madrasah) — General",
    place: "Korpai Kakirchar Islamia Fazil Madrasah",
    period: "2017 | GPA 4.50 / 5.00",
  },
];
