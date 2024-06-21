import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Booking Wizard",
  description: "Booking Wizard web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
            <Header></Header>
            {children}
        </body>
      </UserProvider>
    </html>
  );
}
