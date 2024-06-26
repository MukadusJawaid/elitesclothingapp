"use client";
import React, { useState } from "react";
import AuthForm from "@/Components/AuthForm";
export default function LoginPageView() {
  const [isLogin, setIsLoggedIn] = useState("isLogin");
  return (
    <>
      <AuthForm isLogin={true} />
    </>
  );
}
