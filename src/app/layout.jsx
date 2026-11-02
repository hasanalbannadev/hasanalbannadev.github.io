import "./globals.css";

// 1. JSON-LD Schema Markup Definition
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Md. Hasan Al Banna",
  "jobTitle": "Flutter & Next.js Developer",
  "url": "https://hasanalbannadev.github.io",
  "sameAs": [
    "https://github.com/hasanalbannadev",
    "https://www.linkedin.com/in/md-hasan-al-banna-632302233/"
  ],
  "knowsAbout": [
    "Flutter",
    "Dart",
    "Next.js",
    "React",
    "FastAPI",
    "Clean Architecture"
  ]
};

export const metadata = {
  title: "Md. Hasan Al Banna — Flutter & Next.js Developer Portfolio",
  description:
    "Explore the professional portfolio of Md. Hasan Al Banna, a skilled Flutter & Next.js Full Stack Developer specializing in mobile apps, web applications, e-commerce, and cloud & server projects.",
  keywords: [
    "Md Hasan Al Banna",
    "Hasan Al Banna",
    "Flutter Developer Bangladesh",
    "Flutter Developer",
    "Next.js Developer",
    "Full Stack Developer Portfolio",
    "Web Developer Bangladesh",
    "Software Engineer Portfolio",
    "Android App Developer",
    "iOS App Developer",
    "Mobile App Developer",
    "Web Application Developer",
    "E-commerce Developer",
    "Cloud Computing Projects",
    "Server-side Development",
    "Portfolio Website",
    "Flutter Developer Dhaka",
    "Top Flutter Developer Bangladesh",
    "Best Flutter Developer",
    "Senior Flutter Developer",
    "Flutter App Specialist",
    "Clean Architecture Flutter",
    "Flutter Geolocator Developer",
    "Flutter OpenStreetMap Expert",
    "Flutter State Management Developer",
    "Flutter FastAPI Developer",
    "AI Mobile App Developer",
    "Flutter Cross Platform Developer",
    "Dart Developer Bangladesh",
    "Hire Flutter Developer Bangladesh",
    "Md Hasan Al Banna Flutter",
    "Md Hasan Al Banna Software Engineer",
    "Md Hasan Al Banna GitHub"
  ],
  authors: [{ name: "Md. Hasan Al Banna" }],
  creator: "Md. Hasan Al Banna",
  icons: { icon: "/logo.svg" },
  verification: {
    google: "O3P1kNKZjFa4mDVIi5MgD2zNxy0WVP6oAX47IcpE3SY",
  },
  openGraph: {
    title: "Md. Hasan Al Banna — Flutter & Next.js Developer Portfolio",
    description: "Professional portfolio showcasing mobile apps, web development, e-commerce systems, and cloud projects by Md. Hasan Al Banna.",
    url: "https://hasanalbannadev.github.io",
    siteName: "Md. Hasan Al Banna Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Inter Font (Google Fonts) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Google Structured Data / Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}