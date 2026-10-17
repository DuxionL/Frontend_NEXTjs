import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusantara — Kedai Kopi Rumahan",
  description: "Kedai kopi rumahan yang mengangkat biji kopi asli daerah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}