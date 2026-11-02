import "./globals.css";

// 1. JSON-LD Schema Markup (Person Type for Google Knowledge Graph & SERP Image)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Md. Hasan Al Banna",
  "jobTitle": "Flutter & Next.js Developer",
  "url": "https://hasanalbannadev.github.io",
  "image": "https://hasanalbannadev.github.io/md-hasan-al-banna-flutter-developer.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",
    "addressCountry": "Bangladesh"
  },
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
    "Mobile App Development",
    "Clean Architecture"
  ]
};

export const metadata = {
  metadataBase: new URL("https://hasanalbannadev.github.io"),
  title: "Md. Hasan Al Banna — Top Flutter & Next.js Developer Bangladesh",
  description:
    "Official portfolio of Md. Hasan Al Banna, a leading Flutter & Next.js Developer in Bangladesh specializing in cross-platform mobile apps, clean architecture, web applications, and server backend systems.",
  keywords: [
    "Md Hasan Al Banna",
    "Hasan Al Banna",
    "Flutter Developer",
    "Flutter Developer Bangladesh",
    "Best Flutter Developer Bangladesh",
    "Top Flutter Developer Bangladesh",
    "Flutter Developer Dhaka",
    "Hire Flutter Developer Bangladesh",
    "Senior Flutter Developer",
    "Flutter App Specialist",
    "Dart Developer Bangladesh",
    "Next.js Developer",
    "Full Stack Developer Portfolio",
    "Web Developer Bangladesh",
    "Software Engineer Portfolio",
    "Android App Developer",
    "iOS App Developer",
    "Mobile App Developer",
    "Clean Architecture Flutter",
    "Flutter Geolocator Developer",
    "Flutter OpenStreetMap Expert",
    "Flutter State Management Developer",
    "Flutter FastAPI Developer",
    "AI Mobile App Developer",
    "Flutter Cross Platform Developer",
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
    title: "Md. Hasan Al Banna — Top Flutter & Next.js Developer Bangladesh",
    description: "Professional portfolio showcasing mobile apps, clean architecture, and web development systems by Md. Hasan Al Banna.",
    url: "https://hasanalbannadev.github.io",
    siteName: "Md. Hasan Al Banna Portfolio",
    type: "website",
    images: [
      {
        url: "/md-hasan-al-banna-flutter-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Hasan Al Banna — Flutter Developer Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Hasan Al Banna — Flutter & Next.js Developer Bangladesh",
    description: "Professional portfolio showcasing Flutter mobile apps and web applications.",
    images: ["/md-hasan-al-banna-flutter-developer.jpg"],
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