// রুট লেআউট — ফন্ট, মেটাডেটা ও পুরো পেজের কাঠামো
import "./globals.css";

export const metadata = {
  title: "Hasan Al Banna — Flutter & Web Developer",
  description:
    "Portfolio of Hasan Al Banna — Flutter & Web Developer. Mobile apps, web, e-commerce and cloud & server projects.",
  icons: { icon: "/logo.svg" },
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
