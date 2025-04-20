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
  title: "Worm Studio | Official Shopify Partner Agency",
  description: "Shopify website development, design and seo specialists based in Northampton, England.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-QM1Z29RH14"></script>
      <script> 
        window.dataLayer = window.dataLayer || []; function gtag() {
          dataLayer.push(arguments)
          } 
          gtag('js', new Date()); 
          gtag('config', 'G-QM1Z29RH14');</script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
