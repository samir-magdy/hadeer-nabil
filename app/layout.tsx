import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cairo } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hadeer Nabil | Private English Lessons in Egypt",
  description:
    "Private English lessons - online and in-person in Cairo, Egypt. Providing assistance with school support, phonics & early reading, summer courses and everyday conversation.",
  icons: {
    icon: "/favicon.png", // Explicitly sets it as the standard shortcut icon
  },
  openGraph: {
    images: [], // Explicitly ensures no OG image is defined or inherited
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cairo.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
