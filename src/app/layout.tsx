import Link from "next/link";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./provider";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <NextAuthProvider>
          <Header />
          <main className="grow min-h-screen">{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
