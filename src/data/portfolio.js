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
  phone: "+880 1580-361198",
  location: "Uttara, Dhaka, Bangladesh",
  years: "5+", // অভিজ্ঞতার বছর

  // হিরো সেকশনের ছবি (আসল ছবি দিলে এই path বদলান, যেমন "/images/hasan.png")
  photo: "/images/profile.png",

  // CV ডাউনলোড — public/cv/ ফোল্ডারে আসল PDF রাখুন (একই নামে অথবা নিচের path বদলে)
  cv: "/cv/Hasan_Al_Banna_CV.pdf",
  cvFileName: "Hasan_Al_Banna_CV.pdf",

  // সোশ্যাল লিংক — আসল লিংক বসান
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    x: "https://x.com/yourusername",
    whatsapp: "https://wa.me/8801580361198",
  },
};

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
  { icon: "pin", label: "Location", value: "Feni, Bangladesh" },
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
// demo / github: আসল লিংক দিন ("#" থাকলে ক্লিকে কিছু হবে না)
export const projects = [
  {
    category: "flutter",
    title: "TaskMaster",
    badge: "Flutter App",
    description:
      "A simple and clean task management app with local storage, dark mode and smooth UI.",
    tech: ["Flutter", "Dart", "Hive", "Provider"],
    image: "/images/taskmaster.svg",
    demo: "#",
    github: "#",
  },
  {
    category: "flutter",
    title: "HealthCare+",
    badge: "Flutter App",
    description:
      "A healthcare app with appointment booking, doctor list and more features.",
    tech: ["Flutter", "Firebase", "REST API"],
    image: "/images/healthcare.svg",
    demo: "#",
    github: "#",
  },
  {
    category: "web",
    title: "Ami Commerce",
    badge: "E-commerce Website",
    description:
      "A modern e-commerce platform with product listing, cart, and secure payment integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/images/ami-commerce.svg",
    demo: "#",
    github: "#",
  },
  {
    category: "cloud",
    title: "Cloud & Server Management",
    badge: "Cloud / Server",
    description:
      "Domain, hosting, email server, FTP server and server configuration with secure setup.",
    tech: ["Linux", "Nginx", "Docker", "Cloudflare"],
    image: "/images/cloud-server.svg",
    demo: "#",
    github: "#",
    // ক্লাউড কার্ডের ডান পাশের "Key Features" লিস্ট
    features: [
      "Domain & Hosting Setup",
      "Email Server Configuration",
      "FTP Server Configuration",
      "Cloud Computing (AWS)",
      "Server Configuration (Nginx, Apache, etc.)",
      "Security & Backup Setup",
    ],
  },
];

// ---------- কাজের অভিজ্ঞতা ----------
export const experience = [
  {
    title: "Lab Instructor (CSE Lab)",
    company: "Uttara University | Office of IT",
    period: "December 2025 - Present",
    points: [
      "Network survey and data mining for new network implementation",
      "Created presentations for network sales",
    ],
  },
  {
    title: "Assistant Network Engineer",
    company: "Amber IT",
    period: "2020 – 2021",
    points: ["LAN network design and implementation", "Fiber network design and maintenance"],
  },
  {
    title: "Network Engineer",
    company: "Rajar Online Communication",
    period: "2019 – 2020",
    points: [
      "LAN network configuration (Cisco Router, Camera)",
      "Implementation and design for corporate customers",
    ],
  },
];

// ---------- শিক্ষা ----------
export const education = [
  {
    icon: "cap",
    title: "Diploma in Data Telecommunication & Networking Technology",
    place: "Feni Computer Institute",
    period: "2017 – 2022",
  },
  {
    icon: "landmark",
    title: "SSC",
    place: "Math & History",
    period: "2016 – 2017",
  },
];
