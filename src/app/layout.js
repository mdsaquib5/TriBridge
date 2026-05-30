import React from "react";
import { inter, montserrat } from "../fonts/font";
import "./globals.css";
import "./layout.css";
import "./responsive.css";

export const metadata = {
  title: "TRIBRIDGE OR PVT LTD",
  description: "Tribdige or pvt ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.variable} ${montserrat.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}