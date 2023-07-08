"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/redux/store/provider";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SimoWorld",
  description: "Tu buscador de eventos para SimRacers",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${styles.body} ${inter.className}`}>
        <Providers>
          <Navbar />
          <main className={styles.main}>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
