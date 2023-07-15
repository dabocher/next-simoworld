import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/redux/store/provider";
import { Metadata } from "next";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SimoWorld",
  description: "El buscador de eventos para SimRacers",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${styles.body} ${inter.className}`}>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
