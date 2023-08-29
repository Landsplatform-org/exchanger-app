"use client";
import React from "react";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";

const ChangePassword = ({ onClose }: { onClose: any }) => {
    const handleCloseClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClose();
    };
  const [emailPasswordChange, setEmailPasswordChange] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [changeNotification, setChangeNotification] = useState("");
  const [changeError, setChangeError] = useState("");

  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongOldPassword, setWrongOldPassword] = useState(false);
  const [wrongNewPassword, setWrongNewPassword] = useState(false);
  const [emailError, setEmailError] = useState("Почта не должна быть пустой");
  const [oldPasswordError, setOldPasswordError] = useState(
    "Старый пароль не должен быть пустым"
  );
  const [newPasswordError, setNewPasswordError] = useState(
    "Новый пароль не должен быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (oldPasswordError || newPasswordError || emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [oldPasswordError, newPasswordError, emailError]);

  const dataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "email") {
      setEmailPasswordChange(e.target.value);
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError("Электронный почтовый адрес не корректен");
      } else {
        setEmailError("");
      }
    }
    if (e.target.name == "old_password") {
      setOldPassword(e.target.value);
      if (e.target.value.length < 6) {
        setOldPasswordError("Пароль должен содержать не менее 6 символов");
        if (!e.target.value) {
          setOldPasswordError("Пароль не должен быть пустым");
        }
      } else {
        setOldPasswordError("");
      }
    }
    if (e.target.name == "new_password") {
      setNewPassword(e.target.value);
      if (e.target.value.length < 6) {
        setNewPasswordError("Пароль должен содержать не менее 6 символов");
        if (!e.target.value) {
          setNewPasswordError("Пароль не должен быть пустым");
        }
      } else {
        setNewPasswordError("");
      }
    }
  };

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setWrongEmail(true);
        break;
      case "old_password":
        setWrongOldPassword(true);
        break;
      case "new_password":
        setWrongNewPassword(true);
        break;
    }
  };

  const changePassword = () => {
    axios({
      method: "get",
      withCredentials: true,
      url:
        `http://localhost:3001/api/change-password?email=` +
        emailPasswordChange +
        "&old_password=" +
        oldPassword +
        "&new_password=" +
        newPassword,
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setChangeError("");
          setChangeNotification(res.data);
        }
        if (res.status == 201) {
          setChangeNotification("");
          setChangeError(res.data);
        }
        if (res.status == 202) {
          setEmailError(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="absolute left-0 right-0 top-0 bottom-0 m-auto h-[500px] w-[500px] 
    flex flex-row justify-center items-center bg-slate-300 rounded-[5px] shadow-2xl"
    >
      <button
          className="absolute right-5 top-5 rounded-md flex flex-row justify-end items-end hover:rotate-90 transition-all duration-200"
          onClick={(e) => handleCloseClick(e)}
        >
          <ImCross />
        </button>

      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-[20px]">Введите вашу почту</h1>

        {wrongEmail && emailError && (
          <div style={{ color: "red", fontSize: "15px" }}>{emailError}</div>
        )}
        <input
          className="bg-gray-200 rounded-[5px]"
          type="text"
          name="email"
          placeholder=" email"
          onChange={(e) => dataHandler(e)}
          onBlur={(e) => blurHandler(e)}
        ></input>

        <h1 className="text-[20px]">Введите ваш старый пароль</h1>
        {wrongOldPassword && oldPasswordError && (
          <div style={{ color: "red", fontSize: "15px" }}>
            {oldPasswordError}
          </div>
        )}
        <input
          className="bg-gray-200 rounded-[5px]"
          type="text"
          name="old_password"
          placeholder=" old password"
          onChange={(e) => dataHandler(e)}
          onBlur={(e) => blurHandler(e)}
        ></input>

        <h1 className="text-[20px]">Введите ваш новый пароль</h1>
        {wrongNewPassword && newPasswordError && (
          <div style={{ color: "red", fontSize: "15px" }}>
            {newPasswordError}
          </div>
        )}
        <input
          className="bg-gray-200 rounded-[5px]"
          type="text"
          name="new_password"
          placeholder=" new password"
          onChange={(e) => dataHandler(e)}
          onBlur={(e) => blurHandler(e)}
        ></input>
        <h1 className="text-red-500">{changeError}</h1>

        <h1 className="text-green-500">{changeNotification}</h1>
        <button
          className="bg-green-500 p-2 rounded-[5px] disabled:bg-green-200"
          onClick={changePassword}
          disabled={!formValid}
        >
          изменить пароль
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
