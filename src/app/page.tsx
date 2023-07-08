import styles from "./page.module.css";
import { Faster_One, Oswald } from "next/font/google";

const faster = Faster_One({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <p className={`${oswald.className} ${styles.welcome}`}>Welcome to</p>
        <h1 className={`${faster.className} ${styles.title}`}>SimoWorld</h1>
        <p className={`${oswald.className} ${styles.description}`}>
          Tu buscador de eventos para SimRacers
        </p>
      </div>
      <section className={styles.section}>
        <div className={styles.containerAllEvents}>
          <h2 className={`${oswald.className} ${styles.titleh2}`}>
            Todos los eventos
          </h2>
          /* purpose: fetch all events from database */ /* purpose: display all
          events */
          {}
        </div>
        <div className={styles.containerMyEvents}>
          <h2 className={`${oswald.className} ${styles.titleh2}`}>
            Mis eventos
          </h2>
        </div>
      </section>
    </>
  );
}
