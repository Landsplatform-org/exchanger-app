"use client";

import { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@/hoc/Container";
import Wrapper from "@/hoc/Wrapper";

export default function UserChat() {
  const defaultPhoto = "/noimg.png";

  useEffect(() => {
    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState<any>(defaultPhoto);

  const [defaultEmail, setDefaultEmail] = useState(true);
  const [userId, setUserId] = useState("");

  const getUser = async () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/api/getUser",
    })
      .then((res) => {
        setEmail(res.data.email);
        setUserId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("email", email);
    formdata.append("text", subject);
    formdata.append("userId", userId);
    axios
      .post("http://localhost:3001/api/send-tech-support-message", formdata)
      .then((res) => {
        if (res.status == 200) {
          //   setWalletResponse(res.data);
          notifySuccess(res.data);
        }
        if (res.status == 201) {
          //   setWalletResponse(res.data);
          notifySuccess(res.data);
        }
        if (res.status == 202) {
          //   setWalletResponse(res.data);
          notifyError(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
      });
  };

  const defaultEmailHandler = (defaultEmail: boolean) => {
    setDefaultEmail(!defaultEmail);
  };

  const notifySuccess = (text: string) => toast.success(text);
  const notifyError = (text: string) => toast.error(text);
  return (
    <Wrapper position="center">
      <Container>
    <div className="flex flex-col justify-center items-center gap-3 pt-2">
      <ToastContainer />
      <h1 className="text-[20px]">Есть вопросы? Задайте их нам!</h1>

      <div className="w-[max] h-[max] bg-slate-300 rounded-[5px] shadow-2xl p-[20px] items-center flex flex-col gap-1">
        <div className="justify-center items-center flex flex-row gap-1 p-3">
          {defaultEmail ? (
            <h1 className="flex flex-row">
              Ответ придет на почту:<h1 className="font-bold">{email}</h1>
            </h1>
          ) : (
            <h1>
              Ответ придет на почту:
              <input
                className="bg-gray-200 rounded-[5px] font-bold"
                type="text"
                name="email"
                placeholder=" введите почту"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </h1>
          )}
          <button
            onClick={() => {
              defaultEmailHandler(defaultEmail);
            }}
          >
            <AiOutlineEdit className="hover:opacity-50 duration-50" />
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <textarea
            className="bg-gray-200 rounded-[5px] font-bold w-[450px] h-[150px] resize-none p-[5px]"
            name="subject"
            placeholder="опишите проблему"
            maxLength={500}
            onChange={(e) => setSubject(e.target.value)}
          ></textarea>
          <h1>Добавьте скриншот</h1>
          <input
            type="file"
            onChange={(e: any) => setFile(e.target.files[0])}
            className="flex flex-col justify-center items-center"
          />
        </div>
      </div>
      <button onClick={handleUpload} className="bg-green-500 p-2 rounded-[5px]">
        отправить
      </button>
    </div>
    </Container>
    </Wrapper>
  );
}
