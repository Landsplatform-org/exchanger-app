"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import type { User } from "@/@types/User";
import WarningMessage from "@/components/WarningMessage";
import axios from "axios";
import { useSession } from "next-auth/react";
import { validate } from "@/utils/validate";

type MainInfo = {
  firstname?: string;
  lastname?: string;
  username?: string;
};

const url = "http://localhost:5000/api/users/edit/";

const usernameLengthError = "Имя пользователя должно быть больше 6 символов";
const usernameEmptyError = "Имя пользователя не может быть пустым";

const MainInfo = ({ user }: { user: User }) => {
  const { data: session } = useSession();
  
  const [userInfo, setUserInfo] = useState<MainInfo>({
    firstname: user.firstname || "",
    lastname: user.lastname || "",
    username: user.username,
  });
  const [inputError, setInputError] = useState<string>("");

  const inputs = [
    {
      name: "firstname",
      type: "text",
      placeholder: "Имя",
      value: userInfo.firstname,
      handleChange: (e: ChangeEvent<HTMLInputElement>) => handleFirstName(e),
    },
    {
      name: "lastname",
      type: "text",
      placeholder: "Фамилия",
      value: userInfo.lastname,
      handleChange: (e: ChangeEvent<HTMLInputElement>) => handleLastName(e),
    },
    {
      name: "username",
      type: "text",
      placeholder: "Имя пользователя",
      value: userInfo.username,
      handleChange: (e: ChangeEvent<HTMLInputElement>) => handleUsername(e),
    },
  ];

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    const firstname = e.target.value;

    setUserInfo({
      ...userInfo,
      firstname,
    });
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    const lastname = e.target.value;

    setUserInfo({
      ...userInfo,
      lastname,
    });
  };

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    let username = e.target.value;

    switch (validate(username)) {
      case "empty":
        setInputError(usernameEmptyError);
        setUserInfo({
          ...userInfo,
          username,
        });
        break;
      case "notenoughlength":
        setInputError(usernameLengthError);
        setUserInfo({
          ...userInfo,
          username,
        });
        break;
      default: {
        setUserInfo({
          ...userInfo,
          username,
        });
        setInputError("");
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!userInfo) {
      return;
      // setIsLoginSuccess(false);
      // setResponseMessage("Заполните все поля для входа в аккаунт");
    }

    update(userInfo);
  };

  const update = async (userToUpdate: MainInfo) => {
    try {
      const response = await fetch(url + session?.user.id, {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${session?.tokens.access}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userToUpdate })
      });

      if(response.ok) location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="w-[60%] flex flex-col gap-6 p-4 rounded-md bg-white border border-gray-300"
    >
      {!user.is_verified && (
        <WarningMessage message="Ваша почта не подтверждена!" />
      )}
      {inputs.map((input) => (
        <Input
          key={input.name}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={input.handleChange}
        />
      ))}
      {inputError && (
        <span className="text-red-500 font-bold text-sm">{inputError}</span>
      )}
      <Button type="submit" disabled={inputError.length > 1}>
        Изменить данные
      </Button>
    </form>
  );
};

export default MainInfo;
