// Purpose: Render the page for a registered user.
// Purpose: type params object

import styles from "./page.module.css";
import { Racing_Sans_One, Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro completado",
  description: "Cuenta en Simoworld creada",
};

const inter = Inter({ subsets: ["latin"], weight: "400" });

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

interface Params {
  params: {
    username: string;
  };
}

const Registered = ({ params: { username } }: Params) => {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <h1 className={racing.className}>Registro</h1>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <p className={inter.className}>
              La cuenta <br />
              <span className={racing.className}>{username}</span> <br />
              ha sido creada con éxito
            </p>
          </div>
        </div>
      </form>
      <div className={styles.linkContainer}>
        <Link href="/login">Inicia sesión</Link>
      </div>
    </section>
  );
};

export default Registered;
