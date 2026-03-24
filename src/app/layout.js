import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/css/main.css";
// import "../../public/css/main7946.css";
import "../../public/css/normalize.css";
import "../../public/css/translator73c6.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Text Generator",
  description: "Text Generator",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
