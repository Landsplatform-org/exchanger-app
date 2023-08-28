"use client";

import { useEffect, useState } from "react";

import Container from "@/hoc/Container";
import Image from "next/image";
import ModalUploadNewAvatar from "@/components/UploadAvatar";
import Wrapper from "@/hoc/Wrapper";
import axios from "axios";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [socials, setSocials] = useState("");
  const [file, setFile] = useState();
  const [imgData, setImgData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [FNinfo, setFNInfo] = useState("");
  const [SNinfo, setSNInfo] = useState("");
  const [Socinfo, setSocInfo] = useState("");

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("email", email);
    axios
      .post("http://localhost:5000/api/set-avatar-image", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const [verification, setVerification] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/api/getUser",
    })
      .then((res) => {
        setImgData(res.data.avatarImage);
        setUsername(res.data.username);
        setEmail(res.data.email);
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
        first_name: firstName,
        second_name: secondName,
        socials: socials,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/set-personal-information",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPersonalInformation = (email: any) => {
    axios({
      method: "get",
      withCredentials: true,
      url: `http://localhost:5000/api/get-personal-information/` + email,
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

  return (
    <Wrapper position="flex-center">
      <Container>
        <div className="mt-5 font-semibold">
          <div className=" flex flex-col items-center gap-5">
            <div className=" flex row items-center gap-5">
              <button onClick={() => setShowModal(true)}>
                <Image
                  className="rounded-2xl w-[120px] h-[120px] object-cover hover:opacity-50 duration-200"
                  width={100}
                  height={100}
                  src={`http://localhost:5000/images/` + imgData}
                  title="сменить аватарку"
                  alt="avatar"
                />
              </button>
              {showModal && (
                <ModalUploadNewAvatar
                  onClose={() => setShowModal(false)}
                ></ModalUploadNewAvatar>
              )}
              <div className="flex flex-col">
                <h1 className="text-[30px]">{username}</h1>
                <h1 className="text-[20px]">{email}</h1>
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

            <div className="flex flex-col items-center gap-5 p-5 rounded-2xl bg-slate-300">
              <div className="flex flex-row gap-5">
                <div>
                  <div className="flex flex-col ">
                    <h1>{FNinfo}</h1>
                    <input
                      className="bg-gray-200 rounded-[5px]"
                      type="text"
                      name="username"
                      placeholder=" имя"
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <h1>{SNinfo}</h1>
                    <input
                      className="bg-gray-200 rounded-[5px]"
                      type="text"
                      name="username"
                      placeholder=" фамилия"
                      onChange={(e) => setSecondName(e.target.value)}
                    ></input>
                  </div>

                  <div>
                    <h1>{Socinfo}</h1>
                    <input
                      className="bg-gray-200 rounded-[5px]"
                      type="text"
                      name="username"
                      placeholder=" ссылка"
                      onChange={(e) => setSocials(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col ">
                    <h1>Кошелек 1</h1>
                    <input
                      className="bg-gray-200 rounded-[5px]"
                      type="text"
                      name="username"
                      placeholder=" Кошелек 1"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <h1>Крипта 2</h1>
                    <input
                      className="bg-gray-200 rounded-[5px]"
                      type="text"
                      name="username"
                      placeholder=" Крипта 2"
                    ></input>
                  </div>

                  <div>
                    <h1>Кошелек 3</h1>
                    <input
                      className="bg-gray-200 rounded-[5px]"
                      type="text"
                      name="username"
                      placeholder=" Кошелек 3"
                    ></input>
                  </div>
                </div>
              </div>

              <button
                className="bg-green-500 p-2 rounded-[5px] ml-[370px]"
                onClick={setPersonalInformation}
              >
                сохранить
              </button>
              {/* <button
            className="bg-green-500 p-2 rounded-[5px] ml-[370px]"
            onClick={getPersonalInformation}
          >
            utn
          </button> */}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
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
