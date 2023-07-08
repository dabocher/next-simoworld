import styles from "./loading.module.css";
import { Racing_Sans_One } from "next/font/google";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const Loading = () => {
  return (
    <div className={`${racing.className} ${styles.loader}`}>
      <div className={styles.scanner}>
        <span>Creando cuenta...</span>
      </div>
    </div>
  );
};

export default Loading;
