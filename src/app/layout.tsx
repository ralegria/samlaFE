import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import "./globals.scss";

const lexend = Lexend({
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magneto HR",
  description: "Connecting Talent and Opportunity Smarter than Ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>
        <main className="font-[family-name:var(--font-lexend)] s">
          {children}
        </main>
      </body>
    </html>
  );
}
