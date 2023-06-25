"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";
import { Racing_Sans_One } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Registro",
  description: "Crea una cuenta para SimoWorld",
};

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { username, email, password } = event.currentTarget;
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
        }),
      });

      response.status === 201 && router.push("/success");
    } catch (error: unknown) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <section className={styles.section}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <h1 className={racing.className}>Registro</h1>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="username">
              Usuaria/o
            </label>
            <input
              name="username"
              type="text"
              placeholder="Andrea_Peroni"
              id="username"
              required
            />
          </div>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="email">
              Correo Electrónico
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="andrea.peroni@hotmail.com"
              required
            />
          </div>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="password">
              Contraseña
            </label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="andreita123"
              required
            />
          </div>
        </div>
        <button
          className={`${racing.className} ${styles.button}`}
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
      <div className={styles.linkContainer}>
        <Link href="/login">¿Ya tienes una cuenta?</Link>
      </div>
    </section>
  );
};

export default RegisterPage;
