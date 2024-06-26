"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import CustomInput from "../Input";
import Button from "../Button";
import classes from "./AuthForm.module.css";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  username: yup.string().when("isSignUp", {
    is: true,
    then: yup.string().required("Username is required"),
  }),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const AuthForm = ({ isLogin, user }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    context: { isSignUp: !isLogin },
  });

  const onSubmit = async (data) => {
    try {
      const url = isLogin ? "/api/login" : "/api/register";
      const response = await axios.post(url, data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className={classes.mainDiv}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div className={classes.heading}>
          {isLogin ? (user === "isAdmin" ? "Admin Login" : "Login") : "Sign Up"}
        </div>
        {!isLogin && (
          <div className={classes.inputContainer}>
            <CustomInput
              type="text"
              placeholder="Username"
              {...register("username")}
              className={classes.customInput}
            />
            {errors.username && (
              <p className={classes.error}>{errors.username.message}</p>
            )}
          </div>
        )}
        <div className={classes.inputContainer}>
          <CustomInput
            type="email"
            placeholder="Email"
            {...register("email")}
            className={classes.customInput}
          />
          {errors.email && (
            <p className={classes.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={classes.inputContainer}>
          <CustomInput
            type="password"
            placeholder="Password"
            {...register("password")}
            className={classes.customInput}
          />
          {errors.password && (
            <p className={classes.error}>{errors.password.message}</p>
          )}
        </div>
        <div className={classes.buttonContainer}>
          <Button
            onClick={() =>
              isLogin
                ? user === "isAdmin"
                  ? router?.push("/admin/dashboard")
                  : router?.push("/products")
                : router?.push("/login")
            }
            type="submit"
          >
            {isLogin ? "Login" : "Register"}
          </Button>
        </div>
        {isLogin && !user && (
          <div className={classes.signUpLink}>
            {` Don't have an account? `}
            <a href="/sign-up">SignUp</a>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
