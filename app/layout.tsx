import { Orbitron } from "next/font/google"; // Modern tech font
import "./globals.css";

const techFont = Orbitron({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={techFont.className}>{children}</body>
    </html>
  );
}
