"use client";

import React, { forwardRef, useState } from "react";
import styles from "./Input.module.css";
import { Eye, EyeOff } from "lucide-react";

const CustomInput = forwardRef(({ type, placeholder, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className={styles.inputContainer}>
      <input
        ref={ref}
        type={inputType}
        placeholder={placeholder}
        className={`${styles.customInput} ${isFocused ? styles.focused : ""}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {type === "password" && (
        <span
          className={styles.passwordIcon}
          onClick={togglePasswordVisibility}
        >
          {inputType === "password" ? <Eye /> : <EyeOff />}
        </span>
      )}
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
