"use client";

import { Racing_Sans_One } from "next/font/google";
import { useState } from "react";
import styles from "./LoginForm.module.css";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { UseUserStructure } from "@/redux/types";
import Link from "next/link";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const LoginForm = ({ loginUser }: UseUserStructure): JSX.Element => {
  /*   const { loginUser } = useUserForm(); */

  const [loginInputValues, setLoginInputValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setLoginInputValues({
      ...loginInputValues,
      [name]: value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser(loginInputValues); // or loginUser({...LoginInputValues})
  };

  const isDisabled =
    loginInputValues.username === "" ||
    loginInputValues.password === "" ||
    loginInputValues.password.length < 8;

  return (
    <>
      <section className={styles.section}>
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <h1 className={racing.className}>Inicio Sesión</h1>
          <div className={styles.formContainer}>
            <Input
              type="text"
              required={true}
              inputName={"username"}
              label={"Usuaria/o"}
              placeholder="Andrea_Peroni"
              onChange={handlerInput}
            />
            <Input
              className={racing.className}
              type="email"
              required={true}
              inputName={"email"}
              label={"Correo Electrónico"}
              placeholder="andrea.peroni@hotmail.com"
              onChange={handlerInput}
            />
            <Input
              required={true}
              inputName={"password"}
              label={"Contraseña"}
              type={"password"}
              placeholder="andreita123"
              onChange={handlerInput}
            />
          </div>
          <Button
            text={"Iniciar"}
            isDisabled={isDisabled}
            className={`${racing.className} ${styles.button}`}
            type="submit"
          />
        </form>
        <div className={styles.linkContainer}>
          <Link href="/register">¿No tienes una cuenta? Regístrate</Link>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
