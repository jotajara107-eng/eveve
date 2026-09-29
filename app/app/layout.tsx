import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "eveve — Comparador de vuelos",
  description:
    "Compara vuelos nacionales e internacionales, precios, horarios y equipaje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
