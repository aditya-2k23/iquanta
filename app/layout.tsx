import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - iQuanta",
  description: "Blog post app for iQuanta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
