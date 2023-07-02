"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";
import { Racing_Sans_One } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

export const metadata: Metadata = {
  title: "Registro",
  description: "Crea una cuenta para SimoWorld",
};

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const RegisterPage = () => {
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

      response.status === 201 && router.push(`/register/${username.value}`);
    } catch (error) {}
  };

  return (
    <section className={styles.section}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <h1 className={racing.className}>Registro</h1>
        <div className={styles.formContainer}>
          <Input
            type="text"
            required={true}
            inputName={"username"}
            label={"Usuaria/o"}
            placeholder="Andrea_Peroni"
          />
          <Input
            type="email"
            required={true}
            inputName={"email"}
            label={"Correo Electrónico"}
            placeholder="andrea.peroni@hotmail.com"
          />
          <Input
            required={true}
            inputName={"password"}
            label={"Contraseña"}
            type={"password"}
            placeholder="andreita123"
          />
        </div>
        <Button
          text={"Crear cuenta"}
          disabled={false}
          className={`${racing.className} ${styles.button}`}
          type="submit"
        />
      </form>
      <div className={styles.linkContainer}>
        <Link href="/login">¿Ya tienes una cuenta?</Link>
      </div>
    </section>
  );
};

export default RegisterPage;
