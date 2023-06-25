"use client";

import styles from "./page.module.css";
import { Racing_Sans_One } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Registro completado",
  description: "Crea una cuenta para SimoWorld",
};

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const RegisterPage = () => {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <h1 className={racing.className}>Registro</h1>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="username">
              Usuario creado con éxito
            </label>
          </div>
        </div>
      </form>
      <div className={styles.linkContainer}>
        <Link href="/login">Inicia sesión</Link>
      </div>
    </section>
  );
};

export default RegisterPage;
