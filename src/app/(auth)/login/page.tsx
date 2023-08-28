"use client";

import Container from "@/hoc/Container";
import ResetPassword from "@/components/ResetPassword";
import Wrapper from "@/hoc/Wrapper";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginNotification, setLoginNotification] = useState("");
  const [loginError, setLoginError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const loginUser = async () => {
    await axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/login",
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setLoginError("");
          setLoginNotification(res.data);
        }
        if (res.status == 201) {
          setLoginNotification("");
          setLoginError(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper position="center">
      <Container>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1>Вход</h1>

          <input
            className="bg-gray-200 rounded-md"
            type="text"
            name="username"
            placeholder=" username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            className="bg-gray-200 rounded-md"
            type="password"
            name="username"
            placeholder=" password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button
            className="bg-green-500 p-2 rounded-md"
            onClick={() => loginUser()}
          >
            Войти
          </button>

          {/* <input
        className="bg-gray-200 rounded-full"
        type="text"
        name=" email"
        placeholder=" email"
        onChange={(e) => setEmailPasswordReset(e.target.value)}
      ></input>

      <button className="bg-orange-500 p-2 rounded-full" onClick={resetPassword}>
        восстановить пароль
      </button> */}
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="text-[12px] hover:underline hover:text-blue-500"
            >
              Забыли пароль?
            </button>
            {showModal && <ResetPassword onClose={() => setShowModal(false)} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
