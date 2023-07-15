import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.css";
import { Faster_One, Oswald } from "next/font/google";

const faster = Faster_One({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const Header = () => {
  return (
    <>
      <div>
        <Navbar />;
        <div className={styles.container}>
          <p className={`${oswald.className} ${styles.welcome}`}>Welcome to</p>
          <h1 className={`${faster.className} ${styles.title}`}>SimoWorld</h1>
          <p className={`${oswald.className} ${styles.description}`}>
            El buscador de eventos para SimRacers
          </p>
          <input
            type="text"
            className={`${styles.input} ${oswald.className}`}
            placeholder="Buscar eventos"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
