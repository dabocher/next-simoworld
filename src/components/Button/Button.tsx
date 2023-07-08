// Purpose: This file contains a reusable button component.
"use client";

import styles from "./Button.module.css";
import { Racing_Sans_One } from "next/font/google";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

interface ButtonProps {
  text: string;
  type?: "submit" | "button";
  isDisabled?: boolean;
  className: string;
}

const Button = ({ text, type, className }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${racing.className} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
