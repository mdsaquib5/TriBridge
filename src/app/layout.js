import React from "react";
import { inter, montserrat } from "../fonts/font";
import "./globals.css";
import "./layout.css";
import "./responsive.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "TRIBRIDGE OR PVT LTD",
  description: "Tribdige or pvt ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.variable} ${montserrat.variable} ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}