"use client";

import { ChangeEvent, useEffect, useState } from "react";

import Container from "@/hoc/Container";
import Wrapper from "@/hoc/Wrapper";
import axios from "axios";

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [wrongUsername, setWrongUsername] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const [usernameError, setUsernameError] = useState(
    "Придумайте себе псевдоним"
  );
  const [emailError, setEmailError] = useState("Почта не должна быть пустой");
  const [passwordError, setPasswordError] = useState(
    "Пароль не должен быть пустым"
  );

  const [formValid, setFormValid] = useState(false);
  const [registerNotification, setRegisterNotification] = useState("");

  useEffect(() => {
    if (usernameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [usernameError, emailError, passwordError]);

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterUsername(e.target.value);
    if (e.target.value.length < 6) {
      setUsernameError("Псевдоним должен содержать не менее 6 символов");
      if (!e.target.value) {
        setUsernameError("Псевдоним не должен быть пустым");
      }
    } else {
      setUsernameError("");
    }
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Электронный почтовый адрес не корректен");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Пароль должен содержать не менее 6 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не должен быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setWrongEmail(true);
        break;
      case "password":
        setWrongPassword(true);
        break;
      case "username":
        setWrongUsername(true);
        break;
    }
  };
  const registerUser = async () => {
    await axios({
      method: "post",
      data: {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/register",
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setRegisterNotification(
            res.data + ", проверьте свою почту для подтвержения аккаунта "
          );
        }
        if (res.status == 201) {
          setEmailError(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setEmailError(err.message);
      });
  };

  return (
    <Wrapper position="center">
      <Container>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <h1>РЕГИСТРАЦИЯ</h1>
          {wrongUsername && usernameError && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {usernameError}
            </div>
          )}
          <input
            className="bg-gray-200 rounded-full px-2"
            type="text"
            name="username"
            placeholder="имя"
            onChange={(e) => usernameHandler(e)}
            onBlur={(e) => blurHandler(e)}
          ></input>
          {wrongEmail && emailError && (
            <div style={{ color: "red", fontSize: "15px" }}>{emailError}</div>
          )}
          <input
            className="bg-gray-200 rounded-full px-2"
            type="text"
            name="email"
            placeholder="почта"
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
          ></input>
          {wrongPassword && passwordError && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {passwordError}
            </div>
          )}
          <input
            className="bg-gray-200 rounded-full px-2"
            type="password"
            name="password"
            placeholder="пароль"
            onChange={(e) => passwordHandler(e)}
            onBlur={(e) => blurHandler(e)}
          ></input>
          <button
            disabled={!formValid}
            className="bg-green-500 p-2 rounded-full disabled:bg-green-200"
            onClick={registerUser}
          >
            зарегистрироваться
          </button>
          <h1 className="text-green-500">{registerNotification}</h1>
        </div>
      </Container>
    </Wrapper>
  );
}
