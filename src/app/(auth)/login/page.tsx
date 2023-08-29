"use client";

import Container from "@/hoc/Container";
import ResetPassword from "@/components/ResetPassword";
import Wrapper from "@/hoc/Wrapper";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginNotification, setLoginNotification] = useState("");
  const [loginError, setLoginError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [enter, setEnter] = useState(false);

  const loginUser = () => {
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/login",
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setLoginError("");
          notifySuccess(res.data);
          setEnter(true);
          
        }
        if (res.status == 201) {
          setLoginNotification("");
          notifyError(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
      });
  };

  const notifySuccess = (text: any) => toast.success(text);
  const notifyError = (text: any) => toast.error(text);
  const notifyInfo = (text: any) => toast.info(text);

  return (
    <Wrapper position="center">
      <Container>
      <div className="flex flex-col justify-center items-center gap-5 ">
      <ToastContainer />
      <h1>Вход</h1>
      <h1 className="text-red-500">{loginError}</h1>
      <input
        className="bg-gray-200 rounded-[5px]"
        type="text"
        name="username"
        placeholder=" username"
        onChange={(e) => setLoginUsername(e.target.value)}
      ></input>
      <input
        className="bg-gray-200 rounded-[5px]"
        type="password"
        name="username"
        placeholder=" password"
        onChange={(e) => setLoginPassword(e.target.value)}
      ></input>

      <h1 className="text-green-500">{loginNotification}</h1>

      {enter ? (
        
          <Link href="/profile" className="bg-green-500 p-2 rounded-[5px] ">профиль</Link>
        
      ) : (
        <button className="bg-green-500 p-2 rounded-[5px] " onClick={loginUser}>
          войти
        </button>
      )}

      <div>
        <button
          onClick={() => setShowModal(true)}
          className="text-[12px] hover:underline hover:text-blue-500"
        >
          забыли пароль?
        </button>
        {showModal && (
          <ResetPassword
            onClose={() => setShowModal(false)}
          ></ResetPassword>
        )}
      </div>
    </div>
      </Container>
    </Wrapper>
  );
}
