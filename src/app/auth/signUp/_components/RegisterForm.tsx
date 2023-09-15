"use client";

import * as error from "@/config/input-errors";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { validate, validateEmail } from "@/utils/validate";

import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import Link from "next/link";
import SuccessMessage from "@/components/SuccessMessage";

type RegisterForm = {
  username?: string;
  email?: string;
  password?: string;
};

const url = "http://localhost:5000/api/users/register";

const RegisterForm = () => {
  const [user, setUser] = useState<RegisterForm>({});

  const [inputError, setInputError] = useState<RegisterForm>({});

  const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    let username = e.target.value;

    switch (validate(username)) {
      case "empty":
        setInputError({ username: error.usernameEmptyError });
        setUser({
          ...user,
          username: "",
        });
        break;
      case "notenoughlength":
        setInputError({ username: error.usernameLengthError });
        setUser({
          ...user,
          username: "",
        });
        break;
      default: {
        setUser({
          ...user,
          username,
        });
        setInputError({ username: "" });
      }
    }
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    let email = e.target.value;

    if (!validateEmail(email))
      return setInputError({ email: error.emailFormatError });

    setUser({
      ...user,
      email,
    });
    setInputError({ email: "" });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    let password = e.target.value;

    switch (validate(password)) {
      case "empty":
        setInputError({ password: error.passwordEmptyError });
        break;
      case "notenoughlength":
        setInputError({ password: error.passwordLengthError });
        break;
      default: {
        setUser({
          ...user,
          password,
        });
        setInputError({ password: "" });
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      setIsRegisterSuccess(false);
      setResponseMessage("Заполните все поля для регистрации");
    }

    register();
  };

  const register = async () => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setIsRegisterSuccess(false);
      setResponseMessage("При регистрации произошла ошибка");
      return;
    }

    const data = await response.json();
    setIsRegisterSuccess(true);
    setResponseMessage(data.message);

    setTimeout(() => {
      setIsRegisterSuccess(false)
    }, 2000)

  };
  return (
    <form
      className="flex flex-col items-center justify-center gap-4"
      action="submit"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl text-[#131313] font-bold">Регистрация</h1>

      {isRegisterSuccess ? (
        <SuccessMessage message={responseMessage} />
      ) : (
        <>{responseMessage && <ErrorMessage message={responseMessage} />}</>
      )}

      <div className="flex flex-col gap-2 h-max w-[400px]">
        <Input
          placeholder="Имя пользователя"
          name="username"
          type="text"
          required
          onChange={(e) => handleUsername(e)}
        />
        {inputError.username && (
          <span className="text-red-500 font-bold text-sm">
            {inputError.username}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 h-max">
        <Input
          placeholder="E-mail"
          name="email"
          type="text"
          required
          onChange={(e) => handleEmail(e)}
        />
        {inputError.email && (
          <span className="text-red-500 font-bold text-sm">
            {inputError.email}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 h-max">
        <Input
          placeholder="Пароль"
          name="password"
          type="password"
          required
          onChange={(e) => handlePassword(e)}
        />
        {inputError.password && (
          <span className="text-red-500 font-bold text-sm">
            {inputError.password}
          </span>
        )}
      </div>
      <div className="flex gap-6">
        <Button type="submit" disabled={Object.keys(user).length < 3}>
          <span>Зарегистрироваться</span>
        </Button>
        <Button>
          <Link href="/">Отмена</Link>
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
