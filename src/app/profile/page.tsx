"use client";

import { useEffect, useState } from "react";

import Container from "@/hoc/Container";
import Image from "next/image";
import Wrapper from "@/hoc/Wrapper";
import axios from "axios";
import UploadAvatar from "@/components/UploadAvatar";
import ChangePassword from "@/components/ChangePassword";
import ChangeEmail from "@/components/ChangeEmail";

import { AiOutlineEdit } from "react-icons/ai";


export default function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [imgData, setImgData] = useState([]);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
  const [showEmailChangeModal, setShowEmailChangeModal] = useState(false);
  const [FNinfo, setFNInfo] = useState("");
  const [SNinfo, setSNInfo] = useState("");
  const [Socinfo, setSocInfo] = useState("");
  const [pincodeInfo, setPincodeInfo] = useState("отправить пин-код");
  const [pincodeSent, setPincodeSent] = useState(false);
  const [verification, setVerification] = useState(false);
  const [firstnameEdit, setFirstnameEdit] = useState(false);
  const [secondnameEdit, setSecondnameEdit] = useState(false);
  const [socialsEdit, setSocialsEdit] = useState(false);
  const [SPIResponse, setSPIResponse] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/api/getUser",
    })
      .then((res) => {
        setImgData(res.data.avatarImage);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setAccountNumber(res.data.accountnumber);
        getPersonalInformation(res.data.email);
        if (res.data.isVerified == 0) {
          setVerification(false);
        } else {
          setVerification(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setPersonalInformation = () => {
    axios({
      method: "post",
      data: {
        email: email,
        first_name: FNinfo,
        second_name: SNinfo,
        socials: Socinfo,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/set-personal-information",
    })
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          setSPIResponse(res.data);
        }
        if (res.status == 200) {
          setSPIResponse(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPersonalInformation = (email: string) => {
    axios({
      method: "get",
      withCredentials: true,
      url: `http://localhost:3001/api/get-personal-information/` + email,
    })
      .then((res) => {
        setFNInfo(res.data.first_name);
        setSNInfo(res.data.second_name);
        setSocInfo(res.data.socials);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendPIN = async () => {
    axios({
      method: "get",
      withCredentials: true,
      url: `http://localhost:3001/api/send-pin?email=` + email,
    })
      .then((res) => {
        setPincodeInfo(res.data);
        setPincodeSent(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-5 font-semibold">
      <div className=" flex flex-col items-center gap-5 ">
        <div className=" flex row items-center gap-5 ">
          <button onClick={() => setShowAvatarModal(true)}>
          {imgData ? (
                  <Image
                    src={"http://localhost:5000/uploads" + imgData}
                    width="600"
                    height="600"
                    title="сменить аватарку"
                    alt="avatar"
                  />
                ) : (
                  <Image
                    src={"@/assets/images/avatar.jpg"}
                    width="600"
                    height="600"
                    title="сменить аватарку"
                    alt="avatar"
                  />
                )}
          </button>
          {showAvatarModal && (
            <UploadAvatar
              onClose={() => setShowAvatarModal(false)}
            ></UploadAvatar>
          )}
          <div className="flex flex-col">
            <h1 className="text-[30px]">{username}</h1>
            <h1 className="text-[15px] text-gray-500">id: {accountNumber}</h1>
            {verification ? (
              <h1 className="text-green-500 text-[10px] flex flex-row gap-1">
                Ваша почта<p className="text-black">{email}</p>подтверждена!
              </h1>
            ) : (
              <h1 className="text-red-500 text-[10px] flex flex-row gap-1">
                Ваша почта <p className="text-black">{email}</p> не
                подтверждена!
              </h1>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 shadow-2xl p-2 rounded-2xl bg-slate-300 w-[400px] ">
          <div className="flex flex-row gap-5  items-stretch">
            <div className="flex flex-col  w-[400px] p-2 gap-2">
              <div className="flex flex-row justify-between ">
                <h1>Имя: </h1>

                {firstnameEdit ? (
                  <input
                    className="bg-gray-200 rounded-[5px]"
                    type="text"
                    name="username"
                    placeholder=" имя"
                    onChange={(e) => setFNInfo(e.target.value)}
                  ></input>
                ) : (
                  <div className="flex flex-row gap-2">
                    <h1> {FNinfo} </h1>
                    <button
                      onClick={() => setFirstnameEdit(true)}
                      title="изменить имя"
                    >
                      <AiOutlineEdit className="hover:opacity-50 duration-50" />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-row justify-between ">
                <h1>Фамилия:</h1>

                {secondnameEdit ? (
                  <input
                    className="bg-gray-200 rounded-[5px]"
                    type="text"
                    name="username"
                    placeholder=" фамилия"
                    onChange={(e) => setSNInfo(e.target.value)}
                  ></input>
                ) : (
                  <div className="flex flex-row gap-2">
                    <h1> {SNinfo} </h1>
                    <button
                      onClick={() => setSecondnameEdit(true)}
                      title="изменить фамилию"
                    >
                      <AiOutlineEdit className="hover:opacity-50 duration-50" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-between ">
                <h1>Соц сети:</h1>

                {socialsEdit ? (
                  <input
                    className="bg-gray-200 rounded-[5px]"
                    type="text"
                    name="username"
                    placeholder=" ссылка"
                    onChange={(e) => setSocInfo(e.target.value)}
                  ></input>
                ) : (
                  <div className="flex flex-row gap-2">
                    <h1> {Socinfo} </h1>
                    <button
                      onClick={() => setSocialsEdit(true)}
                      title="изменить ссылку на соц. сеть"
                    >
                      <AiOutlineEdit className="hover:opacity-50 duration-50" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            className="bg-green-500 p-2 rounded-[5px] "
            onClick={setPersonalInformation}
          >
            сохранить
          </button>

          <h1 className="text-green-500">{SPIResponse}</h1>
        </div>
        <div className="flex flex-row gap-5 ">
          {pincodeSent ? (
            <button className="bg-green-200 p-2 rounded-[5px] shadow-2xl">
              {pincodeInfo}
            </button>
          ) : (
            <button
              onClick={sendPIN}
              className="bg-green-500 p-2 rounded-[5px]"
            >
              {pincodeInfo}
            </button>
          )}
          <button
            onClick={() => setShowEmailChangeModal(true)}
            className="bg-green-500 p-2 rounded-[5px] shadow-2xl"
          >
            изменить имейл
          </button>
          {showEmailChangeModal && (
            <ChangeEmail
              onClose={() => setShowEmailChangeModal(false)}
            ></ChangeEmail>
          )}
          <button
            onClick={() => setShowPasswordChangeModal(true)}
            className="bg-green-500 p-2 rounded-[5px] shadow-2xl"
          >
            изменить пароль
          </button>
          {showPasswordChangeModal && (
            <ChangePassword
              onClose={() => setShowPasswordChangeModal(false)}
            ></ChangePassword>
          )}
        </div>
      </div>
    </div>
  );
}
// /[а-яА-ЯёЁ\s\.\,\!\?\-]/gm
// const socialsHandler = (e) => {
//   setSocials(e.target.value)
//   const regexp = /[a-zA-Z]/gm
//   if (!regexp.test(String(e.target.value).toLowerCase())){
//     setSocialsError('не похоже на ссылку')
//   } else {
//     setSocialsError("")
//   }
// vpizdu nahui
// }
