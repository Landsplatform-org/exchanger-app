"use client";

import Button from "@/components/Button";
import React from "react";
import { signOut } from "next-auth/react";

const LogoutForm = () => {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="w-[50%] flex flex-col justify-center items-center gap-6 p-4 rounded-md bg-white border border-gray-300">
      <h1 className="text-lg">Вы уверены что хотите выйти из аккаунта?</h1>
      <Button type="button" onClick={handleLogout}>
        Выйти из аккаунта
      </Button>
    </div>
  );
};

export default LogoutForm;
