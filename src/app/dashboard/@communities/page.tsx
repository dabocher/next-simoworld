import styles from "./page.module.css";

import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const CommunitiesPage = () => {
  return (
    <div className={styles.communitiesContainer}>
      <ul>
        <h1 className={`${oswald.className} ${styles.title} rounded-xl`}>
          Comunidades
        </h1>
      </ul>
    </div>
  );
};

export default CommunitiesPage;
