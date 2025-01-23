import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.scss";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samla app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <main className="font-[family-name:var(--font-roboto)]">
          {children}
        </main>
      </body>
    </html>
  );
}
