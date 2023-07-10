"use client";

import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import { Metadata } from "next";
import { useUser } from "@/hooks/useUser/useUser";

const metadata: Metadata = {
  title: "Inicio",
  description: "Inicia sesión en SimoWorld",
};

const LoginPage = () => {
  const { loginUser } = useUser();

  return <LoginForm loginUser={loginUser} />;
};

export default LoginPage;
