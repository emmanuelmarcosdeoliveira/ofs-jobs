import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";

const mavenPro = Maven_Pro({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-maven-pro",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={mavenPro.variable}>
      <body>
        <main className="flex min-h-screen flex-col">
          <NavBar />
          <div className="flex flex-1">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
