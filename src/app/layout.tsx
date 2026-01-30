import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { BackButton } from "~/components/BackButton";

export const metadata: Metadata = {
  title: "Pitch Decks",
  description: "Interactive pitch deck presentations",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <BackButton />
        {children}
      </body>
    </html>
  );
}
