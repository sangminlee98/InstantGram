import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import AuthContext from "@/components/context/AuthContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full max-w-screen-xl h-screen min-h-screen mx-auto overflow-auto">
        <AuthContext>
          <Header />
          <main>{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
