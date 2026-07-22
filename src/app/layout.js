import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://avindu-oshan.vercel.app"),
  title: "Avindu Oshan | Full-Stack Developer",
  description:
    "Software Engineering undergraduate building full-stack web and desktop applications, bridging Sri Lankan tech talent with the Japanese IT industry.",
  openGraph: {
    title: "Avindu Oshan | Full-Stack Developer",
    description:
      "Software Engineering undergraduate building full-stack web and desktop applications, bridging Sri Lankan tech talent with the Japanese IT industry.",
    url: "https://avindu-oshan.vercel.app",
    siteName: "Avindu Oshan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avindu Oshan | Full-Stack Developer",
    description:
      "Software Engineering undergraduate building full-stack web and desktop applications.",
  },
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" suppressHydrationWarning> 
      <body className="...">
        {children}
      </body>
    </html>
  );
}
