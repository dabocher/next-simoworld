import getAllCommunities from "@/utils/getAllCommunities";
import styles from "./page.module.css";
import Image from "next/image";
import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

const CommunitiesPage = async () => {
  const communities = await getAllCommunities();
  return (
    <div className={styles.communitiesContainer}>
      <ul>
        <h1 className={`${oswald.className} ${styles.title} rounded-xl`}>
          Comunidades
        </h1>
        <li className={`${styles.container} ${oswald.className}`}>
          {communities.map((community) => {
            return (
              <article className={styles.card} key={community.id}>
                <div className={`${styles.topContainer} rounded-xl`}>
                  <div>
                    <h2 className={styles.titleEvent}>{community.name}</h2>
                  </div>
                </div>
                <div className={styles.bottomContainer}>
                  <Image
                    src={`/images/communities/${community.name}.webp`}
                    alt={"comunidad de simracing"}
                    width={300}
                    height={169}
                    className="rounded-xl"
                  />
                  <p className={`${styles.description} ${inter.className}`}>
                    {community.description}
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

export default CommunitiesPage;
