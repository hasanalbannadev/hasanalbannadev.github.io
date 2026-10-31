import "./globals.css";

export const metadata = {
  title: "Md. Hasan Al Banna — Flutter & Next.js Developer Portfolio",
  description:
    "Explore the professional portfolio of Md. Hasan Al Banna, a skilled Flutter & Next.js Full Stack Developer specializing in mobile apps, web applications, e-commerce, and cloud & server projects.",
  keywords: [
    "Md Hasan Al Banna",
    "Flutter Developer Bangladesh",
    "Next.js Developer",
    "Full Stack Developer Portfolio",
    "Web Developer Bangladesh",
    "Software Engineer Portfolio",
    "Flutter Developer",
    "Android App Developer",
    "iOS App Developer",
    "Mobile App Developer",
    "Web Application Developer",
    "E-commerce Developer",
    "Cloud Computing Projects",
    "Server-side Development",
    "Portfolio Website",
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
        {/* Inter ফন্ট (Google Fonts) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}