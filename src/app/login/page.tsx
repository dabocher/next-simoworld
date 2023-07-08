"use client";
import styles from "./page.module.css";
import { Metadata } from "next";
import { Racing_Sans_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";

const metadata: Metadata = {
  title: "Inicio",
  description: "Inicia sesión en SimoWorld",
};

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const LoginPage = () => {
  const router = useRouter();

  let isDisabled;

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { username, password, email } = event.currentTarget;

    isDisabled = (): boolean => {
      return (
        username.value === "" || password.value === "" || email.value === ""
      );
    };

    try {
      const response = await fetch("/api/auth/login", {
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
      return isDisabled;
      response.status === 201 && router.push("/login");
    } catch (error: unknown) {}
  };
  return (
    <section className={styles.section}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <h1 className={racing.className}>Inicio</h1>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="username">
              Usuaria/o
            </label>
            <input
              name="username"
              type="text"
              placeholder="Noah_Puig"
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
              placeholder="noahpuig@gmail.com"
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
              placeholder="********"
              required
            />
          </div>
        </div>
        <Button
          text={"Inicio"}
          disabled={isDisabled}
          className={"btn-login"}
          type={"submit"}
        />
        {/*         <button
          className={`${racing.className} ${styles.button}`}
          type="submit"
        >
          Iniciar
        </button> */}
      </form>
      <div className={styles.linkContainer}>
        <Link href="/register">¿No tienes cuenta? Registrate aquí</Link>
      </div>
    </section>
  );
};

export default LoginPage;
