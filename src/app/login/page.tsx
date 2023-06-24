import { Metadata } from "next";
import { Racing_Sans_One } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const metadata: Metadata = {
  title: "Inicio",
  description: "Inicia sesión en SimoWorld",
};

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const LoginPage = () => {
  const router = useRouter();

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { username, password, email } = event.currentTarget;
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
      response.status === 201 && router.push("/login");
    } catch (error: unknown) {}
  };
  return (
    <section className={styles.section}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <h1 className={racing.className}>Registro</h1>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <label className={racing.className} htmlFor="username">
              Usuario
            </label>
            <input
              name="username"
              type="text"
              placeholder="Juan_Diez"
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
              placeholder="juan10@hotmail.com"
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
              placeholder="juanito10"
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

export default LoginPage;
