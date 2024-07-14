import AuthForm from "@/Components/AuthForm";
import React from "react";

export default function AdminLoginPageView() {
  return (
    <>
      <AuthForm isLogin={true} user={"isAdmin"} />
    </>
  );
}
