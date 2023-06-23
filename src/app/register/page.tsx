import React from "react";
import styles from "./page.module.css";
import { Racing_Sans_One } from "next/font/google";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const RegisterPage = () => {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <h1 className={racing.className}>Registro</h1>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="username">
              Usuario
            </label>
            <input type="text" placeholder="Juan Diez" id="username" />
          </div>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="email">
              Correo Electrónico
            </label>
            <input id="email" type="email" placeholder="juan10@hotmail.com" />
          </div>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="password">
              Contraseña
            </label>
            <input id="password" type="password" placeholder="juanito10" />
          </div>
        </div>
        <button
          disabled
          className={`${racing.className} ${styles.button}`}
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
