import Link from "next/link";
import { Oswald } from "next/font/google";
import styles from "./navbar.module.css";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div className={`${oswald.className} ${styles.navbarContainer}`}>
      <div className={styles.left}>
        <div className={` ${styles.btn}`}>
          <Link className={styles.link} href="/register">
            Registro
          </Link>
        </div>
        <div className={` ${styles.btn}`}>
          <Link className={styles.link} href="/login">
            Iniciar Sesión
          </Link>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Navbar;
