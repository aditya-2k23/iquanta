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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="icon" href="/cropped-apple-icon-180x180-1-32x32.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
