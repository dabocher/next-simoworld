"use client";

import styles from "./input.module.css";
import { Racing_Sans_One } from "next/font/google";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

interface InputProps {
  /*   value: string;
  onChange: (value: string) => void; */
  type?: string;
  placeholder?: string;
  required: boolean;
  className?: string;
  inputName: string;
  label: string;
}

const Input = (props: InputProps) => {
  const {
    /* value, onChange, */ placeholder,
    required,
    type,
    inputName,
    className,
    label,
  } = props;
  return (
    <div className={styles.container}>
      <label className={racing.className} htmlFor={inputName}>
        {label}
      </label>
      <input /* value={value} onChange={(e) => onChange(e.target.value)} */
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
