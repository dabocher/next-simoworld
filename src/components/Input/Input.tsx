"use client";

import styles from "@/app/register/page.module.css";
import { Racing_Sans_One } from "next/font/google";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required: boolean;
  className?: string;
  inputName: string;
  label: string;
}

const Input = (props: InputProps) => {
  const { onChange, placeholder, required, type, inputName, className, label } =
    props;
  return (
    <div className={styles.container}>
      <label className={racing.className} htmlFor={inputName}>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        name={inputName}
        id={inputName}
      />
    </div>
  );
};

export default Input;
