import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Larry Janesky - Business Leader and Trainer",
  description:
    "A highly successful author of five books, acclaimed speaker, inventor with 29 patents, and a business leader with 31 years of industry knowledge and real-world accountability.",
};

const lexiadama = localFont({
  src: "../public/fonts/lexiadama-webfont.ttf",
  display: "swap",
  variable: "--font-lexiadama",
});
const gothamBold = localFont({
  src: "../public/fonts/Gotham-Bold.otf",
  display: "swap",
  variable: "--font-gotham_bold",
});
const gothamLight = localFont({
  src: "../public/fonts/Gotham-Light.otf",
  display: "swap",
  variable: "--font-gotham_light",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexiadama.variable} ${gothamBold.variable} ${gothamLight.variable} ${gothamLight.className} scroll-smooth`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
