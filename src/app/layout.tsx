"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/redux/store/provider";
import { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SimoWorld",
  description: "Tu buscador de eventos para SimRacers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
