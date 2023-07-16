import getAllEvents from "@/utils/getAllEvents";
import styles from "./page.module.css";
import { Oswald, Inter } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

const EventPage = async () => {
  const events = await getAllEvents();

  return (
    <div className={styles.eventsContainer}>
      <ul>
        <h1 className={`${oswald.className} ${styles.title} rounded-xl`}>
          Eventos
        </h1>
        <li className={`${styles.container} ${oswald.className}`}>
          {events.map((event) => {
            return (
              <article className={styles.card} key={event.id}>
                <div className={`${styles.topContainer} rounded-xl`}>
                  <div>
                    <p className={`${styles.organizer} ${inter.className}`}>
                      Organizador
                    </p>
                    <h3 className={styles.community}>
                      {event.community}{" "}
                      <span className={styles.simulator}>
                        {event.simulator}
                      </span>{" "}
                    </h3>
                  </div>
                </div>
                <div className={styles.bottomContainer}>
                  <Image
                    src={`/images/${event.simulator}.webp`}
                    alt={"carrera"}
                    width={300}
                    height={169}
                    className="rounded-xl"
                  />
                  <h2 className={styles.titleEvent}>
                    {event.eventName}
                    <span> {event.eventDay}</span>
                  </h2>
                  <p className={`${styles.description} ${inter.className}`}>
                    {event.description}
                  </p>
                </div>
              </article>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
export default EventPage;
