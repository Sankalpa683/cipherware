import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CipherWare",
  description: `Welcome to CipherWareTo pay w/ CashApp, Apple Pay, Google Pay, or Venmo, open a ticket in our Discord server!
  Discord TikTok YouTube. 1784. Product Sold. 4.8.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ fontFamily: 'Cal Sans, sans-serif' }}>{children}</body>
    </html>
  );
}
