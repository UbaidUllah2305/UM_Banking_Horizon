import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] , variable: '--font-inter' });
const ibmplexserief = IBM_Plex_Serif({ subsets: ["latin"], weight:['400','700'] ,variable: '--font-ibm-plex-serif' });

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a Modern Banking platform for Everyone",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmplexserief.variable}`}>{children}</body>
    </html>
  );
}
