"use client";
import localFont from "next/font/local";
import "./globals.css";
import HeaderTop from "../components/HeaderTop/Index";
import Header from "@/src/components/Header/Index";
import Footer from "@/src/components/Footer/Index";
import { Provider } from "react-redux";
import store from "@/src/lib/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <HeaderTop />
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
