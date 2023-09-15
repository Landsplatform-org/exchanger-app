"use client";

import React, { useRef } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { signIn } from "next-auth/react"

const LoginForm = () => {
  const username = useRef("");
  const password = useRef("");

  const handleSubmit = async () => {
    await signIn("credentials", {
      username: username.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/"
    });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl text-[#131313] font-bold">Авторизация</h1>

      <div className="flex flex-col gap-2 h-max w-[400px]">
        <Input
          placeholder="Имя пользователя"
          name="username"
          type="text"
          onChange={(e) => (username.current = e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 h-max">
        <Input
          placeholder="Пароль"
          name="password"
          type="password"
          onChange={(e) => (password.current = e.target.value)}
        />
      </div>
      <div className="flex gap-6">
        <Button type="button" onClick={handleSubmit}>
          <span>Войти</span>
        </Button>
        <Button>
          <Link href="/">Отмена</Link>
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
